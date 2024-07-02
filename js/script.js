const nama = document.querySelector("#inputName");
const role = document.querySelector("#inputRole");
const avail = document.querySelector("#inputAvailability");
const usia = document.querySelector("#inputUsia");
const lokasi = document.querySelector("#inputLokasi");
const exp = document.querySelector("#inputExperience");
const email = document.querySelector("#inputEmail");

const hasil_nama = document.querySelector("#hasil_nama");
const hasil_role = document.querySelector("#hasil_role");
const hasil_avail = document.querySelector("#hasil_avail");
const hasil_usia = document.querySelector("#hasil_usia");
const hasil_lokasi = document.querySelector("#hasil_lokasi");
const hasil_exp = document.querySelector("#hasil_exp");
const hasil_email = document.querySelector("#hasil_email");

const botLayer = document.querySelector("#botLayer");


function submit(nama, role, avail, usia, lokasi, exp, email) {
    hasil_nama.innerHTML = nama.value;
    hasil_role.innerHTML = role.value;
    hasil_avail.innerHTML = avail.value;
    hasil_usia.innerHTML = usia.value;
    hasil_lokasi.innerHTML = lokasi.value;
    hasil_exp.innerHTML = exp.value;
    hasil_email.innerHTML = email.value;
    botLayer.style.display = "none";
}

function edit(botLayer) {
    botLayer.style.display = "block";
}