'use strict';

// element toggle function
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar); 
  });
}

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { 
    elementToggleFunc(this); 
  });
}

// add event in all select items
if (selectItems.length > 0) {
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) {
        selectValue.innerText = this.innerText;
      }
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  }
}

// filter variables
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

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

if (filterBtn.length > 0) {
  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) {
        selectValue.innerText = this.innerText;
      }
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }
}

// PAGE NAVIGATION
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Page transition animation
function fadeOutPage(callback) {
  const activePage = document.querySelector('article.active');
  if (activePage) {
    activePage.style.opacity = '0';
    activePage.style.transform = 'translateY(20px)';
    activePage.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    setTimeout(() => {
      if (callback) callback();
    }, 300);
  } else {
    if (callback) callback();
  }
}

function fadeInPage(pageElement) {
  pageElement.style.opacity = '0';
  pageElement.style.transform = 'translateY(20px)';
  pageElement.classList.add('active');
  
  // Force reflow
  pageElement.offsetHeight;
  
  pageElement.style.opacity = '1';
  pageElement.style.transform = 'translateY(0)';
  pageElement.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
}

// navigation with smooth transitions
if (navigationLinks.length > 0 && pages.length > 0) {
  navigationLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      const targetPage = this.getAttribute('data-nav-link');
      
      // Handle certifications page (external page) with smooth transition
      if (targetPage === 'certifications') {
        e.preventDefault();
        
        // Add loading state
        document.body.classList.add('page-transitioning');
        
        // Fade out current content
        fadeOutPage(() => {
          // Navigate to certifications page after fade out
          setTimeout(() => {
            window.location.href = 'certifications.html';
          }, 200);
        });
        
        return;
      }
      
      if (this.classList.contains('active')) return;
      
      document.body.classList.add('page-transitioning');
      
      localStorage.removeItem('returnToPortfolio');
      
      // Fade out current page
      fadeOutPage(() => {
        navigationLinks.forEach(l => l.classList.remove("active"));
        pages.forEach(p => {
          p.classList.remove("active");
          p.style.opacity = '0';
          p.style.transform = 'translateY(20px)';
        });

        // Activate the clicked link
        this.classList.add("active");

        const matchingPage = document.querySelector(`[data-page="${targetPage}"]`);
        if (matchingPage) {
          fadeInPage(matchingPage);
          
          // Scroll to top smoothly
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          
          history.pushState(null, null, `#${targetPage}`);
        }
        
        setTimeout(() => {
          document.body.classList.remove('page-transitioning');
        }, 400);
      });
    });
  });
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
  const hash = window.location.hash.substring(1);
  if (hash) {
    const targetLink = document.querySelector(`[data-nav-link="${hash}"]`);
    if (targetLink) {
      targetLink.click();
    }
  }
});

// Check if we should return to portfolio section on page load
function checkPortfolioReturn() {
  if (localStorage.getItem('returnToPortfolio') === 'true') {
    localStorage.removeItem('returnToPortfolio');
    
    // Find and activate portfolio section
    const portfolioNav = document.querySelector('[data-nav-link="portfolio"]');
    const portfolioPage = document.querySelector('[data-page="portfolio"]');
    
    if (portfolioNav && portfolioPage) {
      // Remove active from all
      navigationLinks.forEach(nav => nav.classList.remove("active"));
      pages.forEach(page => page.classList.remove("active"));
      
      // Activate portfolio
      portfolioNav.classList.add("active");
      portfolioPage.classList.add("active");
      
      // Scroll to top
      window.scrollTo(0, 0);
    }
  }
}

// Check if we're returning from certifications page
function checkCertificationsReturn() {
  if (localStorage.getItem('returnFromCertifications') === 'true') {
    const targetSection = localStorage.getItem('targetSection') || 'about';
    
    localStorage.removeItem('returnFromCertifications');
    localStorage.removeItem('targetSection');
    
    // Find and activate the target section
    const targetNav = document.querySelector(`[data-nav-link="${targetSection}"]`);
    const targetPage = document.querySelector(`[data-page="${targetSection}"]`);
    
    if (targetNav && targetPage) {
      // Remove active from all
      navigationLinks.forEach(nav => nav.classList.remove("active"));
      pages.forEach(page => {
        page.classList.remove("active");
        page.style.opacity = '0';
        page.style.transform = 'translateY(20px)';
      });

      // Activate target section
      targetNav.classList.add("active");
      fadeInPage(targetPage);
      
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}

// Initialize the page with fade-in effect
document.addEventListener('DOMContentLoaded', function() {
  // Add initial fade-in to active page
  const activePage = document.querySelector('article.active');
  if (activePage) {
    activePage.style.opacity = '0';
    activePage.style.transform = 'translateY(0)';
    activePage.style.transition = 'opacity 0.5s ease';
    
    // Force reflow
    activePage.offsetHeight;
    
    activePage.style.opacity = '1';
  }
  
  // Check if we're returning from a project page
  checkPortfolioReturn();
  
  // Check if we're returning from certifications page
  checkCertificationsReturn();
  
  // Set the first page as active if none is active
  const activePages = document.querySelectorAll('article.active');
  if (activePages.length === 0 && pages.length > 0) {
    pages[0].classList.add('active');
  }
  
  // Set the first nav link as active if none is active
  const activeLinks = document.querySelectorAll('.navbar-link.active');
  if (activeLinks.length === 0 && navigationLinks.length > 0) {
    navigationLinks[0].classList.add('active');
  }
  
  // Remove loading state after page is fully loaded
  window.addEventListener('load', function() {
    document.body.classList.remove('page-transitioning');
  });
});

// Fallback for missing images
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pgo8L3N2Zz4K';
      this.alt = 'Image not found';
    });
  });
});

// Project link click handler
document.addEventListener('DOMContentLoaded', function() {
  const projectLinks = document.querySelectorAll('[data-project-link]');
  
  projectLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Store that we're in portfolio section
      localStorage.setItem('returnToPortfolio', 'true');
    });
  });
});

// Certifications link click handler
document.addEventListener('DOMContentLoaded', function() {
  const certificationsLinks = document.querySelectorAll('[data-nav-link="certifications"]');
  
  certificationsLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // For certifications page (external), let the default navigation handle it
      // The main navigation handler above will redirect to certifications.html
    });
  });
});
// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});