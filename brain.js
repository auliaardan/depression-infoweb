function displayRadioValue() {
    let resultEl = document.getElementById("score-result");
    let inputEl = document.getElementsByTagName('input');
    let score = 0;

    for (i = 0; i < inputEl.length; i++) {

        if (inputEl[i].type = "radio") {
            if (inputEl[i].checked)
                score += parseInt(inputEl[i].value);
        }
    }
    console.log(score)
    if (score <= 4)
        resultEl.innerHTML = "Tidak ada gejala depresi";
    else if (score <= 9)
        resultEl.innerHTML = "Gejala depresi ringan";
    else if (score <= 14)
        resultEl.innerHTML = "Depresi ringan";
    else if (score <= 19)
        resultEl.innerHTML = "Depresi sedang";
    else if (score >= 20)
        resultEl.innerHTML = "Depresi berat";
}