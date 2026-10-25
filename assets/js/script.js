'use strict';


const PROJECTS_DATA = {
    "secure-blog-api": {
        title: "Secure Blog API",
        category: "APIs",
        short: "Multi-user blogging backend secured with Spring Security, bcrypt password hashing and JWT authentication.",
        overview: "A backend REST API for a multi-user blogging platform. It focuses on authentication and authorization using Spring Security and JWT, including user registration, password hashing with bcrypt, login, and token generation and validation.",
        description: "Visitors can register, log in and read posts through public endpoints, while creating a post requires a valid Bearer token. On login the API issues a signed JWT, and each protected request is checked against it, so the project shows how authentication and route protection fit into a Spring Boot backend.",
        features: [
            "Register users and authenticate them through a login endpoint",
            "Hash passwords using bcrypt",
            "Generate and validate JSON Web Tokens (JWTs)",
            "Expose public endpoints for registration, login and retrieving posts",
            "Protect post creation so it requires a valid Bearer token"
        ],
        stack: ["Java 17+", "Spring Boot", "Spring Security", "Auth0 Java JWT", "Spring Data JPA", "MySQL", "Lombok", "Maven"],
        learned: [
            "Authentication versus authorization",
            "JWT-based access to protected endpoints",
            "Password hashing with bcrypt",
            "Protecting API routes and leaving selected routes public",
            "Connecting Spring Security with a Spring Boot backend"
        ],
        repo: "https://github.com/mdsharikansari/secure-blog-api",
        repoPlaceholder: false,
        image: "./assets/images/project-1.png"
    },
    "student-management-system": {
        title: "Student Management System API",
        category: "APIs",
        short: "Spring Boot REST API for managing students and courses, built around a many-to-many relationship.",
        overview: "A Spring Boot REST API for managing students and courses. Its main learning focus is the many-to-many (@ManyToMany) relationship: students can be created, courses can be created, and students can be enrolled in courses.",
        description: "The API stores students and courses as separate records and links them through a dedicated enrollment endpoint. Data is kept in MySQL and accessed with Spring Data JPA, which makes it a compact exercise in modelling how students and courses relate to each other.",
        features: [
            "Create and retrieve student records",
            "Create and retrieve course records",
            "Enroll a student in a course through a dedicated endpoint",
            "Use MySQL for persistent storage and Spring Data JPA for database interaction"
        ],
        stack: ["Java 17+", "Spring Boot", "Spring Web", "Spring Data JPA", "MySQL", "Lombok", "Maven"],
        learned: [
            "Entity relationships and many-to-many mapping",
            "Modelling the relationship between students and courses",
            "Organizing a REST API",
            "Persisting related entities with JPA"
        ],
        repo: "https://github.com/mdsharikansari/student-management-system",
        repoPlaceholder: false,
        image: "./assets/images/project-2.png"
    },
    "task-tracker-api": {
        title: "Task Tracker API",
        category: "APIs",
        short: "RESTful task-management backend with CRUD endpoints, MySQL persistence and Spring Data JPA.",
        overview: "A RESTful backend service for managing tasks through standard CRUD operations. Built as a first backend API project, it focuses on clean API design, database persistence, and separating HTTP endpoints from data access.",
        description: "Each task has a title, a description and a completion status. The API lets a client create, list, fetch, update and delete tasks, and stores them in MySQL through Spring Data JPA, keeping the HTTP layer separate from data access.",
        features: [
            "Create a task with a title, description and completion status",
            "Retrieve all tasks or fetch a single task by its ID",
            "Update an existing task and delete a task by ID",
            "Persist task data in MySQL using Spring Data JPA"
        ],
        stack: ["Java 17+", "Spring Boot", "Spring Web", "Spring Data JPA", "MySQL", "Lombok", "Maven"],
        learned: [
            "REST endpoint design and HTTP methods",
            "CRUD workflows",
            "JPA-based persistence and MySQL configuration",
            "Organizing a Java backend project"
        ],
        repo: "https://github.com/mdsharikansari/task-tracker-api",
        repoPlaceholder: false,
        image: "./assets/images/project-3.png"
    },
    "bank-customer-api": {
        title: "Bank Customer Management REST API",
        category: "APIs",
        short: "Layered Spring Boot REST API for creating, reading, updating and deleting bank customer records.",
        overview: "A Spring Boot REST API for maintaining bank customer records. It exposes endpoints that allow other services to create, retrieve, update, and delete customer information, demonstrating a typical layered backend design.",
        description: "A customer has a name, email and phone number, and the API generates customer IDs and keeps email values unique. Request handling, business logic and persistence are split across controller, service, repository and model layers, with an H2 in-memory database for storage and Postman for trying out the endpoints.",
        note: "This is an educational project, not a production banking system. H2 is an in-memory database, so stored data does not persist after the application stops.",
        features: [
            "Create a customer with name, email and phone number",
            "Retrieve all customers or retrieve one customer by ID",
            "Update customer details and delete a customer",
            "Generate customer IDs and enforce unique customer email values",
            "Separate controller, service, repository and model layers",
            "Use an H2 in-memory relational database and test endpoints with Postman"
        ],
        stack: ["Java", "Spring Boot", "Spring Data JPA", "H2 Database", "Maven", "REST APIs", "IntelliJ IDEA", "Postman"],
        learned: [
            "CRUD API development",
            "Controller-service-repository architecture",
            "JPA entities and database integration",
            "HTTP methods and API testing with Postman",
            "Maven project management"
        ],
        repo: "https://github.com/mdsharikansari/bank-customer-api",
        repoPlaceholder: false,
        image: "./assets/images/project-4.png"
    },
    "console-banking-application": {
        title: "Console Banking Application",
        category: "Applications",
        short: "Core Java console app simulating everyday banking workflows with a layered, in-memory design.",
        overview: "A Core Java console application that simulates everyday banking workflows. Users can open savings or current accounts, deposit and withdraw funds, transfer money, view transaction statements, list accounts, and search accounts by customer name.",
        description: "The application is organized into services, repositories and domain classes, with accounts held in in-memory collections. Transactions are recorded with their type and timestamp so a statement can be generated for an account, and custom exceptions report account, balance and validation problems.",
        note: "Data is stored in memory only, so it is lost when the application exits.",
        features: [
            "Create accounts with optional initial deposits and formatted account numbers",
            "Deposit, withdraw and transfer funds between accounts",
            "Prevent insufficient-funds transactions and transfers to the same account",
            "Record transaction type and timestamp, and generate account statements",
            "Validate input and use custom exceptions for account, balance and validation errors",
            "Use a layered structure with services, repositories, domain classes and in-memory collections"
        ],
        stack: ["Core Java", "OOP", "Interfaces", "Enums", "Collections", "HashMap", "ArrayList", "Streams", "Lambda expressions", "Functional interfaces", "Optional", "UUID", "LocalDateTime", "Exception handling"],
        learned: [
            "Applying object-oriented programming",
            "Service/repository separation",
            "Collection-based data management",
            "Validation and exception handling",
            "Functional Java features such as streams, lambdas and Optional"
        ],
        repo: "https://github.com/mdsharikansari/console-banking-application",
        repoPlaceholder: false,
        image: "./assets/images/project-5.png"
    },
    "ai-trip-planner-agent": {
        title: "AI Trip Planner Agent",
        category: "Applications",
        short: "ReAct-style AI agent built with Python and Google Gemini that uses search and weather tools to draft itineraries.",
        overview: "An AI-powered travel-planning agent built with Python and Google Gemini. Rather than acting only as a conventional chatbot, it can use external tools to gather travel information and current weather data, then combine those observations into a practical itinerary.",
        description: "The agent reads a travel request, then works through a ReAct-style cycle of reasoning, tool calls and observations. It looks up attractions and related information with Google Search through the Serper API, fetches weather data from Open-Meteo, and brings the results together into a final itinerary. The project runs through the provided Kaggle notebook.",
        features: [
            "Interpret a user's travel-planning request",
            "Use Google Search through the Serper API to find attractions and relevant information",
            "Call Open-Meteo to retrieve weather data",
            "Follow a ReAct-style cycle of reasoning, tool calls, observations and a final itinerary",
            "Run through the provided Kaggle notebook"
        ],
        stack: ["Python", "Google Gemini Pro (google-generativeai)", "Serper API", "Open-Meteo API", "Kaggle Notebooks"],
        learned: [
            "Tool-using AI agents",
            "Connecting language models to external APIs",
            "Combining search and weather observations",
            "Synthesizing retrieved information into a travel itinerary"
        ],
        repo: "https://github.com/mdsharikansari/ai-trip-planner-agent",
        repoPlaceholder: false,
        image: "./assets/images/project-6.png"
    }
};

