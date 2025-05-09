document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));

    const skillsBtn = document.getElementById('skills-btn');
    const skillsModal = document.getElementById('skillsModal');
    const closeSkillsModal = skillsModal.querySelector('.close');

    skillsBtn.addEventListener('click', () => {
        skillsModal.style.display = 'flex';
    });

    closeSkillsModal.addEventListener('click', () => {
        skillsModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === skillsModal) {
            skillsModal.style.display = 'none';
        }
    });
});
