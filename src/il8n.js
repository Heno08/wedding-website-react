import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Introduction": "Please join us to celebrate",
      "Our Story": "Our Story",
      "Our story text": "On June 7, 2019, the flag was lowered on the starting line of our joint adventure during a TT party at Villa Marina ... During the first months, we met in various places on our travels between Belgium and the Isle of Man. Lovers of nature, hiking but also of history and good food and wine, our stops were among others the Lake District, London, Buxton but also Bruges and Vienna. In March 2020, one week after Sébastien left the Isle of Man for Belgium, it was a shock... The borders closed with the arrival of a pandemic that would lead us to start a virtual chapter. Fortunately, modern technology allowed us to continue to 'see' each other. In August 2020, Henry makes a radical decision. With the borders of the Isle of Man remaining closed, he leaves his job and takes a one-way ticket to Belgium. This was the beginning of a discovery of Belgian tastes with its beers, its vineyards, its cities, its beaches, and its Ardennes sometimes covered with snow. In April 2021, the adventure continues. Sebastien takes Henry for a stay alongside the canals of Bruges. After a day of various enigmas, it is the moment of the proposal and the sharing of the emotions with our families. During our stay on the Isle of Man in the summer of 2021, we decide that it is on this rock where we can see 7 kingdoms that our wedding will be celebrated in 2023. Before celebrating this new chapter, we managed another big project starting in the fall of 2021, the renovation of our home. During these 12 months of work, we have shared our daily life between a flat share in Brussels and Sebastien's parents house, without forgetting a weeks of vacation in Denmark and 4 weeks on the Costa Brava. We are now ready to celebrate with you this new step which, like our life, will gather our love of history, local products, and travel. We look forward to sharing this moment with you."

    }
  },
  fr: {
    translation: {
      "Introduction": "Rejoignez-nous pour célébrer",
      "Our Story": "Notre histoire",
      "Our story text": "Le 7 juin 2019, le drapeau s’est abaissé sur la ligne de départ de notre aventure commune lors d’une soirée à la Villa Marina durant le TT …  Pour commencer, durant les premiers mois, nous nous sommes retrouvés dans divers endroits sur notre ligne de voyage entre la Belgique et l’Ile de Man. Amoureux de nature, de randonnée mais aussi d’histoire et de bons plats et vins, nos arrêts ont entre autres été le Lake District, London, Buxton mais aussi Bruges et Vienne. En mars 2020, une petite semaine après que Sébastien ait quitté l’Ile de Man pour la Belgique, c’est le choc… Les frontières se ferment du jour au lendemain avec l’arrivée d’une pandémie qui nous conduira à commencer un chapitre virtuel. Heureusement, les technologies modernes nous ont permis de continuer à nous « voir ». Au mois d’août 2020, Henry prend une décision radicale. Les frontières de l’Ile de Man restant fermées, il quitte son travail et prend un aller simple pour la Belgique. Commence alors une découverte de la Belgique avec ses bières, ses vignes, ses villes, ses plages et ses Ardennes parfois enneigées. L’aventure se poursuit en avril 2021. Sébastien emmène Henry pour un séjour au bord des canaux des Bruges. Après une journée d’énigmes diverses, c’est le moment de la demande et du partage des émotions avec nos familles.  Lors de notre séjour sur l’Ile Man durant l’été 2021, nous décidons que c’est sur ce rocher où nous pouvons voir 7 royaumes que notre mariage sera célébré en 2023. Avant de célébrer ce nouveau chapitre, nous entamons un autre gros chantier à l’automne 2021 avec la rénovation entière de notre lieu de vie. Durant ces 12 mois de travaux, nous partagerons notre vie quotidienne entre une colocation à Bruxelles et la maison des parents de Sébastien, sans oublier une semaine de vacances au Danemark et 4 semaines sur la Costa Brava. Nous sommes maintenant prêts à fêter avec vous cette nouvelle étape qui comme à l’image de notre vie rassemblera notre amour de l’histoire, des produits locaux et du voyage. Nous avons hâte de partager ce moment avec vous."
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