const REPO_CTA_TEXT = "Explore the repository for source code, implementation details, and setup instructions.";

const CERTIFICATIONS_DATA = {
    "dsa-java": {
        title: "Data Structures & Algorithms in Java",
        issuer: "LearnYard",
        date: "2024",
        category: "java",
        priority: 2,
        image: "./assets/images/certifications/dsa-cert.jpg",
        verifyUrl: "",
        description: "A course on data structures and algorithms with Java as the programming language.",
        importantTopics: [
            { group: "Foundations", items: ["Time & space complexity (Big-O)", "Arrays", "Strings", "Recursion", "Sorting algorithms", "Binary search"] },
            { group: "Linear data structures", items: ["Linked lists", "Stacks", "Queues", "Hashing (HashMap / HashSet)"] },
            { group: "Problem-solving techniques", items: ["Two pointers", "Sliding window", "Prefix sums", "Greedy", "Backtracking", "Bit manipulation"] },
            { group: "Trees & heaps", items: ["Binary trees", "Binary search trees", "Tree traversals", "Heaps / priority queues", "Tries"] },
            { group: "Graphs", items: ["BFS & DFS", "Shortest path", "Topological sort", "Union-Find"] },
            { group: "Dynamic programming", items: ["Memoization & tabulation", "Knapsack-style problems", "Subsequence problems"] },
        ],
        skills: ["Java", "Data structures", "Algorithms", "Problem solving"],
        topics: ["Data structures implemented in Java", "Algorithms", "Problem-solving practice"],
        applications: [
            "Solving coding-interview style problems",
            "Choosing suitable data structures when writing Java programs"
        ]
    },
    "google-generative-ai": {
        title: "Introduction to Generative AI Studio",
        issuer: "Google Cloud & Simplilearn",
        date: "October 16, 2025",
        category: "ai-ml",
        priority: 6,
        image: "./assets/images/certifications/google-generative-ai.jpg",
        verifyUrl: "",
        description: "An introductory course on Generative AI Studio, Google Cloud's tooling for working with generative AI models.",
        skills: ["Generative AI fundamentals", "Google Cloud Generative AI Studio"],
        topics: ["Introduction to Generative AI Studio", "Generative AI concepts"],
        applications: ["Experimenting with generative AI models on Google Cloud"]
    },
    "ibm-generative-ai": {
        title: "Generative AI in Action",
        issuer: "IBM SkillsBuild",
        date: "October 22, 2025",
        category: "ai-ml",
        priority: 7,
        // NOTE: this points at the Google certificate image. Replace with the IBM certificate image once it is in /certifications/.
        image: "./assets/images/certifications/google-generative-ai.jpg",
        verifyUrl: "https://www.credly.com/badges/aee93b91-96f6-4042-9220-bc23734e5607",
        description: "An IBM SkillsBuild course on how generative AI is applied in practice.",
        skills: ["Generative AI fundamentals", "Applied AI use cases"],
        topics: ["Generative AI in practice"],
        applications: ["Applying generative AI tools to practical tasks"]
    },
    "ibm-ai-solutions": {
        title: "Building AI Solutions Using Advanced Algorithms and Open Source Frameworks",
        issuer: "IBM SkillsBuild",
        date: "October 22, 2025",
        category: "ai-ml",
        priority: 5,
        image: "./assets/images/certifications/ibm-ai-solutions.jpg",
        verifyUrl: "https://www.credly.com/badges/12ffe408-b495-441e-b15d-064d976fec72",
        description: "An IBM SkillsBuild course on building AI solutions with advanced algorithms and open-source frameworks.",
        skills: ["AI solution development", "Advanced algorithms", "Open-source AI frameworks"],
        topics: ["Advanced algorithms for AI", "Open-source frameworks for AI"],
        applications: ["Building AI-based solutions with open-source tooling"]
    },
    "ibm-agile-explorer": {
        title: "Agile Explorer",
        issuer: "IBM SkillsBuild",
        date: "October 21, 2025",
        category: "other",
        priority: 11,
        image: "./assets/images/certifications/ibm-agile-explorer.jpg",
        verifyUrl: "https://www.credly.com/badges/80cf1efc-75e7-4cb5-9147-15b309649bb2",
        description: "An introductory IBM SkillsBuild course on Agile ways of working.",
        skills: ["Agile fundamentals"],
        topics: ["Agile principles and practices"],
        applications: ["Working in iterative, team-based software projects"]
    },
    "ibm-sustainability": {
        title: "Fundamentals of Sustainability and Technology",
        issuer: "IBM SkillsBuild",
        date: "April 14, 2025",
        category: "other",
        priority: 12,
        image: "./assets/images/certifications/ibm-sustainability.jpg",
        verifyUrl: "https://www.credly.com/badges/a935276d-dcae-4526-9260-cca1769ba53a",
        description: "An IBM SkillsBuild course on the fundamentals of sustainability and the role technology plays in it.",
        skills: ["Sustainability fundamentals", "Technology and sustainability"],
        topics: ["Sustainability fundamentals", "How technology relates to sustainability"],
        applications: ["Considering environmental impact when choosing or designing technology solutions"]
    },
    "ibm-getting-started-ai": {
        title: "Getting Started with Artificial Intelligence",
        issuer: "IBM SkillsBuild",
        date: "September 29, 2024",
        category: "ai-ml",
        priority: 10,
        image: "./assets/images/certifications/ibm-getting-started-ai.jpg",
        verifyUrl: "https://www.credly.com/go/9Uw7IL0Q",
        description: "An introductory IBM SkillsBuild course on artificial intelligence.",
        skills: ["AI fundamentals"],
        topics: ["Introduction to artificial intelligence"],
        applications: ["Foundation for further study in machine learning and AI-powered applications"]
    },
    "ibm-machine-learning": {
        title: "Machine Learning for Data Science Projects",
        issuer: "IBM SkillsBuild",
        date: "June 1, 2026",
        category: "ai-ml",
        priority: 8,
        image: "./assets/images/certifications/ibm-machine-learning.jpg",
        verifyUrl: "https://www.credly.com/badges/b830106e-6857-47e0-b2e9-139b75b96b01",
        description: "An IBM SkillsBuild course on using machine learning within data science projects.",
        skills: ["Machine learning", "Data science projects"],
        topics: ["Machine learning in data science projects"],
        applications: ["Applying machine learning techniques to data science problems"]
    },
    "ibm-enterprise-data-science": {
        title: "Enterprise Data Science in Practice",
        issuer: "IBM SkillsBuild",
        date: "June 1, 2026",
        category: "ai-ml",
        priority: 9,
        image: "./assets/images/certifications/ibm-enterprise-data-science.jpg",
        verifyUrl: "https://www.credly.com/badges/9e963fcd-3093-46b0-8c23-aa92bae86562",
        description: "An IBM SkillsBuild course on how data science is practiced in enterprise settings.",
        skills: ["Data science", "Enterprise data science practice"],
        topics: ["Data science in an enterprise context"],
        applications: ["Understanding how data science work fits into larger organizations"]
    },
    "java-masterclass": {
        title: "Java Masterclass for Absolute Beginners",
        issuer: "Skills Marathon — Akhil Vydyula",
        date: "October 17, 2026",
        category: "java",
        priority: 1,
        image: "./assets/images/certifications/java-masterclass.jpg",
        verifyUrl: "https://ude.my/UC-82d61d12-baa2-487d-86d4-77f720bfa235",
        description: "A beginner-level Java course.",
        importantTopics: [
            { group: "Object-oriented programming", items: ["Classes & objects", "Encapsulation", "Inheritance", "Polymorphism", "Abstraction", "Interfaces vs abstract classes"] },
            { group: "Language essentials", items: ["Exception handling (checked / unchecked, try-catch-finally)", "String immutability & String pool", "equals() & hashCode()", "Generics", "Wrapper classes & autoboxing"] },
            { group: "Collections framework", items: ["List, Set & Map", "HashMap internals", "ArrayList vs LinkedList", "Comparable vs Comparator"] },
            { group: "Multithreading & concurrency", items: ["Threads & Runnable", "Thread lifecycle", "Synchronization", "Executor framework", "Deadlock"] },
            { group: "Modern Java", items: ["Lambda expressions", "Streams API", "Functional interfaces", "Optional"] },
            { group: "JVM basics", items: ["Stack vs heap memory", "Garbage collection"] },
            { group: "Java backend stack", items: ["JDBC & SQL", "Spring Boot", "REST APIs", "Spring Data JPA", "Spring Security & JWT"] },
        ],
        skills: ["Java programming fundamentals"],
        topics: ["Java basics for beginners"],
        applications: ["Writing beginner-level Java programs", "Foundation for learning Spring Boot and backend development"]
    },
    "javascript-freshers": {
        title: "Javascript for Freshers 2026!!",
        issuer: "Uday Academy",
        date: "October 17, 2026",
        category: "web",
        priority: 3,
        image: "./assets/images/certifications/javascript-freshers.jpg",
        verifyUrl: "https://ude.my/UC-355c32dc-47e4-41e7-8dab-d5e205b49b0a",
        description: "A JavaScript course aimed at beginners.",
        importantTopics: [
            { group: "Fundamentals", items: ["var / let / const", "Data types & type coercion", "== vs ===", "Functions & arrow functions", "Scope & hoisting"] },
            { group: "Core concepts", items: ["Closures", "this keyword", "Prototypes & classes", "Higher-order functions"] },
            { group: "Arrays & objects", items: ["map / filter / reduce", "Destructuring", "Spread & rest", "JSON"] },
            { group: "DOM & events", items: ["DOM selection & manipulation", "Event bubbling", "Event delegation"] },
            { group: "Asynchronous JavaScript", items: ["Callbacks", "Promises", "async / await", "Fetch API", "Event loop"] },
            { group: "Modern JavaScript", items: ["ES6+ features", "Modules", "Error handling (try / catch)"] },
        ],
        skills: ["JavaScript fundamentals"],
        topics: ["JavaScript basics for beginners"],
        applications: ["Adding interactivity to web pages"]
    },
    "html-css-web-development": {
        title: "HTML & CSS: The Complete Web Development Guide",
        issuer: "Muhammad Riaz Uddin",
        date: "October 17, 2026",
        category: "web",
        priority: 4,
        image: "./assets/images/certifications/html-css-web-development.jpg",
        verifyUrl: "https://ude.my/UC-1c3ce7ee-5ccf-4c3c-b55e-9210fb5128a9",
        description: "A web development course covering HTML and CSS.",
        importantTopics: [
            { group: "HTML", items: ["Semantic elements", "Forms & validation", "Accessibility (alt text, ARIA)", "Meta tags & SEO basics", "Responsive images", "Lists & tables"] },
            { group: "CSS", items: ["Box model", "Selectors & specificity", "Flexbox", "Grid", "Positioning", "Media queries & responsive design", "CSS variables", "Transitions & animations"] },
        ],
        skills: ["HTML", "CSS", "Web page development"],
        topics: ["HTML", "CSS", "Building web pages"],
        applications: ["Building and styling web pages"]
    },
    "google-ai-agents-intensive": {
        title: "5-Day AI Agents Intensive Course with Google",
        issuer: "Kaggle (with Google)",
        date: "December 18, 2025",
        category: "ai-ml",
        priority: 4,
        image: "./assets/images/certifications/ai-agents-intensive-google.png",
        verifyUrl: "https://www.kaggle.com/certification/badges/mdsharikansari/105",
        description: "Completed the 5-Day AI Agents Intensive Course with Google, applying AI agent concepts to build an AI Trip Planner Agent using Python and Google Gemini. The project demonstrates a ReAct-based workflow in which an AI agent uses external tools to gather travel information, check weather conditions, and generate practical itineraries.",
        importantTopics: [
            { group: "AI Agents Fundamentals", items: ["Understanding AI agents and their capabilities", "Reasoning and acting with the ReAct approach", "Autonomous tool selection and execution", "Combining model reasoning with external information"] },
            { group: "LLMs and Generative AI", items: ["Working with Google Gemini", "Using an LLM to interpret user requests", "Synthesizing information into contextual responses", "Generating personalized travel itineraries"] },
            { group: "Tool Use and API Integration", items: ["Google Search integration through the Serper API", "Retrieving live weather data using Open-Meteo", "Processing tool outputs and observations", "Combining external data to improve responses"] },
            { group: "Python and Implementation", items: ["Building AI-powered applications with Python", "Integrating APIs into an AI agent workflow", "Working with API keys and environment configuration", "Developing and running the project in Kaggle Notebooks"] }
        ],
        skills: ["Python", "Google Gemini", "AI Agents", "Prompt Engineering", "API Integration"],
        topics: [
            "AI agent fundamentals and ReAct workflows",
            "LLM-based reasoning and tool use",
            "Web search and weather API integration",
            "AI-powered travel itinerary generation"
        ],
        applications: [
            "Building an AI Trip Planner Agent that combines web search and weather information",
            "Generating travel itineraries using external data and LLM reasoning",
            "Developing tool-using AI applications with Python and Google Gemini",
            "Applying AI agent concepts to practical, real-world problems"
        ]
    }
};

