const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//Header//
const navBar = document.querySelector('nav');

const navLink1 = navBar.querySelector('a:nth-of-type(1)');
navLink1.textContent = siteContent.nav["nav-item-1"]

const navLink2 = navBar.querySelector('a:nth-of-type(2)');
navLink2.textContent = siteContent.nav["nav-item-2"]

const navLink3 = navBar.querySelector('a:nth-of-type(3)');
navLink3.textContent = siteContent.nav["nav-item-3"]

const navLink4 = navBar.querySelector('a:nth-of-type(4)');
navLink4.textContent = siteContent.nav["nav-item-4"]

const navLink5 = navBar.querySelector('a:nth-of-type(5)');
navLink5.textContent = siteContent.nav["nav-item-5"]

const navLink6 = navBar.querySelector('a:nth-of-type(6)');
navLink6.textContent = siteContent.nav["nav-item-6"]

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//CTA Section//
const domHeader = document.querySelector('.cta .cta-text h1');
domHeader.textContent = siteContent.cta.h1

const getStartedButton = document.querySelector('button');
getStartedButton.textContent = siteContent.cta.button

const headerImg = document.querySelector("#cta-img");
headerImg.src = siteContent.cta["img-src"]

//Main Content Top//
const featuresH4 = document.querySelector('.main-content .top-content .text-content:nth-of-type(1) h4');
featuresH4.textContent = siteContent["main-content"]["features-h4"];

const featuresP = document.querySelector('.main-content .top-content .text-content:nth-of-type(1) p');
featuresP.textContent = siteContent["main-content"]["features-content"];


const aboutH4 = document.querySelector('.main-content .top-content .text-content:nth-of-type(2) h4');
aboutH4.textContent = siteContent["main-content"]["about-h4"]

const aboutP = document.querySelector('.main-content .top-content .text-content:nth-of-type(2) p');
aboutP.textContent = siteContent["main-content"]["about-content"]

//Main Content Img//
const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"]


//Main Content Bottom//
const servicesH4 = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(1) h4');
servicesH4.textContent = siteContent["main-content"]["services-h4"];

const servicesP = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(1) p');
servicesP.textContent = siteContent["main-content"]["services-content"];

const productH4 = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(2) h4');
productH4.textContent = siteContent["main-content"]["product-h4"];

const productP = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(2) p');
productP.textContent = siteContent["main-content"]["product-content"];

const visionH4 = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(3) h4');
visionH4.textContent = siteContent["main-content"]["vision-h4"];

const visionP = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(3) p');
visionP.textContent = siteContent["main-content"]["vision-content"];

