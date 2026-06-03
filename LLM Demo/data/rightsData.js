window.homeBaseRightsData = {
  categories: [
    {
      id: "financial",
      title: "Financial Support",
      icon: "money",
      description: "Money-related benefits that can help with daily expenses, salary, and urgent needs.",
    },
    {
      id: "housing",
      title: "Housing Assistance",
      icon: "house",
      description: "Rent support, soldier housing options, and emergency places to stay.",
    },
    {
      id: "food",
      title: "Food Benefits",
      icon: "food",
      description: "Food support, vouchers, meals, and help covering basic supplies.",
    },
    {
      id: "flights",
      title: "Flights Home",
      icon: "plane",
      description: "Information about visiting family abroad and checking flight-related eligibility.",
    },
    {
      id: "vacation",
      title: "Special Vacation Days",
      icon: "calendar",
      description: "Extra leave options for family visits, emergencies, and personal needs.",
    },
    {
      id: "mental",
      title: "Mental Support",
      icon: "heart",
      description: "Emotional help, peer support, counseling direction, and community care.",
    },
    {
      id: "welfare",
      title: "IDF Welfare Support",
      icon: "rights",
      description: "How to work with IDF welfare channels and request help through your unit.",
    },
    {
      id: "organizations",
      title: "Support Organizations",
      icon: "org",
      description: "Trusted external groups that guide, mentor, host, and support lone soldiers.",
    },
  ],
  rights: [
    {
      id: "monthly-financial-assistance",
      category: "financial",
      title: "Monthly Financial Assistance",
      shortDescription: "Regular financial help for recognized lone soldiers who need support with daily living costs.",
      fullDescription:
        "Recognized lone soldiers may be eligible for financial assistance connected to their service status and personal situation. This support is meant to reduce pressure around basic living expenses while serving far from immediate family support. Exact amounts, eligibility rules, and approval steps can change, so the official source should always be checked before relying on the benefit.",
      eligibility:
        "Usually relevant for soldiers who are officially recognized as lone soldiers by the IDF. Eligibility can depend on service status, personal circumstances, and approval by the welfare office.",
      howToApply:
        "Speak with your mashakit tash or unit welfare representative. Ask what forms are required, submit your personal details and supporting documents, and follow up until the request is approved or explained.",
      requiredDocuments: ["Lone soldier recognition", "ID or army ID", "Bank account details", "Any forms requested by the welfare office"],
      importantNotes: [
        "Do not assume eligibility until your IDF status is confirmed.",
        "Keep copies of every submitted form.",
        "Ask for help early if your financial situation changes.",
      ],
      sourceName: "IDF / Kol Zchut",
      sourceUrl: "https://www.kolzchut.org.il/he/%D7%97%D7%99%D7%99%D7%9C%D7%99%D7%9D_%D7%91%D7%95%D7%93%D7%93%D7%99%D7%9D",
      keywords: ["money", "financial", "monthly", "grant", "salary", "bank", "welfare", "kol zchut", "idf"],
    },
    {
      id: "special-grants",
      category: "financial",
      title: "Special Grants",
      shortDescription: "One-time or special financial help for urgent needs, transitions, or unusual expenses.",
      fullDescription:
        "Some lone soldiers may need extra help beyond regular support, especially during emergencies, transitions, housing problems, or sudden personal expenses. Special grants are usually reviewed case by case. The most important step is explaining the need clearly and providing documents that show the situation.",
      eligibility:
        "May apply to recognized lone soldiers with a documented financial or personal need. Approval depends on the specific grant rules and the welfare review.",
      howToApply:
        "Contact your mashakit tash, explain the need, ask which grant category fits your situation, and submit the requested documents. If the request is urgent, say that clearly.",
      requiredDocuments: ["Written explanation of need", "Receipts or price estimates if relevant", "Bank details", "Supporting welfare forms"],
      importantNotes: [
        "Special grants are not automatic.",
        "Clear documents make the request easier to understand.",
        "If denied, ask what is missing or whether another support path exists.",
      ],
      sourceName: "Kol Zchut",
      sourceUrl: "https://www.kolzchut.org.il/he/%D7%97%D7%99%D7%99%D7%9C%D7%99%D7%9D_%D7%91%D7%95%D7%93%D7%93%D7%99%D7%9D",
      keywords: ["special grant", "emergency money", "financial aid", "urgent", "kol zchut"],
    },
    {
      id: "salary-additions",
      category: "financial",
      title: "Salary Additions",
      shortDescription: "Possible additions or adjustments connected to lone soldier recognition and service conditions.",
      fullDescription:
        "A lone soldier may receive salary-related additions or financial adjustments depending on official recognition and current IDF rules. These additions are meant to reflect the extra responsibility of serving without nearby family support. Users should verify the current rules through the IDF or a rights source before making financial plans.",
      eligibility:
        "Relevant to soldiers who are recognized by the IDF as lone soldiers and meet current service and benefit conditions.",
      howToApply:
        "Ask your unit welfare representative to check your recognition status and salary benefits. If something looks missing, request a review and keep a record of the request.",
      requiredDocuments: ["Army ID", "Recognition status confirmation", "Bank account information if requested"],
      importantNotes: [
        "Check your salary regularly.",
        "Report missing payments quickly.",
        "Rules may differ by status and service situation.",
      ],
      sourceName: "IDF",
      sourceUrl: "https://www.idf.il/",
      keywords: ["salary", "addition", "payment", "financial", "idf", "recognition"],
    },
    {
      id: "rent-assistance",
      category: "housing",
      title: "Rent Assistance",
      shortDescription: "Help with rent or living costs for eligible soldiers living independently.",
      fullDescription:
        "Rent assistance can help recognized lone soldiers cover housing costs when they do not live with family in Israel. This kind of support usually requires proof of housing and may depend on current IDF rules. The goal is to make independent living more stable during service.",
      eligibility:
        "Usually for recognized lone soldiers who live independently or in an approved housing arrangement. Exact eligibility depends on IDF rules and the soldier's documents.",
      howToApply:
        "Tell your mashakit tash where you live, ask which rent assistance path fits you, and submit a rental contract or other housing proof if requested.",
      requiredDocuments: ["Rental contract", "Landlord details if requested", "ID or army ID", "Bank details", "Recognition status"],
      importantNotes: [
        "A valid rental contract is often important.",
        "Report address changes quickly.",
        "Ask before signing if you are unsure whether the housing qualifies.",
      ],
      sourceName: "Kol Zchut",
      sourceUrl: "https://www.kolzchut.org.il/he/%D7%97%D7%99%D7%99%D7%9C%D7%99%D7%9D_%D7%91%D7%95%D7%93%D7%93%D7%99%D7%9D",
      keywords: ["rent", "housing", "apartment", "contract", "landlord", "kol zchut"],
    },
    {
      id: "soldier-homes",
      category: "housing",
      title: "Soldier Homes",
      shortDescription: "Housing frameworks or homes that may support soldiers who need a stable place to stay.",
      fullDescription:
        "Some lone soldiers may be connected to soldier homes, community homes, or other supportive living frameworks. These options can provide stability, community, and help with daily needs. Availability depends on location, space, and the organization or IDF framework involved.",
      eligibility:
        "May be relevant for lone soldiers who need stable housing or cannot rely on family housing in Israel. Each framework may have its own rules.",
      howToApply:
        "Ask the welfare office or a support organization about nearby housing options. Explain your current living situation and whether the need is urgent.",
      requiredDocuments: ["ID or army ID", "Recognition status", "Current address or housing explanation", "Emergency details if relevant"],
      importantNotes: [
        "Availability can change quickly.",
        "Ask about location, rules, meals, and transportation before choosing a place.",
        "Support organizations may help you understand options.",
      ],
      sourceName: "Lone Soldier Center",
      sourceUrl: "https://lonesoldiercenter.com/",
      keywords: ["soldier home", "home", "housing", "community", "lone soldier center"],
    },
    {
      id: "kibbutz-housing",
      category: "housing",
      title: "Kibbutz Housing",
      shortDescription: "Community-based housing option that may fit some lone soldiers during service.",
      fullDescription:
        "Some lone soldiers live in community-based frameworks such as kibbutz housing. This can provide a calmer environment, community connection, and practical support. It is important to verify the arrangement, costs, transportation, and whether it fits the soldier's unit schedule.",
      eligibility:
        "May apply to lone soldiers who are accepted into a relevant housing framework and meet the program or IDF requirements.",
      howToApply:
        "Ask your welfare representative or a support organization about available community housing. Contact the program, check the conditions, and gather any required approval.",
      requiredDocuments: ["ID or army ID", "Recognition status", "Program acceptance if relevant", "Housing forms requested by the program"],
      importantNotes: [
        "Check travel time to base.",
        "Ask what expenses are covered.",
        "Make sure the arrangement is officially accepted before relying on it.",
      ],
      sourceName: "Garin Tzabar",
      sourceUrl: "https://www.garintzabar.org/",
      keywords: ["kibbutz", "housing", "community", "garin tzabar", "program"],
    },
    {
      id: "emergency-housing",
      category: "housing",
      title: "Emergency Housing Support",
      shortDescription: "Help finding a safe temporary place if housing suddenly falls through.",
      fullDescription:
        "Emergency housing support is for situations where a soldier suddenly has nowhere safe to sleep, loses housing, or faces an urgent living problem. The first priority is safety. The soldier should contact IDF welfare channels and trusted support organizations as soon as possible.",
      eligibility:
        "Relevant for lone soldiers or soldiers without nearby family support who are facing an urgent housing problem.",
      howToApply:
        "Contact your mashakit tash, commander, or a trusted support organization immediately. Explain that the situation is urgent and ask for temporary housing guidance.",
      requiredDocuments: ["ID or army ID", "Explanation of the emergency", "Current location and contact details"],
      importantNotes: [
        "If you are unsafe, seek immediate help first.",
        "Do not wait until nighttime to report a housing emergency.",
        "Support organizations may help bridge the gap while official channels respond.",
      ],
      sourceName: "Lone Soldier Center",
      sourceUrl: "https://lonesoldiercenter.com/",
      keywords: ["emergency housing", "urgent", "safe place", "housing", "lone soldier center"],
    },
    {
      id: "food-vouchers",
      category: "food",
      title: "Shopping and Food Vouchers",
      shortDescription: "Food or shopping support that can help cover groceries and basic needs.",
      fullDescription:
        "Food and shopping vouchers can help soldiers buy groceries or basic supplies when regular income is not enough. The exact benefit may vary by current rules, recognition status, and welfare approval. It is best to ask which food support options are currently available.",
      eligibility:
        "May apply to recognized lone soldiers or soldiers with documented financial need, depending on current IDF welfare rules.",
      howToApply:
        "Ask your welfare representative about food support. Explain your monthly expenses and submit any requested forms or bank details.",
      requiredDocuments: ["ID or army ID", "Bank details if requested", "Financial explanation", "Welfare forms"],
      importantNotes: [
        "Food benefits can change by period and program.",
        "Ask whether the support is one-time or monthly.",
        "Keep track of expiration dates if vouchers are issued.",
      ],
      sourceName: "IDF / Kol Zchut",
      sourceUrl: "https://www.idf.il/",
      keywords: ["food", "shopping", "voucher", "groceries", "benefits", "idf"],
    },
    {
      id: "community-meals",
      category: "food",
      title: "Community Meals and Events",
      shortDescription: "Meals, holiday hosting, and community events through support organizations.",
      fullDescription:
        "Support organizations often help lone soldiers feel less alone by connecting them to meals, holiday hosting, Shabbat dinners, and events. These are not always official rights, but they are important practical support for soldiers far from family.",
      eligibility:
        "Usually open to lone soldiers or soldiers connected to the organization, depending on the event and available space.",
      howToApply:
        "Visit the organization website, check current activities, and register for meals or events when required.",
      requiredDocuments: ["Registration details", "Army ID if requested", "Contact information"],
      importantNotes: [
        "Events may require sign-up.",
        "Ask about location, timing, and transportation.",
        "Community events can also connect you to mentors and practical help.",
      ],
      sourceName: "Lone Soldier Center",
      sourceUrl: "https://lonesoldiercenter.com/",
      keywords: ["meal", "food", "event", "shabbat", "holiday", "community"],
    },
    {
      id: "flights-family-abroad",
      category: "flights",
      title: "Flights to Visit Family Abroad",
      shortDescription: "Possible help or leave connected to visiting immediate family outside Israel.",
      fullDescription:
        "Some lone soldiers may be eligible for support or special arrangements connected to visiting family abroad. This depends heavily on official recognition, service status, timing, and current IDF rules. Soldiers should check the official source before buying tickets.",
      eligibility:
        "Usually relevant for recognized lone soldiers whose close family lives abroad. Exact conditions must be verified through IDF channels.",
      howToApply:
        "Speak with your commander and welfare representative before planning travel. Ask what approvals are needed and whether any support applies.",
      requiredDocuments: ["Army ID", "Travel request details", "Proof of family abroad if requested", "Commander approval if required"],
      importantNotes: [
        "Do not buy a ticket before checking approvals.",
        "Leave timing depends on the unit and service needs.",
        "Rules may differ for volunteers from abroad.",
      ],
      sourceName: "IDF",
      sourceUrl: "https://www.idf.il/",
      keywords: ["flight", "family", "abroad", "travel", "vacation", "idf"],
    },
    {
      id: "mahal-status-check",
      category: "flights",
      title: "Mahal Status and Lone Soldier Rights",
      shortDescription: "Guidance for volunteers from abroad who need to check what rights apply to their status.",
      fullDescription:
        "Mahal is a route for volunteers from abroad who serve in the IDF. Some benefits may depend on whether the soldier is officially recognized as a lone soldier and on the exact service status. Mahal participants should verify eligibility early so they understand what support applies.",
      eligibility:
        "Relevant for Mahal volunteers or candidates from abroad who are serving or preparing to serve in the IDF.",
      howToApply:
        "Check the Mahal website, ask program staff about your status, and confirm lone soldier recognition through IDF channels.",
      requiredDocuments: ["Passport or ID", "Program documents", "Service status information", "Recognition forms if relevant"],
      importantNotes: [
        "Program participation and lone soldier recognition are related but not always identical.",
        "Ask directly which IDF benefits apply to your status.",
        "Keep program emails and official confirmations.",
      ],
      sourceName: "Mahal",
      sourceUrl: "https://www.mahal.org.il/",
      keywords: ["mahal", "volunteer", "abroad", "flight", "status", "eligibility"],
    },
    {
      id: "family-visit-days",
      category: "vacation",
      title: "Family Visit Days",
      shortDescription: "Special leave that may help lone soldiers visit close family or handle family needs.",
      fullDescription:
        "Recognized lone soldiers may have special leave options connected to family visits or family-related needs. These requests must be coordinated with the unit and approved through the proper IDF process. Planning early helps avoid problems with dates and permissions.",
      eligibility:
        "Usually for recognized lone soldiers, especially when close family lives abroad or when there is a documented family need.",
      howToApply:
        "Ask your commander and welfare representative which leave path applies. Submit the request early and provide any documents requested.",
      requiredDocuments: ["Leave request", "Family or travel details if requested", "Commander approval"],
      importantNotes: [
        "Approval depends on unit needs and timing.",
        "Ask early before booking travel.",
        "Keep written approval once received.",
      ],
      sourceName: "IDF",
      sourceUrl: "https://www.idf.il/",
      keywords: ["vacation", "leave", "family", "visit", "days", "idf"],
    },
    {
      id: "emergency-leave",
      category: "vacation",
      title: "Emergency Leave",
      shortDescription: "Urgent leave requests for serious personal or family situations.",
      fullDescription:
        "Emergency leave is for urgent situations that require immediate attention, such as a serious family matter or personal crisis. The soldier should explain the situation clearly and contact the chain of command and welfare office as quickly as possible.",
      eligibility:
        "May apply to soldiers facing an urgent family or personal emergency. Approval depends on the situation and IDF procedures.",
      howToApply:
        "Tell your commander and welfare representative immediately. Provide documents if available, but do not delay reporting the emergency if documents are not ready yet.",
      requiredDocuments: ["Emergency explanation", "Medical or family documents if relevant", "Contact details for follow-up"],
      importantNotes: [
        "Report urgent situations immediately.",
        "Ask someone you trust to help if you are overwhelmed.",
        "Keep communication clear and documented.",
      ],
      sourceName: "IDF / Kol Zchut",
      sourceUrl: "https://www.kolzchut.org.il/he/%D7%97%D7%99%D7%99%D7%9C%D7%99%D7%9D_%D7%91%D7%95%D7%93%D7%93%D7%99%D7%9D",
      keywords: ["emergency", "leave", "vacation", "family", "urgent", "kol zchut"],
    },
    {
      id: "peer-mentorship",
      category: "mental",
      title: "Peer Mentorship",
      shortDescription: "Personal guidance from people who understand lone soldier life and IDF bureaucracy.",
      fullDescription:
        "Peer mentorship can help lone soldiers understand daily life, army culture, rights, Hebrew bureaucracy, and emotional challenges. A mentor is not a replacement for official IDF help, but can be a steady person to ask practical questions and reduce isolation.",
      eligibility:
        "Usually relevant for lone soldiers who want guidance, community connection, or help understanding service life.",
      howToApply:
        "Visit the support organization website, look for mentorship or soldier support, and request to be connected with a mentor.",
      requiredDocuments: ["Contact information", "Service details if requested", "Short explanation of support needed"],
      importantNotes: [
        "Use official channels for formal rights approval.",
        "Mentors can help you prepare questions for the welfare office.",
        "If you are in crisis, contact emergency or professional help immediately.",
      ],
      sourceName: "Ach Gadol",
      sourceUrl: "https://achgadol.org/",
      keywords: ["mentor", "mental", "emotional", "support", "ach gadol", "community"],
    },
    {
      id: "emotional-support",
      category: "mental",
      title: "Emotional Support and Community",
      shortDescription: "Support networks, events, and guidance for soldiers who feel isolated or overwhelmed.",
      fullDescription:
        "Serving far from family can be stressful and lonely. Emotional and community support can include check-ins, events, guidance, and connections to people who understand the lone soldier experience. This support can make it easier to ask for help before a problem becomes bigger.",
      eligibility:
        "Relevant for lone soldiers, new immigrants, volunteers from abroad, or young people without close family support in Israel.",
      howToApply:
        "Contact a support organization, join a community group, or ask your welfare representative for emotional support options.",
      requiredDocuments: ["Usually none for community support", "ID or army ID may be requested for some services"],
      importantNotes: [
        "Asking for help is normal.",
        "Use professional or emergency support if there is immediate danger.",
        "Community support can work alongside IDF welfare help.",
      ],
      sourceName: "Lone Soldier Center / SELAH",
      sourceUrl: "https://lonesoldiercenter.com/",
      keywords: ["mental", "emotional", "community", "lonely", "support", "selah", "lone soldier center"],
    },
    {
      id: "welfare-office-help",
      category: "welfare",
      title: "Working with the IDF Welfare Office",
      shortDescription: "How to ask for help through your unit welfare representative.",
      fullDescription:
        "The welfare office is a central place for lone soldiers to request help with financial, housing, family, emotional, and service-related needs. The welfare representative can explain forms, check eligibility, and guide the request through the IDF process.",
      eligibility:
        "Relevant for soldiers who need help, especially recognized lone soldiers or soldiers trying to confirm their status.",
      howToApply:
        "Ask to meet your mashakit tash or welfare representative. Describe the problem, ask what rights apply, and request a written list of next steps.",
      requiredDocuments: ["Army ID", "Recognition documents if available", "Documents related to the specific request"],
      importantNotes: [
        "Be clear about urgency.",
        "Ask what happens next and when to follow up.",
        "If you do not understand the answer, ask for it in simpler language.",
      ],
      sourceName: "IDF",
      sourceUrl: "https://www.idf.il/",
      keywords: ["welfare", "mashakit tash", "idf", "forms", "eligibility", "help"],
    },
    {
      id: "lone-soldier-recognition",
      category: "welfare",
      title: "Lone Soldier Recognition",
      shortDescription: "Confirming official status so rights and benefits can be checked correctly.",
      fullDescription:
        "Many benefits depend on official recognition as a lone soldier. Recognition is the foundation for checking financial support, housing help, leave, food benefits, and other assistance. If a soldier is not sure about their status, they should clarify it as early as possible.",
      eligibility:
        "Depends on IDF definitions and the soldier's family, residence, immigration, and support situation.",
      howToApply:
        "Ask your welfare representative how to confirm or update recognition status. Submit the requested personal documents and follow up until the status is clear.",
      requiredDocuments: ["ID or passport", "Family/residence information", "Immigration or service documents if relevant", "Forms requested by the IDF"],
      importantNotes: [
        "Recognition can affect multiple benefits.",
        "Keep proof of status once approved.",
        "If your family or housing situation changes, ask whether your status should be updated.",
      ],
      sourceName: "IDF / Kol Zchut",
      sourceUrl: "https://www.kolzchut.org.il/he/%D7%97%D7%99%D7%99%D7%9C%D7%99%D7%9D_%D7%91%D7%95%D7%93%D7%93%D7%99%D7%9D",
      keywords: ["recognition", "status", "lone soldier", "eligibility", "idf", "kol zchut"],
    },
    {
      id: "garin-tzabar-support",
      category: "organizations",
      title: "Garin Tzabar Support",
      shortDescription: "Preparation and community support for young Jews from abroad serving as lone soldiers.",
      fullDescription:
        "Garin Tzabar supports young Jews from abroad who come to Israel and serve in the IDF as lone soldiers. The program can help with preparation, community, absorption, and practical support before and during service.",
      eligibility:
        "Relevant for young Jews from abroad who are interested in coming to Israel and serving in the IDF through the program.",
      howToApply:
        "Visit the Garin Tzabar website, review the program process, and contact the organization for current application steps.",
      requiredDocuments: ["Program application details", "Identity documents", "Background information requested by the program"],
      importantNotes: [
        "Program support is different from official IDF rights approval.",
        "Ask how the program helps with lone soldier recognition and service preparation.",
      ],
      sourceName: "Garin Tzabar",
      sourceUrl: "https://www.garintzabar.org/",
      keywords: ["garin tzabar", "program", "abroad", "community", "organization"],
    },
    {
      id: "naale-pathway",
      category: "organizations",
      title: "Naale Program Pathway",
      shortDescription: "Study program for Jewish youth from abroad; some graduates later serve as lone soldiers.",
      fullDescription:
        "Naale is a program for Jewish youth from abroad who study in Israel. While it is not itself an IDF rights office, some graduates may later serve in the IDF as lone soldiers and should understand how to check their future status and support options.",
      eligibility:
        "Relevant for Jewish youth from abroad considering study in Israel and future service pathways.",
      howToApply:
        "Visit the Naale website, review the program requirements, and contact the program for current admission details.",
      requiredDocuments: ["Program application materials", "Identity documents", "School records if requested"],
      importantNotes: [
        "Naale is a youth education program, not a direct IDF benefit.",
        "Graduates should separately verify IDF lone soldier recognition later.",
      ],
      sourceName: "Naale",
      sourceUrl: "https://www.naale-elite-academy.com/",
      keywords: ["naale", "youth", "study", "program", "future soldier"],
    },
    {
      id: "selah-support",
      category: "organizations",
      title: "SELAH Support",
      shortDescription: "Support for new immigrants and young people without close family support in Israel.",
      fullDescription:
        "SELAH supports new immigrants and young people in Israel who may not have close family support nearby. For lone soldiers, this kind of organization can be helpful for emotional, practical, and community support.",
      eligibility:
        "Relevant for new immigrants, young people without family support in Israel, and soldiers who need additional community guidance.",
      howToApply:
        "Visit the SELAH website and contact the organization to ask what support is currently available.",
      requiredDocuments: ["Contact details", "Immigration or personal background if requested", "Service details if relevant"],
      importantNotes: [
        "Organization services may change by program and availability.",
        "Use official IDF channels for formal military rights.",
      ],
      sourceName: "SELAH",
      sourceUrl: "https://selah.org.il/",
      keywords: ["selah", "sela", "immigrant", "support", "family", "organization"],
    },
  ],
};
