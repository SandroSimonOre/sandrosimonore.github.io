const flagButton = document.getElementById('flag-button');
flagButton.addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('language-toggle__menu--visible');
    
    /*setTimeout(() => {
        document.getElementById('menu').classList.remove('language-toggle__menu--visible');
    }, 3000)
    */
    
});

const menu = document.getElementById('menu');
menu.addEventListener('click', e => {
    const language = e.target.dataset.language;
    
    if (language === 'esp') {
        flagButton.classList.add( `language-toggle__flag-button--esp`);
    } else if (language === 'eng') {
        flagButton.classList.remove( `language-toggle__flag-button--esp`);
    }
    
    document.getElementById('menu').classList.remove('language-toggle__menu--visible');
    loadLanguage(language);
});

const loadLanguage = async language => {
    const texts = await (await fetch(`../languages/${language}.json`)).json();
    const textsToChange = document.querySelectorAll("[data-section]");
    for (const textToChange of textsToChange ) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML = texts[section][value];
    }
    //console.log(jsonLanguage)
}

/*
const eng = document.getElementById('eng');
eng.addEventListener('click', ()=> {
    flagButton.classList.remove('language-toggle__flag-button--esp');
    document.getElementById('menu').classList.remove('language-toggle__menu--visible');
});

const esp = document.getElementById('esp');
esp.addEventListener('click', ()=> {
    flagButton.classList.add('language-toggle__flag-button--esp');
    document.getElementById('menu').classList.remove('language-toggle__menu--visible');
});
*/