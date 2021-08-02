import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../Components/book';
import CategoryFilter from '../Components/Filter';
import { removeBook, changeFilter } from '../Actions/index';

function Bookslist(props) {
  const {
    booklist, removebook, filtercat, filternew,
  } = props;

  const handleRemoveBook = (event) => {
    removebook(event.target.parentElement.parentElement.id);
  };

  const handleFilterChange = (event) => {
    filtercat(event.target.value);
  };

  const filterbooks = (booklist, filter) => {
    if (filter === 'All') return booklist;
    return booklist.filter((xmas) => xmas.Category === filter);
  };

  const filteredbooks = filterbooks(booklist, filternew);
  return (

    <div className="mt-5">
      <div className="d-flex d-align-items-center mb-5">
        <h1 className="m-0">Books</h1>
        <CategoryFilter
          clickHandler={handleFilterChange}
          filtercat={filternew}
        />
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

          {filteredbooks.map((x, i) => (
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
  const { filter } = state.filterReducer;
  return ({ booklist: books, filternew: filter });
}

const mapDispatchToProps = (dispatch) => ({
  removebook: (book) => dispatch(removeBook(book)),
  filtercat: (category) => dispatch(changeFilter(category)),
});

Bookslist.propTypes = {
  booklist: PropTypes.arrayOf(PropTypes.object).isRequired,
  removebook: PropTypes.func.isRequired,
  filtercat: PropTypes.func.isRequired,
  filternew: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookslist);
