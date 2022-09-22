const meuNome = document.querySelector('.my-name');
const fName = meuNome.innerHTML;
const botaoVerMais = document.querySelector('button');
const habilidades = document.querySelectorAll('.skills-hidden');
const node = document.querySelector('#fundo')
meuNome.innerHTML='';

function cliqueVer (e) {
    habilidades.forEach( (elemento) => {
        if (elemento.classList.contains('skills-hidden')) {
            elemento.classList.remove('skills-hidden');
            elemento.classList.add('skills-visible');
            botaoVerMais.innerHTML = 'Ver menos';
        } else {
            elemento.classList.add('skills-hidden');
            elemento.classList.remove('skills-visible');
            botaoVerMais.innerHTML = 'Ver mais';
        }
    } )
}

function maisHabilidades (elemento) {
    elemento.addEventListener('click', cliqueVer)
}

function typeWriter (nome) {
    setTimeout( () => {
    const meuNomeF = nome.split('');
    meuNome.innerHTML='';
    meuNomeF.forEach( (letra, index) => {
        setTimeout(function (){
            meuNome.innerHTML += letra;
        }, 150 * index)
    })}, 300)
    
}

/* typeWriter(fName); */
maisHabilidades(botaoVerMais);

