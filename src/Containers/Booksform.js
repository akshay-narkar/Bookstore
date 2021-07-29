/*eslint-disable*/
// import React, { useState } from 'react';
// export default function Booksform() {
//   const [state, setState1] = useState({
//     title: null,
//     category: null,
//   });

//   const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

//   const handleChange = (event) => {
//     if (event.target.id === 'exampleselectInput1') {
//       setState1({
//         category: event.target.value,
//       });
//     } else {
//       setState1({
//         title: event.target.value,
//       });
//     }
//     console.log(state);
//   };

//   // const submitChange = () => {
//   //   // addnewbook(state);
//   //   console.log(addnewbook);
//   //   console.log(state.title);
//   //   console.log(state.category);
//   // };

//   return (
//     <div className="container border mt-5 p-5">
//       <div className="mb-3">
//         <label htmlFor="exampleFormControlInput1" className="form-label">
//           Book Title
//           <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" onChange={handleChange} />
//         </label>

//       </div>
//       <div className="mb-3">
//         <label htmlFor="exampleselectInput1" className="form-label">

//           Select Category

//           <select className="form-select form-control" id="exampleselectInput1" aria-label="selectbooks" >
//             {categories.map((x) => <option value={x} key={Math.random()}>{x}</option>)}
//           </select>
//         </label>
//       </div>
//       <button type="button" className="btn btn-dark ">Submit</button>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../Actions/index';

function Booksform(props) {
  const categories = ['Please select','Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const { addnewbook } = props;
  const [state, setState1] = useState({
    title: null,
    category: '',
  });
  const handleChange = (event) => {
    if (event.target.id === 'exampleselectInput1' && event.target.value !== 'Please select') {
      console.log(event.target);
      setState1((prevstate) => ({ ...prevstate, category: event.target.value }));
    } else {
      setState1((prevstate) => ({ ...prevstate, title: event.target.value }));
    }
  };

  const submitChange = () => {
    addnewbook(state);
    console.log(addnewbook);
    console.log(state.title);
    console.log(state.category);
  };
  return (
    <div className="container border mt-5 p-5">
      {console.log(state)}

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Book Title
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" onChange={handleChange} required />
        </label>

      </div>
      <div className="mb-3">
        <label htmlFor="exampleselectInput1" className="form-label">

          Select Category
          {/* ={[{ value, label }]} */}
          {/* <select value={this.state.fruit} onChange={this.handleChange}>

            {options.map((option) => (

              <option value={option.value}>{option.label}</option>

            ))} */}
          <select className="form-select form-control" value = {state.category} id="exampleselectInput1" aria-label="selectbooks" onChange={handleChange} required>
            {categories.map((x) => <option value={x} key={Math.random()}>{x}</option>)}
          </select>
        </label>
      </div>
      <button type="submit" className="btn btn-dark" onClick={submitChange}>Submit</button>
    </div>
  );
}
/* eslint-disable-next-line */
const mapDispatchToProps = (dispatch) => ({ addnewbook: (book) => { dispatch(createBook(book)); } });

export default connect(null, mapDispatchToProps)(Booksform);
