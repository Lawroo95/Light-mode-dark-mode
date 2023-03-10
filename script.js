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

function ImageMode(color){
   image1.src = `img/undraw_proud_coder_${color}.svg`;
   image2.src = `img/undraw_feeling_proud_${color}.svg`;
   image3.src = `img/undraw_conceptual_idea_${color}.svg`;
};

function ToggleDarkLightMode(isDark){
   nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
   textbox.style.backgroundColor = isDark ?  'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
 toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
 isDark? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : 
 toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
 isDark? imageMode('dark') : imageMode('light');
};


// Switch theme dynamically 
function switchtheme(event){
   if (event.target.checked){
      localStorage.setItem('theme','dark')
      document.documentElement.setAttribute('data-theme','dark');
      ToggleDarkLightMode(true)
      
   }else{
     
      localStorage.setItem('theme','light');
  document.documentElement.setAttribute('data-theme', 'light');
 ToggleDarkLightMode(false);
   }  
   };
 
  

 
 // Event listener 
 
 toggleSwitch.addEventListener('change',switchtheme);

 const currentTheme = localStorage.getItem('theme');
if(currentTheme){
   document.documentElement.setAttribute('data-theme', currentTheme); 
   if (currentTheme === 'dark'){
      toggleSwitch.checked = true;
      ToggleDarkLightMode(true);
   }
};

 

    






