let estrelas = document.getElementById('estrelas')
let lua = document.getElementById('lua')
let montanhas_atras = document.getElementById('montanhas_atras')
let texto = document.getElementById('texto')
let btn = document.getElementById('btn')
let montanhas_frente = document.getElementById('montanhas_frente')
let header = document.querySelector('header')

window.addEventListener('scroll', function () {
    let valor = window.scrollY;
    estrelas.style.left = valor * 0.25 + 'px';
    lua.style.top = valor * 1.05 + 'px';
    montanhas_atras.style.top = valor * 0.5 + 'px';
    montanhas_frente.style.top = valor * 0 + 'px';
    texto.style.marginRight = valor * 4 + 'px';
    texto.style.marginTop = valor * 1.5 + 'px';
    btn.style.marginTop = valor * 1.5 + 'px';
    header.style.top = valor * 0.5 + 'px';
})