import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Shop from "./shop/shop";
import Like from "./Like/Like";

export default function Link() {
    return (
      <Routes>
        <Route path={"/"} element={<Cart />} />
        <Route path={"/shop"} element={<Shop />} />
        <Route path={"/Like"} element={<Like />} />
      </Routes>
    );
}
