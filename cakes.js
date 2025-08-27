function blowCandle() {
    const flame = document.querySelector('.flame');

    // Pastikan lilin ada
    if (!flame) return;

    // Tambahkan kelas animasi padam
    flame.classList.add("blow");

    // Setelah animasi selesai, sembunyikan api
    setTimeout(() => {
        flame.style.display = "none";
        alert("✨ Lilinnya padam... semoga doa kamu terkabul 🎉");
    }, 3000); // sesuai durasi animasi
}
