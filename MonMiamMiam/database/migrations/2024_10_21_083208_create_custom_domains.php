<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('custom_domains', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
        // Domaine pour les téléphones
        DB::statement("
            CREATE DOMAIN Dtelephone AS VARCHAR(15)
            CONSTRAINT Dtelephone_valid
            CHECK (VALUE ~ '^(\+[0-9]{1,3})?[0-9]{10}$')
        ");

        // Domaine pour les courriels
        DB::statement("
            CREATE DOMAIN Courriel AS VARCHAR(512)
            CONSTRAINT Courriel_inv
            CHECK (value SIMILAR TO '[[:alnum:]]+(\.[[:alnum:]]+)*\@[[:alnum:]]+(\.[[:alnum:]]+)*')
        ");

        // Domaine pour les mots de passe
        DB::statement("
            CREATE DOMAIN DmotDePasse AS TEXT
            CONSTRAINT valid_password CHECK (
                VALUE ~ '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?!.*(motdepasse|123456|azerty)).{12,}$'
            )
        ");

        // Domaine pour la localisation
        DB::statement("
            CREATE DOMAIN Dlocalisation AS VARCHAR(50)
            CONSTRAINT Dlocalisation_inv CHECK (
                VALUE IN ('Institut UCAC-ICAM', 'Residence CHATEAU', 'Residence TRIBUNAL', 'Residence PRISON', 'Residence LE PALACE', 'Residence LA TERASSE', 'Residence FATMA', 'Residence CDA', 'Residence CITE DES ANGES', 'Residence BAHAMAS', 'Residence POISSONERIE', 'Residence LEGREC', 'Residence COMMISSARIAT')
            )
        ");

        // Autres domaines personnalisés...
        DB::statement("
            CREATE DOMAIN Dstatutcommande AS VARCHAR(50)
            CONSTRAINT Dstatutcommande_inv CHECK (VALUE IN ('En attente', 'Valide'))
        ");
        // Domaine pour les postes
        DB::statement("
            CREATE DOMAIN Dposte AS VARCHAR(50)
            CONSTRAINT Dposte_inv CHECK (VALUE IN ('Cuisinier', 'Livreur', 'Serveur', 'Gerant'))
        ");

        // Domaine pour les types de produits
        DB::statement("
            CREATE DOMAIN Dtypeproduit AS VARCHAR(50)
            CONSTRAINT Dtypeproduit_inv CHECK (VALUE IN ('Boisson', 'Nourriture'))
        ");

        // Domaine pour le statut des réclamations
        DB::statement("
            CREATE DOMAIN Dstatutreclamation AS VARCHAR(50)
            CONSTRAINT Dstatutreclamation_inv CHECK (VALUE IN ('En cours', 'Resolues'))
        ");

        // Domaine pour les plats possibles
        DB::statement("
            CREATE DOMAIN Dplatpossible AS VARCHAR(50)
            CONSTRAINT Dplatpossible_inv CHECK (
                VALUE IN (
                    'Poulet roti', 'Porc roti', 'Poulet panne', 'Poisson braise', 'Poulet braise', 'Poulet DG', 
                    'Eru', 'Ndole', 'Boulettes', 'Okok sucre', 'Okok sale', 'Riz sauce arachide poisson', 
                    'Sauce bolognaise spaghetti'
                )
            )
        ");

        // Domaine pour les méthodes de paiement
        DB::statement("
            CREATE DOMAIN Dmethodepaiement AS VARCHAR(50)
            CONSTRAINT Dmethodepaiement_inv CHECK (VALUE IN ('Carte bancaire', 'Mobile Money', 'Orange Money'))
        ");

        // Domaine pour le statut des paiements
        DB::statement("
            CREATE DOMAIN Dstatutpaiement AS VARCHAR(50)
            CONSTRAINT Dstatutpaiement_inv CHECK (VALUE IN ('En cours', 'Effectue'))
        ");

        // Domaine pour le statut des livraisons
        DB::statement("
            CREATE DOMAIN Dstatutlivraison AS VARCHAR(50)
            CONSTRAINT Dstatutlivraison_inv CHECK (VALUE IN ('En cours', 'Effectue'))
        ");
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('custom_domains');
         // Supprimer les domaines en cas de rollback
         DB::statement("DROP DOMAIN IF EXISTS Dtelephone");
         DB::statement("DROP DOMAIN IF EXISTS Courriel");
         DB::statement("DROP DOMAIN IF EXISTS DmotDePasse");
         DB::statement("DROP DOMAIN IF EXISTS Dlocalisation");
         DB::statement("DROP DOMAIN IF EXISTS Dstatutcommande");
         DB::statement("DROP DOMAIN IF EXISTS Dposte");
        DB::statement("DROP DOMAIN IF EXISTS Dtypeproduit");
        DB::statement("DROP DOMAIN IF EXISTS Dstatutreclamation");
        DB::statement("DROP DOMAIN IF EXISTS Dplatpossible");
        DB::statement("DROP DOMAIN IF EXISTS Dmethodepaiement");
        DB::statement("DROP DOMAIN IF EXISTS Dstatutpaiement");
        DB::statement("DROP DOMAIN IF EXISTS Dstatutlivraison");
    }
};
