import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../Presentational/book';

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
          </tr>
        </thead>
        <tbody>

          {booklist.map((x) => <tr key={x.Id}><Book book={x} /></tr>)}

        </tbody>
      </table>
    </div>
  );
}

function mapStateToProps(state) {
  const { bookupdateReducer } = state;
  const { books } = bookupdateReducer;
  return ({ booklist: books });
}

Bookslist.propTypes = {
  booklist: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Bookslist);
