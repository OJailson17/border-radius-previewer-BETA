// Copia os dados do textarea para a área de transferência
const copy = () => {
    if(textarea.value === ''){
        alert('Área de texto vazia')
    }else{
        textarea.select();
        document.execCommand("copy");
    }

}