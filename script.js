document.addEventListener("DOMContentLoaded", () => {
    
    // Screens References
    const loadingScreen = document.getElementById("loading-screen");
    const welcomeScreen = document.getElementById("welcome-screen");
    const giftScreen = document.getElementById("gift-screen");
    const celebrationScreen = document.getElementById("celebration-screen");

    // Elements References
    const typewriterText = document.getElementById("typewriter-text");
    const giftBox = document.getElementById("gift-box");
    const birthdayHeading = document.getElementById("birthday-heading");
    const photoFrame = document.getElementById("photo-frame");
    const letterBox = document.getElementById("letter-box");
    const letterText = document.getElementById("letter-text");
    const finalMessage = document.getElementById("final-message");
    const heartsContainer = document.getElementById("hearts-container");

    // Text Data configuration
    const welcomePhrase = "Hi Saumya...";
    const birthdayLetter = "On this special day, I just wanted to write something sweet for you. Wishing you a year full of happiness, endless laughter, and beautiful moments. You deserve the absolute best today and always! ✨❤️";

    // Step 1: Simulate Fake Loading Screen (2.5 seconds)
    setTimeout(() => {
        switchScreen(loadingScreen, welcomeScreen);
        startWelcomeTypewriter();
    }, 2500);

    // Step 2: Handle Welcome Typewriter
    function startWelcomeTypewriter() {
        let i = 0;
        typewriterText.classList.add("blink-caret");
        
        function type() {
            if (i < welcomePhrase.length) {
                typewriterText.innerHTML += welcomePhrase.charAt(i);
                i++;
                setTimeout(type, 150); // Speed of character typing
            } else {
                // Done typing phrase, hold for 1.5s then jump to gift screen
                typewriterText.classList.remove("blink-caret");
                setTimeout(() => {
                    switchScreen(welcomeScreen, giftScreen);
                }, 1500);
            }
        }
        setTimeout(type, 500);
    }

    // Step 3: Gift Box Tap Trigger
    giftBox.addEventListener("click", () => {
        giftBox.classList.add("open");
        
        // Fire Instant Confetti Explosion
        triggerConfettiBurst();

        // Switch to main setup screen quickly after box shrinks out
        setTimeout(() => {
            switchScreen(giftScreen, celebrationScreen);
            startCelebrationFlow();
        }, 600);
    });

    // Step 4: Core Presentation Flow Sequencer
    function startCelebrationFlow() {
        // Continuous confetti showers
        const confettiInterval = setInterval(triggerConfettiShower, 1200);

        // A. Reveal Title Heading
        setTimeout(() => {
            revealElement(birthdayHeading);
        }, 400);

        // B. Reveal Photo
        setTimeout(() => {
            revealElement(photoFrame);
        }, 1400);

        // C. Show text box frame and start letter typing process
        setTimeout(() => {
            revealElement(letterBox);
            typeLetterText(() => {
                // D. Once letter is fully typed, show final touch elements
                setTimeout(() => {
                    revealElement(finalMessage);
                    startFloatingHearts(); // Start background floating hearts ambient loops
                }, 800);
            });
        }, 2600);
    }

    // Letter Autotyping Logic Engine
    function typeLetterText(callback) {
        let index = 0;
        function type() {
            if (index < birthdayLetter.length) {
                letterText.innerHTML += birthdayLetter.charAt(index);
                index++;
                setTimeout(type, 45); // Adjust typing speed of custom text here
            } else {
                if(callback) callback();
            }
        }
        type();
    }

    // Canvas Confetti Methods Wrapper
    function triggerConfettiBurst() {
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });
    }

    function triggerConfettiShower() {
        confetti({
            particleCount: 40,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 40,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }

    // Background Floating Hearts Core System
    function startFloatingHearts() {
        setInterval(() => {
            const heart = document.createElement("div");
            heart.classList.add("floating-heart");
            heart.innerText = ["❤️", "💖", "💝", "💕", "🌸"][Math.floor(Math.random() * 5)];
            
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // Between 3s and 6s
            heart.style.fontSize = Math.random() * 20 + 15 + "px";
            
            heartsContainer.appendChild(heart);

            // Housekeeping: Garbage collection of elements out of viewport
            setTimeout(() => {
                heart.remove();
            }, 6000);
        }, 300);
    }

    // Generic View State Transition Helpers
    function switchScreen(hideTarget, showTarget) {
        hideTarget.classList.remove("active");
        showTarget.classList.add("active");
    }

    function revealElement(element) {
        element.classList.remove("hidden");
        element.classList.add("visible");
    }
});
