import type { FaqItem } from "./types";

export const homeContent = {
  heroTagline: "The most favorite places with",
  heroTitle: "13 Suns Tour",
  heroImage: "/images/tours/Ethiopia-Starling-PietVandenEynde_062.jpg",
  intro:
    "13 Suns Tours is an experienced tour and travel company established in 2000 in order to serve the East Africa market, in particular Ethiopia. Early on we realized the immense value of internet-based communication with our customers, who are found in all corners of the world.",
  ctaTitle: "Let's start your journey!",
};

export const aboutContent = {
  heroImage: "/images/tours/Alleyway-at-Jugol.jpg",
  heroImageAlt: "Narrow alleyway of the ancient city of Jugol, Harar, Ethiopia",
  intro: [
    "The company is named after the thirteen months of sunshine the country enjoys. Ethiopia is one of the few countries of the world which possesses its own calendar.",
    "The Ethiopian calendar is composed of twelve months, having thirty days each, and a final month called “Pagume”, with 5 or 6 days to compensate for the deficit. The calendar counts its new year from September and is behind the Gregorian calendar by 7 or 8 years.",
  ],
  managementTitle: "The Management",
  management: [
    "13 Suns Tours is managed by a board of six members, all of whom are professionals and experienced in the field of tourism. The staff possesses practical knowledge in tour operations, which enables them to communicate with customers, design attractive tour programs at a reasonable price, and organize the whole tour process. They are also trained in professional guiding and have sufficient field experience. They speak English, French & Italian. There are also part-time staff who speak German and Spanish. They have all worked with tourists in different parts of Ethiopia, so they know how to handle their clients.",
    "Our drivers can communicate in English. They have sufficient field training to enable them to be both drivers and guides, and are preferred by tourists who want a driver-guide. When they drive our land cruisers and buses, their experience can be noticed within a few hours of driving. While camping, we have cooks who will serve you hotel-standard meals, both local and European. We say “come to Ethiopia!” — we can assure you of quality service. In the hands of our staff, you are just “home away from home!”",
  ],
  images: [
    { src: "/images/tours/Alleyway-at-Jugol.jpg", alt: "Narrow alleyway of the ancient city of Jugol, Harar, Ethiopia" },
    { src: "/images/tours/Arbore-girl.jpg", alt: "Young woman from the Arbore tribe, Ethiopia" },
  ],
  trustBadges: [
    { src: "/images/site/ethiopiantourassociation.jpg", alt: "Ethiopian Tour Operators Association member" },
    { src: "/images/site/TourInvestCertificate.jpg", alt: "Ethiopian Tourism Investment Certificate" },
  ],
};

export const contactContent = {
  heroTitle: "Contact Us",
  intro: "Don't hesitate to get in touch — we give you the best of us.",
  offices: [
    {
      country: "Ethiopia",
      lines: [
        "Cameroon St., Bole Medhanialem",
        "New Bright Tower, Office No. 602",
        "Addis Ababa, Ethiopia",
      ],
      phone: "+251 11 662 6071",
      mobile: "+251 91 152 8878",
      fax: "+251 11 662 606",
    },
    {
      country: "U.S.A",
      lines: ["Dallas, Texas, USA"],
    },
  ],
  email: "info@13suns.com",
};

export const faqItems: FaqItem[] = [
  {
    question: "When and how much should I tip the guide?",
    answer:
      "This is one of the many questions raised by visitors. We encourage visitors to tip the assigned guide when they feel satisfied with the guiding service they received. The amount to give depends on your level of satisfaction, so there is no simple fixed calculation for what to give the guide.",
  },
  {
    question: "How many days are needed to visit the Omo Valley tribes?",
    answer:
      "You need at least 9 days for a fair visit of the tribes and their colorful tribal markets. In designing itineraries for the lower Omo Valley, we purposely follow the market days of the Omo Valley tribes, since the markets are the best places to photograph the tribes' colorful costumes, body paintings, hairstyles, jewels and local products.",
  },
  {
    question: "When is the best time to visit the Omo Valley tribes?",
    answer:
      "May is not a good season to travel to the southern part of Ethiopia, where road conditions are poor. April, May and June are the main rainy season for the lower Omo Valley region, making the already poor dirt roads muddy and rivers flooded. Outside of that period, you can make the trip on any given day.",
  },
  {
    question: "When is the best time to visit the Danakil Depression?",
    answer:
      "Visitors are strongly advised to plan their trip during the cool months between December and February. The closer your travel dates are to February, the more bearable the temperatures — the further out, the more the heat soars.",
  },
  {
    question: "Is the Danakil Depression a safe place to visit?",
    answer:
      "Yes, it is safe. The Afar region's Culture and Tourism ministry enforces a mandatory police escort policy. Military personnel accompany visitors during their entire trip, with at least 2–3 policemen or militia assigned per visiting group, depending on group size.",
  },
  {
    question: "Are SWIFT and IBAN codes the same?",
    answer:
      "A SWIFT code (more correctly a BIC) is a formatted identifier used by banks sending or receiving messages within the SWIFT network, containing a country code and unique institution identifier (8 or 11 digits). The IBAN, by contrast, identifies an individual account holder — it includes the account number, sort code, country code and check digits, and is calculated by the account-holding bank. In short: the BIC identifies the bank, while the IBAN identifies your account with that bank.",
  },
];

