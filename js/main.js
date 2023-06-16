// toggle icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector("#navbar");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-times"); // .style.color = "red"
    navbar.classList.toggle("active");
});


// scroll sections
let sections = document.querySelectorAll("section");

let navLinks = document.querySelectorAll("header nav a");

// change navbar color
window.onscroll = () => {

    sections.forEach((sec) => {

        let top = window.scrollY;

        let offset = sec.offsetTop - 100;

        let height = sec.offsetHeight;

        let id = sec.getAttribute("id");

        if (top >= offset && offset + height) {
            // active nav bar Links
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add("active");
            });
            // active section for animation on scroll
            sec.classList.add("show-animate");
        }
        // if want to use animation and repats on scroll use this
        else {
            sec.classList.remove("show-animate");
        }

    });

    let header = document.querySelector(".header");

    header.classList.toggle("sticky", window.scrollY > 60);

    // remove toggle menu and navbar when click
    menuIcon.classList.remove("fa-times"); // .style.color = "red"
    navbar.classList.remove("active");
};
// change navbar color
// filter
const images = document.querySelectorAll('.image-container img');
const filterButtons = document.querySelectorAll('.filter-button');

function filterImages(filter) {
    images.forEach(image => {
        if (filter === 'all') {
            image.style.display = 'block';
        } else if (image.dataset.category === filter) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        button.classList.add('active');
        const filter = button.dataset.filter;
        filterImages(filter);
    });
});
// filter