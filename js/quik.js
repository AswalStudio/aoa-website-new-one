// --- 1. INJECT FOOTER CSS (DARK GREEN & GOLD) ---
const footerCSS = `
    /* --- FLOATING BUTTONS --- */
    
    .float-btn {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        background: #fff;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: #1b4d3e;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        text-decoration: none;
    }
    .float-btn:hover { 
        transform: scale(1.1) translateY(-5px); 
        color: #fff;
    }
        /* --- FLOATING BUTTONS (STACKED LAYOUT) --- */
    .floating-buttons-wrapper {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        flex-direction: column; /* Stacks the register button above the icons */
        align-items: flex-end;  /* Keeps everything pinned to the right */
        gap: 12px;
        z-index: 1000;
    }

    .float-contact-row {
        display: flex;
        flex-direction: row;
        gap: 12px; /* Space between Call and WhatsApp */
    }

    .float-btn {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        background: #fff;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: #1b4d3e;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        text-decoration: none;
    }
    
    .float-btn:hover { 
        transform: scale(1.1) translateY(-5px); 
        color: #fff;
    }
    
    .float-call:hover { background: #007bff; border-color: #007bff; }
    .float-wa:hover { background: #25D366; border-color: #25D366; }

    /* --- SLIM BLINKING REGISTRATION BUTTON --- */
    .float-register {
        height: 36px; /* Slimmer footprint */
        padding: 0 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #c5a059;
        color: #0f2e25;
        font-size: 11px; /* Smaller, sharper font */
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 1px;
        border-radius: 20px;
        text-decoration: none;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        border: 2px solid transparent;
        animation: subtlePulse 1.5s infinite;
        transition: all 0.3s ease;
    }

    .float-register:hover {
        animation: none;
        background: #0f2e25;
        color: #c5a059;
        border-color: #c5a059;
        transform: translateY(-3px); 
    }

    @keyframes subtlePulse {
        0% { box-shadow: 0 0 0 0 rgba(197, 160, 89, 0.7); }
        50% { box-shadow: 0 0 0 10px rgba(197, 160, 89, 0); }
        100% { box-shadow: 0 0 0 0 rgba(197, 160, 89, 0); }
    }

    /* --- MOVED SCROLL TOP TO LEFT --- */
    .scroll-top {
        position: fixed;
        bottom: 20px;
        left: 20px; /* Moved to the left side for balance */
        background: #1b4d3e; 
        color: #fff;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        z-index: 1000;
        transition: all 0.3s ease;
    }
    .scroll-top:hover { background: #c5a059; transform: translateY(-3px); }
    
    /* Floating Button Brand Hover Colors */
    .floating-buttons .float-call:hover { background: #007bff; border-color: #007bff; }
    .floating-buttons .float-wa:hover { background: #25D366; border-color: #25D366; }

    
    .scroll-top:hover { background: #c5a059; transform: translateY(-3px); }


    /* --- BLINKING REGISTRATION BUTTON --- */
    .register-blink-btn {
        position: fixed;
        bottom: 20px;
        left: 20px; /* Placed on the left, opposite your social floating buttons */
        background: #c5a059; /* AOA Gold */
        color: #0f2e25; /* AOA Dark Green */
        padding: 12px 28px;
        font-family: "Inter", sans-serif;
        font-size: 15px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-decoration: none;
        border-radius: 30px;
        z-index: 1000;
        border: 2px solid transparent;
        /* The animation controls the blink/pulse */
        animation: premiumPulse 1.5s infinite;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    }

    /* Stop the blinking and invert colors when a student or parent hovers over it */
    .register-blink-btn:hover {
        animation: none; 
        background: #0f2e25;
        color: #c5a059;
        border-color: #c5a059;
        transform: translateY(-3px);
    }

    /* Premium Pulse Keyframes */
    @keyframes premiumPulse {
        0% { 
            box-shadow: 0 0 0 0 rgba(197, 160, 89, 0.7); 
            opacity: 1;
        }
        50% { 
            box-shadow: 0 0 0 15px rgba(197, 160, 89, 0); 
            opacity: 0.85; /* Slight fade to create the blink effect */
        }
        100% { 
            box-shadow: 0 0 0 0 rgba(197, 160, 89, 0); 
            opacity: 1;
        }
    }


    /* --- ENHANCED CONTACT MODAL STYLES --- */
    .contact-modal {
        display: none; /* Hidden by default */
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7); /* Darker overlay for focus */
        backdrop-filter: blur(8px); /* Increased blur for focus */
        -webkit-backdrop-filter: blur(8px);
        justify-content: center;
        align-items: center;
    }

    .modal-content {
        background: radial-gradient(circle at center, #1b4d3e, #0f2e25); /* Subtle gradient for depth */
        padding: 40px 30px; /* Better padding */
        border-radius: 16px; /* Slightly larger radius */
        border: 2px solid #c5a059; /* Clearer gold border */
        text-align: center;
        position: relative;
        width: 90%;
        max-width: 400px;
        box-shadow: 0 15px 35px rgba(0,0,0,0.6); /* More depth with shadow */
        animation: modalPopIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        font-family: "Inter", sans-serif;
    }

    /* Improve Headings (Hierarchy) */
    .modal-content h3 { 
        color: #c5a059; /* Bold, clear gold headings */
        margin: 0 0 20px 0; 
        font-size: 14px; /* Small, sharp all-caps headings */
        font-weight: 700;
        text-transform: uppercase; 
        letter-spacing: 2px;
    }

    /* Style Contact Links (Main Text) */
    .modal-content p { 
        margin: 12px 0; /* More space between items */
    }

    .modal-content a { 
        color: rgba(255, 255, 255, 0.9); /* Main contact text is clean white */
        font-size: 15px; /* Slightly smaller and sharper */
        font-weight: 400; /* Cleaner weight */
        text-decoration: none; 
        transition: color 0.3s ease, transform 0.3s ease; 
        display: inline-flex; /* Better text alignment */
        align-items: center;
        justify-content: center;
        gap: 12px; /* Consistent gap between icon and text */
    }

    .modal-content a:hover { 
        color: #fff; /* Slightly brighter on hover */
        transform: translateY(-1px); /* Subtle hover effect */
    }

    /* Style Icons as Small Gold Accents */
    .modal-content i { 
        color: #c5a059; /* Small gold icons, not main color */
        font-size: 16px; /* Smaller size */
        opacity: 0.9;
    }

    /* Integrate and Style Close Button */
    .close-btn {
        position: absolute;
        top: 15px;
        right: 20px;
        color: rgba(255, 255, 255, 0.6); /* Less distracting by default */
        font-size: 24px; /* Sharp and small */
        font-weight: bold;
        cursor: pointer;
        transition: color 0.3s, transform 0.3s ease;
        line-height: 1;
    }

    .close-btn:hover { 
        color: #c5a059; /* Gold on hover */
        transform: rotate(90deg); /* Feedback on hover */
    }

    @keyframes modalPopIn {
        from { opacity: 0; transform: scale(0.9) translateY(20px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
    }

    /* --- DARK THEME FOOTER --- */
    footer {
        background: #0f2e25; /* Original Dark Green */
        color: #fff;
        padding: 60px 0 20px 0;
        font-family: "Inter", sans-serif;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        margin-top: 40px;
    }
    .footer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 40px;
        margin-bottom: 50px;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding: 0 20px;
    }
    .footer-col h4 {
        color: #c5a059; /* Original Gold */
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 24px;
    }
    .footer-col ul { list-style: none; padding: 0; margin: 0; }
    .footer-col ul li { margin-bottom: 12px; }
    .footer-col ul li a {
        color: rgba(255, 255, 255, 0.7);
        font-size: 15px;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    .footer-col ul li a:hover {
        color: #fff;
        padding-left: 5px;
    }
    .footer-col p { 
        color: rgba(255, 255, 255, 0.7); 
        font-size: 15px; 
        line-height: 1.6; 
        margin: 0 0 10px 0; 
    }
    
    .social-links {
        display: flex;
        flex-wrap: nowrap; /* Forces icons to stay on one line */
        gap: 8px;          /* Controls spacing evenly */
    }
    .social-links a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    .social-links a:hover {
        transform: translateY(-3px);
        color: #fff;
    }

    /* Social Brand Colors */
    .social-links .brand-fb:hover { background: #1877F2; }
    .social-links .brand-li:hover { background: #0A66C2; }
    .social-links .brand-ig:hover { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); }
    .social-links .brand-yt:hover { background: #FF0000; }
    .social-links .brand-jd:hover { background: #FF7A00; }

    /* --- PURE CSS PAYMENT LOGOS --- */
    .payment-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        max-width: 300px;
    }
    .pay-badge {
        background: #fff;
        border-radius: 4px;
        padding: 4px 8px;
        height: 32px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 800;
        color: #333;
        gap: 5px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
        /* --- SMALL BLINKING REGISTRATION BUTTON --- */
    

    /* Matches the bounce hover effect of your other icons */
    .float-register:hover {
        animation: none;
        background: #0f2e25;
        color: #c5a059;
        border-color: #c5a059;
        transform: scale(1.05) translateY(-5px); 
    }

    @keyframes subtlePulse {
        0% { box-shadow: 0 0 0 0 rgba(197, 160, 89, 0.7); }
        50% { box-shadow: 0 0 0 10px rgba(197, 160, 89, 0); }
        100% { box-shadow: 0 0 0 0 rgba(197, 160, 89, 0); }
    }
    .pay-amex { background: #007bc1; color: white; font-style: italic; }
    .pay-visa { color: #1a1f71; font-style: italic; font-size: 14px; }
    .pay-rupay { color: #f37021; }
    .pay-rupay span { color: #008c3a; }
    .pay-paytm { color: #002e6e; }
    .pay-paytm span { color: #00b9f5; }
    .pay-paypal { color: #003087; font-style: italic; }
    .pay-mobikwik { color: #00568c; }
    .pay-payzapp { color: #eb1c24; font-style: italic; }
    .pay-badge i { font-size: 14px; color: #555; }
    
    .mc-circles { display: flex; }
    .mc-red { width: 16px; height: 16px; background: #eb001b; border-radius: 50%; position: relative; z-index: 2; }
    .mc-yellow { width: 16px; height: 16px; background: #f79e1b; border-radius: 50%; margin-left: -6px; z-index: 1; }

    /* Footer Bottom */
    .footer-bottom-wrapper { 
        border-top: 1px solid rgba(255, 255, 255, 0.1); 
        padding-top: 30px;
    }
    .footer-bottom-content { 
        max-width: 1200px; 
        margin: 0 auto; 
        padding: 0 20px 20px 20px; 
    }
    .copyright-text { 
        color: rgba(255, 255, 255, 0.5); 
        font-size: 14px; 
        margin-bottom: 15px; 
    }

    /* Language Selector */
    .language-selector { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
    .language-selector span { color: #c5a059; font-weight: 600; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;}
    .language-selector a { 
        color: rgba(255, 255, 255, 0.7); 
        padding: 0 8px; 
        border-right: 1px solid rgba(255, 255, 255, 0.2); 
        text-decoration: none; 
        transition: color 0.3s ease; 
        cursor: pointer;
    }
    .language-selector a:last-child { border-right: none; }
    .language-selector a:hover { color: #fff; }

    /* Hide Google Default Dropdown */
    #google_translate_element { display: none !important; }
    .skiptranslate iframe, .goog-te-banner-frame { display: none !important; }
    body { top: 0px !important; }
`;

