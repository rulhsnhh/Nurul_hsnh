function kirimPesan() {
    const nama = document.getElementById("nama").value;
    const pesan = document.getElementById("pesan").value; 

    const url = "https://api.whatsapp.com/send?phone=6281260756245&text=Halo%20%2C%0ANama%20saya%20*"+ nama +"*%20%2C%20*"+ pesan +"*";

    window.open(url); 
}