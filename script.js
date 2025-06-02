document.addEventListener('DOMContentLoaded', () => {
    const circleContainer = document.createElement('div');
    circleContainer.classList.add('spipa-circles');
    document.body.appendChild(circleContainer);

    const numberOfCircles = 20;
    for (let i = 0; i < numberOfCircles; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        const size = Math.random() * 100 + 50; // Random circle size
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${Math.random() * 100}vw`;
        circle.style.top = `${Math.random() * 100}vh`;
        circle.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random animation duration
        circleContainer.appendChild(circle);
    }
});
