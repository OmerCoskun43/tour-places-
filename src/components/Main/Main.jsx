import React from "react";
import "./Main.scss";
import Card from "./Card";

const Main = ({ data }) => {
  //   console.log(data);
  return (
    <div className="card-container">
      {data.map((item) => {
        const { id, title, desc, image } = item;
        return <Card title={title} desc={desc} image={image} id={id} />;
      })}
    </div>
  );
};

export default Main;
