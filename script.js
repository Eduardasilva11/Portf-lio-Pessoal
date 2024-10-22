// Função para transição suave entre as seções ao clicar nos links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = this.getAttribute('href');
        
        // Mover suavemente para a seção correspondente
        document.querySelector(targetSection).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Código para aplicar animação aos elementos
const hobbyPics = document.querySelectorAll('.hobby-pic');
const projectPics = document.querySelectorAll('.project-pic');

hobbyPics.forEach(pic => {
    pic.addEventListener('mouseenter', () => {
        pic.style.transition = 'transform 0.3s';
        pic.style.transform = 'scale(1.2)';
    });

    pic.addEventListener('mouseleave', () => {
        pic.style.transform = 'scale(1)';
    });
});

projectPics.forEach(pic => {
    pic.addEventListener('mouseenter', () => {
        pic.style.transition = 'transform 0.3s';
        pic.style.transform = 'scale(1.2)';
    });

    pic.addEventListener('mouseleave', () => {
        pic.style.transform = 'scale(1)';
    });
});
