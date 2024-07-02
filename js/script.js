document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const headerLinks = document.getElementById('header-links');
    const mainContentMobile = document.getElementsByClassName('main-mobile')[0];

    console.log(mainContentMobile)

    burgerMenu.addEventListener('click', () => {
        const isMenuOpen = headerLinks.classList.toggle('active');
        burgerMenu.classList.toggle('open', isMenuOpen);

        if(isMenuOpen){
            mainContentMobile.classList.add('hide');
        }else{
            mainContentMobile.classList.remove('hide');
        }
    });
});

// Get the button
let backToTopButton = document.getElementById("backToTop");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    // Дополнительная проверка при загрузке страницы
    document.addEventListener("DOMContentLoaded", function() {
        if (window.innerWidth <= 480) {
            backToTopButton.style.display = "none";
        }
    });

