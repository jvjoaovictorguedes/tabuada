function gerador() {
    let numero = document.getElementById('numero').value;
    let tabuada = document.getElementById('tabuada');
    if(numero.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let c = 1;
        tabuada.innerText = '';
        while (c <= 10) {
            if(tabuada.value == 0) {
                let num = Number(numero);
                let item = document.createElement('option');
                item.text = `${num} x ${c} = ${num*c}`;
                tabuada.appendChild(item);
                c++;
            }
    }
}}