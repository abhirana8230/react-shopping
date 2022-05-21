import React from "react";
import ItemCard from "./ItemCard";
import data from "./Data";

function Home() {

    return (
        <>
        <h1 className="text-center mt-3">Items</h1>
        <div className="container">
            <div className="row justify-content-center">
                {data.productData.map((product, index) => {
                  return(
                    <ItemCard img={product.img} title={product.title} desc={product.desc} price={product.price} item = {product} key={index}/>
                  )
                })}
            </div>
        </div>
        </>
    )
}
                         
export default Home;