const CERTIFICATE_CATEGORY_LABELS = {
    "ai-ml": "AI & ML",
    "java": "Java & Backend",
    "web": "Web Development",
    "other": "Other"
};

const CERTIFICATES_PER_PAGE = 6;

// HELPERS
const toggleActive = (elem) => elem.classList.toggle("active");

// Escape text before inserting it into innerHTML templates.
function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, (ch) => (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
    ));
}

// Only allow http(s) links in generated markup.
function safeUrl(url) {
    return /^https?:\/\//i.test(String(url || "")) ? url : "";
}

const FALLBACK_SELECTOR = ".project-img, .project-image, .certification-image, .cert-detail-image";

function replaceWithFallback(img) {
    const holder = img.closest(FALLBACK_SELECTOR);
    if (!holder) return;
    const box = document.createElement("div");
    box.className = "img-fallback";
    box.textContent = holder.matches(".certification-image, .cert-detail-image")
        ? "Image not available"
        : (img.alt || "Preview not available");
    img.replaceWith(box);
}

// Capture phase: "error" events on <img> do not bubble.
document.addEventListener("error", (e) => {
    if (e.target instanceof HTMLImageElement) replaceWithFallback(e.target);
}, true);

// Catches images that failed before the listener above existed.
function checkBrokenImages() {
    document.querySelectorAll(FALLBACK_SELECTOR).forEach((holder) => {
        holder.querySelectorAll("img").forEach((img) => {
            if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) replaceWithFallback(img);
        });
    });
}

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener("click", () => toggleActive(sidebar));
}

