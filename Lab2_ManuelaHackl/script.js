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
        fullname.classList.add("errorborder")
        charcountname.classList.add("errortxt")
        fullname.classList.remove("verifiedborder")
        charcountname.classList.remove("validtxt")
        nametrue = false
        
    } else if (countname < 2 || !validname ) {
        charcountname.textContent = 'Min. of 2 characters required (' + countname + '/2)';
        fullname.classList.add("errorborder")
        charcountname.classList.add("errortxt")
        fullname.classList.remove("verifiedborder")
        charcountname.classList.remove("validtxt")
        nametrue = false
    
    } else { charcountname.textContent = 'Character Count: ' +countname;
        fullname.classList.remove("errorborder")
        charcountname.classList.remove("errortxt")
        fullname.classList.add("verifiedborder")
        charcountname.classList.add("validtxt")
        nametrue = true
    }
    return nametrue
}
fullname.addEventListener("input", validateFullName)

//Comment: min 15 chars
function validateComments() {
    const textcom = comments.value;
    const countcom = textcom.length;

    if (countcom < 15) {
        charcountcomments.textContent = 'Min. of 15 characters required (' +  countcom+ '/15)';
        comments.classList.add("errorborder")
        charcountcomments.classList.add("errortxt")
        comments.classList.remove("verifiedborder")
        charcountcomments.classList.remove("validtxt")
        commenttrue = false;
        
    } else { charcountcomments.textContent = 'Character Count: '+countcom;
        comments.classList.remove("errorborder")
        charcountcomments.classList.remove("errortxt")
        comments.classList.add("verifiedborder")
        charcountcomments.classList.add("validtxt")
        commenttrue = true;

    }

    return commenttrue
}

comments.addEventListener("input", validateComments)

//Form Event Errors
//Email Error
function validateEmail() {

    if (!email.validity.valid || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        EmailError.textContent = "Please insert valid email";
        email.classList.add("errorborder")
        EmailError.classList.add("errortxt")
        email.classList.remove("verifiedborder")
        EmailError.classList.remove("validtxt")
        emailtrue = false
        
    }
    else {EmailError.textContent = "";
        email.classList.remove("errorborder")
        EmailError.classList.remove("errortxt")
        email.classList.add("verifiedborder")
        EmailError.classList.add("validtxt")
        emailtrue = true

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
        web.classList.remove("verifiedborder")
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
        datatrue = false


} else {
        DataError.textContent = "";
        data.classList.remove("errorborder")
        DataError.classList.remove("errortxt")
        data.classList.add("verifiedborder")
        datatrue = true
    }
return datatrue
}

data.addEventListener("change", validateData);


//Topic Error //
function validateTopic() {

    if (subject.value === "") {
        TopicError.textContent = "Please choose a topic";
        subject.classList.add("errorborder")
        TopicError.classList.add("errortxt")
        subject.classList.remove("verifiedborder")
        subjecttrue = false;
        
    }
    else {
        TopicError.textContent = "";
        subject.classList.remove("errorborder")
        TopicError.classList.remove("errortxt")
        subject.classList.add("verifiedborder")
        subjecttrue = true;
    }
    return subjecttrue
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
     AllErrorMsg.textContent = "Thanks for your feedback, " + fullname.value + "!";
    AllError.classList.remove("allerror")
    AllError.classList.add("allgood")

    setTimeout(function() {
    AllErrorMsg.textContent = ""
    AllError.classList.remove("allgood")
    form.reset()
}, 4000);

} else {
        AllErrorMsg.textContent = "Please check the fields above!";
        AllError.classList.add("allerror")
        AllError.classList.remove("allgood")

} 
});

//reset all

function resetForm() {
    nametrue = false
    emailtrue = false
    subjecttrue = false
    commenttrue = false
    webtrue = false
    datatrue = false
    EmailError.textContent = ""
    WebError.textContent = ""
    TopicError.textContent = ""
    DataError.textContent = ""
    AllErrorMsg.textContent = ""
    charcountname.textContent = "Min. of 2 characters required"
    charcountcomments.textContent = "Min. of 15 characters required"
    fullname.classList.remove("errorborder", "verifiedborder")
    email.classList.remove("errorborder", "verifiedborder")
    web.classList.remove("errorborder", "verifiedborder")
    subject.classList.remove("errorborder", "verifiedborder")
    comments.classList.remove("errorborder", "verifiedborder")
    data.classList.remove("errorborder", "verifiedborder")
    charcountname.classList.remove("errortxt")
    charcountcomments.classList.remove("errortxt")
    AllError.classList.remove("allerror", "allgood")
    charcountname.classList.remove("validtxt")
    charcountcomments.classList.remove("validtxt")
    EmailError.classList.remove("errortxt", "validtxt")
    WebError.classList.remove("errortxt")
    TopicError.classList.remove("errortxt")
    DataError.classList.remove("errortxt")
}
form.addEventListener("reset", resetForm);