export const visaContent = {
  heroTitle: "Visa & Passport",
  sections: [
    {
      heading: "Visas",
      paragraphs: [
        "Citizens of 36 countries can now get visas on arrival. Visitors from other countries should obtain visas from the Ethiopian Embassy in their country of residence. If there is no Ethiopian Embassy, arrangements can be made through tour operators to obtain one on arrival at the airport.",
      ],
    },
    {
      heading: "List of Tourist-Generating Countries",
      paragraphs: [
        "The following tourist-generating countries are eligible to obtain a tourist visa on arrival at Bole International Airport:",
      ],
      list: [
        "Argentina", "Australia", "Austria", "Belgium", "Brazil", "Canada", "Czech Republic",
        "Denmark", "Finland", "France", "Germany", "Greece", "India", "Ireland", "Israel",
        "Italy", "Japan", "Republic of Korea", "Kuwait", "Luxembourg", "Mexico", "Netherlands",
        "New Zealand", "Norway", "North Korea", "Poland", "Portugal", "Russian Federation",
        "Slovakia", "South Africa", "Spain", "Sweden", "Switzerland", "Thailand",
        "United Kingdom", "United States",
      ],
    },
    {
      heading: "Tourist Visa at Bole International Airport",
      paragraphs: [
        "Tourist visas can be issued on arrival at Bole International Airport if one of the following two conditions is true: foreign nationals coming from countries where there is no Ethiopian Mission, or foreign nationals coming from internationally recognized tourist-generating countries. About 36 countries are listed by Ethiopia as tourist-generating countries. Applicants should be permanent residents of these countries and can apply for a single or multiple-entry tourist visa valid for 1 month, for a fee of $50.00 USD per visa.",
      ],
    },
    {
      heading: "Business Visa by Ethiopian Missions",
      paragraphs: ["This type of visa is issued through Ethiopian diplomatic missions abroad."],
    },
  ],
};

export const transportationContent = {
  heroTitle: "Transportation",
  sections: [
    {
      heading: "Flights",
      paragraphs: [
        "You may use flights both when entering Ethiopia and while touring within the country. The northern and eastern tourist circuits have standard airports, so it is possible to make your tour fully — or almost fully — by flight. Making a tour fully by flight is not possible for the southern route, but it is possible to make your southern tour a mix of both.",
      ],
    },
    {
      heading: "Surface",
      paragraphs: [
        "New trans-regional roads are being built and old ones rehabilitated, so Ethiopian road conditions are much improved, except in some parts of the southern circuits, which make four-wheel-drive land cruisers mandatory. The North and East are accessible both by bus and land cruiser — one of the reasons Ethiopian tourist destinations can be a bit expensive. Mini-buses are most often used for city tours and short-distance destinations from the capital or major towns.",
      ],
    },
    {
      heading: "Rail",
      paragraphs: [
        "A rail road extends from central Ethiopia to the eastern part of the country (Harar) and continues to Djibouti. At present the trains are very old, so tourists tend not to use them as a means of transportation, though this might change as the government makes improvements.",
      ],
    },
    {
      heading: "Water Transport",
      paragraphs: [
        "While visiting the islands on Lake Tana, or crossing to other regions of the country via Lake Tana, boats are used. On other lakes and rivers of the country, you may use boats for sightseeing, recreation, or rafting.",
      ],
    },
  ],
};

