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
const nav = document.querySelector('nav');

const nav1 = nav.querySelector('a:nth-of-type(1)');
nav1.textContent = siteContent.nav["nav-item-1"]

const nav2 = nav.querySelector('a:nth-of-type(2)');
nav2.textContent = siteContent.nav["nav-item-2"]

const nav3 = nav.querySelector('a:nth-of-type(3)');
nav3.textContent = siteContent.nav["nav-item-3"]

const nav4 = nav.querySelector('a:nth-of-type(4)');
nav4.textContent = siteContent.nav["nav-item-4"]

const nav5 = nav.querySelector('a:nth-of-type(5)');
nav5.textContent = siteContent.nav["nav-item-5"]

const nav6 = nav.querySelector('a:nth-of-type(6)');
nav6.textContent = siteContent.nav["nav-item-6"]

const people = document.createElement('a');
people.textContent = 'People';
people.href = '#';
nav.appendChild(people);

const share = document.createElement('a');
share.textContent = 'Share';
share.href = '#';
nav.prepend(share);

const navLinks = nav.querySelectorAll('a');
navLinks.forEach(element => element.style.color = 'green');

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

//Contact Section//
const contactHeader = document.querySelector('.contact h4');

contactHeader.textContent = siteContent.contact["contact-h4"]

const contactAddress = document.querySelector('.contact p:nth-of-type(1)');

contactAddress.textContent = siteContent.contact.address;

const contactPhone = document.querySelector('.contact p:nth-of-type(2)')

contactPhone.textContent = siteContent.contact.phone;

const contactEmail = document.querySelector('.contact p:nth-of-type(3)');

contactEmail.textContent = siteContent.contact.email;

const copyRight = document.querySelector('footer p');

copyRight.textContent = siteContent.footer.copyright;