

const buttons = document.querySelectorAll(".learn-btn");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const details = button.nextElementSibling;

        details.hidden = !details.hidden;

        if (details.hidden) {
            button.textContent = "Learn More";
        } else {
            button.textContent = "Learn Less";
        }

    });

});
