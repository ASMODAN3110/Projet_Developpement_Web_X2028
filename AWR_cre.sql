                                   ----- LES DOMAINES -----
                                   
-- Domaine Dtelephone : Chaîne de caractères numériques, généralement 15 chiffres
CREATE DOMAIN Dtelephone
  AS VARCHAR(15)
  CONSTRAINT Dtelephone_valid
  CHECK (VALUE ~ '^(\+[0-9]{1,3})?[0-9]{10}$');

-- Domaine Courriel: permet de verifier un format specifique pour les emails exemple "monadresseemail@example.com"
CREATE DOMAIN Courriel
  VARCHAR(512)
  CONSTRAINT Courriel_inv
    CHECK (value SIMILAR TO '[[:alnum:]]+(\.[[:alnum:]]+)*\@[[:alnum:]]+(\.[[:alnum:]]+)*')
  ;
--  Domaine DmotDePasse : permet de donner l’accès au compte utilisateur.
CREATE DOMAIN DmotDePasse AS TEXT
    CONSTRAINT valid_password CHECK (
        VALUE ~ '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?!.*(motdepasse|123456|azerty)).{12,}$'
    );

CREATE DOMAIN Dlocalisation AS VARCHAR(50)
  CONSTRAINT Dlocallisation_inv CHECK (
    VALUE IN (
      'Institut UCAC-ICAM',
      'Residence  CHATEAU',
      'Residence TRIBUNAL',
      'Residence PRISON',
      'Residence LE PALACE',
      'Residnce LA TERASSE',
      'Residence FATMA',
      'Residence CDA',
      'Residence CITE DES ANGES',
      'Residence BAHAMAS',
      'Residence POISSONERIE',
      'Residence LEGREC',
      'Residence COMMISSARIAT'
    )
  );

  CREATE DOMAIN Dstatutcommande  AS VARCHAR(50)
  CONSTRAINT Dstatutcommande_inv CHECK (
    VALUE IN (
      'En attente',
      'Valide'
    )
  );

  CREATE DOMAIN Dposte  AS VARCHAR(50)
  CONSTRAINT Dposte_inv CHECK (
    VALUE IN (
      'Cuisinier',
      'Livreur',
      'Serveur',
      'Gerant'
    )
  );

  CREATE DOMAIN Dtypeproduit  AS VARCHAR(50)
  CONSTRAINT Dtypeproduit_inv CHECK (
    VALUE IN (
      'Boisson',
      'Nourriture'
    )
  );

 CREATE DOMAIN Dstatutreclamation  AS VARCHAR(50)
  CONSTRAINT Dstatutreclamation_inv CHECK (
    VALUE IN (
      'En cours',
      'Resolues'
    )
  );

 CREATE DOMAIN Dplatpossible  AS VARCHAR(50)
  CONSTRAINT Dplatpossible_inv CHECK (
    VALUE IN (
      'Poulet roti',
      'Porc roti',
      'Poulet panne',
      'Poisson braise',
      'Poulet braise',
      'Poulet DG',
      'Eru',
      'Ndole',
      'Boulettes',
      'Okok sucre',
      'Okok sale',
      'Riz sauce arachide poisson',
      'Sauce bolognaise spaghetti'
    )
  );

CREATE DOMAIN Dmethodepaiement  AS VARCHAR(50)
  CONSTRAINT Dmethodepaiement_inv CHECK (
    VALUE IN (
      'Carte bancaire',
      'Mobile Money',
      'Orange Money'
    )
  );

CREATE DOMAIN Dstatutpaiement  AS VARCHAR(50)
  CONSTRAINT Dstatutpaiement_inv CHECK (
    VALUE IN (
      'En cours',
      'Effectue'
    )
  );

CREATE DOMAIN Dstatutlivraison  AS VARCHAR(50)
  CONSTRAINT Dstatutlivraison_inv CHECK (
    VALUE IN (
      'En cours',
      'Effectue'
    )
  );

                  ---- LES TABLES ----

CREATE TABLE Menu (
    id_Menu SERIAL PRIMARY KEY NOT NULL,
    date_MiseAJour DATE NOT NULL,
    plat_Possible Dplatpossible NOT NULL
);

CREATE TABLE Produit (
    id_Produit SERIAL PRIMARY KEY NOT NULL,
    nom_Produit VARCHAR(100) NOT NULL,
    type_Produit Dtypeproduit NOT NULL,
    prix_unitaire DECIMAL(10, 2) NOT NULL,
    image_Produit TEXT NOT NULL
);

CREATE TABLE Commande (
    id_Commande SERIAL PRIMARY KEY,
    montant DECIMAL(10, 2) NOT NULL,
    Statut Dstatutcommande NOT NULL,
    date_Commande DATETIME NOT NULL,
    id_Client INT NOT NULL,
    id_Paiement INT NOT NULL,
    CONSTRAINT Passerc00 FOREIGN KEY (id_Client) REFERENCES Client(id_Client),
    CONSTRAINT Passerc01 FOREIGN KEY (id_Paiement) REFERENCES Paiement(id_Paiement)
);

