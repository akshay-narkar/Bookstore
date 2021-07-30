import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../Actions/index';

function Booksform(props) {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const { addnewbook } = props;
  const [state, setState1] = useState({
    Id: Math.floor((Math.random() * 1000000)),
    Title: null,
    Category: '',
  });
  const handleChange = (event) => {
    if (event.target.id === 'exampleselectInput1' && event.target.value !== '') {
      setState1((prevstate) => ({ ...prevstate, Category: event.target.value }));
    } else {
      setState1((prevstate) => ({ ...prevstate, Title: event.target.value }));
    }
  };

  const submitChange = (e) => {
    e.preventDefault();
    addnewbook(state);
    setState1(() => ({ Title: null, Category: '' }));
  };
  return (
    <div className="container border mt-5 p-5">

      <form onSubmit={submitChange}>
        <div className="form-group">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Book Title
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" onChange={handleChange} required />
            </label>

          </div>
          <div className="mb-3">
            <label htmlFor="exampleselectInput1" className="form-label">

              Select Category

              <select className="form-select form-control" value={state.Category} id="exampleselectInput1" aria-label="selectbooks" onChange={handleChange} required>
                <option value="" disabled>Select category...</option>

                { /* eslint-disable-next-line */ }
                {categories.map((x) => <option value={x} key={Math.random()}>{x}</option>)}
              </select>
            </label>
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </div>
      </form>
    </div>
  );
}

Booksform.propTypes = {
  addnewbook: PropTypes.func.isRequired,
};
function mapDispatchToProps(dispatch) {
  return {
    addnewbook: (book) => {
      dispatch(createBook(book));
    },
  };
}
/* eslint-disable-next-line */
// const mapDispatchToProps = (dispatch) => ({ addnewbook: (book) => { dispatch(createBook(book)); } });

export default connect(null, mapDispatchToProps)(Booksform);
