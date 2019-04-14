document.addEventListener("DOMContentLoaded", function () {
    // Create timeline variable
    var tl = new TimelineMax();
    tl.from('#sqr-0', 0.1, { scale: 0, transformOrigin: 'center', ease: Back.easeOut, delay: 0.0 })
        .from('#sqr-1', 0.11, { scale: 0, transformOrigin: 'center', ease: Back.easeOut, delay: 0.0 })
        .from('#sqr-7', 0.12, { scale: 0, transformOrigin: 'center', ease: Back.easeOut, delay: 0.0 })
        .from('#sqr-6', 0.13, { scale: 0, transformOrigin: 'center', ease: Back.easeOut, delay: 0.0 })
        .from('#sqr-4', 0.18, { scale: 0, transformOrigin: 'center', ease: Back.easeOut, delay: 0.0 })
        .from('#sqr-2', 0.2, { scale: 0, transformOrigin: 'center', ease: Back.easeOut, delay: 0.0 })
        .from('#sqr-3', 0.22, { scale: 0, transformOrigin: 'center', ease: Back.easeOut, delay: 0.0 })
        .from('#sqr-5', 0.24, { scale: 0, transformOrigin: 'center', ease: Back.easeOut, delay: 0.0 })
        .from('#H, #a, #c, #k, #E, #y, #e, #pupil-2, #pupil-0, #pupil-1, #pupil-3', 0.7, { scale: 0, transformOrigin: 'center', ease: Power2.easeOut, delay: 0.0 })
        .from('#help-msg', 0.5, { scale: 0, transformOrigin: 'bottom', ease: Power2.easeOut, delay: 0.0 })
});

// If body clicked, go to loading page
document.addEventListener("click", function () {
    window.location.assign('/loading');
});