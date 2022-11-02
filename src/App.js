import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from './components/form/Form';
import Provider from './context/CartContext';

function App() {
    return (
        <Provider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/category/:categoryName"
                        element={<ItemListContainer />}
                    />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/form" element={<Form />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
