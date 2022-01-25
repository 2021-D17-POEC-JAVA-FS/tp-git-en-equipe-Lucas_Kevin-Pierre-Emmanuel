// PE JS

function loadData(cryptoName) {
    fetch("https://api.coingecko.com/api/v3/coins/" + cryptoName, {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(c => {
            console.log(c);

            document.querySelector('#displayName').textContent = c.name;
            document.querySelector('#cryptoImg').src = c.image.large;

            let cours = document.querySelector('#cours');
            cours.innerHTML = '';
            c.tickers.forEach(t => {
                let p = document.createElement('p');
                p.append(t.base + '/' + t.target + ' : ' + t.last);
                cours.append(p);
            })
        })
        .catch(error => console.log('error', error));
}

document.querySelector('#submit').addEventListener('click', evt => {
    let cryptoName = document.querySelector('#cryptoName').value;

    if (cryptoName === '')
        return;

    loadData(cryptoName);
});
