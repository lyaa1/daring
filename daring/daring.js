// membuat data array berisi lagu(judul, penyanyi, jumlah_likes, jumlah_play)

var lagu = [
    ['Cincin', 'Hindia', 5500, 6000, 'cincin.jpg'],
    ['Di Tanah Anarki', 'Superman Is dead', 4000, 4500, 'di tanah.jpg'],
    ['Mangu', 'SZA', 4500, 5000, 'mangu 1.jpg'],
];
var konten = document.getElementById("container");
var element ="";
for(let i = 0; i < lagu.length; i++) {
    var judul = lagu[i][0];
    var artis = lagu[i][1];
    var kiri = lagu[i][2];
    var kanan = lagu[i][3];
    var gambar = lagu[i][4];

    element += `
    
        <div class="lagu">
            <h2>${judul}</h2>
            <br><i>Oleh ${artis}</i>
            <img src="${gambar}">
            <div class="bawah">
                <div class="kanan">&#128525;${kanan}</div
                <div class="kiri">&#128512;${kiri}</div>
            </div>
        </div>
    
    `;
}

konten.innerHTML = element;

console.log("script jalan" )