// Dark theme only: also clears any "light" choice saved earlier in the browser.
document.documentElement.setAttribute("data-theme", "dark");
try { localStorage.removeItem("theme"); } catch (e) { /* storage unavailable */ }


const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
const savedScroll = {};

function showPage(pageName, navName = pageName) {
    pages.forEach((page) => page.classList.toggle("active", page.dataset.page === pageName));
    navigationLinks.forEach((link) => link.classList.toggle("active", link.dataset.navLink === navName));
    window.scrollTo(0, 0);
}

function openDetailsPage(detailPage, parentPage) {
    savedScroll[parentPage] = window.scrollY;
    showPage(detailPage, parentPage);
}

function closeDetailsPage(parentPage) {
    showPage(parentPage);
    window.scrollTo(0, savedScroll[parentPage] || 0);
}

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => showPage(link.dataset.navLink));
});

document.querySelectorAll("[data-back-to]").forEach((btn) => {
    btn.addEventListener("click", () => closeDetailsPage(btn.dataset.backTo));
});


const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

function setProjectFilter(label) {
    const value = label.trim().toLowerCase();
    filterItems.forEach((item) => {
        item.classList.toggle("active", value === "all" || item.dataset.category === value);
    });
    // Keep the desktop buttons and the mobile dropdown in sync.
    filterBtns.forEach((btn) => btn.classList.toggle("active", btn.textContent.trim().toLowerCase() === value));
    if (selectValue) selectValue.textContent = label.trim();
}

