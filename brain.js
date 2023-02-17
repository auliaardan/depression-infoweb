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
    if (score <= 4)
        resultEl.innerHTML = "Skor ≤ 4 <br>" +
            "Berdasarkan skoring, gejala anda belum termasuk depresi. Namun, nilai rendah bukan berarti Anda tidak berhak untuk mencari pertolongan. Bila Anda merasa butuh pertolongan, silahkan menghubungi ahli.";
    else if (score <= 9)
        resultEl.innerHTML = "Skor 5-9 <br>\n" +
            "Gejala depresi ringan. \n" +
            "Belakangan Anda merasa sedih terus-menerus, kehilangan motivasi, juga energi. Mungkin Anda juga menjadi susah tidur, kehilangan nafsu makan, dan susah berkonsentrasi.\n" +
            "Beberapa hal yang dapat Anda lakukan di rumah adalah:<br><ol>\n" +
            "<li>Terapi relaksasi → terapi ini dapat dilakukan sendiri di rumah dengan Anda berlatih bernapas atau bermeditasi.</li>" +
            "<li>Hindari faktor-faktor pencetus kesedihan Anda untuk sementara waktu.</li>" +
            "<li>Ceritalah kepada orang lain mengenai masalah Anda, termasuk kepada para ahli bila dibutuhkan.</li>\n" +
            "</ol>";
    else if (score <= 19)
        resultEl.innerHTML =
            "Gejala depresi sedang (10-14) dan sedang-berat (15-19) <br>\n" +
            "Gejala depresi Anda sudah menyebabkan susah tidur, kehilangan nafsu makan, dan susah berkonsentrasi. Anda memiliki pandangan pesimistik mengenai masa depan.\n" +
            "Beberapa hal yang dapat Anda lakukan di rumah adalah:<br><ol>" +
            "<li>Terapi relaksasi → terapi ini dapat dilakukan sendiri di rumah dengan Anda berlatih bernapas atau bermeditasi.</li>" +
            "<li>Hindari faktor-faktor pencetus kesedihan Anda untuk sementara waktu.</li>" +
            "<li>Mungkin sudah saatnya mempertimbangkan bertemu dengan para ahli. Tidak ada yang salah dengan meminta pertolongan.</li>" +
            "</ol>\n"
    else if (score >= 20)
        resultEl.innerHTML = "Skor 20-27<br>\n" +
            "Gejala depresi berat.\n" +
            "Gejala depresi Anda sudah menyebabkan susah tidur, kehilangan nafsu makan, dan susah berkonsentrasi. Anda memiliki pandangan pesimistik mengenai masa depan, bahkan ingin bunuh diri.<br>\n" +
            "Beberapa hal yang dapat Anda lakukan di rumah adalah:<br>\n" +
            "<ol><li>Sangat disarankan agar Anda bertemu dengan para ahli untuk mendapatkan pertolongan lebih lanjut. Tidak ada yang salah dengan meminta pertolongan.</li></ol>\n";
    return false;
}

