import "bootstrap/dist/css/bootstrap.min.css";
import AddPage from './pages/page';

import './App.css';
import Header from './components/header';

import ShowTables from './pages/showtable';

import UpdateTables from './pages/updateTables';
import DeletePage from "./pages/deleteTable";
// import AddProduct from './components/addProduct';

function App() {
  return (
    <div className="App">
      <Header />
      
      <AddPage />
      <ShowTables />
      <UpdateTables />
      <DeletePage />


 
    </div>
  );
}

export default App;
