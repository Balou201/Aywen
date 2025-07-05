document.addEventListener('DOMContentLoaded', () => {
    const youtubeIdInput = document.getElementById('youtubeId');
    const enterButton = document.getElementById('enterButton');
    const errorMessage = document.getElementById('errorMessage');
    const welcomeScreen = document.getElementById('welcome-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const loadingMessage = document.getElementById('loadingMessage');
    const storyText = document.getElementById('storyText');

    const CORRECT_ID = '@AywenVideos'; // L'identifiant YouTube correct

    enterButton.addEventListener('click', () => {
        const enteredId = youtubeIdInput.value.trim();

        if (enteredId === CORRECT_ID) {
            errorMessage.textContent = '';
            welcomeScreen.style.display = 'none';
            loadingScreen.style.display = 'flex'; // Affiche l'écran de chargement

            loadingMessage.textContent = 'Bonjour Aywen !';
            storyText.textContent = "Le système est corrompu ! Un robot maléfique a semé le chaos dans tes vidéos. Pour le vaincre, tu devras résoudre une série de mini-jeux et récupérer le contrôle. Prépare-toi à l'action !";

            // Simule un temps de chargement de 5 secondes, puis redirige
            setTimeout(() => {
                window.location.href = 'minigames.html'; // Redirige vers la page des mini-jeux
            }, 5000); // 5000 millisecondes = 5 secondes
        } else {
            errorMessage.textContent = 'Accès refusé. Seul le véritable Aywen peut entrer. Veuillez vérifier votre identifiant.';
            youtubeIdInput.value = '';
        }
    });

    youtubeIdInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            enterButton.click();
        }
    });
});
