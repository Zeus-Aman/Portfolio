const badgeBaseURL = 'https://img.shields.io/badge/';
const style = 'for-the-badge'
// https://simpleicons.org/
var logo = {
    
    'C++': ['cplusplus', '00599C', 'FFE873'],
    
    'HTML': ['HTML5', 'f06529', 'ebebeb'],
    'CSS': ['CSS3', '2965f1', 'ebebeb'],
    
    'JavaScript': ['javascript', 'f0db4f', '323330'],
    
    'Java': ['java', 'f89820', 'ebebeb']
};

function clearLanguagesField() {
    var field = document.getElementById('projects_languages');
    field.innerHTML = '';
}

function buildURL(language) {
    logoName = logo[language][0];
    logoColor = logo[language][1];
    backgroundColor = logo[language][2];
    return `${badgeBaseURL}-${language}-${backgroundColor}?logo=${logoName}&style=${style}&logoColor=${logoColor}`;
}

function appendLanguageImage(language, index) {
    var img = document.createElement('img');
    img.src = buildURL(language);
    img.className = 'lang-column-default';
    var field = document.getElementById('projects_languages');
    field.appendChild(img);
}