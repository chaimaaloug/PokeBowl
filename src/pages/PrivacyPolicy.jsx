
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import HeroSectionImage from '../assets/background/hero1.jpg';




const PrivacyPolicy = () => {
    return (
        <main>
            <Header />
            <HeroSection text="Politique de confidentialité - Bowl Bliss" image={HeroSectionImage} />
            <div className="l__legal-container">
                <div className="l__legal-content">
                    <h1>Politique de confidentialité</h1>
                    <p>La présente politique de confidentialité décrit comment Bowl Bliss collecte, utilise, protège et divulgue les informations personnelles des utilisateurs du site. En utilisant le site Bowl Bliss, vous consentez à la collecte et à l'utilisation de vos informations personnelles conformément à cette politique.</p>

                    <h2>1. Informations collectées</h2>
                    <p>Bowl Bliss peut collecter les informations personnelles suivantes :</p>
                    <ul>
                        <li>Prénom et nom</li>
                        <li>Adresse email</li>
                        <li>Adresse postale</li>
                        <li>Numéro de téléphone</li>
                        <li>Informations de paiement</li>
                    </ul>

                    <h2>2. Utilisation des informations</h2>
                    <p>Bowl Bliss utilise les informations personnelles collectées pour :</p>
                    <ul>
                        <li>Permettre la création et la gestion de votre compte</li>
                        <li>Traiter et livrer vos commandes</li>
                        <li>Répondre à vos demandes et vous fournir un service client</li>
                        <li>Personnaliser votre expérience sur le site</li>
                        <li>Vous envoyer des communications marketing si vous avez donné votre consentement</li>
                    </ul>

                    <h2>3. Protection des informations</h2>
                    <p>Bowl Bliss met en place des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès, utilisation ou divulgation non autorisé(e). Toutefois, veuillez noter qu'aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée.</p>

                    <h2>4. Divulgation à des tiers</h2>
                    <p>Bowl Bliss ne vend, ne loue, ni ne partage vos informations personnelles avec des tiers, sauf dans les cas suivants :</p>
                    <ul>
                        <li>Lorsque cela est nécessaire pour fournir les services demandés</li>
                        <li>En cas de demande légale, d'ordonnance d'un tribunal ou de toute autre exigence légale</li>
                        <li>Si Bowl Bliss est impliqué dans une fusion, une acquisition ou une vente d'actifs, vos informations personnelles peuvent être transférées à la partie tierce concernée.</li>
                    </ul>

                    <h2>5. Cookies</h2>
                    <p>Le site Bowl Bliss utilise des cookies pour améliorer l'expérience utilisateur. En utilisant le site, vous consentez à l'utilisation de cookies conformément à notre politique en matière de cookies.</p>

                    <h2>6. Liens vers des sites tiers</h2>
                    <p>Le site Bowl Bliss peut contenir des liens vers des sites tiers. Bowl Bliss n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leurs pratiques en matière de confidentialité. Veuillez consulter les politiques de confidentialité de ces sites tiers avant de fournir vos informations personnelles.</p>

                    <h2>7. Droits des utilisateurs</h2>
                    <p>Vous pouvez exercer les droits suivants concernant vos informations personnelles :</p>
                    <ul>
                        <li>Accéder à vos informations personnelles détenues par Bowl Bliss</li>
                        <li>Demander la rectification ou la suppression de vos informations personnelles</li>
                        <li>Demander la limitation du traitement de vos informations personnelles</li>
                        <li>Vous opposer au traitement de vos informations personnelles</li>
                    </ul>

                    <h2>8. Modifications de la politique de confidentialité</h2>
                    <p>Bowl Bliss se réserve le droit de modifier cette politique de confidentialité à tout moment. Les modifications entreront en vigueur dès leur publication sur le site. Il est de votre responsabilité de consulter régulièrement la politique de confidentialité pour vous tenir informé(e) des éventuelles modifications.</p>

                    <h2>9. Contact</h2>
                    <p>Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, veuillez nous contacter aux coordonnées fournies ci-dessous :</p>
                    <p>Bowl Bliss</p>
                    <p>21 Rue de Molinel - 59000 Lille, France</p>
                    <p>+3389543321</p>
                    <p>contact@bowlbliss.com</p>

                    <p>Date de dernière mise à jour : 25 juin 2023</p>
                </div>
            </div>
            <Footer />
        </main>    
    )
}

export default PrivacyPolicy;