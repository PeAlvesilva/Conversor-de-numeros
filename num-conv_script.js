function convert() {
    const numberInput = document.getElementById('number').value.trim();
    const baseInput = document.getElementById('base').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "";

    try {
        // Converte o número de acordo com a base de entrada
        const decimal = parseInt(numberInput, baseInput);

        if (isNaN(decimal)) {
            throw new Error("Número inválido.");
        }

        const binary = decimal.toString(2);
        const hexadecimal = decimal.toString(16).toUpperCase();
        const octal = decimal.toString(8);

        resultsDiv.innerHTML = `
            <p><strong>Decimal:</strong> ${decimal}</p>
            <p><strong>Binário:</strong> ${binary}</p>
            <p><strong>Hexadecimal:</strong> ${hexadecimal}</p>
            <p><strong>Octal:</strong> ${octal}</p>
        `;
    } catch (error) {
        resultsDiv.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`;
    }
}