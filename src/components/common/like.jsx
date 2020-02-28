import React from "react";
import HeartFill from "../../assets/images/heart-fill.svg";
import Heart from "../../assets/images/heart.svg";

const Like = props => {
  return (
    <img
      onClick={props.handleLike}
      style={{ cursor: "pointer" }}
      src={!props.liked ? Heart : HeartFill}
      alt=""
      padding="10"
      width="25"
      height="25"
      title="Heart"
    ></img>
  );
};

export default Like;
