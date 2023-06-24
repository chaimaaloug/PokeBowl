import React from 'react';
import style from './Card.module.scss';

const CardList = ({ data }) => {
  return (
    <div className={style.cardList}>
      {data.map((item, index) => (
        <Card key={index} title={item.title} image={item.image} description="description" />
      ))}
    </div>
  );
};

const Card = ({ title, image, description }) => {
  return (
    <div>
      <div className={style.card}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default CardList;