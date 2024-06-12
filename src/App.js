import Products from './components/Products';
import AddProduct from './components/AddProduct';

import './App.css';

function App() {
  return (
    <div>
      <div className='mt-2 text-3xl text-center font-bold'>Products List</div>
      <br />
      <AddProduct />
      <Products />
    </div>
  );
}

export default App;
