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




