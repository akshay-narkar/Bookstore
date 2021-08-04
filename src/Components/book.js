import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = (props) => {
  const { book, clickHandler } = props;
  const { Title, Category } = book;
  return (
    <div className="container">
      <div className="row p-4 bookclass justify-content-between align-items-center">

        <div className="left-mid col-5">
          <p className="mb-1 categoryname monoreg">{Category}</p>
          <h5 className="titlename roboto fw-bold">{Title}</h5>
          <p className="mb-3 authorname monoreg">Anon Name</p>
          <div>
            <button type="button" className="btn ps-0 roboto authorname">Comments</button>
            <span className="roboto authorname me-3"> | </span>
            <button type="button" className="btn ps-0 roboto authorname" onClick={clickHandler}>Remove</button>
            <span className="roboto authorname me-3"> | </span>
            <button type="button" className="btn ps-0 roboto authorname">Edit</button>
          </div>
        </div>
        <div className="center-mid  d-flex align-items-center col-3">
          <div className="circularbar">
            <CircularProgressbar value={Math.floor(Math.random() * 100)} />
          </div>
          <div className="p-3">
            <h3 className=" monoreg">{`${Math.floor(Math.random() * 100)}%`}</h3>
            <p className="mb-1 categoryname monoreg fw-normal opacity">Completed</p>

          </div>
        </div>

        <div className="right-mid col-3">
          <p className="mb-1 categoryname monoreg fw-normal opacity">CURRENT CHAPTER</p>
          <p className="roboto chaptername">Chapter 15</p>
          <div>
            <button type="button" className="btn btn-primary roboto progressbtn mt-3">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Book;
