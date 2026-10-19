import { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
  const [error, setError] = useState("");
  const handleProductSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    // console.log("Name:", name, "Price: ", price, "Quantity: ", quantity );

    const newProduct = {
      name,
      price,
      quantity,
    };

    // console.log(newProduct)

    // validation
    if (name.length == 0) {
      setError("Please provide a product name");
      return;
    } else if (price.length == 0) {
      setError("Please provide a Price");
      return;
    } else if (price < 0) {
      setError("Price can not be negative");
      return;
    } else if (quantity == 0 || quantity < 0) {
      setError("Quantity must be 1");
      return;
    } else {
      setError("");
    }
  };
  return (
    <div>
      <h3>Add a Product</h3>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="Product Name" />
        <br />
        <input type="number" name="price" placeholder="Product Price" />
        <br />
        <input type="number" name="quantity" placeholder="Product Quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ProductForm;
