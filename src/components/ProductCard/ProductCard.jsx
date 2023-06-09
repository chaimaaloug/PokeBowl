import React from 'react';
import style from './ProductCard.module.scss';
import Button from '../Button/Button';
import Tag from '../Tag/Tag'

const CardList = ({ data }) => {
  return (
    <div className={style.ProductCardList}>
      {data.map((item, index) => (
        <Card key={index} title={item.title} image={item.image} description={item.description} allergene={item.allergene} normalPrice={item.normalPrice} largePrice={item.largePrice} id={item.id} />
      ))}
    </div>
  );
};

const Card = ({ title, image, description, allergene, normalPrice, largePrice, id }) => {
  return (
    <a href={"/product-detail?id=" + id} className={style.ProductCard}>
      <img src={image} alt={title} />
      <div className={style.ProductCardContent}>
        <div className={style.ProductCardAllergene}>
          {allergene && (
            <Tag text={allergene} />
          )}
        </div>
        <h3 className='u-font-24'>{title}</h3>
        <div>
          <p>Normal: {normalPrice} </p>
          <p>Large: {largePrice} </p>
        </div>
        <p>{description}</p>
        <div className={style.ProductCardActions}>
          <Button outline text="Commander" />
        </div>
      </div>
    </a>
  );
};

export default CardList;