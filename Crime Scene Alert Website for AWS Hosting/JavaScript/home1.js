const navslide = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    //Toggle function
    burger.addEventListener('click',() => {
        navLinks.classList.toggle('nav-active');
        links.forEach(link => {
            link.classList.toggle('fade');
        });

    burger.classList.toggle('toggle');

    });


}

navslide();