// Ambil elemen-elemen yang diperlukan
const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const overlay = document.getElementById('overlay');
const sideNav = document.getElementById('sideNav');

// Fungsi untuk membuka bar navigasi
function openNav() {
    sideNav.style.transform = 'translateX(0)';
    overlay.style.display = 'block';
}

// Fungsi untuk menutup bar navigasi
function closeNav() {
    sideNav.style.transform = 'translateX(100%)';
    overlay.style.display = 'none';
}

// Event listener untuk tombol hamburger
menuButton.addEventListener('click', openNav);

// Event listener untuk tombol tutup
closeButton.addEventListener('click', closeNav);

// Event listener untuk klik di luar bar navigasi
overlay.addEventListener('click', closeNav);
