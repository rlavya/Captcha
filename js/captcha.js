//Generates the captcha function    
function displayCaptcha() {
    var arr = [],
        arrLength = arr.length,
        arrLimit = 3;
    while (arrLength < arrLimit) {
        var randomNumber = Math.floor(Math.random() * 10)
        if (arr.indexOf(randomNumber) > -1) continue;
        arr[arrLength++] = randomNumber;
    }
    document.getElementById("captcha-num").innerHTML = arr.join(" ").toString();

    var arrDisplay = arr.slice(),
        arrDisplaylength = arrDisplay.length,
        arrDisplayLimit = 6;
    while (arrDisplaylength < arrDisplayLimit) {
        var randomNumber = Math.floor(Math.random() * 10)
        if (arrDisplay.indexOf(randomNumber) > -1) continue;
        arrDisplay[arrDisplaylength++] = randomNumber;
    }
    shuffle(arrDisplay);
    text = "";
    for (i = 0; i < arrDisplaylength; i++) {
        text += "<span onclick='getValue(" + arrDisplay[i] + ")'>" + arrDisplay[i] + "</span>";
    }
    document.getElementById("click-captcha").innerHTML = text;
}

// Validate the Entered input aganist the generated security code function   
function validCaptcha() {
    var str1 = removeSpaces(document.getElementById('captcha-num').innerHTML);
    var str2 = removeSpaces(document.getElementById('txt-input').value);
    clearCaptcha();
    if (str1 == str2) return true;
    return false;
}

// Remove the spaces from the entered and generated code
function removeSpaces(string) {
    return string.split(' ').join('');
}

// Shuffle the array obtained to click the capctha
function shuffle(shuffleArray) {
    var j, tempVariable, i;
    for (i = shuffleArray.length; i; i--) {
        j = Math.floor(Math.random() * i);
        tempVariable = shuffleArray[i - 1];
        shuffleArray[i - 1] = shuffleArray[j];
        shuffleArray[j] = tempVariable;
    }
}

// Clear the input captcha
function clearCaptcha() {
    document.getElementById('txt-input').value = '';
}

// To get the clicked value
function getValue(value) {
    var oldValue = document.getElementById('txt-input').value;
    document.getElementById('txt-input').value = oldValue + value;
}
