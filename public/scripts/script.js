// Variável global que recebe os valores do textarea;
var textarea = document.querySelector('#result');

var surface = document.querySelector('.surface');


// EVENTOS

// função que dispara ao digitar alguma coisa nos campos de input
const eventObservation = (event) => {
    // Variáveis que recebem os valores dos inputs
    let top_left = document.querySelector('#top-left');
    let top_right = document.querySelector('#top-right');
    let bottom_left = document.querySelector('#bottom-left');
    let bottom_right = document.querySelector('#bottom-right');


    // Variável que recebe o código da tecla ENTER
    const ENTER_KEY = 13;
    // Variável que recebe o código da tecla digitada
    const KEYCODE = event.keyCode;

    if(KEYCODE === ENTER_KEY && top_left === document.activeElement) {
        if(textarea === ''){
        textarea.value = `border-top-left-radius: ${top_left.value}px; \n`;
    }else{
        textarea.value += `border-top-left-radius: ${top_left.value}px; \n`;
    }
    surface.style.borderTopLeftRadius = `${top_left.value}px `;  
    }
    else if(KEYCODE === ENTER_KEY && top_right === document.activeElement){
        surface.style.borderTopRightRadius = `${top_right.value}px`;
        textarea.value += `border-top-right-radius: ${top_right.value}px;\n`;
    }
    else if(KEYCODE === ENTER_KEY && bottom_left === document.activeElement){
        surface.style.borderBottomLeftRadius = `${bottom_left.value}px`;
        textarea.value += `border-bottom-left-radius: ${bottom_left.value}px;\n`;
    }
    else if(KEYCODE === ENTER_KEY && bottom_right === document.activeElement){
        surface.style.borderBottomRightRadius = `${bottom_right.value}px`;
        textarea.value += `border-bottom-right-radius: ${bottom_right.value}px;`;
    }
    else if( KEYCODE === ENTER_KEY && (top_left === '' || top_right === '' || bottom_left === '' || bottom_right === '')){
        console.log('Por favor, preencha todos os campos');
    }
    else{
        return;
    }

}

// Copia os dados do textarea para a área de transferência
const copy = () => {
    if(textarea.value === ''){
        alert('Área de texto vazia')
    }else{
        textarea.select();
        document.execCommand("copy");
    }

}

// Deleta todos os campos e retorna ao estdo original
const clean = () => {
   textarea.value = '';
   surface.style.borderRadius = 0 + 'px';
}
