const state = {
  route: "loading",
  language: "English",
};

const languages = ["Hebrew", "English", "Russian", "Spanish", "French"];
const resources = window.homeBaseResources || {
  rightsSources: [],
  organizationSources: [],
};

const icons = {
  home: `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>`,
  rights: `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="m5 7 7-4 7 4"/><path d="m6 7-4 7h8L6 7Z"/><path d="m18 7-4 7h8l-4-7Z"/></svg>`,
  community: `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-8 0v2"/><circle cx="12" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M2 21v-2a4 4 0 0 1 3-3.87"/><path d="M8 3.13a4 4 0 0 0 0 7.75"/></svg>`,
  map: `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 6 6-2 8 2 6-2v16l-6 2-8-2-6 2V6Z"/><path d="M8 4v16"/><path d="M16 6v16"/></svg>`,
  profile: `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>`,
  org: `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/><path d="M9 9h.01M12 9h.01M15 9h.01"/></svg>`,
  bell: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 21h4"/><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/></svg>`,
  back: `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
  search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  money: `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`,
  house: `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>`,
  food: `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 2v20"/><path d="M17 2v20"/><path d="M7 8h10"/><path d="M7 12h10"/></svg>`,
  plane: `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 5-13-13 5-6 9 9-6Z"/><path d="m16 16-7-7"/></svg>`,
  calendar: `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  heart: `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>`,
  alert: `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.9 2.5 18a2 2 0 0 0 1.7 3h15.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg>`,
};

const rights = [
  ["Financial Support", "Monthly stipends, equipment support, grants, and special assistance funds.", "money", "Eligible"],
  ["Housing Assistance", "Help with rent, soldier homes, kibbutz housing, and private apartment support.", "house", "Action Required"],
  ["Food Benefits", "Extra food budgets and supermarket cards for everyday essentials.", "food", "Active"],
  ["Flights Home", "Annual flight support for eligible lone soldiers visiting family abroad.", "plane", "Check Eligibility"],
  ["Special Vacation Days", "Additional leave for family visits, bureaucracy, and emergencies.", "calendar", "Eligible"],
  ["Mental Support", "Confidential counseling, workshops, and emotional support hotlines.", "heart", "Available"],
];

const groups = [
  ["English Speakers", "The hub for Anglos, practical tips, events, and shared guidance across the country.", "Networking", "Events", 128],
  ["French Speakers", "French-speaking support for questions about rights, housing, and daily life.", "Language", "Cultural", 86],
  ["Russian Speakers", "Community for Russian-speaking soldiers with help finding answers quickly.", "Language", "Support", 94],
  ["Spanish Speakers", "Spanish-language updates, friendly meetups, and everyday support.", "Language", "Events", 52],
  ["Housing Help", "Leases, roommates, furniture, deposits, and urgent apartment questions.", "Urgent", "Legal", 15],
  ["Female Soldiers", "A supportive space for female lone soldiers and job-specific questions.", "Empowerment", "Safe Space", 34],
  ["Emotional Support", "Private peer support, mental health resources, and check-ins.", "Wellness", "Private", 8],
];

const nav = [
  ["home", "Home"],
  ["rights", "Rights"],
  ["community", "Community"],
  ["map", "Map"],
  ["profile", "Profile"],
];

function setRoute(route) {
  state.route = route;
  render();
}

function icon(name) {
  return icons[name] || icons.home;
}

function topbar(title, backRoute = null) {
  return `
    <header class="topbar">
      <button class="icon-button" aria-label="${backRoute ? "Go back" : "Profile"}" ${backRoute ? `data-route="${backRoute}"` : `data-route="profile"`}>
        ${backRoute ? icon("back") : icon("profile")}
      </button>
      <h1>${title}</h1>
      <button class="icon-button" aria-label="Notifications">${icon("bell")}</button>
    </header>
  `;
}

function languageStrip() {
  return `
    <div class="language-strip" aria-label="Preferred language selector">
      ${languages
        .map(
          (language) =>
            `<button class="chip ${state.language === language ? "active" : ""}" data-language="${language}">${language}</button>`,
        )
        .join("")}
    </div>
  `;
}

function bottomNav() {
  return `
    <nav class="bottom-nav" aria-label="Main navigation">
      <div class="nav-inner">
        ${nav
          .map(
            ([route, label]) => `
              <button class="nav-item ${state.route === route ? "active" : ""}" data-route="${route}" aria-label="${label}">
                ${icon(route)}
                <span>${label}</span>
              </button>
            `,
          )
          .join("")}
      </div>
    </nav>
  `;
}

function shell(title, content, backRoute = null) {
  return `<section class="screen">${topbar(title, backRoute)}${content}${bottomNav()}</section>`;
}

function sourceCard(item) {
  return `
    <article class="card source-card">
      <span class="icon-tile">${icon(item.icon)}</span>
      <div>
        <div class="meta">
          <span class="badge">${item.category}</span>
          <span>Source: ${item.source}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <div class="card-actions">
          <a class="primary-btn external-btn" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.cta}</a>
        </div>
      </div>
    </article>
  `;
}

function renderLoading() {
  return `
    <section class="splash">
      <div class="splash-photo" role="img" aria-label="Friendly group of soldiers represented in HomeBase colors"></div>
      <div class="splash-content">
        <div class="brand-mark">${icon("home")}</div>
        <h1 class="brand-name">HomeBase</h1>
        <p class="slogan">Connecting lone soldiers to support, information, and home.</p>
        <div class="progress"><span></span></div>
        <button class="primary-btn" data-route="home">Enter HomeBase</button>
      </div>
    </section>
  `;
}

function renderHome() {
  const quick = [
    ["My Rights", "rights", "Benefits, grants, and clear next steps.", "rights"],
    ["Community", "community", "Groups by language and support need.", "community"],
    ["Organizations", "org", "Trusted support organizations.", "organizations"],
    ["Map", "map", "Nearby help and community places.", "map"],
  ];

  return shell(
    "HomeBase",
    `
      <div class="content">
        <p class="eyebrow">Welcome back</p>
        <h2 class="hero-title">Hello, Alex</h2>
        <p class="lead">Your home base for navigating rights, housing, community, and life in Israel.</p>
        ${languageStrip()}

        <div class="quick-grid">
          ${quick
            .map(
              ([title, iconName, copy, route]) => `
                <button class="quick-card" data-route="${route}">
                  <span class="icon-tile">${icon(iconName)}</span>
                  <strong>${title}</strong>
                  <span>${copy}</span>
                </button>
              `,
            )
            .join("")}
          <button class="quick-card emergency" data-route="map">
            <span class="icon-tile">${icon("alert")}</span>
            <strong>Emergency Help</strong>
            <span>Urgent contacts and nearby support.</span>
          </button>
        </div>

        <div class="section-head">
          <h2>Recommended Support</h2>
          <button class="text-link" data-route="organizations">View All</button>
        </div>

        <article class="card image-card">
          <div class="visual handshake" role="img" aria-label="Supportive handshake illustration"></div>
          <div class="card-body">
            <div class="meta"><span class="badge gold">Event</span><span>2 hours ago</span></div>
            <h3>Annual Lone Soldier BBQ in Tel Aviv</h3>
            <p>Join other soldiers for food, music, and networking with trusted support teams.</p>
          </div>
        </article>

        <div style="height: 14px"></div>

        <article class="card image-card">
          <div class="visual gavel" role="img" aria-label="Rights update illustration"></div>
          <div class="card-body">
            <div class="meta"><span class="badge">Policy</span><span>Yesterday</span></div>
            <h3>Housing Grant Update</h3>
            <p>New guidance for rent support, eligibility, and forms required this month.</p>
          </div>
        </article>
      </div>
    `,
  );
}

function renderRights() {
  return shell(
    "HomeBase",
    `
      <div class="content">
        <p class="eyebrow">Benefits and support</p>
        <h2 class="hero-title">Your Soldier Rights</h2>
        <p class="lead">Plain-language summaries of common benefits, with links to original public sources for verification.</p>
        <div class="search-box">${icon("search")}<input aria-label="Search rights" placeholder="Search benefits, grants, or housing support" /></div>
        <div class="list">
          ${rights
            .map(
              ([title, copy, iconName, status]) => `
                <article class="card right-card">
                  <span class="icon-tile">${icon(iconName)}</span>
                  <div>
                    <div class="meta"><span class="badge ${status === "Action Required" || status === "Check Eligibility" ? "gold" : ""}">${status}</span></div>
                    <h3>${title}</h3>
                    <p>${copy}</p>
                  </div>
                  <div class="card-actions"><button class="primary-btn" data-route="right-detail">View Details</button></div>
                </article>
              `,
            )
            .join("")}
        </div>
        <div class="section-head">
          <h2>Official Information Sources</h2>
        </div>
        <div class="list">
          ${resources.rightsSources.map(sourceCard).join("")}
        </div>
        <p class="disclaimer">Information is summarized for accessibility. For the most accurate and updated details, please visit the official source.</p>
      </div>
    `,
  );
}

function renderRightDetail() {
  return shell(
    "Right Details",
    `
      <div class="content">
        <article class="card" style="background: var(--green-700); color: white;">
          <span class="badge" style="background: rgba(255,255,255,.2); color: white;">Housing and Living</span>
          <h2 class="hero-title" style="margin-top: 10px;">Housing Grant for Lone Soldiers</h2>
          <p style="color: rgba(255,255,255,.86);">Financial assistance for rent and utilities during your service.</p>
        </article>
        <article class="card profile-card">
          <h3>Overview</h3>
          <p>As a Lone Soldier, you may be entitled to a monthly grant intended to cover housing expenses including rent and property tax.</p>
        </article>
        <article class="card profile-card" style="background: var(--green-100);">
          <h3>Who Qualifies?</h3>
          <p>Recognized as a Lone Soldier by the IDF, living independently, and not currently subsidized by family housing.</p>
        </article>
        <article class="card profile-card">
          <h3>How to Apply</h3>
          <p>Notify your tash officer, submit your rental contract, and wait for approval. Most requests are processed within 30-45 days.</p>
          <div class="card-actions"><button class="secondary-btn">Save</button><button class="primary-btn">Contact</button></div>
        </article>
      </div>
    `,
    "rights",
  );
}

function renderCommunity() {
  return shell(
    "HomeBase",
    `
      <div class="content">
        <h2 class="hero-title">Your Community</h2>
        <p class="lead">Connect with fellow soldiers, find specialized support, and share experiences in a safe space.</p>
        <div class="search-box">${icon("search")}<input aria-label="Search groups" placeholder="Search groups or topics" /></div>
        <button class="secondary-btn" style="width: 100%; margin-bottom: 16px;">Create New Group</button>
        <div class="list">
          ${groups
            .map(
              ([title, copy, tagA, tagB, online]) => `
                <article class="card group-card">
                  <div class="avatar-small">${title.charAt(0)}</div>
                  <div>
                    <h3>${title}</h3>
                    <div class="online">${online} online</div>
                    <p>${copy}</p>
                    <div class="tag-row"><span class="tag">${tagA}</span><span class="tag">${tagB}</span></div>
                    <div class="card-actions"><button class="primary-btn">Join Group</button></div>
                  </div>
                  <button class="icon-button" aria-label="More options">⋮</button>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    `,
  );
}

