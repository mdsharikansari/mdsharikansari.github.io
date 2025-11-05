'use strict';

// Project data - SIMPLIFIED AND TESTED
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
            "Admin authentication and session management",
            "CRUD for students and course assignments",
            "CSV import/export for bulk operations",
            "Responsive layout with Bootstrap"
        ],
        stack: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Bootstrap", "Spring MVC"],
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

// Wait for page to load
window.addEventListener('load', function() {
    console.log('=== PROJECT PAGE LOADED ===');
    
    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    console.log('URL Project ID:', projectId);
    console.log('Available projects:', Object.keys(PROJECTS_DATA));
    
    const projectContainer = document.getElementById('project-container');
    const projectLoading = document.getElementById('project-loading');
    const projectNotFound = document.getElementById('project-not-found');
    
    // Check if elements exist
    if (!projectContainer || !projectLoading || !projectNotFound) {
        console.error('Required DOM elements not found!');
        return;
    }
    
    // Check if project exists
    if (projectId && PROJECTS_DATA[projectId]) {
        console.log('✅ Project found:', PROJECTS_DATA[projectId].title);
        displayProject(PROJECTS_DATA[projectId]);
    } else {
        console.log('❌ Project not found for ID:', projectId);
        showNotFound();
    }
});

function displayProject(project) {
    const projectContainer = document.getElementById('project-container');
    const projectLoading = document.getElementById('project-loading');
    
    console.log('Displaying project:', project.title);
    
    const projectHTML = `
        <div class="project-header">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy" 
                     onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'padding: 60px; text-align: center; color: #999;\\'>Image not available</div>';">
            </div>
            <div class="project-info">
                <h1 class="project-title">${project.title}</h1>
                <span class="project-category">${project.category}</span>
                <p class="project-short">${project.short}</p>
                
                <div class="project-links">
                    <a href="${project.repo}" class="project-link repo-link" target="_blank">
                        <ion-icon name="logo-github"></ion-icon>
                        <span>View Code</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="project-details-grid">
            <div class="project-description">
                <h3 class="h3">Project Description</h3>
                <p>${project.description}</p>
            </div>

            <div class="project-features">
                <h3 class="h3">Key Features</h3>
                <ul class="features-list">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>

            <div class="project-stack">
                <h3 class="h3">Tech Stack</h3>
                <div class="stack-tags">
                    ${project.stack.map(tech => `<span class="stack-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    projectContainer.innerHTML = projectHTML;
    projectContainer.style.display = 'block';
    projectLoading.style.display = 'none';
    
    // Update page title
    document.title = `${project.title} | Md Sharik Ansari`;
}

function showNotFound() {
    const projectLoading = document.getElementById('project-loading');
    const projectNotFound = document.getElementById('project-not-found');
    
    projectLoading.style.display = 'none';
    projectNotFound.style.display = 'block';
}

// Add sidebar functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");
    
    if (sidebar && sidebarBtn) {
        sidebarBtn.addEventListener("click", function() {
            sidebar.classList.toggle("active");
        });
    }
});