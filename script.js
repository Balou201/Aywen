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
        const enteredId = youtubeIdInput.value.trim(); // .trim() enlève les espaces inutiles

        if (enteredId === CORRECT_ID) {
            errorMessage.textContent = ''; // Efface tout message d'erreur
            welcomeScreen.style.display = 'none'; // Cache l'écran de bienvenue
            loadingScreen.style.display = 'flex'; // Affiche l'écran de chargement

            loadingMessage.textContent = 'Bonjour Aywen !';
            storyText.textContent = "Le système est corrompu ! Un robot maléfique a semé le chaos dans tes vidéos. Pour le vaincre, tu devras résoudre une série de mini-jeux et récupérer le contrôle. Prépare-toi à l'action !";

            // Simule un temps de chargement de 5 secondes
            setTimeout(() => {
                // Ici, tu redirigerais vers la page suivante du site (par exemple, les mini-jeux)
                // Pour la démo, on peut le laisser là ou simuler une navigation.
                // Par exemple, tu pourrais changer le contenu de loadingScreen pour afficher les "mini-jeux"
                // ou simplement faire un console.log pour montrer que la redirection est prête.

                // Pour l'instant, nous allons juste afficher un message final et maintenir l'écran de chargement.
                // Si tu as une page pour les mini-jeux (ex: 'minigames.html'), tu ferais :
                // window.location.href = 'minigames.html';

                // Pour cette démo, on peut simplement changer le message final sur l'écran de chargement
                loadingMessage.textContent = 'Mission Ready !';
                storyText.textContent = 'Le défi commence ! Dirige-toi vers les mini-jeux pour désactiver le robot. (Imaginez ici les mini-jeux !)';
                
                // Optionnel: masquer le loader après le chargement
                document.querySelector('.loader').style.display = 'none';

            }, 5000); // 5000 millisecondes = 5 secondes
        } else {
            errorMessage.textContent = 'Accès refusé. Seul le véritable Aywen peut entrer. Veuillez vérifier votre identifiant.';
            youtubeIdInput.value = ''; // Efface le champ pour qu'il puisse réessayer
        }
    });

    // Optionnel: Gérer l'appui sur "Entrée"
    youtubeIdInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            enterButton.click(); // Simule un clic sur le bouton
        }
    });
});
