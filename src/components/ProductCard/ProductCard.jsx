import React from 'react';
import style from './ProductCard.module.scss';
import Button from '../Button/Button';

const CardList = ({ data }) => {
  return (
    <div className={style.ProductCardList}>
      {data.map((item, index) => (
        <Card key={index} title={item.title} image={item.image} description={item.description} url={item.url} />
      ))}
    </div>
  );
};

const Card = ({ title, image, description, url }) => {
  return (
    <a href={url}>
      <div className={style.ProductCard}>
        <img src={image} alt={title} />
        <div className={style.ProductCardContent}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={style.ProductCardActions}>
            <Button outline text="Commander"/>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CardList;