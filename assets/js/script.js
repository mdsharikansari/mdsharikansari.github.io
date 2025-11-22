'use strict';

// --- DATA: PROJECTS ---
const PROJECTS_DATA = {
    "secure-blog-api": {
        title: "Secure Blog API",
        category: "APIs",
        short: "Secure REST API for multi-user blogging with JWT authentication and role-based access control.",
        description: "A robust backend API built with Spring Boot that provides secure blogging functionality with user authentication, post management, and comment systems.",
        features: [
            "JWT-based authentication and role-based access",
            "CRUD operations for posts and comments",
            "Pagination and search filters",
            "Global exception handling and DTO validation"
        ],
        stack: ["Java", "Spring Boot", "Spring Security", "MySQL", "JPA", "JWT"],
        repo: "https://github.com/mdsharikansari/secure-blog-api",
        image: "./assets/images/project-1.png"
    },
    "student-management-system": {
        title: "Student Management System",
        category: "Web Applications",
        short: "Web application for managing students, courses, and results through an admin dashboard.",
        description: "A full-stack web application that streamlines student data management with an intuitive admin interface and comprehensive CRUD operations.",
        features: [
            "Designed a complex Many-to-Many database relationship between students and courses",
            "Admin authentication and session management",
            "CRUD for students and course assignments",
            "Created relational endpoints to enroll students in specific courses"
        ],
        stack: ["Java", "Spring Boot", "Spring Web", "Spring Data JPA", "MySQL", "Lombok", "Maven"],
        repo: "https://github.com/mdsharikansari/student-management-system",
        image: "./assets/images/project-2.png"
    },
    "task-tracker-api": {
        title: "Task Tracker API",
        category: "APIs",
        short: "Backend API for managing tasks with priorities, tags, and due dates.",
        description: "A comprehensive task management API featuring scheduling capabilities, priority-based organization, and flexible filtering options.",
        features: [
            "CRUD operations for tasks",
            "Tag and priority support",
            "Filtering by status or due date",
            "Background scheduling with Quartz"
        ],
        stack: ["Java", "Spring Boot", "Quartz Scheduler", "MySQL", "REST API"],
        repo: "https://github.com/mdsharikansari/task-tracker-api",
        image: "./assets/images/project-3.png"
    }
};

// --- DATA: CERTIFICATIONS ---
const CERTIFICATIONS_DATA = {
    "dsa-java": {
        title: "Data Structures & Algorithms in Java",
        issuer: "LearnYard",
        date: "2024",
        image: "./assets/images/certifications/dsa-cert.png",
        verifyUrl: "#",
        category: "Programming"
    },
    "google-generative-ai": {
        title: "Introduction to Generative AI Studio",
        issuer: "Google Cloud & Simplilearn",
        date: "October 16, 2025",
        image: "./assets/images/certifications/google-generative-ai.jpg",
        verifyUrl: "#",
        category: "AI & Machine Learning"
    },
    "ibm-generative-ai": {
        title: "Generative AI in Action",
        issuer: "IBM SkillsBuild",
        date: "October 22, 2025",
        image: "./assets/images/certifications/ibm-gen-ai.jpg",
        verifyUrl: "https://www.credly.com/badges/ace93b91-96f6-4042-9220-bc23734e5607",
        category: "AI & Machine Learning"
    },
    "ibm-ai-solutions": {
        title: "Building AI Solutions Using Advanced Algorithms",
        issuer: "IBM SkillsBuild",
        date: "October 22, 2025",
        image: "./assets/images/certifications/building-ai-solution.jpg",
        verifyUrl: "https://www.credly.com/badges/12ffe408-b495-441e-b154-0644976fec72",
        category: "AI & Machine Learning"
    }
};

// --- HELPER: Element Toggle ---
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// --- SIDEBAR TOGGLE ---
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

// --- THEME TOGGLE (DARK/LIGHT) ---
const themeBtn = document.querySelector("[data-theme-btn]");
const themeIcon = themeBtn.querySelector("ion-icon");

// Check LocalStorage for preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  themeIcon.setAttribute("name", "sunny-outline");
} else {
  document.documentElement.setAttribute("data-theme", "dark");
  themeIcon.setAttribute("name", "moon-outline");
}