const footerStyleTag = document.createElement("style");
footerStyleTag.innerHTML = footerCSS;
document.head.appendChild(footerStyleTag);

// --- 2. INJECT FOOTER HTML ---
const footerHTML = `
    <a href="#" class="scroll-top" title="Back to Top"><i class="fa-solid fa-chevron-up"></i></a>
    
    <div class="floating-buttons-wrapper">
        <a href="/parents-and-students/quik-abacus-classes/demo-class/" class="float-register">Demo Class</a>
        
        <div class="float-contact-row">
            <a href="javascript:void(0)" class="float-btn float-call" title="Call Us" onclick="openContactModal()"><i class="fa-solid fa-headset"></i></a>
            <a href="https://wa.me/919811823818" target="_blank" class="float-btn float-wa" title="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
    </div>

    <div id="contactModal" class="contact-modal">       <div class="modal-content">
            <span class="close-btn" onclick="closeContactModal()">&times;</span>
            
            <h3>Contact Us</h3>
            <p><a href="tel:+919811823818"><i class="fa-solid fa-phone"></i> +91-9811823818</a></p>
            <p><a href="tel:+919711913818"><i class="fa-solid fa-phone"></i> +91-9711913818</a></p>
            
            <h3 style="margin-top: 25px;">Mail Us</h3>
            <p><a href="mailto:chiefmentor@abacusolympicassociation.com"><i class="fa-solid fa-envelope"></i> chiefmentor@<br>abacusolympicassociation.com</a></p>
        </div>
    </div>

    <footer>
        <div class="footer-grid">
            <div class="footer-col">
                <h4>Useful Links</h4>
                <ul>
                    <li><a href="/legal/privacy-policy/">Privacy Policy</a></li>
                    <li><a href="/legal/shipping-policy/">Shipping Policy</a></li>
                    <li><a href="/legal/terms-and-policies/">Terms & Policies</a></li>
                    <li><a href="/legal/cancellation-and-refund-policy/">Cancellation & Refund Policy</a></li>
                </ul>
            </div>
            
            <div class="footer-col" style="flex: 1.5;">
                <h4>Contact</h4>
                <p>#44, Second Floor, Pearls Omaxe,<br>Wazirpur, Delhi, 110034, Delhi</p>
                <p style="margin-top: 15px;">+91-9811823818</p>
                <p>chiefmentor@AbacusOlympicAssociation.COM</p>
            </div>
            
            <div class="footer-col">
                <h4>Connect</h4>
                <div class="social-links">
                    <a href="https://www.facebook.com/abacusingmindmath/" class="brand-fb"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/company/1abacus/" class="brand-li"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/abacusolympicassociation/" class="brand-ig"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.youtube.com/c/1AbacusABACUSOLYMPICASSOCIATION" class="brand-yt"><i class="fa-brands fa-youtube"></i></a>
                    <a href="https://www.justdial.com/Delhi/Abacus-Olympic-Association-Netaji-Subhash-Place-Complex-Pitampura/011PXX11-XX11-091004103602-A3M9_BZDET?via=scode" class="brand-jd" style="font-weight: bold; font-family: Arial;">Jd</a>
                </div>
            </div>
            
            <div class="footer-col">
                <h4>Payments</h4>
                <div class="payment-grid">
                    <div class="pay-badge pay-amex">AMEX</div>
                    <div class="pay-badge"><div class="mc-circles"><div class="mc-red"></div><div class="mc-yellow"></div></div></div>
                    <div class="pay-badge pay-visa">VISA</div>
                    <div class="pay-badge pay-rupay">Ru<span>Pay</span></div>
                    
                    <div class="pay-badge"><i class="fa-solid fa-mouse"></i> Net Banking</div>
                    <div class="pay-badge"><i class="fa-regular fa-calendar-days"></i> Easy EMI</div>
                    <div class="pay-badge"><i class="fa-solid fa-money-bill-wave"></i> COD</div>
                    
                    <div class="pay-badge pay-paytm">Pay<span>tm</span></div>
                    <div class="pay-badge pay-paypal">PayPal</div>
                    <div class="pay-badge pay-mobikwik">MobiKwik</div>
                    <div class="pay-badge pay-payzapp">PayZapp</div>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom-wrapper">
            <div class="footer-bottom-content">
                <div class="copyright-text">© Copyrights 2026 - 2027. Abacus Olympic Association. All Rights Reserved.</div>
                
                <div id="google_translate_element"></div>

                <div class="language-selector">
                    <span>Change Language:</span>
                    <a onclick="changeLanguage('en')">English</a>
                    <a onclick="changeLanguage('hi')">हिंदी</a>
                    <a onclick="changeLanguage('mr')">मराठी</a>
                    <a onclick="changeLanguage('bn')">বাংলা</a>
                    <a onclick="changeLanguage('ta')">தமிழ்</a>
                    <a onclick="changeLanguage('gu')">ગુજરાતી</a>
                    <a onclick="changeLanguage('kn')">ಕನ್ನಡ</a>
                    <a onclick="changeLanguage('ml')">മലയാളം</a>
                    <a onclick="changeLanguage('te')">తెలుగు</a>
                    <a onclick="changeLanguage('pa')">ਪੰਜਾਬੀ</a>
                </div>
            </div>
        </div>
    </footer>
`;

document.getElementById("footer-placeholder").innerHTML = footerHTML;

// --- 3. BULLETPROOF TRANSLATE LOGIC ---
window.googleTranslateElementInit = function () {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "en,hi,mr,bn,ta,gu,kn,ml,te,pa",
      autoDisplay: false,
    },
    "google_translate_element",
  );
};

const translateScript = document.createElement("script");
translateScript.type = "text/javascript";
translateScript.src =
  "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.body.appendChild(translateScript);

// The Cookie Method: Forces Google Translate to switch and reloads the page
window.changeLanguage = function (langCode) {
  document.cookie = "googtrans=/en/" + langCode + "; path=/;";
  document.cookie =
    "googtrans=/en/" +
    langCode +
    "; path=/; domain=" +
    window.location.hostname +
    ";";
  window.location.reload();
};

// --- 4. MODAL LOGIC ---
window.openContactModal = function () {
  document.getElementById("contactModal").style.display = "flex";
};

window.closeContactModal = function () {
  document.getElementById("contactModal").style.display = "none";
};

// Close modal when clicking outside of it
window.onclick = function (event) {
  let modal = document.getElementById("contactModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
