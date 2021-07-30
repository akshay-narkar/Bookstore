import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, clickHandler } = props;
  const { Id, Title, Category } = book;

  return (
    <>
      <td>{Id}</td>
      <td>{Title}</td>
      <td>{Category}</td>
      <td><button type="button" className="btn btn-dark" onClick={clickHandler}>Remove</button></td>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    Id: PropTypes.number.isRequired,
    Title: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Book;
