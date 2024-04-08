import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import AddPage from './pages/page';
import AddOrder from './components/addOrder';
import AddProduct from './components/addProduct';
import AddShipment from './components/addShipment';
import AddSupplier from './components/addSupplier';
import AddWarehouse from './components/addWarehouse';
import ProductTable from './components/getProduct';
import OrderTable from './components/getOrders';
import ShipmentTable from './components/getShipments';
import './App.css';
import Header from './components/header';
import OrderDetailsTable from './components/oderDetails';
import StockTable from './components/Stocktable';
import ShowTables from './pages/showtable';
import UpdateProduct from './components/updateProduct';
import UpdateOrder from './components/updateOrder';
import UpdateSupplier from './components/updateSupplier';
import UpdateShipment from './components/updateShipment';
import UpdateWarehouse from './components/updateWarehouse';
// import AddProduct from './components/addProduct';

function App() {
  return (
    <div className="App">
      <Header />
      <AddPage />
      <ShowTables />
      <UpdateProduct />
      <UpdateOrder />
      <UpdateSupplier />
      <UpdateShipment />
      <UpdateWarehouse />
 
    </div>
  );
}

export default App;
