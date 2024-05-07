import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
    useRouteMatch
} from "react-router-dom";

import { Login } from "./pages/login/Login"
import { ShopCart } from "./pages/shop-cart/ShopCart"
import { NotFound } from "./pages/notfound/NotFound"
import { useEffect, useState } from "react";

export const App = () => {
    const [login , setLogin] = useState(false);
    const {id} = useParams();
    const match = useRouteMatch();
    const url = `${match.url}`;
    // Get the route using
    useEffect(() => {
        console.log(url);
    },[])
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login info={'info'} />} />
                <Route path="/shop" element={<ShopCart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}
