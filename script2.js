const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textbox = document.getElementById('text-box');

// Switch theme dynamically 
function switchtheme(event){
   console.log(event.target.checked)
 
};

// Event listener 

toggleSwitch.addEventListener('change',switchtheme)
// Dark or light themes 




// Dark mode styles
function Mode(){
   nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
   textbox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
   console.log(toggleIcon.children);
   toggleIcon.children[0].textContent = 'Dark Mode';
   toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
colorscheme('dark');
};

// Light mode styles 

function lightMode(){
   nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
   textbox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
   console.log(toggleIcon.children);
   toggleIcon.children[0].textContent = 'Light Mode';
   toggleIcon.children[1].classList.replace('fa-moon','fa-sun');

image1.src = 'img/undraw_proud_coder_light.svg';
image2.src = 'img/undraw_feeling_proud_light.svg';
image3.src = 'img/undraw_conceptual_idea_light.svg';

}
// Switch theme dynamically 
function switchtheme(event){
   if (event.target.checked){
      document.documentElement.setAttribute('data-theme','dark');
      darkMode();
   }else{
      lightMode();
  document.documentElement.setAttribute('data-theme', 'light')
   };

      
   };
 
  

 
 // Event listener 
 
 toggleSwitch.addEventListener('change',switchtheme);
