// script.js

/* ===== CONFIGURATION OBJECT (EDIT HERE) ===== */
const CONFIG = {
  ownerName: "Hani Hagash",
  tagline: "MSc Electric Power Engineering Student at KTH",
  aboutText: "MSc student in Electrical Engineering (Electric Power) at KTH with a strong interest in large-scale electrical systems and project delivery. Focused on developing as a site-oriented engineer in data center construction through planning and coordination, interpretation of drawings and specifications, and compliance with quality and safety standards.",
  
  // EDIT: Add/remove skill categories here
  skillsCategories: [
    {
      title: "Power Systems and Power Electronics",
      skills: [
        "Power system modeling and analysis",
        "Fast Frequency Reserve (FFR) hardware concepts",
        "Power PCB design with supercapacitors",
        "Buck DC-DC converter design and simulation",
        "Fault analysis (SLG and three-phase)"
      ]
    },
    {
      title: "Electrical Machines and Drives",
      skills: [
        "Induction machine and IPMSM modeling",
        "Field-Oriented Control (FOC)",
        "Sensorless control (MRAS and HF injection)",
        "Thermal and electromagnetic analysis",
        "Machine design trade-off evaluation"
      ]
    },
    {
      title: "Tools and Methods",
      skills: [
        "MATLAB and Simulink",
        "ANSYS and FEMM",
        "LTspice and PSpice",
        "EasyEDA schematic and PCB layout",
        "Y-bus/Z-bus and Newton-Raphson power flow"
      ]
    },
    {
      title: "Verification and Communication",
      skills: [
        "CAN/OBD diagnostics and DoIP download setup",
        "Lab troubleshooting with multimeter and bench supply",
        "Soldering and cable/component rework",
        "Technical documentation (Word, Excel, PowerPoint)",
        "Swedish, English, Tigrinya, Arabic"
      ]
    }
  ],
  
  // EDIT: Add/modify education entries here
  education: [
    {
      title: "MSc in Electric Power Engineering",
      university: "KTH Royal Institute of Technology, Stockholm, Sweden",
      date: "2024 - June 2026 (expected)",
      courses: [
        "Power system modeling and analysis",
        "Electrical machines and drives",
        "Sensorless motor control",
        "Power electronics converter design",
        "Machine modeling with MATLAB/Simulink and FEM tools"
      ]
    },
    {
      title: "BSc in Electrical Engineering",
      university: "Mid Sweden University, Sundsvall, Sweden",
      date: "2021 - 2024",
      courses: [
        "Circuit analysis and design",
        "Power electronics and electrical systems",
        "Electromagnetics and machine fundamentals",
        "Control systems",
        "Measurement, testing, and lab practice"
      ]
    }
  ],
  
  // EDIT: Add/modify work experience entries here
  workExperience: [
    {
      jobTitle: "Verification Engineer (Summer Internship)",
      company: "Volvo Construction Equipment - Volvo Group, Eskilstuna, Sweden",
      dateRange: "Summer 2025",
      bullets: [
        "Collaborated in a global verification team on electrical and electronics hardware for construction equipment.",
        "Built a repeatable low-voltage test setup for TGW3-ICM-MMCU, enabling OBD/CAN diagnostics and DoIP software downloads.",
        "Performed hands-on troubleshooting using multimeter and bench power supply, plus soldering and rework on cables and components.",
        "Produced clear technical documentation and test procedures in Word, Excel, and PowerPoint."
      ]
    }
  ],
  
  // EDIT: Add/modify project entries here (link is optional)
  projects: [
    {
      title: "Master's Thesis - Electric Powertrain Analysis (Volvo CE)",
      description: "Master's thesis at Volvo Construction Equipment focused on thermal, electromagnetic (EMI/EMC), and NVH characteristics of electric powertrains, with requirement definition and concept evaluation using MATLAB/Simulink and ANSYS.",
      link: "",
      image: "./assets/MasterThesis.png"
    },
    {
      title: "Bachelor's Thesis - Fast Frequency Reserve Power PCB",
      description: "Redesigned a power PCB for Fast Frequency Reserve in hydropower applications, integrating supercapacitors and power stage design in EasyEDA, then validating with LTspice, calculations, and lab measurements.",
      link: "",
      image: "./assets/hero.png"
    },
    {
      title: "Power System Modeling and Analysis",
      description: "Developed and analyzed multi-bus power system networks with transformers, lines, and industrial loads using per-unit methods, ABCD matrices, Y-bus/Z-bus, and Newton-Raphson power flow in MATLAB.",
      link: "",
      image: "./assets/hero.png"
    },
    {
      title: "Step-Down (Buck) DC-DC Converter",
      description: "Designed and simulated a high-efficiency buck converter reducing 500-580V to 280V at 20A, including device sizing, thermal checks, and open/closed-loop validation in PSpice.",
      link: "",
      image: "./assets/hero.png"
    },
    {
      title: "Sensorless Control of Induction Machine",
      description: "Developed an MRAS-based sensorless speed estimation scheme with voltage/current model observers and validated stable sensorless FOC behavior under load torque steps in MATLAB/Simulink.",
      link: "",
      image: "./assets/hero.png"
    },
    {
      title: "Sensorless Control of IPMSM",
      description: "Implemented high-frequency injection for rotor position estimation with a digital-domain FOC scheme, discrete-time controllers, and demodulation filtering for position-dependent ripple extraction.",
      link: "",
      image: "./assets/hero.png"
    },
    {
      title: "Modeling and Control of Electrical Machines",
      description: "Built and validated DC, synchronous, and induction machine models, applying FOC and MTPA strategies while analyzing copper losses, non-linear magnetization, and energy efficiency behavior.",
      link: "",
      image: "./assets/hero.png"
    },
    {
      title: "Design and Analysis of Electrical Machines",
      description: "Modeled an IPMSM in FEMM and performed analytical design of a 1.5 kW induction machine, balancing torque/current/flux targets with thermal and manufacturability constraints.",
      link: "",
      image: "./assets/hero.png"
    },
    {
      title: "Decision Trees and Information Gain",
      description: "Implemented ID3 decision trees on MONK datasets, studied entropy and pruning behavior, and evaluated generalization through train/test analysis and cross-validation.",
      link: "",
      image: "./assets/hero.png"
    },
    {
      title: "Support Vector Machines and Kernel Methods",
      description: "Compared linear, polynomial, and RBF kernels, implemented multi-class SVM variants, and tuned hyperparameters to study boundary behavior and overfitting control.",
      link: "",
      image: "./assets/hero.png"
    },
    {
      title: "Naive Bayes, Boosting, and Ensemble Methods",
      description: "Implemented AdaBoost with Naive Bayes and decision trees, compared with SVM/KNN/Random Forest models, and analyzed bias-variance effects across Iris and Vowel datasets.",
      link: "",
      image: "./assets/hero.png"
    }
  ],
  
  // EDIT: Update contact information here
  contact: {
    linkedinUrl: "https://www.linkedin.com/in/hani-hagash-ab6785303/",
    phone: "0739726791",
    email: "Hani.Hagash416@gmail.com"
  }
};

