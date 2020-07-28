import React from "react";
import "./Home.css";
import Card from "../Card";


const Home = ({pictures, desImage, state, setState }) => {
  return (
    <div className="home-div">
      {pictures.map((img,i) => {
        return (
          <Card
            key={i}
            img={img.img}
            description={img.description}
            desImage={desImage}
            state={state}
            setState={setState}
            obj={img}
          />
        );
      })}
    </div>
  );
};

export default Home;