CREATE TABLE Paiement (
    id_Paiement SERIAL PRIMARY KEY NOT NULL,
    montant_Total DECIMAL(10, 2) NOT NULL,
    methode_Paiement Dmethodepaiement NOT NULL,
    point_Fidelite_Utilise INT NOT NULL,
    statut_Paiement Dstatutpaiement NOT NULL,
    id_Livraison INT NOT NULL,
    CONSTRAINT Correspondrec00 FOREIGN KEY (id_Livraison) REFERENCES Livraison(id_Livraison)
);

CREATE TABLE Livraison (
    id_Livraison SERIAL PRIMARY KEY NOT NULL,
    date_Livraison DATETIME NOT NULL,
    statut_Livraison DstatutLivraison NOT NULL
);

CREATE TABLE MiniJeu (
    id_Jeu SERIAL PRIMARY KEY NOT NULL,
    nom_Jeu VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    recompense DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Gerant (
    id_Gerant SERIAL PRIMARY KEY NOT NULL,
    nom_Gerant VARCHAR(100) NOT NULL,
    email Courriel NOT NULL,
    mdp_Gerant DmotDePasse NOT NULL
);

CREATE TABLE Administrateur (
    id_Administrateur SERIAL PRIMARY KEY NOT NULL,
    nom_Administrateur VARCHAR(100) NOT NULL,
    email Courriel NOT NULL, 
    mdp_Administrateur DmotDePasse NOT NULL
);

CREATE TABLE Employe (
    id_Employe SERIAL PRIMARY KEY NOT NULL,
    nom_Employe VARCHAR(100) NOT NULL,
    email Courriel NOT NULL,
    mdp_Employe DmotDePasse NOT NULL,
    Poste Dposte NOT NULL
);

CREATE TABLE Reclamation (
    id_Reclamation SERIAL PRIMARY KEY NOT NULL,
    description_Reclamation TEXT NOT NULL,
    date_Reclamation DATETIME NOT NULL,
    statut_Reclamation Dstatutreclamation NOT NULL,
    id_Client INT NOT NULL,
    CONSTRAINT Fairec00 FOREIGN KEY (id_Client) REFERENCES Client(id_Client)
);

CREATE TABLE Client (
    id_Client SERIAL PRIMARY KEY NOT NULL,
    nom_Client VARCHAR(100) NOT NULL,
    email Courriel NOT NULL,
    mdp_Client DmotDePasse NOT NULL,
    numero Dtelephone NOT NULL,
    localisation Dlocalisation NOT NULL,
    point_Fidelite FLOAT NOT NULL,
    date_Inscription DATE NOT NULL,
    id_Consentement INT NOT NULL,
    id_Client_parrain INT NOT NULL,
    date_parrainage DATE NOT NULL,
    CONSTRAINT Donnerc00 FOREIGN KEY (id_Consentement) REFERENCES Consentement(id_Consentement),
    CONSTRAINT parrainerc00 FOREIGN KEY (id_Client_parrain) REFERENCES Client(id_Client)
);

CREATE TABLE Consentement (
    id_Consentement SERIAL PRIMARY KEY NOT NULL,
    date_Consentement DATE NOT NULL
);

CREATE TABLE Evenement (
    id_Evenement SERIAL PRIMARY KEY NOT NULL,
    nom_Evenement VARCHAR(100) NOT NULL,
    description_Evenement TEXT NOT NULL,
    date_Debut DATE NOT NULL,
    date_Fin DATE NOT NULL,
    recompense DECIMAL(10, 2)
);

CREATE TABLE Promotion (
    id_Promotion SERIAL PRIMARY KEY NOT NULL,
    description_Promotion TEXT NOT NULL,
    date_Debut DATE NOT NULL,
    date_Fin DATE NOT NULL
);

CREATE TABLE Inclure (
    id_Commande SERIAL  NOT NULL,
    id_Produit SERIAL  NOT NULL,
    quantité INT  NOT NULL,
    PRIMARY KEY (id_Commande, id_Produit),
    CONSTRAINT Inclurec00 FOREIGN KEY (id_Commande) REFERENCES Commande(id_Commande),
    CONSTRAINT Inclurec01 FOREIGN KEY (id_Produit) REFERENCES Produit(id_Produit)
);

CREATE TABLE Contenir (
    id_Menu SERIAL NOT NULL,
    id_Produit SERIAL NOT NULL,
    PRIMARY KEY (id_Menu, id_Produit), 
    CONSTRAINT Contenirc00 FOREIGN KEY (id_Menu) REFERENCES Menu(id_Menu),
    CONSTRAINT Contenirc01 FOREIGN KEY (id_Produit) REFERENCES Produit(id_Produit)
);

CREATE TABLE Valider (
    id_Employe SERIAL NOT NULL,
    id_Commande SERIAL NOT NULL,
    PRIMARY KEY (id_Employe, id_Commande),
    CONSTRAINT Validerc00 FOREIGN KEY (id_Employe) REFERENCES Employe(id_Employe),
    CONSTRAINT Validerc01 FOREIGN KEY (id_Commande) REFERENCES Commande(id_Commande)
);
