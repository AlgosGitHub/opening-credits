// script.js
document.addEventListener('DOMContentLoaded', () => {
    const characters = document.querySelectorAll('.character');
    const blackOverlay = document.getElementById('blackOverlay');
    let current = 0;

    function showCharacter(index) {
        // Fade to black
        blackOverlay.style.opacity = 1;

        // After the fade-in completes, change the character and fade out
        setTimeout(() => {
            characters.forEach((char, i) => {
                char.style.display = i === index ? 'block' : 'none';
            });

            // Fade back to the character
            blackOverlay.style.opacity = 0;
        }, 300); // Match the duration of the CSS transition
    }

    function cycleCharacters() {
        current = (current + 1) % characters.length;
        showCharacter(current);
    }

    setInterval(cycleCharacters, 11700); // Character display time + fade duration

});

// Fade in the first character
blackOverlay.style.opacity = 0;