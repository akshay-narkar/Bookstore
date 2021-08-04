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
      <div className="d-flex justify-content-between align-items-center mb-5 bookstore-header d-flex">
        <div className="d-flex align-items-center">
          <h1 className="m-0 azure montreg fw-bold">Bookstore CMS</h1>
          <p className="ms-5 my-0 montreg bookssize">BOOKS</p>
          <CategoryFilter
            clickHandler={handleFilterChange}
            filtercat={filternew}
          />
        </div>
        <div>
          <div className="oval text-center">
            <i className="fas fa-user azure" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="table-class">
        <div>

          {filteredbooks.map((x, i) => (
            <div className="bg-white mb-4" key={x.Id} id={i}>
              <Book
                book={x}
                clickHandler={handleRemoveBook}
              />
            </div>
          ))}

        </div>
      </div>
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
