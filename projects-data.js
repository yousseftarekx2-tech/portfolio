/* =========================================================
   projectsData — single source of truth for project content
   =========================================================
   Edit THIS file only to update project info across the site
   (home page cards + individual project detail pages).

   Each completed project object supports:
     slug          - used in the detail page URL: /projects/<slug>.html
     title
     shortDescription   (used on the home page card)
     status             ('Completed' | 'In Progress')
     technologies[]      (used on the home page card as tags)
     githubUrl           (real repo URL, or null if not available yet)
     detailsUrl           (path to the static details page, or null)
     heroImage
     overview
     problem
     solution
     features[]
     screenshots[]        (array of local image paths)
     video                { poster, src }
     technicalHighlights[]
   ========================================================= */

const projectsData = {

  completed: [
    {
      slug: "task-app",
      title: "TaskFlow — To-Do List App",
      shortDescription:
        "A productivity-focused Flutter application for organizing tasks, tracking daily progress and staying on top of a home dashboard.",
      status: "Completed",
      technologies: ["Flutter", "Dart", "BLoC / Cubit", "GoRouter"],
      githubUrl: "https://github.com/yousseftarekx2-tech/TaskFlow",
      detailsUrl: "projects/task-app.html",
      heroImage: "assets/images/hero.png",
      overview:
        "TaskFlow is a productivity-focused Flutter application for organizing tasks, tracking daily progress, and managing routines from a focused home dashboard.",
      problem:
        "Keeping track of daily tasks across scattered notes and apps makes it hard to see real progress or stay consistent with a routine.",
      solution:
        "A single, focused mobile app that centralizes task creation, an onboarding flow for new users, and a home dashboard that visualizes today's progress at a glance.",
      features: [
        "Home dashboard with today's progress overview",
        "Task creation, editing and completion tracking",
        "Guided onboarding flow for first-time users",
        "Focus-oriented, distraction-free screens",
        "Reusable, componentized widget structure",
      ],
      screenshots: [
        "assets/images/screen_1.png",
        "assets/images/screen_2.png",
        "assets/images/screen_3.png",
        "assets/images/screen_4.png",
        "assets/images/screen_5.png",
        "assets/images/screen_6.png",
        "assets/images/screen_7.png",
        "assets/images/screen_8.png",
      ],
      video: {
        poster: "assets/images/screen_1.png",
        src: "assets/projects/task_app/demo.mp4",
      },
      technicalHighlights: [
        "Flutter",
        "Dart",
        "BLoC / Cubit",
        "GoRouter",
        "SharedPreferences",
        "Local Data Management",
        "Responsive UI",
        "Localization",
      ],
    },
    {
      slug: "weather-app",
      title: "Weather App",
      shortDescription:
        "A Flutter weather app that fetches live forecasts through a REST API and keeps working with cached data when the connection drops.",
      status: "Completed",
      technologies: ["Flutter", "Dart", "REST API", "Dio"],
      githubUrl: "https://github.com/yousseftarekx2-tech/weather_app",
      detailsUrl: "projects/weather-app.html",
      heroImage: "assets/projects/weather_app/hero.jpg",
      overview:
        "Weather App is a Flutter application that retrieves live weather data through a REST API and presents current conditions and forecasts in a clean, responsive interface.",
      problem:
        "Weather apps often feel cluttered, or stop being useful the moment a connection drops, leaving users without any information at all.",
      solution:
        "A focused weather experience with a clear current-conditions view, offline-friendly caching so the last known forecast is still available without a connection, and a responsive layout across screen sizes.",
      features: [
        "Live weather data via REST API integration",
        "Offline access to the last cached forecast",
        "Clean current-conditions and forecast views",
        "Responsive layout across devices",
        "Localized date, time and unit formatting",
      ],
      screenshots: [
        "assets/projects/weather_app/screen_1.png",
        "assets/projects/weather_app/screen_2.png",
        "assets/projects/weather_app/screen_3.png",
        "assets/projects/weather_app/screen_4.png",
        "assets/projects/weather_app/screen_5.png",
        "assets/projects/weather_app/screen_6.png",
        "assets/projects/weather_app/screen_7.png",
        "assets/projects/weather_app/screen_8.png",
      ],
      video: null,
      technicalHighlights: [
        "Flutter",
        "Dart",
        "BLoC / Cubit",
        "GoRouter",
        "REST API",
        "Dio",
        "Localization",
        "Offline Cached Weather",
        "Responsive UI",
      ],
    },
    {
      slug: "atelier-ecommerce-customer-app",
      title: "Atelier E-commerce App",
      shortDescription:
        "A Flutter customer shopping app with product discovery, cart and favorites, account features, and a Supabase-backed architecture.",
      status: "Completed",
      technologies: ["Flutter", "Dart", "BLoC / Cubit", "Supabase", "GoRouter"],
      githubUrl: "https://github.com/yousseftarekx2-tech/atelier-ecommerce-customer-app",
      detailsUrl: null,
      heroImage: null,
      overview:
        "Atelier is a customer-facing e-commerce application built with Flutter, with Supabase-backed services and feature-based app architecture.",
      problem: "Online shoppers need a clear way to browse products and manage their shopping activity in one place.",
      solution: "A mobile shopping experience organized around products, favorites, cart, account, and related customer features.",
      features: ["Product discovery", "Shopping cart", "Favorites", "Customer accounts", "Supabase integration"],
      screenshots: [],
      video: null,
      technicalHighlights: ["Flutter", "Dart", "BLoC / Cubit", "Supabase", "GoRouter"],
    },
    {
      slug: "rick-and-morty-explorer",
      title: "Rick & Morty Explorer",
      shortDescription:
        "Explore characters, locations, and episodes with paginated API data, search, combined filters, and detailed character profiles.",
      status: "Completed",
      technologies: ["Flutter", "Dart", "REST API", "BLoC / Cubit"],
      githubUrl: "https://github.com/yousseftarekx2-tech/rick-and-morty-explorer",
      detailsUrl: null,
      heroImage: null,
      overview:
        "A responsive Flutter app for exploring the Rick and Morty universe using the Rick and Morty API.",
      problem: "Exploring a large character catalog works best when users can progressively load, search, and filter the content.",
      solution: "An API-powered explorer with pagination, combined search and filters, character profiles, and on-demand episode information.",
      features: ["Paginated character explorer", "Search and combined filters", "Character detail profiles", "Episode information", "Responsive layouts"],
      screenshots: [],
      video: null,
      technicalHighlights: ["Flutter", "Dart", "REST API", "BLoC / Cubit", "Repository Architecture"],
    },
  ],
};

// Expose for use in both index.html (cards) and project detail pages
if (typeof module !== "undefined" && module.exports) {
  module.exports = projectsData;
}
