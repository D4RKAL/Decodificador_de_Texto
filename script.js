function code() {

    let usrInput = document.querySelector('#usr_input').value;

    let usrInputResult = usrInput.split('');

    for (let i = 0; i <= usrInputResult.length; i++) {
        switch (true) {
            case usrInputResult[i] === 'a':
                usrInputResult[i] = 'ai';
                break

            case usrInputResult[i] === 'e':
                usrInputResult[i] = 'enter';
                break

            case usrInputResult[i] === 'i':
                usrInputResult[i] = 'imes';
                break

            case usrInputResult[i] === 'o':
                usrInputResult[i] = 'ober';
                break

            case usrInputResult[i] === 'u':
                usrInputResult[i] = 'ufat';
                break

            default:
                break
        }
    }

    let txtResult = document.querySelector('#txt_result');
    txtResult.innerHTML = usrInputResult.join('');
}