if (select) {
    select.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleActive(select);
    });
    document.addEventListener("click", () => select.classList.remove("active"));
}

selectItems.forEach((item) => {
    item.addEventListener("click", () => {
        setProjectFilter(item.textContent);
        if (select) select.classList.remove("active");
    });
});

filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => setProjectFilter(btn.textContent));
});


const bulletList = (items) => `<ul class="features-list">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;

function showProjectDetails(projectId) {
    const p = PROJECTS_DATA[projectId];
    if (!p) return;

    const repoUrl = safeUrl(p.repo);
    const repoHtml = repoUrl ? `
              <div class="project-cta">
                <a href="${esc(repoUrl)}" class="project-link repo-link" target="_blank" rel="noopener noreferrer"${p.repoPlaceholder ? ' data-placeholder="true" title="Placeholder link: replace with the real repository URL"' : ""}>
                  <ion-icon name="logo-github"></ion-icon>
                  <span>View GitHub Code</span>
                </a>
                <p class="project-cta-text">${esc(REPO_CTA_TEXT)}</p>
              </div>` : "";

    const hasList = (arr) => Array.isArray(arr) && arr.length > 0;

    const noteHtml = p.note ? `<p class="project-note">${esc(p.note)}</p>` : "";

    const overviewHtml = p.overview ? `
            <div class="project-description">
              <h3 class="h3">Overview</h3>
              <p>${esc(p.overview)}</p>
            </div>` : "";

    const descriptionHtml = p.description ? `
            <div class="project-description">
              <h3 class="h3">Project Description</h3>
              <p>${esc(p.description)}</p>
              ${noteHtml}
            </div>` : "";

    const featuresHtml = hasList(p.features) ? `
            <div class="project-features">
              <h3 class="h3">Key Features</h3>
              ${bulletList(p.features)}
            </div>` : "";

    const stackHtml = hasList(p.stack) ? `
            <div class="project-stack">
              <h3 class="h3">Tech Stack</h3>
              <div class="stack-tags">
                ${p.stack.map((s) => `<span class="stack-tag">${esc(s)}</span>`).join("")}
              </div>
            </div>` : "";

    const learnedHtml = hasList(p.learned) ? `
            <div class="project-description">
              <h3 class="h3">What I Learned</h3>
              ${bulletList(p.learned)}
            </div>` : "";

    document.getElementById("dynamic-project-content").innerHTML = `
        <div class="project-header">
            <div class="project-image">
              <img src="${esc(p.image)}" alt="${esc(p.title)}">
            </div>
            <div class="project-info">
              <h1 class="detail-title">${esc(p.title)}</h1>
              <span class="stack-tag detail-chip">${esc(p.category)}</span>
              <p class="project-short">${esc(p.short)}</p>${repoHtml}
            </div>
        </div>

        <div class="project-details-grid${hasList(p.stack) ? "" : " no-stack"}">
            ${overviewHtml}
            ${descriptionHtml}
            ${featuresHtml}
            ${stackHtml}
            ${learnedHtml}
        </div>
    `;

    openDetailsPage("project-details", "portfolio");
}

const projectList = document.querySelector(".project-list");
if (projectList) {
    projectList.addEventListener("click", (e) => {
        const link = e.target.closest("[data-project-id]");
        if (!link) return;
        e.preventDefault();
        showProjectDetails(link.dataset.projectId);
    });
}


let activeCertificateCategory = "all";
let certificatePage = 0;

function getSortedCertificates() {
    return Object.entries(CERTIFICATIONS_DATA)
        .map(([id, cert], index) => ({ id, index, ...cert }))
        .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99) || a.index - b.index);
}

function renderCertifications() {
    const grid = document.getElementById("certifications-grid");
    const showMoreBtn = document.getElementById("show-more-certificates");
    if (!grid) return;

    const filtered = getSortedCertificates().filter((cert) =>
        activeCertificateCategory === "all" || cert.category === activeCertificateCategory
    );
    const visible = filtered.slice(0, (certificatePage + 1) * CERTIFICATES_PER_PAGE);

    if (visible.length === 0) {
        grid.innerHTML = `<p class="certifications-empty">No certificates in this category yet.</p>`;
    } else {
        grid.innerHTML = visible.map((cert) => `
        <div class="certification-card">
            <div class="certification-image">
                <img src="${esc(cert.image)}" alt="${esc(cert.title)}" loading="lazy">
            </div>

            <div class="certification-info">
                <h3 class="certification-title">${esc(cert.title)}</h3>
                <span class="certification-issuer">${esc(cert.issuer)}</span>
                <div class="certification-date">Issued: ${esc(cert.date)}</div>

                <div class="certification-actions">
                    <button type="button" class="cert-btn" data-cert-id="${esc(cert.id)}">
                        <ion-icon name="information-circle-outline"></ion-icon>
                        <span>View Details</span>
                    </button>
                    ${safeUrl(cert.verifyUrl) ? `
                    <a href="${esc(cert.verifyUrl)}" class="cert-btn" target="_blank" rel="noopener noreferrer">
                        <ion-icon name="shield-checkmark-outline"></ion-icon>
                        <span>Verify Certificate</span>
                    </a>` : ""}
                </div>
            </div>
        </div>
        `).join("");
    }

    if (showMoreBtn) {
        showMoreBtn.hidden = visible.length >= filtered.length;
    }
}

function setupCertificates() {
    const filters = document.getElementById("certificate-filters");
    const grid = document.getElementById("certifications-grid");
    const showMoreBtn = document.getElementById("show-more-certificates");

    if (filters) {
        filters.addEventListener("click", (event) => {
            const button = event.target.closest("button[data-category]");
            if (!button) return;

            activeCertificateCategory = button.dataset.category;
            certificatePage = 0;
            filters.querySelectorAll("button[data-category]")
                .forEach((btn) => btn.classList.toggle("active", btn === button));
            renderCertifications();
        });
    }

    if (showMoreBtn) {
        showMoreBtn.addEventListener("click", () => {
            certificatePage++;
            renderCertifications();
        });
    }

    if (grid) {
        grid.addEventListener("click", (event) => {
            const btn = event.target.closest("[data-cert-id]");
            if (btn) showCertificateDetails(btn.dataset.certId);
        });
    }

    renderCertifications();
}


function showCertificateDetails(certId) {
    const c = CERTIFICATIONS_DATA[certId];
    if (!c) return;

    const bulletPanel = (title, items) => (Array.isArray(items) && items.length) ? `
            <div class="cert-panel">
              <h3 class="h3">${title}</h3>
              <ul class="features-list">
                ${items.map((i) => `<li>${esc(i)}</li>`).join("")}
              </ul>
            </div>` : "";

    const skillsPanel = (Array.isArray(c.skills) && c.skills.length) ? `
            <div class="cert-panel">
              <h3 class="h3">Skills Learned</h3>
              <div class="stack-tags">
                ${c.skills.map((s) => `<span class="stack-tag">${esc(s)}</span>`).join("")}
              </div>
            </div>` : "";

    const descriptionPanel = c.description ? `
            <div class="cert-panel cert-panel-wide">
              <h3 class="h3">Course Description</h3>
              <p>${esc(c.description)}</p>
            </div>` : "";

    const importantPanel = (Array.isArray(c.importantTopics) && c.importantTopics.length) ? `
            <div class="cert-panel cert-panel-wide">
              <h3 class="h3">Important Topics in This Area</h3>
              <div class="topic-groups">
                ${c.importantTopics.map((g) => `
                <div class="topic-group">
                  <h4 class="topic-group-title">${esc(g.group)}</h4>
                  <div class="stack-tags">
                    ${g.items.map((i) => `<span class="stack-tag">${esc(i)}</span>`).join("")}
                  </div>
                </div>`).join("")}
              </div>
            </div>` : "";

    const verifyHtml = safeUrl(c.verifyUrl) ? `
              <a href="${esc(c.verifyUrl)}" class="cert-btn cert-btn-inline" target="_blank" rel="noopener noreferrer">
                <ion-icon name="shield-checkmark-outline"></ion-icon>
                <span>Verify Certificate</span>
              </a>` : "";

    const categoryLabel = CERTIFICATE_CATEGORY_LABELS[c.category];

    document.getElementById("dynamic-certificate-content").innerHTML = `
        <div class="project-header">
            <div class="cert-detail-image">
              <img src="${esc(c.image)}" alt="${esc(c.title)}">
            </div>
            <div class="project-info">
              <h1 class="detail-title">${esc(c.title)}</h1>
              <span class="certification-issuer detail-chip">${esc(c.issuer)}</span>
              <div class="certification-date">Issued: ${esc(c.date)}</div>
              ${categoryLabel ? `<span class="stack-tag detail-chip">${esc(categoryLabel)}</span>` : ""}
              ${verifyHtml}
            </div>
        </div>

        <div class="cert-detail-grid">
            ${descriptionPanel}
            ${skillsPanel}
            ${bulletPanel("Key Topics", c.topics)}
            ${bulletPanel("Practical Applications", c.applications)}
            ${importantPanel}
        </div>
    `;

    openDetailsPage("certificate-details", "certifications");
}


const CONTACT_EMAIL = "mdsharik828@gmail.com";

function setupContact() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("contact-status");
    const copyBtn = document.getElementById("copy-email-btn");

    const setStatus = (message, isError = false) => {
        if (!status) return;
        status.textContent = message;
        status.classList.toggle("is-error", isError);
    };

    if (copyBtn) {
        copyBtn.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(CONTACT_EMAIL);
                setStatus("Email address copied to clipboard.");
            } catch (err) {
                setStatus("Couldn’t copy automatically. My email is " + CONTACT_EMAIL + ".", true);
            }
        });
    }

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const data = new FormData(form);
            const name = String(data.get("name") || "").trim();
            const email = String(data.get("email") || "").trim();
            const subject = String(data.get("subject") || "").trim() || "Portfolio message from " + name;
            const message = String(data.get("message") || "").trim();

            if (!name || !email || !message) {
                setStatus("Please fill in your name, email and message.", true);
                return;
            }

            const body = message + "\r\n\r\n— " + name + "\r\n" + email;
            window.location.href = "mailto:" + CONTACT_EMAIL +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(body);
            setStatus("Opening your email app… if nothing opens, email me directly at " + CONTACT_EMAIL + ".");
        });
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    setupCertificates();
    setupContact();
    checkBrokenImages();

    const cvLinks = document.querySelectorAll('a[href$="resume.pdf"]');
    if (cvLinks.length && typeof fetch === "function" && location.protocol.indexOf("http") === 0) {
        fetch(cvLinks[0].href, { method: "HEAD" })
            .then((r) => { if (!r.ok) cvLinks.forEach((cv) => { cv.style.display = "none"; }); })
            .catch(() => { /* leave the buttons visible if the check itself fails */ });
    }
});