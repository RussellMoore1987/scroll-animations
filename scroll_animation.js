const animationKey = {
    'fadeIn': ['hidden', 'fade-in'],
    'fadeInLeft': ['hidden-left', 'fade-in-slide'],
    'fadeInRight': ['hidden-right', 'fade-in-slide'],
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log('hit');
        const classAnimation = entry.target.dataset.anime ?? "fadeIn";
        entry.target.classList.add(animationKey[classAnimation][0]);
        if (entry.isIntersecting) { // to add animation
            entry.target.classList.add(animationKey[classAnimation][1]);
        } else { // to remove animation
            entry.target.classList.remove(animationKey[classAnimation][1]);
        }
    });
});

const animatable = document.querySelectorAll('[data-anime]');
animatable.forEach(el => { observer.observe(el) });