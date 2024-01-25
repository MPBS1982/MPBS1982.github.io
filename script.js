document.addEventListener('DOMContentLoaded', function () {
    const encodeButton = document.getElementById('encodeButton');
    const decodeButton = document.getElementById('decodeButton');
    const inputText = document.getElementById('inputText');
    const outputResult = document.getElementById('outputResult');

    encodeButton.addEventListener('click', function () {
        animateEncoding(inputText.value);
    });

    decodeButton.addEventListener('click', function () {
        const decodedText = decodeText(inputText.value);
        outputResult.innerText = `Texto Decodificado: ${decodedText}`;
    });

    function encodeText(text) {
        
        const encodedText = text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        return encodedText;
    }

    function decodeText(text) {
        
        const decodedText = text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        return decodedText;
    }

    function animateEncoding(text) {
        let index = 0;
        const interval = setInterval(function () {
            const partialText = encodeText(text.slice(0, index + 1)); 
            outputResult.innerText = `Texto Codificado: ${partialText}`;
            index++;
            if (index > text.length) {
                clearInterval(interval);
            }
        }, 100); 
    }
});


