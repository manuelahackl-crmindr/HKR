/* To Do:
#Welcome Message
#Form errors
#Gallery filter
#counter
*/


/*Form

let form = document.getElementById("FormButtom") 
form.addEventListener("submit"; function(formSubmit)) {
    event.preventDefault();

    console.log ("OK")

}

*/

//Message by Button Klick

const button = document.getElementById('btn0');
button.addEventListener('click', function () {
 alert("OK!")

});

//FORM JS
//Form Submit Event
const form = document.getElementById("FormBottom") 
const email = document.getElementById("email")
const FormError = document.getElementById('FormError')

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (email.value.includes("@")) {
        form.submit()
        
    } else { FormError.textContent = "Please insert valid Email!"

    }
})

//Characters Count Keypress