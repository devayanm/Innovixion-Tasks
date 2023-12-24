const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// ========================================
// sticky navigation
// ========================================
const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        // viewport
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);


// ========================================
//  Swiper
// ========================================

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        200: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        400: {
            slidesPerView: 3,
            spaceBetween: 30

        },
        600: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1800: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        2000: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
    autoplay:{
        delay:2500,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


// ========================================
//  scroll to top
// ========================================
const section = document.querySelector(".section");
const footerElm = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElm.after(scrollElement);

const scrollTop = () => {
    section.scrollIntoView({ behavior: "smooth" });
};

document.querySelector(".scroll-top").addEventListener("click", scrollTop);

// get the data attributes

// ========================================
// creating a portfolio tabbed component
// ========================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-ovelay");


p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    // if (p_btn_clicked.classList.contains("p-btn")) return;
    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    p_btn_clicked.classList.add("p-btn-active");

    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

    p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));
    img_active.forEach((curElem) => curElem.classList.remove(`p-image-not-active`));
});

// ========================================
//  lazy loading section
// ========================================
const imgRef = document.querySelector("img[data-src]");
console.log(imgRef);

const lazyImg = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.src = imgRef.dataset.src;
};

const imgObserver = new IntersectionObserver(lazyImg, {
    root: null,
    threshold: 0,
    // rootMargin: "100px",
});

imgObserver.observe(imgRef);

// ========================================
//  animated counter number
// ========================================

const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    console.log(entries);


    const counterNum = document.querySelectorAll(".counter-numbers");
    // console.log(counterNum);
    const speed = 200;

    counterNum.forEach((curElem) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curElem.dataset.number);
            const initialNum = parseInt(curElem.innerText);
            const incrementNumber = Math.trunc(targetNumber / speed);
            // i am adding the value to the main number
            if (initialNumber < targetNumber) {
                curElem.innerText = `${initialNumber + incrementNumber}+`;
                setTimeout(updateNumber, 10);
             }

        };
        updateNumber();
    });
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
});

workSecObserver.observe(workSection);


// ========================================
//  Text Animation
// ========================================
