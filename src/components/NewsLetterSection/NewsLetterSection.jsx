import { useState } from "react";
import Title from '../Title/Title';
import { firestore } from "../../firebaseConfig";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";
import style from './NewsLetterSection.module.scss';
import SuccessMessage from '../SuccessMessage/SuccessMessage'

    const NewsLetterSection = () => {

        const [email, setEmail] = useState('');
        const [showSuccessMessage, setShowSuccessMessage] = useState(false);

        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
            const newsletterRef = firestore.collection('newsletter');
            await newsletterRef.add({
                email,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            setEmail('');
            setShowSuccessMessage(true);
            } catch (error) {
            console.error(error);
            }
        };

        const handleCloseSuccessMessage = () => {
            setShowSuccessMessage(false);
          };

    return(
        <>
            <section className={style.container}>
                <Title title="Abonnez-vous à notre newsletter"/>
                <p className={style.description}>Entrez votre e-mail pour recevoir des offres quotidiennes.</p>
                <form className={style.formSubscribe} onSubmit={handleSubmit}>
                    <div class="input-group">
                        <input 
                            type="email" 
                            className={style.input} 
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Votre email..." 
                        />
                        <button className={style.button} type="submit" >S'abonner</button>
                    </div>
                </form>
                {showSuccessMessage && <SuccessMessage onClose={handleCloseSuccessMessage} />}
            </section>
        </>
    )
}

export default NewsLetterSection;