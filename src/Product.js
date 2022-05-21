import React ,{useState} from "react";

function Product({addToCart}) {
    
      const [products] = useState([
        {
          name: "Shirt",
          cost: "Rs 999",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYqvL_L05hyGJU7V1UC7sZo7v8hSrj98tj2g&usqp=CAU",
        },
        {
          name: "Jeans",
          cost: "Rs 1499",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_O30khAn2LOCb3N0iyQCYYNVmsxT3i16cMw&usqp=CAU",
        },
        {
          name: "Kurti",
          cost: "Rs 499",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9diOg5eaKNhmAYmZgWpB6mCGwEVjqBgB_pA&usqp=CAU",
        },
      ]);

      return (
        <>
        <h2 >Products</h2>
        <div className="products">
            {products.map((product, index) => (
                <div className="product_detail" key={index}>
                  <h3>{product.name}</h3>
                  <img src={product.img} alt={product.name} />
                  <h4>{product.cost}</h4>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
          </div>
          </>
      )  
    }
    
    export default Product;
    