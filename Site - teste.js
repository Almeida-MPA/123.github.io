// Textos pré-definidos
const textos = [
    "Jr 29: 11",
    "2Co 1: 3-4",

];

function mostrarTexto() {
    // Seleciona um índice aleatório
    const indice = Math.floor(Math.random() * textos.length);
    
    // Atualiza o texto exibido na página
    document.getElementById('textoAleatorio').textContent = textos[indice];
}