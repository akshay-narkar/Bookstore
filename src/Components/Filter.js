import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter(props) {
  const { clickHandler } = props;
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (

    <div className="ms-5">
      <label htmlFor="exampleselectInput1" className="form-label d-flex align-content-baseline m-0">

        <p className="m-0">Categories:</p>

        <select className="form-select form-control ms-2" id="exampleselectInput1" aria-label="selectcategory" onChange={clickHandler} required>

          <option value="All">All</option>

          { /* eslint-disable-next-line */ }
                {categories.map((x) => <option value={x} key={Math.random()}>{x}</option>)}
        </select>
      </label>
    </div>
  );
}

CategoryFilter.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
