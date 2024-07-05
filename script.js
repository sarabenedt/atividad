// Inicializa a variável slidelindexx com o valor 1, que representa o primeiro slide.
let slideIndex = 1;
// Chama a função ShowSlides para exibir o slide inicial.
showSlides(slideIndex);
// função para avançar ou retroceder no slide.
// 'n' é o numero de slide a avançar ou retroceder(pode ser positivo ou negativo).
function plusSlides(n) {
    showSlides(slideIndex += n);
    //incrementa ou decrementa o slideindex e chama o ShowSlides com novo valor.
}
// função para definir o slide atual que foi informado.
// 'n' é o indice do slide a ser exibido.
function currentSlide(n) {
    showSlides(slideIndex = n);
    // define slideindex para 'n' e chama ShowSlide com novo valor.
}
// função  principal que exibe o slide.
// 'n' é o indice do slide a ser exibido.
function showSlides(n) {
    let i; // obtem todos os elementos com a classe "mySlides".
    let slides = document.getElementsByClassName("mySlides"); // obtem todos os elementos com a classe "ponto".
    let pontos = document.getElementsByClassName("ponto"); //  obtem todos os elementos com a classe "ponto".
    // Se o índice de slide for maior que o número total de slides, redefine para o primeiro slide.
    if (n > slides.length) {
        slideIndex = 1
    }
    // Se o índice de slide for menor que o número 1, redefine para o ultimo slide.
    if (n < 1) {
        slideIndex = slides.length
    }
    // esconde todos os slides.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // remove a classe "active" de todos os pontos.
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" active", "");
    }
    // exibe o slide atual no valor de slideindex.
    slides[slideIndex - 1].style.display = "block";
    // adiciona a classe "active" ao ponto correspondente ao slide atual.
    pontos[slideIndex - 1].className += " active";
}

/* Para o slideshow funciona através da variável 'slideIndex', que controla o índice do slide exibido. 
A função 'showSlides' exibe o slide baseado no 'slideIndex', ocultando os outros e atualizando a navegação.
 As funções `plusSlides` e `currentSlide` ajustam o 'lideIndex' e chamam 'showSlides' para refletir essas mudanças:
 'plusSlides' navega entre os slides e `currentSlide` define um slide específico.
 Na `showSlides`, todos os slides são inicialmente ocultados e os pontos de navegação perdem a classe "active". 
 O slide correspondente ao `slideIndex` é exibido e seu ponto de navegação recebe a classe "active".
  Isso mantém a navegação sincronizada com o slide atual, proporcionando uma experiência interativa e coesa. 
Eventos de clique nos botões e pontos de navegação ajustam o `slideIndex` e atualizam a exibição dos slides.*/