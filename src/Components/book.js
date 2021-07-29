import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  const { Id, Title, Category } = book;

  return (
    <>
      <td>{Id}</td>
      <td>{Title}</td>
      <td>{Category}</td>

    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    Id: PropTypes.number.isRequired,
    Title: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
