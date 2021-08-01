import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../Components/book';
import { removeBook } from '../Actions/index';

function Bookslist(props) {
  const { booklist } = props;
  const { removebook } = props;
  const handleRemoveBook = (event) => {
    removebook(event.target.parentElement.parentElement.id);
  };

  return (
    <div className="mt-5">
      <h1>Books</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Remove</th>

          </tr>
        </thead>
        <tbody>

          {booklist.map((x, i) => (
            <tr key={x.Id} id={i}>
              <Book
                book={x}
                clickHandler={handleRemoveBook}
              />
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

function mapStateToProps(state) {
  const { books } = state.bookupdateReducer;
  return ({ booklist: books });
}

/* eslint-disable-next-line */
const mapDispatchToProps = (dispatch) => ({ removebook: (book) => { dispatch(removeBook(book)); } });

Bookslist.propTypes = {
  booklist: PropTypes.arrayOf(PropTypes.object).isRequired,
  removebook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookslist);
// export default Bookslist;
