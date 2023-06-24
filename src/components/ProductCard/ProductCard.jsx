import React from 'react';
import style from './ProductCard.module.scss';

const CardList = ({ data }) => {
  return (
    <div className={style.ProductCardList}>
      {data.map((item, index) => (
        <Card key={index} title={item.title} image={item.image} description={item.description} />
      ))}
    </div>
  );
};

const Card = ({ title, image, description }) => {
  return (
      <div className={style.ProductCard}>
        <img src={image} alt={title} />
        <div className={style.ProductCardContent}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div>

          </div>
        </div>
      </div>
  );
};

export default CardList;