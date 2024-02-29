import './style.css'

let results = document.querySelector('.results');
let btnSearch = document.querySelector('#btn-search');
let search = document.querySelector('input');

let data;
let baseUrl = 'https://emoji-api.com/emojis?access_key=54d698da601f06286336cd65b3698edfb16d22bc';
let url = baseUrl;

async function getEmojis() {
    results.innerHTML = '';

    let response = await fetch(url);
    data = await response.json();

    for (let i = 0; i < data.length; i++) {
        let result = document.createElement('div');
        result.innerText = data[i].character + ' ' + data[i].unicodeName;
        results.appendChild(result);
    }
}

btnSearch.addEventListener('click', async () => {
    console.log("clicked.")
    url = baseUrl + '&search=' + search.value;

    await getEmojis();
});


