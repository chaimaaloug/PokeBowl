import React from 'react';
import {BsFillCheckCircleFill} from 'react-icons/bs'
import style from'./SuccessMessage.module.scss'

const SuccessMessage = ({ onClose }) => {
 

  return (
    <div className={style.successPopup}>
      <div className={style.successContent}>
        <BsFillCheckCircleFill className={style.successIcon}/>
        <p>Vous êtes désormais abonné à notre newsletter. Restez à l'écoute pour les dernières mises à jour et nouvelles.</p>
      </div>
      <button className={style.closeButton} onClick={onClose}>OK</button>
    </div>
  );
};

export default SuccessMessage;
