function differenz(){
    let alter1 = document.getElementById('alter1').value;
    let alter2 = document.getElementById('alter2').value;

    let ausgabe = document.getElementById("ausgabe")

    ausgabe.innerHTML = Math.abs(alter1-alter2);
}