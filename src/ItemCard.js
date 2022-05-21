import React from "react";

function ItemCard(props) {
  return (
    <>
      <div>
        <div className="card">
          <img src={props.img} class="card-img-top" />
          <div className="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.desc}</p>
            <p class="card-text">{props.price}</p>
            <button class="btn btn-success" onClick={() => addItem(props.item)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
