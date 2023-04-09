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
      "Our story text": "On June 7, 2019, the flag was lowered on the starting line of our joint adventure during a TT party at Villa Marina ... During the first months, we met in various places on our travels between Belgium and the Isle of Man. Lovers of nature, hiking but also of history and good food and wine, our stops were among others the Lake District, London, Buxton but also Bruges and Vienna. In March 2020, one week after Sébastien left the Isle of Man for Belgium, it was a shock... The borders closed with the arrival of a pandemic that would lead us to start a virtual chapter. Fortunately, modern technology allowed us to continue to 'see' each other. In August 2020, Henry makes a radical decision. With the borders of the Isle of Man remaining closed, he leaves his job and takes a one-way ticket to Belgium. This was the beginning of a discovery of Belgian tastes with its beers, its vineyards, its cities, its beaches, and its Ardennes sometimes covered with snow. In April 2021, the adventure continues. Sebastien takes Henry for a stay alongside the canals of Bruges. After a day of various enigmas, it is the moment of the proposal and the sharing of the emotions with our families. During our stay on the Isle of Man in the summer of 2021, we decide that it is on this rock where we can see 7 kingdoms that our wedding will be celebrated in 2023. Before celebrating this new chapter, we managed another big project starting in the fall of 2021, the renovation of our home. During these 12 months of work, we have shared our daily life between a flat share in Brussels and Sebastien's parents house, without forgetting a weeks of vacation in Denmark and 4 weeks on the Costa Brava. We are now ready to celebrate with you this new step which, like our life, will gather our love of history, local products, and travel. We look forward to sharing this moment with you.",
      "Itinery": "Itinery",
      "Theme": "The theme of our wedding will be around 'Travel'. As such we would like to share a trip with you to mark our marriage:",
      "Ceremony" : "Ceremony",
      "Ceremony1": "Ceremony will take place at Castle Rushen. Please arrive for 2.30PM",
      "Ceremony2": "The dress code will be smart casual",
      "Ceremony3": "After the ceremony there will be time for some drinks and some photos in the Castle Gardens",
      "Train Ride": "Train Ride",
      "Train Ride1": "We will the aim to catch the 4.37 train from Castletown to Port Erin. We have resevered carriges on the train, but it will not wait for us!",
      "Train Ride2": "There will be a bus to shuttle people from the Castle to the Station, but you are weclome to drive.",
      "Reception": "Reception",
      "Reception1": "The start time for the recption 5.30pm at",
      "Reception2": "We will start with some welcome drinks (the iconic FV Fizz) and some Manx tapas (coutersy of",
      "Reception3": "The planned start time for the speeches is: 6.30pm",
      "Reception4": "Afterwards there will be a buffet (again thanks to Wild Thyme) before cake cutting and dancing!",
      "Reception5": "The evening will be a free bar, excluding shots and cocktails, but you are more than welcome to buy these yourself",
      "Wedding Gift List": "Wedding Gift List",
      "Wedding Gift List1": "Your presence at our wedding is more important to us than a gift, however if you would like to help contribute some money towards our honeymoon, this would really make our day!",
      "Wedding Gift List2": "Our honeymoon account is:",
      "Name": "Name",
      "Wedding Gift List3": "There will also be the oportunity to make a donation at the reception.",
      "Wedding Gift List4": "Suggested note: Wedding Gift"
    }
  },
  fr: {
    translation: {
      "Introduction": "Rejoignez-nous pour célébrer",
      "Our Story": "Notre histoire",
      "Our story text": "Le 7 juin 2019, le drapeau s’est abaissé sur la ligne de départ de notre aventure commune lors d’une soirée à la Villa Marina durant le TT …  Pour commencer, durant les premiers mois, nous nous sommes retrouvés dans divers endroits sur notre ligne de voyage entre la Belgique et l’Ile de Man. Amoureux de nature, de randonnée mais aussi d’histoire et de bons plats et vins, nos arrêts ont entre autres été le Lake District, London, Buxton mais aussi Bruges et Vienne. En mars 2020, une petite semaine après que Sébastien ait quitté l’Ile de Man pour la Belgique, c’est le choc… Les frontières se ferment du jour au lendemain avec l’arrivée d’une pandémie qui nous conduira à commencer un chapitre virtuel. Heureusement, les technologies modernes nous ont permis de continuer à nous « voir ». Au mois d’août 2020, Henry prend une décision radicale. Les frontières de l’Ile de Man restant fermées, il quitte son travail et prend un aller simple pour la Belgique. Commence alors une découverte de la Belgique avec ses bières, ses vignes, ses villes, ses plages et ses Ardennes parfois enneigées. L’aventure se poursuit en avril 2021. Sébastien emmène Henry pour un séjour au bord des canaux des Bruges. Après une journée d’énigmes diverses, c’est le moment de la demande et du partage des émotions avec nos familles.  Lors de notre séjour sur l’Ile Man durant l’été 2021, nous décidons que c’est sur ce rocher où nous pouvons voir 7 royaumes que notre mariage sera célébré en 2023. Avant de célébrer ce nouveau chapitre, nous entamons un autre gros chantier à l’automne 2021 avec la rénovation entière de notre lieu de vie. Durant ces 12 mois de travaux, nous partagerons notre vie quotidienne entre une colocation à Bruxelles et la maison des parents de Sébastien, sans oublier une semaine de vacances au Danemark et 4 semaines sur la Costa Brava. Nous sommes maintenant prêts à fêter avec vous cette nouvelle étape qui comme à l’image de notre vie rassemblera notre amour de l’histoire, des produits locaux et du voyage. Nous avons hâte de partager ce moment avec vous.",
      "Itinery": "Itinéraire",
      "Theme": "Le thème de notre mariage sera le voyage. C'est pourquoi nous aimerions en partager un avec vous pour marquer ce jour spécial :",
      "Ceremony" : "Cérémonie",
      "Ceremony1": "La cérémonie se déroulera à Castle Rushen. Nous vous attendons pour 14h30.",
      "Ceremony2": "Le code vestimentaire sera smart casual.",
      "Ceremony3": "Après la cérémonie, un apéritif sera offert et des photos seront prises dans les jardins du château (grâce à Just Lee Photography).",
      "Train Ride": "Voyage en train",
      "Train Ride1": "Nous prendrons le train de 16h37 de Castletown à Port Erin. Nous avons réservé des tickets pour ce train, mais il ne nous attendra pas !",
      "Train Ride2": "Un bus fera la navette entre le château et la gare, mais vous pouvez aussi conduire si vous préférez.",
      "Reception": "Réception",
      "Reception1": "L'heure de début de la réception est fixée à 17h30 au",
      "Reception2": "Nous commencerons par une drink de bienvenue (l'emblématique FV Fizz) et des tapas mannoises (grâce à",
      "Reception3": "Nous poursuivrons avec les discours à 6h30.",
      "Reception4": "Il y aura ensuite un buffet chaud et froid (toujours grâce à Wild Thyme) avant la découpe du gâteau et le dancefloor !",
      "Reception5": "Un bar gratuit pour toute la soirée, à l'exclusion des shots et des cocktails. Vous pouvez cependant en acheter vous-même si vous le souhaitez.",
      "Wedding Gift List": "Liste de mariage",
      "Wedding Gift List1": "Votre présence à notre mariage est plus importante pour nous qu'un cadeau, mais si vous souhaitez contribuer à nos futurs voyages, cela nous ferait vraiment plaisir !",
      "Wedding Gift List2": "Notre compte est :",
      "Name": "Nom :",
      "Wedding Gift List3": "Il sera également possible de faire un don lors de la réception.",
      "Wedding Gift List4": "Suggestion de communication : Cadeau de mariage"
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
