//===========FOOTER JAVASCRIPT==========

const footer = document.querySelector("footer");

const copyrightFooter = document.createElement("div");
copyrightFooter.className = "copyright-footer";

footer.appendChild(copyrightFooter);

const today= new Date();
const thisYear = today.getFullYear();
const unicode = '\u00A9'; 


const copyright = document.createElement("p");
copyright.innerHTML= unicode + " "+ "Terri-Ann Walker" + " "+ thisYear;

copyrightFooter.appendChild(copyright);


copyright.style.textAlign = "center";
copyright.style.marginTop ="2em"
copyright.style.color="#5e0166"



//==========SKILLS JAVASCRIPT============


const skills = ["HTML", "CSS", "Javascript", "GitHub"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i=0; i<skills.length; i++){
    const skill =document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};



//MORE BUTTON JAVASCRIPT//
window.addEventListener('load', function () {
    setTimeout(function () {
      const moreBtn = document.querySelector('.more-button');
      if (moreBtn) {
        moreBtn.classList.remove('display-none'); 
      }
    }, 5000);
  });



  //Leave A Message Section//
  const messageForm = document.getElementsByName("leave_message")[0]
  messageForm.addEventListener("submit", function(event){
    event.preventDefault();
    const name =  event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;
    console.log("Name:", name); 
    console.log("Email:", email); 
    console.log("Message:", message)

    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul"); 
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href = "mailto: ${email}">${name}</a><br><span></span>${message} `;
    
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove"
    removeButton.setAttribute("type","button");
    removeButton.addEventListener("click", function (event){
      const messageParent = document.getElementById("messages");
      const entry = removeButton.parentElement;
      entry.remove();
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
   
  })




