let user = prompt("kullanıcı adıniz: ")


userName.innerHTML = user
console.log(userName)


// Saat ve tarih bilgisini ekrana yazdırmak için bir fonksiyon tanımlayalım
function displayTimeAndDate() {
    const clockElement = document.querySelector("#clock");
    const now = new Date(); // Şu anki zamanı al

    // Saat, dakika ve saniye bilgilerini al
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Tarih bilgilerini al
    const date = now.toDateString();

    // Saat ve tarih bilgisini formatlayarak ekrana yazdır
    clockElement.textContent = `Saat: ${hours}:${minutes}:${seconds} | Tarih: ${date}`;
}

// displayTimeAndDate fonksiyonunu her saniyede bir çalıştırmak için setInterval kullanalım
setInterval(displayTimeAndDate, 1000); // Her 1000 milisaniyede (1 saniye) bir displayTimeAndDate fonksiyonunu çağır





