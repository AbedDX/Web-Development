import React from "react";
import Avatar from "./Avatar";
import Detail from "./detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail 
        detailInfo={props.tel} />
        <Detail 
        detailInfo={props.email} />
        <Detail 
        detailInfo={props.id} />
      </div>
    </div>
  );
}

export default Card;
