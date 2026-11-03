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
//Name: min 2 chars inkl. international chars
function validateFullName() {
    const textname = fullname.value;
    const countname = textname.length;
    const validname = /^[\p{L}\p{M}\s'-]+$/u.test(textname)

    if (countname === 0) {
        charcountname.textContent = 'Min. of 2 characters required';
        fullname.classList.remove("errorborder")
        charcountname.classList.remove("errortxt")
        fullname.classList.remove("verifiedborder")
        charcountname.classList.remove("validtxt")
        
    } else if (countname < 2 || !validname ) {
        charcountname.textContent = 'Min. of 2 characters required';
        fullname.classList.add("errorborder")
        charcountname.classList.add("errortxt")
        fullname.classList.remove("verifiedborder")
        charcountname.classList.remove("validtxt")
    
    } else { charcountname.textContent = 'Character Count: ' +countname;
        fullname.classList.remove("errorborder")
        charcountname.classList.remove("errortxt")
        fullname.classList.add("verifiedborder")
        charcountname.classList.add("validtxt")
    }
     return nametrue
}
fullname.addEventListener("input", validateFullName)

//Comment: min 15 chars
function validateComments() {
    const textcom = comments.value;
    const countcom = textcom.length;

    if (countcom < 15) {
        charcountcomments.textContent = 'Min. of 15 characters required';
        comments.classList.add("errorborder")
        charcountcomments.classList.add("errortxt")
        comments.classList.remove("verifiedborder")
        charcountcomments.classList.remove("validtxt")
        
    } else { charcountcomments.textContent = 'Character Count: '+countcom;
        comments.classList.remove("errorborder")
        charcountcomments.classList.remove("errortxt")
        comments.classList.add("verifiedborder")
        charcountcomments.classList.add("validtxt")
    }

    return commenttrue
}

comments.addEventListener("input", validateComments)

//Form Event Errors
//Email Error
function validateEmail() {

    if (!email.validity.valid) {
        EmailError.textContent = "Please insert valid email";
        email.classList.add("errorborder")
        EmailError.classList.add("errortxt")
        email.classList.remove("verifiedborder")
        EmailError.classList.remove("validtxt")
        
    }
    else {EmailError.textContent = "";
        email.classList.remove("errorborder")
        EmailError.classList.remove("errortxt")
        email.classList.add("verifiedborder")
        EmailError.classList.add("validtxt")
    }
    return emailtrue
}

email.addEventListener("input", validateEmail)

//Website Validation

function validateWebsite() {
    if (web.value ==="") {
        WebError.textContent = ""
        web.classList.remove("errorborder")
        WebError.classList.remove("errortxt")
        web.classList.add("verifiedborder")
        webtrue = true;
    } 
    else if (!web.validity.valid) {
            WebError.textContent = "Please insert valid Web Adress";
            web.classList.add("errorborder")
            WebError.classList.add("errortxt")
            web.classList.remove("verifiedborder")
            webtrue = false;
    } else {
            WebError.textContent = "";
            web.classList.remove("errorborder")
            WebError.classList.remove("errortxt")
            web.classList.add("verifiedborder")
            webtrue = true;
    }
    return webtrue;
}

web.addEventListener("input", validateWebsite);


// DSGVO Error

function validateData() {
    if (data.checked === false ) {
        DataError.textContent = "Please accept";
        data.classList.add("errorborder")
        DataError.classList.add("errortxt")
        data.classList.remove("verifiedborder")

} else {
        DataError.textContent = "";
        data.classList.remove("errorborder")
        DataError.classList.remove("errortxt")
        data.classList.add("verifiedborder")
    }

}

data.addEventListener("change", validateData);


//Topic Error //

function validateTopic() {
    const subjectvalue = subject.value

    if (subject.value === "") {
        SubError.textContent = "Please choose a topic";
        subject.classList.add("errorborder")
        SubError.classList.add("errortxt")
        subject.classList.remove("verifiedborder")
        subjecttrue = false;
        
    }
    else {
        SubError.textContent = "";
        subject.classList.remove("errorborder")
        SubError.classList.remove("errortxt")
        subject.classList.add("verifiedborder")
        subjecttrue = true;
    }
}


subject.addEventListener("change", validateTopic)

//Validate all

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const nameIsValid = validateFullName();
    const emailIsValid = validateEmail();
    const websiteIsValid = validateWebsite();
    const topicIsValid = validateTopic();
    const commentIsValid = validateComments();
    const dataIsValid = validateData();

if ( 
    nameIsValid &&
    emailIsValid &&
    websiteIsValid &&
    topicIsValid &&
    commentIsValid &&
    dataIsValid
) {
     AllError.textContent = "Thanks for your feedback, " + fullname.value + "!" ";
        AllError.classList.remove("allerror")
        AllError.classList.add("allgood")

} else {
        AllError.textContent = "Please check the fields above!";
        AllError.classList.add("allerror")
        AllError.classList.remove("allgood")

} 
})

