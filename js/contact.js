let autoReply= document.getElementById("auto-reply");
let subject= document.getElementById("subject");
let replyTo= document.getElementById("reply-to");
let email= document.getElementById("email-address");

let textMessage = document.getElementById("text-message");

const contactForm = document.getElementById("contact-form");
const firstName = document.getElementById("first-name");
const lastName =  document.getElementById("last-name")

const sendButton = document.getElementById("send-button");

sendButton.addEventListener("mouseover", (e)=>{
    e.preventDefault();
    textMessage.value = subject.value;
    replyTo.value = email.value;
    autoReply.value= 
        `
        Hello  ${firstName.value} ${lastName.value},
        Thanks for your message
        `;

        console.log(contactForm.innerHTML)
});

