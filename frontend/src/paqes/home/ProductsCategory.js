import React from "react";
import "./ProductCategory.scss";
import { useNavigate } from "react-router-dom";


const categories = [
  {
    id: 1,
    title: "Outfits",
    image: "https://i.pinimg.com/564x/84/98/05/849805c9afebcb9582ec35a5cfda6b44.jpg",
  },
  {
    id: 2,
    title: "Footwear",
    image: "https://i.pinimg.com/564x/19/c6/77/19c6773a1b6ee3cba78dd2630a24ca76.jpg",
  },
  {
    id: 3,
    title: "Accessories",
    image: "https://i.pinimg.com/564x/b0/52/ba/b052ba4e577fb4430826345a745e4524.jpg",
  },{
  id:4 ,
    title: "Make-up",
    image: "https://i.pinimg.com/564x/0d/3f/80/0d3f80e6d48499a0eef95a4e74a7dcfd.jpg",
  },
  {
    id: 5,
      title: "Perfumes",
      image: "https://i.pinimg.com/564x/a4/1f/f9/a41ff90482547ddf8fbb5e6b7f445539.jpg",
    },
    {
        id:6,
          title: "Watches",
          image: "https://i.pinimg.com/564x/16/41/41/1641416a02652fb6b236e2b7587ca6d7.jpg",
        }
];

const Category = ({ title, image }) => {
  const navigate = useNavigate();
  return (
    <div className="category">
      <h3>{title}</h3>
      <img src={image} alt="img" />
      <button className="--btn" onClick={() => navigate("/shop")}>
        {"Shop Now >>>"}
      </button>
    </div>
  );
};

const ProductCategory = () => {
  return (
    <div className="categories">
      {categories.map((cat) => {
        return (
          <div key={cat.id} className="--flex-center">
            <Category title={cat.title} image={cat.image} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductCategory;