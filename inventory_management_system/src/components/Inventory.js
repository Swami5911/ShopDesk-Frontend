import React, { useState, useEffect } from "react";
import background from '../img/bg.png'; // Your background image if needed

export default function Inventory() {
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        // Fetch products from backend (API call)
        const response = await fetch("http://localhost:3001/products");
        const data = await response.json();
        setProducts(data);
    };

    const handleQuantityChange = (id, quantity) => {
        const newQuantities = { ...quantities, [id]: quantity };
        setQuantities(newQuantities);

        // Update the total price
        const newTotal = Object.keys(newQuantities).reduce((acc, key) => {
            const product = products.find((prod) => prod._id === key);
            return acc + (product.ProductPrice * newQuantities[key] || 0);
        }, 0);
        setTotalPrice(newTotal);
    };

    const printInvoice = () => {
        window.print();
    };

    return (
        <div className="container-fluid p-0" style={{
            height: "100vh",
            overflow: "hidden",
            background: `url(${background}) no-repeat center center/cover`,
        }}>
            <div className="row justify-content-center">
                <div className="col text-center">
                    <h2>Inventory Bill Book</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col text-center">
                    <h1>Swami Tech</h1>
                    <p>Gokulpura, Nohar, Hanumangarh (Raj.)</p>
                    <p>Pincode: 335523</p>
                    <p>GSTIN: XYZ12345678</p>
                </div>
            </div>

            <div className="row mt-3 justify-content-center">
                <div className="col-md-10">
                    <table className="table table-bordered table-hover ">
                        <thead >
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={product._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{product.ProductName}</td>
                                    <td>₹{product.ProductPrice}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={quantities[product._id] || 0}
                                            className="form-control"
                                            min="0"
                                            onChange={(e) =>
                                                handleQuantityChange(
                                                    product._id,
                                                    e.target.value // Pass the raw input value
                                                )
                                            }
                                        />
                                    </td>
                                    <td>
                                        ₹{(quantities[product._id] || 0) * product.ProductPrice}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row mt-4 justify-content-center">
                <div className="col-md-8 text-center">
                    <h5>Total Amount: ₹{totalPrice}</h5>
                </div>
                <div className="col-md-4 text-right">
                    <button onClick={printInvoice} className="btn btn-primary">
                        Print Invoice
                    </button>
                </div>
            </div>

            <div className="row mt-3 justify-content-center">
                <div className="col text-center">
                    <p>Thanks for your business!</p>
                </div>
            </div>
        </div>
    );
}
