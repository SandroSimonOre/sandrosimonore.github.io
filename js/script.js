const flagButton = document.getElementById('flag-button');

flagButton.addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('language-toggle__menu--visible');    
});

const menu = document.getElementById('menu');

menu.addEventListener('click', e => {
    
    const language = e.target.dataset.language;
    
    flagButton.classList.forEach( e => {
        if (e.includes('--')) flagButton.classList.remove(e);
    })
    
    flagButton.classList.add( `language-toggle__flag-button--${language}`);
    localStorage.setItem('language', language);
    
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
    
}

(()=> {

    let language = localStorage.getItem('language');
    
    if (!language) {
        
        if (window.navigator.language.substring(0, 3) === 'es-') {
            language = 'esp';
        } else if (window.navigator.language.substring(0, 3) === 'en-') {
            language = 'eng';
        } else {
            language = 'eng';
        }
        
    }
    
    flagButton.classList.add(`language-toggle__flag-button--${language}`);
    loadLanguage(language);
    
})();