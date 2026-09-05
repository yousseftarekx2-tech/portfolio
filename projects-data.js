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
      title: "Task App",
      shortDescription:
        "A productivity-focused Flutter application for organizing tasks, tracking daily progress and staying on top of a home dashboard.",
      status: "Completed",
      technologies: ["Flutter", "Dart", "BLoC / Cubit", "GoRouter"],
      githubUrl: "https://github.com/yousseftarekx2-tech/TaskFlow",
      detailsUrl: "projects/task-app.html",
      heroImage: "assets/projects/task_app/hero.png",
      overview:
        "Task App is a productivity-focused Flutter application designed to help users organize tasks and monitor their daily progress through a clean home dashboard.",
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
        "assets/projects/task_app/screenshot-1.png",
        "assets/projects/task_app/screenshot-2.png",
        "assets/projects/task_app/screenshot-3.png",
        "assets/projects/task_app/screenshot-4.png",
      ],
      video: {
        poster: "assets/projects/task_app/demo-poster.png",
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
      githubUrl: null, // TODO: add the real repo URL here — no placeholder link used
      detailsUrl: "projects/weather-app.html",
      heroImage: "assets/projects/weather_app/hero.png",
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
        "assets/projects/weather_app/screenshot-1.png",
        "assets/projects/weather_app/screenshot-2.png",
        "assets/projects/weather_app/screenshot-3.png",
        "assets/projects/weather_app/screenshot-4.png",
        "assets/projects/weather_app/screenshot-5.png",
        "assets/projects/weather_app/screenshot-6.png",
        "assets/projects/weather_app/screenshot-7.png",
        "assets/projects/weather_app/screenshot-8.png",
      ],
      video: {
        poster: "assets/projects/weather_app/demo-poster.png",
        src: "assets/projects/weather_app/demo.mp4",
      },
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
  ],

  inProgress: [
    {
      slug: "personal-finance-app",
      title: "Personal Finance App",
      shortDescription:
        "A personal finance mobile application for tracking income, expenses, categories, budgets, and financial insights.",
      status: "In Progress",
      technologies: ["Flutter", "Dart", "BLoC / Cubit", "GoRouter", "Local Database", "FL Chart"],
      githubUrl: null,
    },
    {
      slug: "medical-prescription-app",
      title: "Medical Prescription / Medicine App",
      shortDescription:
        "A mobile application concept for scanning medical prescriptions or medicine packages, extracting relevant information, and retrieving structured data through APIs.",
      status: "In Progress",
      technologies: ["Flutter", "Dart", "API Integration", "Image Processing", "QR / OCR"],
      githubUrl: null,
    },
  ],
};

// Expose for use in both index.html (cards) and project detail pages
if (typeof module !== "undefined" && module.exports) {
  module.exports = projectsData;
}
