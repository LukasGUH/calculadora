const tela = document.getElementById('display')
const Botoes = document.querySelectorAll('button')

Botoes.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'limpar') {
            tela.innerText = '';
        } else if (item.id == 'apagar') {
            let string = tela.innerText.toString();
            tela.innerText = string.substr(0, string.length - 1);
        } else if (tela.innerText != '' && item.id == 'igual') {
            tela.innerText = eval(tela.innerText);
        } else if (tela.innerText == '' && item.id == 'igual') {
            tela.innerText = 'Empty!';
            setTimeout(() => (tela.innerText = ''), 2000);
        } else {
            tela.innerText += item.id;
        }
    }
})

const themeToglleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToglleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToglleBtn.classList.toggle('active');
    isDark = !isDark;
}