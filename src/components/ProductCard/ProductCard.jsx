import React from 'react';
import style from './ProductCard.module.scss';
import Button from '../Button/Button';
import ProductDetail from '../../pages/ProductDetail';

const CardList = ({ data }) => {
  return (
    <div className={style.ProductCardList}>
      {data.map((item, index) => (
        <Card key={index} title={item.title} image={item.image} description={item.description} id={item.id} />
      ))}
    </div>
  );
};

const Card = ({ title, image, description, id }) => {
  return (
    <a href={"/product-detail?id=" + id} className={style.ProductCard}>
      <img src={image} alt={title} />
      <div className={style.ProductCardContent}>
        <h3 className='u-font-24'>{title}</h3>
        <p>{description}</p>
        <div className={style.ProductCardActions}>
          <Button outline text="Commander" />
        </div>
      </div>
    </a>
  );
};

export default CardList;