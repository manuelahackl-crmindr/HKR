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
//HTML refs

//Form inputs
const form = document.getElementById("FormBottom") 
const fullname = document.getElementById("name")
const web = document.getElementById("web")
const subject = document.getElementById("subject")
const comments = document.getElementById("message")
const data = document.getElementById("radio")
const email = document.getElementById("email")

//Count text
const charcountname = document.getElementById("countname")
const charcountcomments =document.getElementById("countcomments")

//Error messages
const EmailError = document.getElementById('error-email')
const NameError = document.getElementById('error-name')
const WebError = document.getElementById('error-web')
const TopicError = document.getElementById('error-subject')
const CommentsError = document.getElementById('error-message')
const DataError = document.getElementById('error-data')
const SubError = document.getElementById('suberror')
const AllError = document.getElementById('submit-error')
const AllErrorMsg = document.getElementById('all-error')


//Initial values for submit
let nametrue = false;
let emailtrue = false;
let subjecttrue = false;
let commenttrue = false;
let webtrue = false;
let datatrue = false;

//Characters Count Keypress
//Name: min 2 chars
fullname.addEventListener("input", function() {
    const textname = fullname.value;
    const countname = textname.length;

    if (countname === 0) {
        charcountname.textContent = 'Min. of 2 characters required';
        fullname.classList.remove("errorborder")
        charcountname.classList.remove("errortxt")
        fullname.classList.remove("verifiedborder")
        nametrue = false;
        
    } else if (countname === 1 ) {
        charcountname.textContent = 'Min. of 2 characters required';
        fullname.classList.add("errorborder")
        charcountname.classList.add("errortxt")
        fullname.classList.remove("verifiedborder")
        nametrue = false;
    
    } else { charcountname.textContent = 'Character Count: ' +countname;
        fullname.classList.remove("errorborder")
        charcountname.classList.remove("errortxt")
        fullname.classList.add("verifiedborder")
        nametrue = true;
        namesubmit = fullname.value;

    }
})

//Comment: min 15 chars
comments.addEventListener("input", function() {
    const textcom = comments.value;
    const countcom = textcom.length;

    if (countcom < 15) {
        charcountcomments.textContent = 'Min. of 15 characters required';
        comments.classList.add("errorborder")
        charcountcomments.classList.add("errortxt")
        comments.classList.remove("verifiedborder")
        commenttrue = false;
        
    } else { charcountcomments.textContent = 'Character Count: '+countcom;
        comments.classList.remove("errorborder")
        charcountcomments.classList.remove("errortxt")
        comments.classList.add("verifiedborder")
        commenttrue = true;
    }
})


//Form Event Errors
//Email Error
const emaildomain = [
    ".de", ".se", ".com", ".co.uk", ".it", ".at", ".ch"
]

email.addEventListener("input", function() { //keyup
    const emailvalid = email.value.includes("@") && emaildomain.some(emaildomains => email.value.includes(emaildomains) )

    if (!emailvalid) {EmailError.textContent = "Please insert valid email";
        email.classList.add("errorborder")
        EmailError.classList.add("errortxt")
        email.classList.remove("verifiedborder")
        emailtrue = false;
        
    }
    else {EmailError.textContent = " ";
        email.classList.remove("errorborder")
        EmailError.classList.remove("errortxt")
        email.classList.add("verifiedborder")
        emailtrue = true;
    }
})


//Website Validation
function isValidUrl() {
    const textweb = web.value;
  try {
    new URL(textweb);
    WebError.textContent = " ";
    web.classList.remove("errorborder")
    WebError.classList.remove("errortxt")
    web.classList.add("verifiedborder")
    webtrue = true;
  } catch (werror) {
    WebError.textContent = "Please insert valid Web-Adress";
    web.classList.add("errorborder")
    WebError.classList.add("errortxt")
    web.classList.remove("verifiedborder")
    webtrue = false;
  }
}

web.addEventListener("input", isValidUrl)


// DSGVO Error
data.addEventListener("click", function() { 
    if (data.checked === false ) {
        DataError.textContent = "Please accept";
        data.classList.add("errorborder")
        DataError.classList.add("errortxt")
        data.classList.remove("verifiedborder")
        datatrue = false;

} else {
        DataError.textContent = "";
        data.classList.remove("errorborder")
        DataError.classList.remove("errortxt")
        data.classList.add("verifiedborder")
        datatrue = true;
    }

})


//Topic Error
subject.addEventListener("change", function() {
    const subjectvalue = subject.value

    if (subjectvalue !="Choose a topic") {
        SubError.textContent = "";
        subject.classList.remove("errorborder")
        SubError.classList.remove("errortxt")
        subject.classList.add("verifiedborder")
        subjecttrue = true;
        
    }
    else {
        SubError.textContent = "Please choose a topic";
        subject.classList.add("errorborder")
        SubError.classList.add("errortxt")
        subject.classList.remove("verifiedborder")
        subjecttrue = false;
    }
})



/*Email Error @ alt
form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (email.value.includes("@")) {
        form.submit()
        
    } else { EmailError.textContent = "Please insert valid email"

    }
})
    */
form.addEventListener("submit", function(event) {
    event.preventDefault();
    namesubmit = fullname.value;

if (nametrue === true && emailtrue === true && subjecttrue === true && commenttrue === true && data.checked === true ) {
        AllError.textContent = "Thanks for your feedback, " + namesubmit;
        AllError.classList.remove("allerror")
        AllError.classList.add("allgood")
} else {
        AllError.textContent = "Please check the fields above!";
        AllError.classList.add("allerror")
        AllError.classList.remove("allgood")

        if (data.checked === false ) {
        DataError.textContent = "Please accept";
        data.classList.add("errorborder")
        DataError.classList.add("errortxt")
        data.classList.remove("verifiedborder")
} 
}})



