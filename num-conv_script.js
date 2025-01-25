const titleDisplay1 = document.getElementById('title-display-1');
const titleDisplay2 = document.getElementById('title-display-2');
const containerArea = document.getElementById('container-area');
const resultsDiv2 = document.getElementById('results2');
const resultsDiv1 = document.getElementById('results1');

function convert() {
    const numberInput = document.getElementById('number').value.trim();
    const baseInput = document.getElementById('base').value;
    const resultsDiv1 = document.getElementById('results1');
    const resultsDiv2 = document.getElementById('results2');
    resultsDiv1.innerHTML = "";
    resultsDiv2.innerHTML = "";

    try {
        // Converte o número de acordo com a base de entrada
        const decimal = parseInt(numberInput, baseInput);

        if (isNaN(decimal)) {
            throw new Error("Número inválido.");
        }

        const binary = decimal.toString(2);
        const hexadecimal = decimal.toString(16).toUpperCase();
        const octal = decimal.toString(8);

        resultsDiv1.innerHTML = `
            <p><strong>Decimal:</strong> ${decimal}</p>
            <p><strong>Binário:</strong> ${binary}</p>
            <p><strong>Hexadecimal:</strong> ${hexadecimal}</p>
            <p><strong>Octal:</strong> ${octal}</p>
        `;

        resultsDiv2.innerHTML = `
            <p><strong>Decimal:</strong> ${decimal}</p>
            <p><strong>Binário:</strong> ${binary}</p>
            <p><strong>Hexadecimal:</strong> ${hexadecimal}</p>
            <p><strong>Octal:</strong> ${octal}</p>
        `;

    } catch (error) {
        resultsDiv1.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`;
        resultsDiv2.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`;
    }
}

if (window.innerWidth > 600) {
    titleDisplay1.style.display = 'block';
    titleDisplay2.style.display = 'none'; // Expande para o tamanho original em telas maiores
    resultsDiv2.style.display = 'none';
    resultsDiv1.style.display = 'block';
} else {
    titleDisplay1.style.display = 'none';
    titleDisplay2.style.display = 'block';
    resultsDiv2.style.display = 'block';
    resultsDiv1.style.display = 'none';
}