import React from "react";
import "./Card.css";
import { useHistory } from "react-router-dom";

const Card = (props) => {
    let history = useHistory()
  return (
    <div className='card' onClick={() =>{
        let temp = props.obj
        props.setState({
            ...props.state,
            desImage: temp
        })
     history.push('/description')
     console.log(temp);
     

    }}>
      <img src={props.img} alt={props.img} />
      <h4>{props.description} !</h4>
    </div>
  );
};

export default Card;
