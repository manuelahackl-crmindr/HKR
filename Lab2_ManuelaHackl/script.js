/* To Do:

Focus: a strong visible outline or border for keyboard and pointer users.
Error: red border plus a written error message—do not rely on color alone.
Valid: green border only after the field has been checked and passed validation.
Use smooth, restrained transitions and a responsive layout that works on mobile


Lab 2 requirements:

Organize the code
# Select each required form element once and store the reference in a const. 
Do not repeatedly query the same element inside event handlers.
# Use focused functions such as validateFullName(), validateEmail(), validateTopic(), 
validateComments(), showFieldError(), clearFieldError() and resetForm().
# Keep validation rules and DOM updates separate enough that each function has 
one clear responsibility.

Live character counter:
# Update the count on every input event and state the 15-character minimum in text.
# Use red while the response is too short and green after the minimum is met, 
while keeping the written count understandable without color.

Submission behavior
1. Listen for submit and call event.preventDefault() so the page does not reload.
2. Run every validation function. Show the relevant messages and stop when any 
required field is invalid.
3. When all fields are valid, show “Thanks for your feedback, [Full Name]!” 
in the status area.
4. Reset field values, validation classes, error messages and the counter after 
a successful submission.
5. Remove the success message automatically after 4 seconds. 
The Clear button must also restore the complete initial state.


/*Form

let form = document.getElementById("FormButtom") 
form.addEventListener("submit"; function(formSubmit)) {
    event.preventDefault();

    console.log ("OK")

}

*/

/*Message by Button Klick

const button = document.getElementById('btn0');
button.addEventListener('click', function () {
 alert("OK!")

});
*/

//FORM JS
//Form Submit Event Errors
const form = document.getElementById("FormBottom") 
const fullname = document.getElementById("name")
const web = document.getElementById("web")
const subject = document.getElementById("subject")
const comments = document.getElementById("message")
const data = document.getElementById("radio")
const email = document.getElementById("email")
const charcountname = document.getElementById("countname")
const charcountcomments =document.getElementById("countcomments")
const EmailError = document.getElementById('error-email')
const NameError = document.getElementById('error-name')
const WebError = document.getElementById('error-web')
const TopicError = document.getElementById('error-subject')
const CommentsError = document.getElementById('error-message')
const DataError = document.getElementById('error-data')

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (email.value.includes("@")) {
        form.submit()
        
    } else { EmailError.textContent = "Please insert valid email"

    }
})

//Name length

//Characters Count Keypress
fullname.addEventListener("keyup", function() {
    const textname = fullname.value;
    const countname = textname.length;

    if (countname < 2) {
        charcountname.textContent = 'Min. of 2 characters required';
        
    } else { charcountname.textContent = 'Character Count: ' +countname;

    }
})

comments.addEventListener("keyup", function() {
    const textcom = comments.value;
    const countcom = textcom.length;

    if (countcom < 15) {
        charcountcomments.textContent = 'Min. of 15 characters required';
        
    } else { charcountcomments.textContent = 'Character Count: ' +countcom;

    }
})

//Email Error @

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (email.value.includes("@")) {
        form.submit()
        
    } else { EmailError.textContent = "Please insert valid email"

    }
})