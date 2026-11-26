// ===========================
// KOPI SENJA - JAVASCRIPT
// ===========================

// TOMBOL PROMO
const tombolPromo = document.getElementById("tombol-promo");
const infoPromo = document.getElementById("info-promo");

tombolPromo.addEventListener("click", function () {
    infoPromo.textContent =
        "🎉 Promo Hari Ini! Diskon 15% untuk pembelian 2 gelas Kopi Susu Gula Aren sebelum pukul 11.00 WIB.";

    tombolPromo.textContent = "✓ Promo Ditampilkan";

    tombolPromo.style.background = "#c69b5c";
    tombolPromo.style.color = "#211710";
});

// MENU NAVIGASI MOBILE
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    menuToggle.textContent =
        navMenu.classList.contains("active") ? "✕" : "☰";
});

// TUTUP MENU SETELAH LINK DIKLIK
document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// PEMESANAN WHATSAPP
// Ganti nomor berikut dengan nomor WhatsApp kedai kamu.
const nomorWhatsApp = "6281234567890";

document.querySelectorAll(".order-button").forEach(button => {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const namaProduk = this.dataset.product;

        const pesan = `Halo Kopi Senja, saya ingin memesan ${namaProduk}. Apakah masih tersedia?`;

        const linkWhatsApp =
            `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

        window.open(linkWhatsApp, "_blank");

    });

});

// ANIMASI SAAT SCROLL
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".product-card, .about, .promo-section"
).forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});