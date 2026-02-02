
(() => {
    const header = document.querySelector('.section-header');
    const logo = document.querySelector('.logo');

    const logoMaxWidth = logo.offsetWidth;
    const logoMinWidth = 75;

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        const maxScroll = header.offsetHeight;
        const progress = Math.min(scrollY / maxScroll, 1);

        const newLogoWidth = logoMaxWidth - (progress * logoMinWidth);
        if (logo) {
            logo.style.width = `${newLogoWidth}px`;
        }
    });
})();