export const accommodationContent = {
  heroTitle: "Accommodation",
  intro:
    "Hotel accommodation is an important component of tourism, and Ethiopia has hotels of varying standards across its different regions. Our expectations of Ethiopian hotel standards have to be reconciled with the present economic standard of the country as a whole.",
  regions: [
    {
      heading: "The Capital",
      paragraphs: [
        "The capital of Ethiopia (Addis Ababa) has hotels ranging from two stars up to five stars. The Sheraton Addis is one good example of a high-standard luxury collection hotel — the first of its kind on the continent of Africa. There are also a Hilton Hotel, InterContinental Hotel and Radisson Blu business hotel, all of which can be categorized as five-star hotels.",
      ],
    },
    {
      heading: "The North",
      paragraphs: [
        "In this part of the country you find hotels of varying standards, from tourist class up to cheap hotels. In some parts of the north, like the Semien Mountains area, if you intend to trek you should prepare to camp — many tourists find camping there a very exciting experience, and good-quality camping equipment is available.",
      ],
    },
    {
      heading: "The South",
      paragraphs: [
        "Tourist-standard hotels are fewer in this region — you will do more camping, especially as you go further into the Omo Valley. Most hotels are two stars or less, and in some (limited to some rooms) you may need to use a common shower, though this only happens in the very high season. Camping sites and lodges are a mix of standard and basic.",
      ],
    },
  ],
  orientation: {
    heading: "Orientation",
    paragraphs: [
      "From experience we have learned that there are three categories of tourists that come to Ethiopia. The first are those who measure Ethiopian hotels absolutely by European standards — having forgotten the country's present economic realities, they are usually disappointed.",
      "The second group are tourists who have traveled widely and come with accurate expectations — they usually rate Ethiopian hotels as relatively good.",
      "The third group think Ethiopia is almost a desert with very few low-standard hotels, if any at all. They come with great fears and unnecessary preparation, and are usually pleasantly surprised by the standard they find.",
      "For anyone content with moderate comfort, finding accommodation in Ethiopia is not a concern. Genuine tourist-class hotels are restricted to major tourist towns, but even by African standards, accommodation at all levels is not expensive. Ethiopian hotels can be roughly separated into four categories, with categorization somewhat relative to each city.",
    ],
  },
  categories: [
    {
      heading: "European Standard Hotels",
      paragraphs: [
        "These hotels generally fulfill a good European hotel standard, but are very few in number and limited to the capital city. For example, the Sheraton Addis, located in the capital, is rated number one in Africa.",
      ],
    },
    {
      heading: "Tourist Class Hotels",
      paragraphs: [
        "Hotels in this category are partially government-owned, alongside a good number of privately-owned hotels. They exist for tourists and are generally used by tour companies in Ethiopia and Europe for their clients — comfortable rooms, hot showers, satellite TV, and restaurants serving western food. If you're simply looking for the best available accommodation, this category fits well.",
        "There are two government chain hotels and a private chain hotel in this category, distributed evenly across Ethiopia's tourist routes to avoid redundancy. The Ras hotel chain controls the southeastern part of Ethiopia, with properties in Debre Zeit, Nazareth, Dire Dawa, Harar, Awash National Park (a lodge), Asela and Goba.",
        "In the South, the Wabi Shebele government chain hotel (currently privately owned) and the Bekele Molla privately-owned chain dominate. Wabi Shebele has branches in Langano, Awassa, Wendo Genet and Goba; Bekele Molla has branches in Debre Zeit, Modjo, Nazareth, Ziway, Shashemene, Moyale, Langano, Arba Minch and Robe. In the West, Ethiopia hotel chains dominate, with branches in Ambo, Nekemte, Gambella, Jimma and Woliso.",
      ],
    },
    {
      heading: "Medium Range Hotels",
      paragraphs: [
        "If your priority is keeping down accommodation costs while maintaining a reasonable level of comfort, these mostly privately-owned hotels are clean and comfortable, with hot showers, TV in most rooms, and good restaurants with English-speaking staff.",
      ],
    },
    {
      heading: "Cheap Hotels",
      paragraphs: [
        "Use these hotels only if you are on a limited budget. They generally have clean rooms with cold and sometimes hot showers. Regional variations are inevitable — some hotels in some towns can be grouped under medium-range hotels, and in other towns under the cheap hotel category, so do not expect a clear demarcation.",
      ],
    },
  ],
};
