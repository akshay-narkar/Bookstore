export default function Booksform() {
  return (
    <div className="container border mt-5 p-5">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Book Title
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
        </label>
      </div>

      <select className="form-select w-50" aria-label="selectbooks">
        <option defaultValue="">Select Book Category</option>
        <option value="1">Action</option>
        <option value="2">Biography</option>
        <option value="3">Horror</option>
        <option value="4">Kids</option>
        <option value="5">Learning</option>
        <option value="6">Sci-Fi</option>
      </select>

      <button type="button" className="btn btn-dark mt-3">Submit</button>
    </div>
  );
}
