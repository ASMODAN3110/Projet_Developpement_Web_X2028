import React from "react";
import Header from "../Menu/Header";
import Footer from "../Menu/Footer";
import './Termes.css';

function Termes() {
    return (
      <div>
        <Header />
        <div className="termes">
            <h1>Termes et conditions de ZeDuc@Space</h1>
            
            <div className="text">
            <p>Bienvenue sur le site web de zeduc@space. En accédant à ce site, vous acceptez de vous conformer aux termes et conditions suivants. Veuillez lire attentivement ces conditions avant d'utiliser notre site.</p>
    
              <ol>
                  <li>
                      <strong>Acceptation des Conditions</strong>
                      <p>En utilisant ce site web, vous reconnaissez avoir lu et accepté ces termes et conditions. Si vous n'acceptez pas ces conditions, nous vous demandons de ne pas utiliser notre site web.</p>
                  </li>
                  <li>
                      <strong>Accès au Site</strong>
                      <p>Le site web de zeduc@space est accessible gratuitement à tout utilisateur disposant d’un accès à Internet. Les coûts liés à l’accès à notre site (connexion Internet, matériel informatique, etc.) sont à la charge de l'utilisateur. Nous nous efforçons de maintenir notre site accessible 24/7, mais nous ne sommes pas responsables des interruptions temporaires ou permanentes, que ce soit pour des raisons techniques ou autres.</p>
                  </li>
                  <li>
                      <strong>Propriété Intellectuelle</strong>
                      <p>Tous les éléments présents sur ce site (textes, images, logos, graphismes, vidéos, etc.) sont protégés par le droit d’auteur et le droit des marques. Toute reproduction, distribution, modification ou utilisation de ces contenus sans notre autorisation expresse est strictement interdite.</p>
                  </li>
                  <li>
                      <strong>Utilisation du Site</strong>
                      <p>Vous vous engagez à utiliser ce site de manière responsable et conforme à la législation en vigueur. Il vous est interdit de :</p>
                      <ul>
                          <li>Diffuser tout contenu illégal, diffamatoire, injurieux ou nuisible.</li>
                          <li>Pirater le site ou tenter d’en compromettre la sécurité.</li>
                          <li>Utiliser le site pour des activités commerciales non autorisées.</li>
                      </ul>
                  </li>
                  <li>
                      <strong>Protection des Données Personnelles</strong>
                      <p>Nous respectons la confidentialité de vos données personnelles. Les informations recueillies via le site (formulaires de réservation, inscription à la newsletter, etc.) sont traitées conformément à notre politique de confidentialité. Nous ne vendons ni ne louons vos informations à des tiers sans votre consentement explicite.</p>
                  </li>
                  <li>
                      <strong>Commandes et Réservations</strong>
                      <p>Toute commande passée via notre site est soumise à disponibilité et à confirmation de la commande. Les réservations de tables ou les commandes en ligne peuvent être soumises à des termes spécifiques que nous nous réservons le droit de modifier à tout moment. Vous êtes responsable de l'exactitude des informations fournies lors du processus de commande ou de réservation.</p>
                  </li>
                  <li>
                      <strong>Limitation de Responsabilité</strong>
                      <p>zeduc@space ne peut être tenu responsable des dommages résultant de l'utilisation ou de l'impossibilité d'utiliser ce site, y compris en cas de virus ou d’autres problèmes informatiques. De plus, nous ne garantissons pas que les informations fournies sur ce site sont exemptes d’erreurs ou d’omissions.</p>
                  </li>
                  <li>
                      <strong>Liens Externes</strong>
                      <p>Notre site peut contenir des liens vers des sites web tiers. Nous ne sommes pas responsables du contenu ou des pratiques de confidentialité de ces sites. L'utilisation de ces sites se fait à vos propres risques.</p>
                  </li>
                  <li>
                      <strong>Modifications des Termes et Conditions</strong>
                      <p>Nous nous réservons le droit de modifier ces termes et conditions à tout moment, sans préavis. Les modifications seront publiées sur cette page et entreront en vigueur dès leur publication. Il est de votre responsabilité de consulter régulièrement cette page pour rester informé des mises à jour.</p>
                  </li>
                  <li>
                      <strong>Loi Applicable</strong>
                      <p>Ces termes et conditions sont régis par les lois en vigueur dans le pays où se trouve zeduc@space. Tout litige sera soumis à la juridiction des tribunaux compétents du lieu de notre siège social.</p>
                  </li>
              </ol>

    <p>En continuant à utiliser notre site, vous acceptez de respecter ces termes et conditions.</p>

        </div>
      </div>
        <Footer />
      </div>
    );
  }
  
  export default Termes;