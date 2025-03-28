document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("dark-mode");

    const textElement = document.querySelector(".typing-title");
    if (textElement) {
        let text = textElement.textContent;
        textElement.textContent = "";
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                textElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        typeWriter();
    }
});