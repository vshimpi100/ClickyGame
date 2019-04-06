import React from "react";
import "./style.css";

class ImageCard extends React.Component {
  render() {
    const { id, imageSrc, handleClick } = this.props;

    return (
      <div className="card col-4" id={id} onClick={()=>{handleClick(id)}}>
        <div className="img-container">
          <img alt={imageSrc} src={imageSrc}/>
        </div>
      </div>
    );
  }
}

export default ImageCard;
