window.homeBaseResources = {
  rightsCategories: [
    {
      id: "financial",
      title: "Financial Support",
      icon: "money",
      status: "Eligible",
      category: "Money and grants",
      summary:
        "Stipends, grants, discounts, and financial aid that may help with daily expenses during service.",
      primaryUrl: "https://www.kolzchut.org.il/he/%D7%97%D7%99%D7%99%D7%9C%D7%99%D7%9D_%D7%91%D7%95%D7%93%D7%93%D7%99%D7%9D",
      contactLabel: "Read Financial Rights",
      rights: [
        {
          name: "Monthly financial assistance",
          source: "IDF / Kol Zchut",
          description:
            "Lone soldiers may be eligible for financial support through IDF welfare channels and related public rights programs.",
        },
        {
          name: "Grants and discounts",
          source: "Kol Zchut",
          description:
            "Kol Zchut gathers Hebrew information about benefits, grants, and eligibility rules for lone soldiers.",
        },
        {
          name: "Eligibility guidance",
          source: "Mahal",
          description:
            "Volunteers from abroad may need to verify their exact recognition status before relying on lone soldier benefits.",
        },
      ],
      sources: ["IDF", "Kol Zchut", "Mahal"],
    },
    {
      id: "housing",
      title: "Housing Assistance",
      icon: "house",
      status: "Action Required",
      category: "Housing and living",
      summary:
        "Rent help, soldier housing, living arrangements, and support for soldiers without family housing in Israel.",
      primaryUrl: "https://www.kolzchut.org.il/he/%D7%97%D7%99%D7%99%D7%9C%D7%99%D7%9D_%D7%91%D7%95%D7%93%D7%93%D7%99%D7%9D",
      contactLabel: "Read Housing Rights",
      rights: [
        {
          name: "Housing assistance",
          source: "IDF / Kol Zchut",
          description:
            "Official and public rights sources describe housing help for recognized lone soldiers, including support connected to rent or approved housing frameworks.",
        },
        {
          name: "Community housing guidance",
          source: "Lone Soldier Center",
          description:
            "Support organizations can help soldiers understand housing options, emergency needs, and everyday living questions.",
        },
        {
          name: "Pre-service support frameworks",
          source: "Garin Tzabar / Naale",
          description:
            "Programs for young people from abroad may provide community or preparation support before IDF service.",
        },
      ],
      sources: ["IDF", "Kol Zchut", "Lone Soldier Center", "Garin Tzabar", "Naale"],
    },
    {
      id: "food",
      title: "Food Benefits",
      icon: "food",
      status: "Active",
      category: "Daily needs",
      summary:
        "Food assistance, shopping benefits, and daily support connected to IDF welfare or rights eligibility.",
      primaryUrl: "https://www.idf.il/",
      contactLabel: "Read Food Benefit Info",
      rights: [
        {
          name: "Food benefits",
          source: "IDF",
          description:
            "The IDF may provide food-related support to eligible lone soldiers through welfare and service channels.",
        },
        {
          name: "Benefit overview",
          source: "Kol Zchut",
          description:
            "Kol Zchut can help users find Hebrew explanations of benefits and eligibility information.",
        },
        {
          name: "Community meals and events",
          source: "Lone Soldier Center / Ach Gadol",
          description:
            "Support organizations often connect soldiers with community events, meals, and practical help.",
        },
      ],
      sources: ["IDF", "Kol Zchut", "Lone Soldier Center", "Ach Gadol"],
    },
    {
      id: "flights",
      title: "Flights Home",
      icon: "plane",
      status: "Check Eligibility",
      category: "Family abroad",
      summary:
        "Flight-related support for eligible soldiers whose family lives outside Israel, depending on recognition and service status.",
      primaryUrl: "https://www.idf.il/",
      contactLabel: "Check Flight Rights",
      rights: [
        {
          name: "Flights home",
          source: "IDF",
          description:
            "Official IDF lone soldier rights include guidance around visiting family abroad and related eligibility.",
        },
        {
          name: "Volunteer status questions",
          source: "Mahal",
          description:
            "Mahal volunteers should verify whether their service status qualifies them for lone soldier flight support.",
        },
        {
          name: "Rights explanation in Hebrew",
          source: "Kol Zchut",
          description:
            "Kol Zchut provides Hebrew rights information that can help users understand benefit rules and required conditions.",
        },
      ],
      sources: ["IDF", "Kol Zchut", "Mahal"],
    },
    {
      id: "vacation",
      title: "Special Vacation Days",
      icon: "calendar",
      status: "Eligible",
      category: "Time off",
      summary:
        "Special leave and vacation days for lone soldiers, including family visits, emergencies, and personal needs.",
      primaryUrl: "https://www.idf.il/",
      contactLabel: "Read Vacation Rights",
      rights: [
        {
          name: "Special vacation days",
          source: "IDF",
          description:
            "Official rights can include additional vacation or leave arrangements for recognized lone soldiers.",
        },
        {
          name: "Eligibility and conditions",
          source: "Kol Zchut",
          description:
            "Kol Zchut organizes Hebrew eligibility notes and general rights information for lone soldiers.",
        },
        {
          name: "Service guidance",
          source: "Ach Gadol",
          description:
            "Mentors can help soldiers understand how to ask questions and navigate service bureaucracy.",
        },
      ],
      sources: ["IDF", "Kol Zchut", "Ach Gadol"],
    },
    {
      id: "mental",
      title: "Mental and Welfare Support",
      icon: "heart",
      status: "Available",
      category: "Wellbeing",
      summary:
        "Emotional support, mentorship, welfare office help, community guidance, and support for soldiers without family nearby.",
      primaryUrl: "https://achgadol.org/",
      contactLabel: "Find Support",
      rights: [
        {
          name: "Welfare office support",
          source: "IDF",
          description:
            "Lone soldiers can seek help through IDF welfare channels for personal, financial, and service-related needs.",
        },
        {
          name: "Mentorship and personal support",
          source: "Ach Gadol",
          description:
            "Ach Gadol connects lone soldiers with mentors and a community that understands the IDF experience.",
        },
        {
          name: "Community and guidance",
          source: "Lone Soldier Center / SELAH",
          description:
            "Support organizations provide guidance, community connection, and help for young people without close family support in Israel.",
        },
      ],
      sources: ["IDF", "Ach Gadol", "Lone Soldier Center", "SELAH"],
    },
  ],
  rightsSources: [
    {
      title: "IDF Lone Soldier Rights",
      category: "Official Rights",
      source: "IDF",
      icon: "rights",
      summary:
        "Official IDF information for lone soldiers, including financial support, housing help, special vacation days, flights home, food benefits, and welfare office support.",
      url: "https://www.idf.il/",
      cta: "Read More on IDF Website",
    },
    {
      title: "Kol Zchut - Lone Soldiers",
      category: "Rights Hub",
      source: "Kol Zchut",
      icon: "money",
      summary:
        "A Hebrew rights information hub that gathers benefits, grants, housing assistance, eligibility notes, and general rights guidance for lone soldiers.",
      url: "https://www.kolzchut.org.il/he/חיילים_בודדים",
      cta: "Read More on Kol Zchut",
    },
    {
      title: "Mahal Program",
      category: "Service Program",
      source: "Mahal",
      icon: "plane",
      summary:
        "Mahal supports volunteers from abroad who serve in the IDF. Depending on status and recognition, participants may be eligible for lone soldier rights.",
      url: "https://www.mahal.org.il/",
      cta: "Visit Mahal Website",
    },
  ],
  organizationSources: [
    {
      title: "Garin Tzabar",
      category: "Pre-Service Support",
      source: "Garin Tzabar",
      icon: "community",
      summary:
        "Supports young Jews from abroad who come to Israel and serve in the IDF as lone soldiers, with preparation, community, and absorption support.",
      url: "https://www.garintzabar.org/",
      cta: "Visit Garin Tzabar",
    },
    {
      title: "Naale Program",
      category: "Youth Program",
      source: "Naale Elite Academy",
      icon: "house",
      summary:
        "A program for Jewish youth from abroad who study in Israel. Some graduates may later serve in the IDF as lone soldiers.",
      url: "https://www.naale-elite-academy.com/",
      cta: "Visit Naale Website",
    },
    {
      title: "Lone Soldier Center",
      category: "Lone Soldier Support",
      source: "Lone Soldier Center",
      icon: "heart",
      summary:
        "Provides support services, community connection, housing guidance, events, emergency help, and practical guidance for lone soldiers.",
      url: "https://lonesoldiercenter.com/",
      cta: "Visit Lone Soldier Center",
    },
    {
      title: "Ach Gadol",
      category: "Mentorship",
      source: "Ach Gadol",
      icon: "community",
      summary:
        "Connects lone soldiers with mentors and community support for personal guidance, service questions, and everyday life in Israel.",
      url: "https://achgadol.org/",
      cta: "Visit Ach Gadol",
    },
    {
      title: "SELA / SELAH",
      category: "Immigrant Support",
      source: "SELAH",
      icon: "heart",
      summary:
        "Offers support for new immigrants and young people in Israel who are navigating life without close family support nearby.",
      url: "https://selah.org.il/",
      cta: "Visit SELA Website",
    },
  ],
};
