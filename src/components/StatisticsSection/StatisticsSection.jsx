import React from 'react';
import style from './StatisticsSection.module.scss'

const StatisticsSection = () => {
 

  return (
        <div className={style.statisticsContainer}>
            <div className={style.statisticsContent}>
                <h3>50+</h3>
                <p>Partenaires</p>
            </div>
            <div className={style.statisticsContent}>
                <h3>1k+</h3>
                <p>Commandes livrées</p>
            </div>
            <div className={style.statisticsContent}>
                <h3>12k+</h3>
                <p >Clients</p>
            </div>
        </div>
  );
};

export default StatisticsSection;
