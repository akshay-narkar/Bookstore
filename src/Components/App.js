import '../App.css';
import Booksform from './Booksform';
import Bookslist from '../Containers/Bookslist';

export default function App() {
  return (
    <div className="container">
      <Booksform />
      <Bookslist />
    </div>
  );
}
