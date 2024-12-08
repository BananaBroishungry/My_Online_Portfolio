document.addEventListener("DOMContentLoaded", () => {
    const roles = ["Developer", "Musician", "Photographer"];
    const graphics = {
        Developer: "Gifs/Coding.gif", 
        Musician: "Gifs/Guitar.gif",  
        Photographer: "Gifs/Camera.gif"
    };

    const graphicImg = document.getElementById("graphic-img");
    const typingText = document.querySelector(".typing-animation span");

    let currentIndex = 0;

    // Function to switch the graphic and the typing text
    const switchGraphic = () => {
        const currentRole = roles[currentIndex];

        // Change the gif to match the current role
        graphicImg.src = graphics[currentRole];

        // Update the text in the typing animation span
        typingText.textContent = currentRole;

        // Reset the typing animation to restart for each new role
        typingText.classList.remove('typing'); // Remove the animation class to reset
        void typingText.offsetWidth; // Trigger reflow (reset the animation)
        typingText.classList.add('typing'); // Add the animation class again

        // Move to the next role
        currentIndex = (currentIndex + 1) % roles.length;
    };

    // Set initial role immediately on page load
    switchGraphic(); // Initial role set on page load

    // Start the graphic and text switching every 7 seconds
    setInterval(switchGraphic, 7000);
});