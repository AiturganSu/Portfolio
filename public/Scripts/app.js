//IIFE - Immadietly invoked Function Expression
(function() {

    function Start() {
        console.log(`%c App Started...`,
            "fonr-size: 20px; color: blue; font-weight: bold");

        if (document.title == "Contact") {
            let sendButton = document.getElementById("sendButton");
            let cancelButton = document.getElementById("cancelButton");

            sendButton.addEventListener("click", (event) => {
                event.preventDefault();
            })

            cancelButton.addEventListener("click", (event) => {
                event.preventDefault();
                if (confirm("Are you sure?")) {
                    location.href = "/";
                }
            })

        }
    }

    window.addEventListener("load", Start);
})();