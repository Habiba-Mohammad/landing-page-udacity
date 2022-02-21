// first requirement add a dynamic navigation bar //
// get elements from Html 
let Nav = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section'); 
// build the function make the navigation bar
function navBar() {
// create an empty string to add all sections in the same line and make the link 
      let str=""
      // looping using forEach to loop over all sections to get all sections 
      sections.forEach(section => {
      //call sections id from html   
        let secId = section.id;
        let secDataNav = section.dataset.nav
      // convert every section to be a link 
       str += `<li><ul><a class="menu__link" href="#${secId}">${secDataNav}</a></ul><li>`;});
      Nav.innerHTML = str;};
      navBar();
////////////////////////////////////////////////////////////////////////////////////////////////////////
// return the size of an element and its position relative to the viewport
  let fit = (section) =>{
      return Math.floor(section.getBoundingClientRect().top);
  };
//second requerment adding the active class in let activation by if condition ,add and remove elements 
 let activation = (cond1, section) => {
     if(cond1){
         section.classList.add('your-active-class');
         section.style.cssText = "background-color: black";         
     };};
let deActivation = (section) => {
     section.classList.remove('your-active-class');
     section.style.cssText = "background-color: linear-gradient(0deg, rgba(555,0,0,.1) 0%, rgba(0,0,0,.2) 100%)";
 }; 
 let Activation =function(section){
      sections.forEach(section => {
          const elementOffset = fit(section);   
          inviewport = () => elementOffset < 40 && elementOffset >= -40;    
          deActivation(section);
          activation(inviewport(),section);
      });
  };
document.addEventListener('scroll',Activation);
////////////////////////////third requerment change the content.
let textReplace = document.getElementById("section1").innerHTML;
document.getElementById("section1").innerHTML = textReplace.replace("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero", "I am speech and language pathologist and web developer............................................");
