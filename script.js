function changeLogo()
{
    console.log('yes');
    document.getElementById('logo').classList.remove('logo-hidden', 'logo-cross');
}

var buttonsTextsArray = [
    "add repo to cydia", 
    "back to site", 
]

function addButtons(line)
{
    var buttonsTexts = buttonsTextsArray[line];
    var introLetters = buttonsTexts.split("");
    var length = introLetters.length;
    for (var i = 0; i < length; i++)
    {
        setTimeout(addLetter, 50*i, i);
    }
    function addLetter(i)
    {
        if (introLetters[i] == " "){document.getElementById('button'+line).insertAdjacentHTML('beforeend', '<div class="space"></div>');}
        else {document.getElementById('button'+line).insertAdjacentHTML('beforeend', '<div>' + introLetters[i] + '</div>');}
        
    }
}

