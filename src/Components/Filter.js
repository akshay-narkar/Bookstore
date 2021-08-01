import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CategoryFilter(props) {
  const [value1, setvalue] = useState({ value: 'All' });
  const { clickHandler } = props;
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const changevalue = (event) => {
    setvalue({ value: event });
  };

  const middlefunc = (e) => {
    clickHandler(e.target.value);
    changevalue(e.target.value);
  };

  return (

    <div className="ms-5">
      <label htmlFor="exampleselectInput1" className="form-label d-flex align-items-baseline m-0">

        <p className="m-0">Categories:</p>

        <select
          value={value1.value}
          className="form-select ms-2"
          aria-label="selectcategory"
          onChange={middlefunc}
        >

          <option value="All" defaultValue>All</option>

          {categories.map((x) => (
            <option
              label={x}
              value={x}
              key={Math.random()}
            >
              {x}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

CategoryFilter.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
