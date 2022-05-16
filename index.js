
    function displayAbout() {
        let arrow = document.getElementById('animation');
        arrow.classList.toggle('rotate');

        let display = document.getElementById('about');
        display.classList.toggle('active');
        }




    function emailCheck(email) {

        // Check if email is in the right pattern 
        var result = /\S+@\S+\.\S+/;
        return result.test(email);

        }

