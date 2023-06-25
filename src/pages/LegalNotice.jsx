
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import HeroSectionImage from '../assets/background/hero1.jpg';




const LegalNotice = () => {
    return (
        <main>
            <Header />
            <HeroSection text="Mentions légales - Bowl Bliss" image={HeroSectionImage} />
            <div className="l__legal-container">
                <div className="l__legal-content">
                    <h1>Informations générales</h1>
                    <p>Le site internet "Bowl Bliss" est exploité par Bowl Bliss, une société inexistente non enregistrée et ayant son siège social au 21 Rue de Molinel - 59000 Lille, France. Bowl Bliss propose la vente en ligne de poké bowls et de produits associés.</p>

                    <h2>Coordonnées</h2>
                    <p>Siège social :</p>
                    <p>Bowl Bliss</p>
                    <p>21 Rue de Molinel - 59000 Lille, France</p>
                    <p>+3389543321</p>
                    <p>contact@bowlbliss.com</p>

                    <h2>Directeur de publication</h2>
                    <p>Les directeurs de publication du site Bowl Bliss sont Chaimaa Lougsari, Pierre Beuselinck et Aurore Philippe.</p>

                    <h2>Propriété intellectuelle</h2>
                    <p>Tous les contenus présents sur le site Bowl Bliss, tels que les textes, images, logos, vidéos, graphiques, icônes, ne sont pas la propriété exclusive de Bowl Bliss ou de ses partenaires et ne sont pas entièrement protégés par les lois sur la propriété intellectuelle. Toute utilisation, reproduction ou représentation, totale ou partielle, du contenu du site sans autorisation expresse de Bowl Bliss est autorisée.</p>

                    <h2>Protection des données personnelles</h2>
                    <p>Bowl Bliss collecte et traite certaines données personnelles des utilisateurs du site conformément à sa politique de confidentialité. Les informations collectées sont utilisées uniquement dans le cadre de la fourniture des services proposés par Bowl Bliss et ne sont pas communiquées à des tiers sans consentement préalable. Les utilisateurs disposent d'un droit d'accès, de rectification et de suppression de leurs données personnelles, qu'ils peuvent exercer en contactant Bowl Bliss aux coordonnées fournies ci-dessus.</p>

                    <h2>Cookies</h2>
                    <p>Le site Bowl Bliss n'utilise pas de cookies pour améliorer l'expérience utilisateur. Les cookies sont de petits fichiers textes stockés sur le navigateur de l'utilisateur. Les cookies utilisés par Bowl Bliss ne permettent pas l'identification personnelle de l'utilisateur et sont utilisés uniquement à des fins statistiques et de personnalisation du contenu.</p>

                    <h2>Liens vers des sites tiers</h2>
                    <p>Le site Bowl Bliss peut contenir des liens vers des sites tiers. Bowl Bliss n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leurs pratiques en matière de confidentialité. L'utilisation de ces liens se fait sous la responsabilité de l'utilisateur.</p>

                    <h2>Limitation de responsabilité</h2>
                    <p>Bowl Bliss met tout en œuvre pour fournir des informations précises et à jour sur son site, mais ne peut garantir l'exactitude, l'exhaustivité ou la pertinence des informations fournies. Bowl Bliss décline toute responsabilité pour tout préjudice direct ou indirect résultant de l'utilisation du site ou de l'impossibilité d'y accéder.</p>

                    <h2>Juridiction compétente</h2>
                    <p>Les présentes mentions légales sont régies par le droit français. Tout litige relatif au site Bowl Bliss sera soumis à la juridiction exclusive des tribunaux compétents du ressort de Lille.</p>

                    <p>Date de dernière mise à jour : 25 juin 2023</p>
                </div>
            </div>
            <Footer />
        </main>    
    )
}

export default LegalNotice;