import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Login } from "./pages/login/Login"
import { ShopCart } from "./pages/shop-cart/ShopCart"
import { NotFound } from "./pages/notfound/NotFound"

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/shop" element={<ShopCart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}