/* ===== DOM RENDERING FUNCTIONS ===== */

// Render navigation brand
function renderNav() {
  document.getElementById('navBrand').textContent = CONFIG.ownerName;
}

// Render hero section
function renderHero() {
  document.getElementById('heroTitle').textContent = CONFIG.ownerName;
  document.getElementById('heroTagline').textContent = CONFIG.tagline;
  document.getElementById('heroAbout').textContent = CONFIG.aboutText;
}

// Render skills section
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = CONFIG.skillsCategories.map((category, index) => `
    <div class="skill-category" data-index="${index}">
      <div class="skill-category-header">
        <h3 class="skill-category-title">${category.title}</h3>
        <button class="skill-toggle" aria-label="Toggle ${category.title}" aria-expanded="false">▼</button>
      </div>
      <ul class="skill-list">
        ${category.skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  
  // Add toggle functionality
  document.querySelectorAll('.skill-category-header').forEach(header => {
    header.addEventListener('click', () => {
      const category = header.parentElement;
      const toggle = header.querySelector('.skill-toggle');
      const expanded = category.classList.toggle('expanded');
      toggle.setAttribute('aria-expanded', expanded);
    });
  });
}

// Render education timeline
function renderEducation() {
  const timeline = document.getElementById('educationTimeline');
  timeline.innerHTML = CONFIG.education.map((edu, index) => `
    <div class="timeline-item-vertical" data-index="${index}" tabindex="0" role="button" aria-label="View details for ${edu.title}">
      <div class="timeline-card">
        <h3 class="timeline-title">${edu.title}</h3>
        <div class="timeline-meta">
          <div>${edu.university}</div>
          <div class="timeline-date">${edu.date}</div>
        </div>
      </div>
    </div>
  `).join('');
  
  // Add click handlers to open modal
  document.querySelectorAll('.timeline-item-vertical').forEach(item => {
    const clickHandler = () => {
      const index = item.dataset.index;
      const edu = CONFIG.education[index];
      openModal(`
        <h2 class="modal-title">${edu.title}</h2>
        <div class="modal-meta">
          <div><strong>${edu.university}</strong></div>
          <div>${edu.date}</div>
        </div>
        <div class="modal-section">
          <h3 class="modal-section-title">Relevant Coursework</h3>
          <ul class="modal-list">
            ${edu.courses.map(course => `<li>${course}</li>`).join('')}
          </ul>
        </div>
      `);
    };
    
    item.addEventListener('click', clickHandler);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        clickHandler();
      }
    });
  });
}

// Render work experience timeline
function renderExperience() {
  const timeline = document.getElementById('experienceTimeline');
  timeline.innerHTML = CONFIG.workExperience.map((job, index) => `
    <div class="timeline-item-horizontal" data-index="${index}" tabindex="0" role="button" aria-label="View details for ${job.jobTitle}">
      <div class="timeline-card">
        <h3 class="timeline-title">${job.jobTitle}</h3>
        <div class="timeline-meta">
          <div><strong>${job.company}</strong></div>
          <div class="timeline-date">${job.dateRange}</div>
        </div>
         </div>
</div>
`).join('');
// Add click handlers to open modal
document.querySelectorAll('.timeline-item-horizontal').forEach(item => {
const clickHandler = () => {
const index = item.dataset.index;
const job = CONFIG.workExperience[index];
openModal(`
  <h2 class="modal-title">${job.jobTitle}</h2>
  <div class="modal-meta">
    <div><strong>${job.company}</strong></div>
    <div>${job.dateRange}</div>
  </div>
  <div class="modal-section">
    <h3 class="modal-section-title">Key Responsibilities & Achievements</h3>
    <ul class="modal-list">
      ${job.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
    </ul>
  </div>
`);
};
item.addEventListener('click', clickHandler);
item.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    clickHandler();
  }
});
});
// Setup horizontal scroll navigation
setupHorizontalScroll('experienceTimeline', 'expNavLeft', 'expNavRight');
}
// Render projects carousel
function renderProjects() {
const carousel = document.getElementById('projectsCarousel');
carousel.innerHTML = CONFIG.projects.map(project => {
const bgImage = project.image || './assets/hero.png';
const linkButton = project.link
  ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View Project</a>`
  : '';
return `
  <div class="project-card" style="background-image: url('${bgImage}');">
    <div class="project-overlay">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      ${linkButton}
    </div>
  </div>
`;
}).join('');
// Setup carousel navigation
setupHorizontalScroll('projectsCarousel', 'projNavLeft', 'projNavRight');
}
// Render contact section
function renderContact() {
const grid = document.getElementById('contactGrid');
grid.innerHTML = `
  <div class="contact-item">
    <a href="${CONFIG.contact.linkedinUrl}" class="contact-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
      <span class="contact-emoji">&#128188;</span>
      <span class="contact-text">LinkedIn</span>
    </a>
  </div>
  <div class="contact-item">
    <a href="tel:${CONFIG.contact.phone}" class="contact-link" aria-label="Phone number">
      <span class="contact-emoji">&#128241;</span>
      <span class="contact-text">${CONFIG.contact.phone}</span>
    </a>
  </div>
  <div class="contact-item">
    <a href="mailto:${CONFIG.contact.email}" class="contact-link" aria-label="Email address">
      <span class="contact-emoji">&#128231;</span>
      <span class="contact-text">${CONFIG.contact.email}</span>
    </a>
  </div>
`;
}
/* ===== MODAL FUNCTIONS ===== */
function openModal(content) {
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
modalBody.innerHTML = content;
modal.classList.add('active');
document.body.style.overflow = 'hidden';
// Focus management
const closeBtn = document.getElementById('modalClose');
closeBtn.focus();
}
function closeModal() {
const modal = document.getElementById('modal');
modal.classList.remove('active');
document.body.style.overflow = '';
}
// Modal event listeners
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', (e) => {
if (e.target.id === 'modal') {
closeModal();
}
});
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape') {
const modal = document.getElementById('modal');
if (modal.classList.contains('active')) {
closeModal();
}
}
});
/* ===== HORIZONTAL SCROLL NAVIGATION ===== */
function setupHorizontalScroll(containerId, leftBtnId, rightBtnId) {
const container = document.getElementById(containerId);
const leftBtn = document.getElementById(leftBtnId);
const rightBtn = document.getElementById(rightBtnId);
leftBtn.addEventListener('click', () => {
container.scrollBy({ left: -350, behavior: 'smooth' });
});
rightBtn.addEventListener('click', () => {
container.scrollBy({ left: 350, behavior: 'smooth' });
});
// Touch swipe support is built-in via scroll-snap
}
/* ===== SMOOTH SCROLL FOR NAVIGATION ===== */
document.querySelectorAll('.nav-links a').forEach(link => {
link.addEventListener('click', (e) => {
e.preventDefault();
const targetId = link.getAttribute('href');
const targetSection = document.querySelector(targetId);
if (targetSection) {
const navHeight = document.querySelector('.nav').offsetHeight;
const targetPosition = targetSection.offsetTop - navHeight;
window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}
});
});
/* ===== INITIALIZATION ===== */
document.addEventListener('DOMContentLoaded', () => {
renderNav();
renderHero();
renderSkills();
renderEducation();
renderExperience();
renderProjects();
renderContact();
});
