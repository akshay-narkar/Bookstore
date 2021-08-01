import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../Components/book';
import CategoryFilter from '../Components/Filter';
import { removeBook, changeFilter } from '../Actions/index';

function Bookslist(props) {
  const { booklist } = props;
  const { removebook } = props;
  const handleRemoveBook = (event) => {
    removebook(event.target.parentElement.parentElement.id);
  };

  const handleFilterChange = () => {
    console.log('rabdon');
  };

  return (

    <div className="mt-5">
      <div className="d-flex d-align-items-center mb-5">
        <h1 className="m-0">Books</h1>
        <CategoryFilter clickHandler={handleFilterChange} />
      </div>
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
const mapDispatchToProps = (dispatch) => ({ removebook: (book) => { dispatch(removeBook(book)); } },
{ filtercat: (category) => { dispatch(changeFilter(category)); } });

Bookslist.propTypes = {
  booklist: PropTypes.arrayOf(PropTypes.object).isRequired,
  removebook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookslist);
// export default Bookslist;
