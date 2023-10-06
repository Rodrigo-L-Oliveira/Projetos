let texto = document.getElementById('texto')
let arvore_direita = document.getElementById('arvore-direita')
let arvore_esquerda = document.getElementById('arvore-esquerda')
let portao_direito = document.getElementById('portao-direito')
let portao_esquerdo = document.getElementById('portao-esquerdo')

window.addEventListener('scroll', () => {

    let value = window.scrollY;

    texto.style.marginTop = value * 2.5 + 'px';
    arvore_esquerda.style.left = value * -1.5 + 'px';
    arvore_direita.style.left = value * 1.5 + 'px';
    portao_esquerdo.style.left = value * 0.5 + 'px';
    portao_direito.style.left = value * -0.5 + 'px';
});