themeBtn.addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  
  if (currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeIcon.setAttribute("name", "moon-outline");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    themeIcon.setAttribute("name", "sunny-outline");
  }
});


// --- FILTERING (PORTFOLIO) ---
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// Select Box functionality
if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

if (selectItems.length > 0) {
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  }
}

// Filter Button functionality
let lastClickedBtn = filterBtn[0];
if (filterBtn.length > 0) {
  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      filterFunc(selectedValue);
      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }
}

// --- NAVIGATION (SINGLE PAGE APP LOGIC) ---
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add Event Listener to Nav Links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const targetPage = this.getAttribute('data-nav-link').toLowerCase();
    
    // Update Active Nav Link
    for (let j = 0; j < navigationLinks.length; j++) {
        if (navigationLinks[j].getAttribute('data-nav-link').toLowerCase() === targetPage) {
            navigationLinks[j].classList.add("active");
        } else {
            navigationLinks[j].classList.remove("active");
        }
    }

    // Update Active Page Article
    for (let j = 0; j < pages.length; j++) {
      if (targetPage === pages[j].dataset.page) {
        pages[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
      }
    }
  });
}


// --- DYNAMIC PROJECT DETAILS ---
function showProjectDetails(projectId) {
    const projectData = PROJECTS_DATA[projectId];
    if (!projectData) return;

    const contentContainer = document.getElementById("dynamic-project-content");
    
    // Inject Content
    contentContainer.innerHTML = `
        <div class="project-header">
            <div class="project-image">
              <img src="${projectData.image}" alt="${projectData.title}" loading="lazy">
            </div>
            <div class="project-info">
              <h1 class="project-title">${projectData.title}</h1>
              <span class="project-category">${projectData.category}</span>
              <p class="project-short">${projectData.short}</p>
              <div class="project-links">
                <a href="${projectData.repo}" class="project-link repo-link" target="_blank">
                  <ion-icon name="logo-github"></ion-icon>
                  <span>View Code</span>
                </a>
              </div>
            </div>
        </div>

        <div class="project-details-grid">
            <div class="project-description">
              <h3 class="h3">Project Description</h3>
              <p>${projectData.description}</p>
            </div>

            <div class="project-features">
              <h3 class="h3">Key Features</h3>
              <ul class="features-list">
                ${projectData.features.map(f => `<li>${f}</li>`).join('')}
              </ul>
            </div>

            <div class="project-stack">
              <h3 class="h3">Tech Stack</h3>
              <div class="stack-tags">
                ${projectData.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}
              </div>
            </div>
        </div>
    `;

    // Switch View: Hide all pages, Show project details
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active");
    }
    document.querySelector("[data-page='project-details']").classList.add("active");
    window.scrollTo(0, 0);
}

function closeProjectDetails() {
    // Switch View: Hide project details, Show Portfolio
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active");
    }
    document.querySelector("[data-page='portfolio']").classList.add("active");
    window.scrollTo(0, 0);
}


// --- DYNAMIC CERTIFICATIONS RENDERING ---
function renderCertifications() {
    const grid = document.getElementById('certifications-grid');
    if (!grid) return;

    let html = '';
    Object.values(CERTIFICATIONS_DATA).forEach(cert => {
        html += `
            <div class="certification-card">
                <div class="certification-image">
                    <img src="${cert.image}" alt="${cert.title}" loading="lazy"
                         onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'padding: 60px; text-align: center; color: #999;\\'>Image not available</div>';">
                </div>
                <div class="certification-info">
                    <h3 class="certification-title">${cert.title}</h3>
                    <span class="certification-issuer">${cert.issuer}</span>
                    <div class="certification-date">Issued: ${cert.date}</div>
                    ${cert.verifyUrl && cert.verifyUrl !== '#' ? 
                        `<a href="${cert.verifyUrl}" class="certification-verify" target="_blank">
                            <ion-icon name="shield-checkmark-outline"></ion-icon>
                            <span>Verify Certificate</span>
                        </a>` : ''
                    }
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

// Update Date
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("year").textContent = new Date().getFullYear();
    renderCertifications();
});