results=document.querySelector('.results');
btnSearch=document.querySelector('.btn-search');

let data;

let url='https://emoji-api.com/emojis?access_key=54d698da601f06286336cd65b3698edfb16d22bc';

async function findEmojis(){
    let response=await fetch(url);
    data=await response.json();

    
}

for(let i=0;i<100;i++){
    let result=document.createElement('div');
    result.innerText=data[i].character+'  '+data[i].unicodeName;
    result.appendChild(results);
}

btnSearch.addEventListener('click',async ()=>{
    let s=btnSearch.value;

})