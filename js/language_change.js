const select = document.querySelector('select');
const allLang = ['en', 'ge', 'ru']

select.addEventListener('change', function(e){
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
})

function changeLanguage(){
    hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;

    document.querySelector('title').innerHTML = langArr['title'][hash];

    for(let key in langArr){
        let el = document.querySelector('.lng-'+key);
        if(el){
            el.innerHTML = langArr[key][hash];
        }
    }
}

changeLanguage();