export default function Booksform() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div className="container border mt-5 p-5">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Book Title
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
        </label>

      </div>
      <div className="mb-3">
        <label htmlFor="exampleselectInput1" className="form-label">

          Select Category

          <select className="form-select form-control" id="exampleselectInput1" aria-label="selectbooks">
            {categories.map((x, i) => <option value={i} key={Math.random()}>{x}</option>)}
          </select>
        </label>
      </div>
      <button type="button" className="btn btn-dark ">Submit</button>
    </div>
  );
}
