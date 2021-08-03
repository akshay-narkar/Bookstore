import Booksform from '../Containers/Booksform';
import Bookslist from '../Containers/Bookslist';

export default function App() {
  return (
    <div className="container main-app">
      <Bookslist />
      <Booksform />
    </div>
  );
}
