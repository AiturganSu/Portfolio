//IIFE - Immadietly invoked Function Expression
(function() {

    function Start() {
        console.log(`%c App Started...`,
            "fonr-size: 20px; color: blue; font-weight: bold");

        if (document.title == "Contact") {
            let sendButton = document.getElementById("sendButton");
            let cancelButton = document.getElementById("cancelButton");
            let form = document.forms[0];

            sendButton.addEventListener("click", (event) => {
                event.preventDefault();

                let firstName = document.getElementById("fullName").value;
                let contactNumer = document.getElementById("contactNumber").value;
                let emailAddress = document.getElementById("email")
                let message = document.getElementById("message").value;

                console.info(`Full Name: ${fullName}
                Contact Number: ${contactNumer}
                Email Address:  ${emailAddress}
                Message:        ${message}`);

                form.reset();

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