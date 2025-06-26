document.addEventListener('DOMContentLoaded', () => {
    const surpriseBtn = document.getElementById('surprise-btn');
    const rainContainer = document.getElementById('rain-container');

    surpriseBtn.addEventListener('click', () => {
        // Butona her tıklandığında belirli bir süre boyunca yazı yağdır
        const rainInterval = setInterval(() => {
            createRainingText();
        }, 100); // Her 100ms'de bir yeni "31" oluştur

        // Efektin bir süre sonra durması için (örneğin 10 saniye)
        setTimeout(() => {
            clearInterval(rainInterval);
        }, 10000);
    });

    function createRainingText() {
        const text = document.createElement('div');
        text.classList.add('raining-text');
        text.textContent = '31';

        // Yatay pozisyonu rastgele ata
        text.style.left = `${Math.random() * 100}vw`;

        // Düşme hızını (animasyon süresini) rastgele ata
        const duration = Math.random() * 3 + 4; // 4 ile 7 saniye arası
        text.style.animationDuration = `${duration}s`;
        
        // Animasyon gecikmesini rastgele ata
        text.style.animationDelay = `${Math.random() * 2}s`;

        rainContainer.appendChild(text);

        // Animasyon bittiğinde elementi DOM'dan kaldır
        setTimeout(() => {
            text.remove();
        }, (duration + 2) * 1000); // Süre + max gecikme
    }
});
