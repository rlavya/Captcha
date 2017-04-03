//Created / Generates the captcha function    
function drawCaptcha() {
    var arr = []
    while (arr.length < 3) {
        var randomnumber = Math.floor(Math.random() * 10)
        if (arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }
    document.getElementById("captcha-num").innerHTML = arr.join(" ").toString();

    var arrDisplay = arr.slice();
    while (arrDisplay.length < 6) {
        var randomnumber = Math.floor(Math.random() * 10)
        if (arrDisplay.indexOf(randomnumber) > -1) continue;
        arrDisplay[arrDisplay.length] = randomnumber;
    }
    shuffle(arrDisplay);
    text="";
    for (i = 0; i < arrDisplay.length; i++) {
        text += "<span onclick='getValue("+arrDisplay[i]+")'>" + arrDisplay[i] + "</span>";
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
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
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