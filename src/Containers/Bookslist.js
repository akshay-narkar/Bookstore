import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../Components/book';

const handleRemoveBook = (event) => {
  console.log(event.target.parentElement.parentElement.firstElementChild.textContent);
};

function Bookslist(props) {
  const { booklist } = props;
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

          {booklist.map((x) => (
            <tr key={x.Id}>
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
  const { books } = state;
  return ({ booklist: books });
}

Bookslist.propTypes = {
  booklist: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Bookslist);