function renderMap() {
  const nearby = [
    ["Soldier Medical Wing", "450m away • Open 24/7", "Emergency", "red", "Urgent Call"],
    ["The Lone Soldier Home", "1.2km away • Community Hub", "Community Centers", "", "View Activities"],
    ["Friday Night Shabbat Dinner", "Center City • 800m away", "Featured Activity", "gold", "Join Now"],
    ["Housing Support Desk", "2.1km away • Walk-ins today", "Housing", "", "Contact"],
  ];

  return shell(
    "HomeBase",
    `
      <div class="map-hero" role="img" aria-label="Mock map of nearby support locations">
        <div class="coast"></div>
        <span class="map-pin pin-a">${icon("heart")}</span>
        <span class="map-pin pin-b">${icon("home")}</span>
        <span class="map-pin pin-c">${icon("community")}</span>
        <div class="map-control"><button>+</button><button>-</button></div>
        <div class="location-pill">Current Location</div>
      </div>
      <div class="content">
        <div class="section-head">
          <h2>Nearest to You</h2>
          <button class="text-link">Filter All</button>
        </div>
        <div class="search-box">${icon("search")}<input aria-label="Search nearby help" placeholder="Search nearby help" /></div>
        <div class="language-strip">
          <button class="chip active">Emergency</button>
          <button class="chip">Nearby Organizations</button>
          <button class="chip">Housing Support</button>
          <button class="chip">Community Places</button>
        </div>
        <div class="list">
          ${nearby
            .map(
              ([title, distance, label, tone, cta]) => `
                <article class="card nearby-card">
                  <span class="icon-tile">${icon(tone === "red" ? "alert" : title.includes("Housing") ? "house" : "community")}</span>
                  <div>
                    <span class="badge ${tone}">${label}</span>
                    <h3 style="margin-top: 10px;">${title}</h3>
                    <div class="distance">${distance}</div>
                    <p>Location-based suggestion matched to your selected support categories.</p>
                    <div class="card-actions"><button class="${tone === "red" ? "danger-btn" : "primary-btn"}">${cta}</button></div>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    `,
  );
}

function renderProfile() {
  return shell(
    "HomeBase",
    `
      <div class="content">
        <section class="profile-head">
          <div class="avatar-large">A</div>
          <h2>Alex Rivera</h2>
          <div class="tag-row" style="justify-content: center;"><span class="badge">Lone Soldier</span><span class="badge">Infantry</span></div>
          <p class="lead">Navigating life in Israel since 2022. Helping others find their way through the bureaucracy.</p>
        </section>

        <article class="card profile-card">
          <div class="section-head" style="margin-top: 0;"><h3>Saved Rights</h3><button class="text-link" data-route="rights">View All</button></div>
          ${["Rent Assistance", "Tax Exemption", "Flight Grant", "Health Care"]
            .map(
              (item) => `
                <div class="saved-item">
                  <span class="icon-tile">${icon(item.includes("Rent") ? "house" : item.includes("Flight") ? "plane" : item.includes("Health") ? "heart" : "money")}</span>
                  <div><h4>${item}</h4><p>${item.includes("Health") ? "Mental support" : "Housing department"}</p></div>
                </div>
              `,
            )
            .join("")}
        </article>

        <article class="card profile-card">
          <h3>Preferences</h3>
          <div class="row"><span>Preferred Language</span><span>${state.language}</span></div>
          <div class="row"><span>User Type</span><span>Lone Soldier</span></div>
          <div class="row"><span>Joined Groups</span><span>4 groups</span></div>
          <div class="row"><span>Saved Rights</span><span>12 items</span></div>
          <div class="row"><span>Settings</span><span>Alerts On</span></div>
        </article>

        <button class="danger-btn" style="width: 100%; margin-top: 18px;">Logout</button>
      </div>
    `,
  );
}

function renderOrganizations() {
  return shell(
    "Organizations",
    `
      <div class="content">
        <p class="eyebrow">Trusted partners</p>
        <h2 class="hero-title">Support Organizations</h2>
        <p class="lead">Find practical help from public programs and organizations that work with lone soldiers, new immigrants, and young people arriving from abroad.</p>
        <div class="list" style="margin-top: 18px;">
          ${resources.organizationSources.map(sourceCard).join("")}
        </div>
      </div>
    `,
    "home",
  );
}

const renderers = {
  loading: renderLoading,
  home: renderHome,
  rights: renderRights,
  "right-detail": renderRightDetail,
  community: renderCommunity,
  map: renderMap,
  profile: renderProfile,
  organizations: renderOrganizations,
};

function bindEvents() {
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => setRoute(button.dataset.route));
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      state.language = button.dataset.language;
      render();
    });
  });
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = (renderers[state.route] || renderHome)();
  bindEvents();
}

render();
setTimeout(() => {
  if (state.route === "loading") setRoute("home");
}, 1900);
