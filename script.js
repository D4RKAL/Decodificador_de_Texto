function code() {
    const substitutions = {
        'a' : 'ai',
        'e' : 'enter',
        'i' : 'imes',
        'o' : 'ober',
        'u' : 'ufat'
    };

    let usrInput = document.querySelector('#usr_input').value.split('');

    usrInput = usrInput.map(char => {
        if (char in substitutions) {
            return substitutions[char];
        }
        else {
            return char;
        }
    })

    document.querySelector('#copy').innerHTML = 'Copiar'
    document.querySelector('#txt_result').innerHTML = usrInput.join('');
    document.querySelector('img').style.display = 'none';
}

function decode() {
    const substitutions = [
        { pattern: 'ai', replacement: 'a' },
        { pattern: 'enter', replacement: 'e' },
        { pattern: 'imes', replacement: 'i' },
        { pattern: 'ober', replacement: 'o' },
        { pattern: 'ufat', replacement: 'u' }
    ];

    let usrInput = document.querySelector('#usr_input').value.split(' ');

    usrInput = usrInput.map(word => {
        substitutions.forEach(sub => {
            word = word.replaceAll(sub.pattern, sub.replacement);
        });
        return word;
    });

    document.querySelector('#copy').innerHTML = 'Copiar'
    document.querySelector('#txt_result').innerHTML = usrInput.join(' ');
    document.querySelector('img').style.display = 'none';
}

function copy() {
    let txtResult = document.querySelector('#txt_result');
    txtResult.select();
    txtResult.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(txtResult.value);

    document.querySelector('#copy').innerHTML = 'Copiado';
}