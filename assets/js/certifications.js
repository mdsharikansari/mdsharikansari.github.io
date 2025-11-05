'use strict';

// Certifications data
const CERTIFICATIONS_DATA = {
    "dsa-java": {
        id: "dsa-java",
        title: "Data Structures & Algorithms in Java",
        issuer: "LearnYard",
        date: "2024",
        image: "./assets/images/certifications/dsa-cert.png",
        verifyUrl: "#",
        category: "Programming"
    },
    "google-generative-ai": {
        id: "google-generative-ai",
        title: "Introduction to Generative AI Studio",
        issuer: "Google Cloud & Simplilearn",
        date: "October 16, 2025",
        image: "./assets/images/certifications/google-generative-ai.jpg",
        verifyUrl: "#",
        category: "AI & Machine Learning"
    },
    "ibm-generative-ai": {
        id: "ibm-generative-ai",
        title: "Generative AI in Action",
        issuer: "IBM SkillsBuild",
        date: "October 22, 2025",
        image: "./assets/images/certifications/ibm-gen-ai.jpg",
        verifyUrl: "https://www.credly.com/badges/ace93b91-96f6-4042-9220-bc23734e5607",
        category: "AI & Machine Learning"
    },
    "ibm-ai-solutions": {
        id: "ibm-ai-solutions",
        title: "Building AI Solutions Using Advanced Algorithms",
        issuer: "IBM SkillsBuild",
        date: "October 22, 2025",
        image: "./assets/images/certifications/building-ai-solution.jpg",
        verifyUrl: "https://www.credly.com/badges/12ffe408-b495-441e-b154-0644976fec72",
        category: "AI & Machine Learning"
    }
};

// page load with transitions
window.addEventListener('load', function() {
    console.log('=== CERTIFICATIONS PAGE LOADED ===');
    
    const certificationsContainer = document.getElementById('certifications-container');
    const certificationsGrid = document.getElementById('certifications-grid');
    const certificationsLoading = document.getElementById('certifications-loading');
    const certificationsNotFound = document.getElementById('certifications-not-found');
    
    // Check if elements exist
    if (!certificationsContainer || !certificationsGrid || !certificationsLoading || !certificationsNotFound) {
        console.error('Required DOM elements not found!');
        return;
    }
    
    // loading animation
    certificationsLoading.innerHTML = `
        <p>Loading certifications...</p>
        <div class="loading-spinner"></div>
    `;
    
    // Simulate loading for better UX (remove in production)
    setTimeout(() => {
        displayCertifications();
    }, 800);
});

function displayCertifications() {
    const certificationsGrid = document.getElementById('certifications-grid');
    const certificationsLoading = document.getElementById('certifications-loading');
    const certificationsContainer = document.getElementById('certifications-container');
    
    console.log('Displaying certifications:', Object.keys(CERTIFICATIONS_DATA).length);
    
    let certificationsHTML = '';
    let index = 0;
    
    // Loop through all certifications and create HTML
    Object.values(CERTIFICATIONS_DATA).forEach(certification => {
        certificationsHTML += `
            <div class="certification-card" data-certification-id="${certification.id}" style="animation-delay: ${index * 0.1}s">
                <div class="certification-image">
                    <img src="${certification.image}" alt="${certification.title}" loading="lazy"
                         onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'padding: 60px; text-align: center; color: #999;\\'>Certificate image not available</div>';"
                         onload="this.classList.add('loaded')">
                </div>
                <div class="certification-info">
                    <h3 class="certification-title">${certification.title}</h3>
                    <span class="certification-issuer">${certification.issuer}</span>
                    <div class="certification-date">Issued: ${certification.date}</div>
                    ${certification.verifyUrl && certification.verifyUrl !== '#' ? 
                        `<a href="${certification.verifyUrl}" class="certification-verify" target="_blank">
                            <ion-icon name="shield-checkmark-outline"></ion-icon>
                            <span>Verify Certificate</span>
                        </a>` : 
                        '<div style="height: 40px;"></div>'
                    }
                </div>
            </div>
        `;
        index++;
    });
    
    // Fade out loading, then display content
    certificationsLoading.style.opacity = '0';
    certificationsLoading.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        certificationsLoading.style.display = 'none';
        certificationsGrid.innerHTML = certificationsHTML;
        certificationsContainer.style.display = 'block';
        
        // Trigger animations
        setTimeout(() => {
            certificationsContainer.style.opacity = '1';
        }, 50);
    }, 300);
    
    // Update page title
    document.title = `Certifications | Md Sharik Ansari`;
    
    // Add smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// back navigation
document.addEventListener('DOMContentLoaded', function() {
    // Set certifications nav link as active
    const navLinks = document.querySelectorAll('.navbar-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.textContent === 'Certifications' || link.href.includes('certifications.html')) {
            link.classList.add('active');
        }
    });

    // Enhanced sidebar functionality
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");
    if (sidebar && sidebarBtn) {
        sidebarBtn.addEventListener("click", function() {
            sidebar.classList.toggle("active");
        });
    }
});
// navigation from certifications page
document.addEventListener('DOMContentLoaded', function() {
    // navbar links for smooth transitions back to main site
    const navLinks = document.querySelectorAll('.navbar-link[data-nav-link]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-nav-link');
            
            // exit transition
            document.body.classList.add('page-transitioning');
            
            // Fade out certifications page
            const certificationsPage = document.querySelector('.certifications');
            if (certificationsPage) {
                certificationsPage.style.opacity = '0';
                certificationsPage.style.transform = 'translateY(20px)';
                certificationsPage.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            }
            
            // Navigate to main site after transition
            setTimeout(() => {
                // Store the target section to navigate to
                localStorage.setItem('targetSection', targetSection);
                localStorage.setItem('returnFromCertifications', 'true');
                window.location.href = 'index.html';
            }, 300);
        });
    });
});