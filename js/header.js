// --- INJECT HEADER CSS ---
const headerCSS = `
    .nav-container {
        position: fixed;
        top: 15px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 30px);
        max-width: 1200px;
        z-index: 1000;
    }
    header {
        position: relative; /* <-- ADDED: Keeps the mobile menu perfectly aligned below it */
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 100px;
        padding: 10px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 10px 30px rgba(27, 77, 62, 0.1);
    }
    .logo img { height: 40px; width: auto; object-fit: contain; }
    
    .nav-links {
        display: flex;
        gap: 24px;
        list-style: none;
        margin: 0;
        padding: 0;
        align-items: center;
    }
    .nav-links li {
        position: relative;
    }
    .nav-links a {
        font-size: 14px;
        font-weight: 600;
        color: #0f172a;
        text-decoration: none;
        transition: color 0.3s;
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .nav-links a:hover { color: #c5a059; }

    /* --- DROPDOWN STYLING (DESKTOP) --- */
    .dropdown-content {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: 150%;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 16px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        min-width: 220px;
        padding: 10px 0;
        z-index: 1001;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: flex;
        flex-direction: column;
    }
    
    .nav-links li:hover .dropdown-content {
        visibility: visible;
        opacity: 1;
        top: 120%;
    }

    .dropdown-content a {
        padding: 10px 24px;
        font-weight: 500;
        font-size: 13px;
        white-space: nowrap;
        border-radius: 8px;
        margin: 0 8px;
    }
    .dropdown-content a:hover {
        background: rgba(197, 160, 89, 0.1);
        color: #1b4d3e;
    }

    /* --- PORTAL BUTTON STYLING --- */
    .portal-btn {
        background: #1b4d3e;
        color: #fff !important;
        padding: 8px 20px;
        border-radius: 50px;
        border: 1px solid #1b4d3e;
        transition: all 0.3s;
    }
    .portal-btn:hover {
        background: #c5a059;
        border-color: #c5a059;
        box-shadow: 0 10px 20px rgba(197, 160, 89, 0.3);
    }
    
    .mobile-menu-btn {
        display: none;
        background: none;
        border: none;
        font-size: 24px;
        color: #1b4d3e;
        cursor: pointer;
    }

    /* --- MOBILE RESPONSIVENESS FIXES --- */
    @media (max-width: 992px) {
        .mobile-menu-btn { display: block; }
        
        .nav-links {
            display: none;
            position: absolute;
            top: calc(100% + 15px); /* <-- Anchors just below the glass pill */
            left: 0;
            width: 100%;
            box-sizing: border-box; /* <-- Stops the padding from breaking the screen width */
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            border: 1px solid rgba(255,255,255,0.5);
        }
        
        .nav-links.active { display: flex; }
        .nav-links li { 
            width: 100%; 
            margin-bottom: 10px; 
            box-sizing: border-box; 
        }
        
        /* Mobile Accordion Dropdown */
        .dropdown-content {
            position: relative;
            top: 0 !important;
            left: 0;
            transform: none;
            box-shadow: none;
            border: none;
            background: transparent;
            padding: 10px 0 5px 15px; /* Indents the sub-links slightly */
            width: 100%;
            box-sizing: border-box;
            display: none;
            opacity: 1;
            visibility: visible;
        }
        
        .nav-links li.mobile-dropdown-active .dropdown-content {
            display: flex;
        }
        .nav-links li:hover .dropdown-content {
            top: 0; 
        }
        
        .portal-btn { 
            box-sizing: border-box; 
            display: block; 
            text-align: center; 
            justify-content: center; 
            width: 100%; 
            margin-top: 10px;
        }
    }
`;

const headerStyleTag = document.createElement("style");
headerStyleTag.innerHTML = headerCSS;
document.head.appendChild(headerStyleTag);

// --- INJECT HEADER HTML ---
const headerHTML = `
    <div class="nav-container">
        <header>
            <a href="/" class="logo">
                <img src="https://image1.jdomni.in/storeLogo/23022026/23/0A/4A/6F82981B0A8135832085D87DAE_1771865831290.png?output-format=webp" alt="AOA Logo">
            </a>
            
            <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
                <i class="fa-solid fa-bars"></i>
            </button>

            <ul class="nav-links" id="nav-links">
                <li><a href="/">Home</a></li>
                
                <li class="dropdown-trigger" onclick="toggleDropdown(this)">
    <a href="javascript:void(0)">Coaches and Schools <i class="fa-solid fa-chevron-down" style="font-size:10px;"></i></a>
    <div class="dropdown-content">
        <a href="https://1abacus.in/institutional/abacus-teacher-training">Certified Abacus Teachers Training</a>
        <a href="https://1abacus.in/institutional/premier-hybrid-classrooms">AOA Certified Classroom</a>
        <a href="https://1abacus.in/institutional/1abacusmart">1AbacusMART</a>
        <a href="https://1abacus.in/institutional/aoa-powered-opportunity">AOA Franchise</a>
        <a href="https://1abacus.in/institutional/teaching-abacus-made-easy-in-schools">Abacus Maths Classes Made Easy For Schools</a>
    </div>
</li>

                <li class="dropdown-trigger" onclick="toggleDropdown(this)">
                    <a href="javascript:void(0)">Parents & Students <i class="fa-solid fa-chevron-down" style="font-size:10px;"></i></a>
                    <div class="dropdown-content">
                        <a href="/parents-and-students/original-abacus-olympiad">Original Abacus Olympiad</a>
                        <a href="/parents-and-students/quik-abacus-classes">Quik Abacus Classes</a>
                    </div>
                </li>
                
                
            </ul>
        </header>
    </div>
`;

document.getElementById("header-placeholder").innerHTML = headerHTML;

// --- MOBILE MENU LOGIC ---
function toggleMobileMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");

  // Change icon from hamburger to X
  const btnIcon = document.querySelector(".mobile-menu-btn i");
  if (navLinks.classList.contains("active")) {
    btnIcon.classList.remove("fa-bars");
    btnIcon.classList.add("fa-xmark");
  } else {
    btnIcon.classList.remove("fa-xmark");
    btnIcon.classList.add("fa-bars");
  }
}

// --- IMPROVED ACCORDION LOGIC ---
function toggleDropdown(clickedElement) {
  if (window.innerWidth <= 992) {
    // 1. Find all dropdowns
    const allDropdowns = document.querySelectorAll(".dropdown-trigger");

    // 2. Close any dropdown that wasn't the one just clicked
    allDropdowns.forEach((dropdown) => {
      if (dropdown !== clickedElement) {
        dropdown.classList.remove("mobile-dropdown-active");
        const icon = dropdown.querySelector(".fa-chevron-down");
        if (icon) icon.style.transform = "rotate(0deg)";
      }
    });

    // 3. Toggle the one that was actually clicked
    clickedElement.classList.toggle("mobile-dropdown-active");
    const clickedIcon = clickedElement.querySelector(".fa-chevron-down");

    if (clickedElement.classList.contains("mobile-dropdown-active")) {
      clickedIcon.style.transform = "rotate(180deg)";
    } else {
      clickedIcon.style.transform = "rotate(0deg)";
    }
  }
}
