# HomeBase Development Guide

HomeBase is a mobile-first GUI application for lone soldiers in Israel. It must follow the concept, screens, and priorities from the HomeBase presentation: a clean, supportive, green-and-white app that connects lone soldiers to rights, benefits, organizations, nearby help, community resources, and multilingual support.

Do not turn HomeBase into a generic support app. Every feature should help a lone soldier find clear information, feel less alone, understand where to turn, or access support faster.

## Product Goals

HomeBase centralizes:

- Rights and benefits
- Support organizations
- Community groups
- Nearby services
- Housing, food, mental support, and emergency resources
- Multilingual assistance
- Personalized guidance by user type

The app is a polished HCI/usability project demo. Static/mock data is acceptable, but flows should feel complete and usable.

## Core Users

Design around the users described in the presentation:

- Nina: a lone soldier from France who struggles with language barriers and adapting socially.
- Jeremy: a lone soldier from America with no family in Israel who needs help understanding where to turn.
- Eitan: an Israeli lone soldier who needs organized, clear information about his rights.

HomeBase should solve:

- Language barriers
- Lack of clear information
- Loneliness
- Difficulty finding rights
- Difficulty finding communities and support

## Required Screens

Maintain these screens:

- Loading page
- Sign in page
- Sign up page
- Home page
- Profile page
- Rights page
- Community page
- Map page
- Organizations page
- Language/settings page

Do not remove existing pages or break existing navigation.

## Navigation

Use bottom navigation:

- Home
- Rights
- Community
- Map
- Profile

The selected tab must be highlighted in the HomeBase green style.

## Visual Design Rules

The GUI must stay consistent with the presentation:

- Mobile-first layout
- Clean modern UI
- Green and white color palette
- Rounded cards
- Simple icons
- Clear buttons
- Readable typography
- Soft shadows
- Bottom navigation
- Accessible spacing and contrast
- Warm, friendly, supportive feeling

Avoid generic landing-page design. The first experience should feel like a usable mobile app.

## Multilingual Support

The app must visibly support:

- English
- Hebrew
- Russian
- Spanish
- French

The interface may remain mostly English for now, but language selection must appear in onboarding/profile/settings and should be visually clear.

## Personalization

The app should personalize recommendations by user type:

- Lone Soldier from abroad
- Mahal
- Garin Tzabar
- Naale
- Israeli Lone Soldier

Users should select their type during sign up/onboarding. Use this preference to recommend relevant rights, communities, and organizations.

## Information Hub

Organize important information with:

- Categories
- Cards
- Search
- Detail pages
- Source links
- Clear labels and tags

Information areas include:

- Rights
- Benefits
- Support organizations
- Communities
- Nearby services
- Emergency/help resources

## Rights Page

The Rights page is a top priority. Use this flow:

Rights Categories -> Specific Rights List -> Right Details

Each rights category should include:

- Icon
- Title
- Short description
- Number of rights inside the category
- View Rights button

Each specific right card should include:

- Right name
- Short summary
- Eligibility tag
- Source name
- View Details button

Each right detail page should include:

- Title
- Full explanation
- Who is eligible
- How to apply
- Required documents, when relevant
- Important notes
- Official source
- External link to the original website
- Disclaimer: "Information is summarized for accessibility. Please verify details on the official source."

Rights search must work by:

- Right title
- Category
- Keywords
- Source
- Eligibility

If no rights are found, show:

"No rights found. Try searching for housing, flights, food, or financial support."

## Community Page

The Community page should help users feel less alone. Include:

- WhatsApp/community group cards
- Suggested groups by language, location, and need
- Create new group button
- Join group buttons
- Language groups
- Housing help
- Emotional support
- Female soldiers
- Local communities

## Map / Location Finder

Use a mock map UI for demo mode. Include:

- Nearby organizations
- Nearby communities
- Housing support
- Support services
- Distance labels
- Search nearby help
- Location-based suggestions

## Organizations Page

Show support organizations as cards:

- Lone Soldier Center
- Ach Gadol
- Garin Tzabar
- SELA / SELAH
- IDF support / official rights source
- Kol Zchut

Each organization card should include:

- Name
- Short description
- Support type
- Source/website button
- Contact button if relevant

## Data Structure

Demo/static data is fine. Keep data organized in separate files, for example:

- `LLM Demo/data/rightsData.js`
- `LLM Demo/data/organizationsData.js`
- `LLM Demo/data/communityData.js`

Rights objects should include:

- `id`
- `category`
- `title`
- `shortDescription`
- `fullDescription`
- `eligibility`
- `howToApply`
- `requiredDocuments`
- `importantNotes`
- `sourceName`
- `sourceUrl`
- `keywords`

Keep source data easy to edit without changing UI rendering code.

## External Sources

For rights and organizations, use real source links where possible. Important sources include:

- IDF: `https://www.idf.il/`
- Kol Zchut: `https://www.kolzchut.org.il/`
- Mahal: `https://www.mahal.org.il/`
- Garin Tzabar: `https://www.garintzabar.org/`
- Naale: `https://www.naale-elite-academy.com/`
- Lone Soldier Center: `https://lonesoldiercenter.com/`
- Ach Gadol: `https://achgadol.org/`
- SELAH: `https://selah.org.il/`

Always include this disclaimer near summarized rights information:

"Information is summarized for accessibility. Please verify details on the official source."

## Development Priorities

Focus first on:

- Clear user flow
- Working navigation
- Rights page structure
- Search functionality
- Community suggestions
- Map/location demo
- Consistent design matching the presentation

When adding new features, prefer small, polished, mobile-first improvements over broad unfinished scope.

## Verification

Before finishing UI changes:

- Run JavaScript syntax checks, for example `node --check "LLM Demo/app.js"`.
- Check any changed data files with `node --check`.
- Confirm navigation targets still exist.
- Confirm Netlify still publishes from `LLM Demo` via `netlify.toml`.

If browser verification is unavailable, state that clearly and report the checks that did pass.
