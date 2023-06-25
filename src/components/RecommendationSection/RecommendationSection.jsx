
import React from 'react';
import Title from "../Title/Title"
import style from './RecommendationSection.module.scss'

const RecommendationSection = () => {
  return (
   <div className={style.recommendationContainer}>
      <div className={style.recommendationContent}>
        <Title title="Nos Best-Sellers du moment"/>
      </div>
   </div>
  );
};

export default RecommendationSection;
