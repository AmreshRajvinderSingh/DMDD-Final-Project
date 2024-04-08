import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import AddOrder from './components/addOrder';
import AddProduct from './components/addProduct';
import AddShipment from './components/addShipment';
import AddSupplier from './components/addSupplier';
import AddWarehouse from './components/addWarehouse';
import './App.css';
import Header from './components/header';
// import AddProduct from './components/addProduct';

function App() {
  return (
    <div className="App">
     {/* <AddProduct /> */}
     <Header />
     <AddOrder />
     <AddProduct />
     <AddShipment />
     <AddWarehouse />
     <AddSupplier />
    </div>
  );
}

export default App;
