import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../Actions/index';

function Booksform(props) {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const { addnewbook } = props;
  const [state, setState1] = useState({
    Id: Math.floor((Math.random() * 1000000)),
    Title: '',
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
    setState1(() => ({ Title: '', Category: '' }));
  };

  return (
    <div className="container addbooks">
      <h4 className="bordertop montreg fw-bold">ADD NEW BOOKS</h4>
      <form onSubmit={submitChange}>
        <div className="form-group d-flex justify-content-between">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <input type="text" className="form-control text-box" value={state.Title} id="exampleFormControlInput1" placeholder="Title" onChange={handleChange} required />
            </label>

          </div>
          <div className="mb-3">
            <label htmlFor="exampleselectInput1" className="form-label">
              <select className="form-select form-control catselect" value={state.Category} id="exampleselectInput1" aria-label="selectbooks" onChange={handleChange} required>
                <option value="" disabled>Category</option>

                { /* eslint-disable-next-line */}
                {categories.map((x) => <option value={x} key={Math.random()}>{x}</option>)}
              </select>
            </label>
          </div>
          <div>
            <button type="submit" className="btn btn-primary roboto robotoplus addbook">ADD BOOK</button>
          </div>
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
export default connect(null, mapDispatchToProps)(Booksform);
