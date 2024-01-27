import {courses, accordionData, navItems, slideImages} from "./data.js";

/* Header Scroll mobile */
let lastScrollTop = 0;
const headers = document.querySelectorAll(".header");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        headers.forEach(header => header.classList.add("hide"));
    } else {
        headers.forEach(header => header.classList.remove("hide"));
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

/***/


/* Navigation */

const navTemplates = navItems.map(item => `
    <li class="main-nav-li">
       <a class="main-nav-item ${item.isActive ? 'active' : ''}" href="${item.href}">${item.title}</a>
    </li>
`).join('')

document.querySelectorAll('.main-nav-ul').forEach(item => item.innerHTML = navTemplates);
/***/

/* Cards */

const cardTemplates = courses.map(card => `
      <div class="course-card">
          <div class="card-img">
            <img src="${card.imageUrl}" alt="${card.title}">
          </div>
          <div class="card-body">
            <h6 class="card-title">${card.title}</h6>
            <p class="card-desc">${card.description}</p>
            <a href="#" class="card-link">
                <span class="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1.833 2.667 13.334 10.666" height="16"
                         width="17">
                        <path
                            d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z"></path>
                    </svg>
                </span>
                კურსის დეტალები
            </a>
          </div>
      </div>
    `).join('');

document.getElementById('courses-wrapper').innerHTML = cardTemplates;

/* Burger menu */
document.addEventListener("DOMContentLoaded", function() {
    const burgerBtn = document.querySelector('.burger-btn');
    const menu = document.querySelector('.burger-menu');
    const body = document.querySelector('body');

    burgerBtn.addEventListener('click', function() {
        burgerBtn.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('overlay');
    });

    document.addEventListener('click', function(event) {
        const isClickInside = burgerBtn.contains(event.target);
        if (!isClickInside && menu.classList.contains('active')) {
            burgerBtn.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('overlay');
        }
    });
});
/***/

/* Slider */
document.addEventListener('DOMContentLoaded', function() {
    const totalSlides = slideImages.length;
    const slidesContainer = document.querySelector('.slides');
    const paginationContainer = document.querySelector('.pagination');
    let currentGroup = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    let autoPlayInterval;

    function createSlides() {
        slidesContainer.innerHTML = '';

        const start = currentGroup * 3;
        const end = Math.min(start + 3, totalSlides);

        for (let i = 0; i < totalSlides; i++) {
            const slideIndex = i % totalSlides;
            const slide = document.createElement('div');
            slide.classList.add('slide');
            const image = document.createElement('img');
            image.src = slideImages[slideIndex];
            slide.appendChild(image);
            slidesContainer.appendChild(slide);
        }
        showSlides();
        startAutoPlay();
    }

    function showSlides() {
        const slides = document.querySelectorAll('.slides .slide');

        slides.forEach((slide) => {
            slide.style.opacity = 0;
            slide.classList.remove('active');
        });

        slides.forEach((slide, index) => {
            const groupIndex = Math.floor(index / 3);
            if (groupIndex === currentGroup) {
                slide.style.opacity = 1;
                slide.classList.add('active');
            }
        });

        updatePagination();
    }


    function updatePagination() {
        paginationContainer.innerHTML = '';
        const totalGroups = Math.ceil(totalSlides / 3);

        for (let i = 0; i < totalGroups; i++) {
            const bullet = document.createElement('span');
            bullet.classList.add('bullet');
            if (i === currentGroup) {
                bullet.classList.add('active');
            }
            bullet.addEventListener('click', () => {
                currentGroup = i;
                showSlides();
            });
            paginationContainer.appendChild(bullet);
        }
    }

    function nextGroup() {
        currentGroup++;
        if (currentGroup >= Math.ceil(totalSlides / 3)) {
            currentGroup = 0;
        }
        showSlides();
    }

    function prevGroup() {
        currentGroup--;
        if (currentGroup < 0) {
            currentGroup = Math.ceil(totalSlides / 3) - 1;
        }
        showSlides();
    }

    function handleTouchStart(event) {
        touchStartX = event.touches[0].clientX;
    }

    function handleTouchEnd(event) {
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
    }

    function handleSwipe() {
        const swipeThreshold = 100;
        const deltaX = touchEndX - touchStartX;

        if (deltaX > swipeThreshold) {
            prevGroup();
        } else if (deltaX < -swipeThreshold) {
            nextGroup();
        }
    }



    function startAutoPlay() {
        autoPlayInterval = setInterval(nextGroup, 5000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    function restartAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }


    document.querySelector('.next-btn').addEventListener('click', () => {
        stopAutoPlay();
        nextGroup();
        restartAutoPlay();
    });
    document.querySelector('.prev-btn').addEventListener('click', () => {
        stopAutoPlay();
        prevGroup();
        restartAutoPlay();
    });
    slidesContainer.addEventListener('touchstart', handleTouchStart);
    slidesContainer.addEventListener('touchend', handleTouchEnd);

    createSlides();

});



/***/

/* Accordion */
document.addEventListener("DOMContentLoaded", () => {
    const accordionContainer = document.getElementById("accordionContainer");

    accordionData.forEach((item, index) => {
        const accordion = document.createElement("div");
        accordion.classList.add("accordion");

        const header = document.createElement("div");
        header.classList.add("accordion-header");
        header.innerHTML = `
        <span class="">${item.header}</span>
        <span class="icon faq-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                          d="M8.14644661,10.1464466 C8.34170876,9.95118446 8.65829124,9.95118446 8.85355339,10.1464466 L12.4989857,13.7981758 L16.1502401,10.1464466 C16.3455022,9.95118446 16.6620847,9.95118446 16.8573469,10.1464466 C17.052609,10.3417088 17.052609,10.6582912 16.8573469,10.8535534 L12.4989857,15.2123894 L8.14644661,10.8535534 C7.95118446,10.6582912 7.95118446,10.3417088 8.14644661,10.1464466 Z"></path>
                      </svg></span>
      `;

        const body = document.createElement("div");
        body.classList.add("accordion-body");
        body.innerHTML = item.content;

        accordion.appendChild(header);
        accordion.appendChild(body);

        accordionContainer.appendChild(accordion);

        header.addEventListener("click", () => {
            const isOpen = body.classList.contains("open");

            accordionData.forEach((item, i) => {
                const accordionItem = document.querySelector(`#accordionContainer .accordion:nth-child(${i + 1})`);
                accordionItem.querySelector(".accordion-body").classList.remove("open");
            });

            if (!isOpen) {
                body.style.height = body.scrollHeight + "px";
                setTimeout(() => {
                    body.classList.add("open");
                }, 1);
                header.querySelector('.icon').classList.add('open');
            } else {
                body.classList.remove("open");
                body.style.height = 0;
                header.querySelector('.icon').classList.remove('open');
            }
        });
    });
});





/***/
