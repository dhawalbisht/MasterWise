import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.item.imageUrl} alt={props.item.name} className="card-image" />
      <div className="card-content">
        <h5 className="card-title">{props.item.name}</h5>
        <p className="card-description">{props.item.description}</p>
        <p className='skills'>
            {props.item.skills.map(data => {
                return <input type="text" name="skills" value={data} className='skill-input' readOnly />;
            })}
        </p>
        <p>Rating: {props.item.rating}/10</p>
        <a href={props.item.link} className="card-button">{props.item.buttonText}</a>
      </div>
    </div>
  );
}

export default Card;