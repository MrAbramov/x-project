(() => {
    const header = document.querySelector('.section-header');
    const darkSections = document.querySelectorAll(".is-over-dark");

    const handleScroll = () => {
        const triggerOffset = header.offsetHeight;

        const isOverDark = Array.from(darkSections).some((section) => {
            const rect = section.getBoundingClientRect();
            return rect.top <= triggerOffset && rect.bottom >= triggerOffset;
        });

        if (isOverDark) {
            if (!header.classList.contains("header--over-dark")) {
                header.classList.add("header--over-dark");
                console.log("🔥 Вход в темную зону");
            }
        } else {
            if (header.classList.contains("header--over-dark")) {
                header.classList.remove("header--over-dark");
                console.log("❄️ Выход из темной зоны");
            }
        }
    };

    let isTick = false;
    window.addEventListener("scroll", () => {
        if (!isTick) {
            window.requestAnimationFrame(() => {
                handleScroll();
                isTick = false;
            });
            isTick = true;
        }
    });

    handleScroll();
})()