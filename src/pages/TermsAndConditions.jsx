
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import HeroSectionImage from '../assets/background/hero1.jpg';




const TermesAndConditions = () => {
    return (
        <main>
            <Header />
            <HeroSection text="Termes & Conditions - Bowl Bliss" image={HeroSectionImage} />
            <div className="l__legal-container">
                <div className="l__legal-content">
                    <h1>Termes & Conditions</h1>
                    <h2>1. Acceptation des termes</h2>
                    <p>En accédant et en utilisant le site internet Bowl Bliss, vous acceptez d'être lié par les présents termes & conditions. Si vous n'acceptez pas ces termes, veuillez ne pas utiliser le site.</p>

                    <h2>2. Utilisation du site</h2>
                    <p>Vous êtes autorisé à utiliser le site Bowl Bliss à des fins personnelles et non commerciales. Toute utilisation abusive, frauduleuse ou illégale du site est strictement interdite.</p>

                    <h2>3. Commandes et paiements</h2>
                    <p>En passant une commande sur le site Bowl Bliss, vous vous engagez à fournir des informations véridiques, complètes et à jour. Les paiements doivent être effectués conformément aux méthodes de paiement acceptées par Bowl Bliss. Bowl Bliss se réserve le droit de refuser ou d'annuler toute commande à sa discrétion.</p>

                    <h2>4. Livraison</h2>
                    <p>Bowl Bliss s'efforcera de livrer les commandes dans les délais indiqués, mais ne peut garantir des délais de livraison exacts. Les frais de livraison seront précisés lors de la commande.</p>

                    <h2>5. Politique de retour et de remboursement</h2>
                    <p>Les retours et les remboursements sont soumis à la politique de retour et de remboursement de Bowl Bliss, disponible sur le site. Veuillez vous référer à cette politique pour plus d'informations.</p>

                    <h2>6. Limitation de responsabilité</h2>
                    <p>Bowl Bliss décline toute responsabilité quant à tout dommage, perte ou préjudice direct, indirect, spécial, consécutif ou exemplaire découlant de l'utilisation du site ou de l'incapacité d'y accéder. Bowl Bliss ne garantit pas l'exactitude, l'exhaustivité ou la fiabilité des informations présentes sur le site.</p>

                    <h2>7. Propriété intellectuelle</h2>
                    <p>Tous les contenus présents sur le site Bowl Bliss sont protégés par les lois sur la propriété intellectuelle. Toute utilisation, reproduction ou représentation, totale ou partielle, du contenu du site sans autorisation expresse de Bowl Bliss est strictement interdite.</p>

                    <h2>8. Modifications des termes & conditions</h2>
                    <p>Bowl Bliss se réserve le droit de modifier les présents termes & conditions à tout moment. Les modifications entreront en vigueur dès leur publication sur le site. Il est de votre responsabilité de consulter régulièrement les termes & conditions pour vous tenir informé des éventuelles modifications.</p>

                    <h2>9. Droit applicable et juridiction compétente</h2>
                    <p>Les présents termes & conditions sont régis par le droit français. Tout litige relatif à ces termes & conditions ou à l'utilisation du site sera soumis à la juridiction exclusive des tribunaux compétents du ressort de [lieu du siège social de l'entreprise].</p>

                    <p>Date de dernière mise à jour : 25 juin 2023</p>
                </div>
            </div>
            <Footer />
        </main>    
    )
}

export default TermesAndConditions;