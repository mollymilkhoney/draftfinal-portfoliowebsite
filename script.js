//below is for my bee that follows the curser
document.addEventListener('mousemove', (event) => {
    // get the main element
    const mainElement = document.querySelector('main');

    // calculate the position of the mouse relative to the viewport
    const xPercent = (event.clientX / window.innerWidth) * 100;
    const yPercent = (event.clientY / window.innerHeight) * 100;

    // update the background position to follow the cursor
    mainElement.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
});



//---------------------------------------------------------------------
//below is for the main section two divs appearing slowly after eachother
document.addEventListener('DOMContentLoaded', () => {
    // selects elements
    const textContent1 = document.querySelector('.text-content1');
    const textContent2 = document.querySelector('.text-content2');

    // shows element 1 after 1 second
    setTimeout(() => {
        textContent1.classList.add('visible');
    }, 1000); // 1000ms = 1 second

    // show element 2 after 2 seconds
    setTimeout(() => {
        textContent2.classList.add('visible');
    }, 2000); // 2000ms = 2 seconds
});


// ------------------------------------------------------------------
// below is the code for changing from light mode to dark mode
document.getElementById("toggle-colors").addEventListener("click", () => {
    console.log("Before toggle:", document.getElementById("toggle-colors").textContent); // debug statement to check what the content is 
    document.body.classList.toggle("invert-colors");

    const button = document.getElementById("toggle-colors"); // these 3 lines are changing the moon to sun & back
    button.textContent = button.textContent === "☽" ? "☼" : "☽";
    console.log("After toggle:", button.textContent); // debug statement to check what the content is
});


// ------------------------------------------------------------------
// below is the code for the contact form in main element
const main = document.getElementById('column1');
const originalContent = column1.innerHTML; // save the original content when the page loads

// function to reapply animations to the main sections
function reapplyAnimations() {
    const textContent1 = main.querySelector('.text-content1');
    const textContent2 = main.querySelector('.text-content2');

    if (textContent1) {
        textContent1.classList.remove('visible'); // reset the animation state
        textContent1.classList.add('hidden'); // start hidden
        setTimeout(() => {
            textContent1.classList.add('visible'); // trigger the animation
        }, 1000); // 1000ms = 1 second
    }

    if (textContent2) {
        textContent2.classList.remove('visible'); // reset animation
        textContent2.classList.add('hidden'); // start hidden
        setTimeout(() => {
            textContent2.classList.add('visible'); // trigger the animation
        }, 2000); // 2000ms = 2 seconds
    }
}

// show the contact form when 'show-contact-form' aka contact in nav is clicked
document.getElementById('show-contact-form').addEventListener('click', () => {
    const contactForm = document.getElementById('contact-form');
    const column1 = document.getElementById('column1');
    const column2 = document.getElementById('column2');
    const column3 = document.getElementById('column3');

    if (!contactForm || !column1 || !column2 || !column3) {
        console.error("elements not found, beep boop");
        return;
    }

    // clear content and show the contact form
    column1.innerHTML = ''; // clear content of column1
    column2.style.display = 'none'; // hide column2
    column3.style.display = 'none'; // hide column3
    contactForm.style.display = 'block'; // make form visible
    column1.appendChild(contactForm); // add form to column1
});

// reset to original content when 'home-button' clicked
document.getElementById('home-button').addEventListener('click', () => {
    const column1 = document.getElementById('column1');
    const column2 = document.getElementById('column2');
    const column3 = document.getElementById('column3');
    const contactForm = document.getElementById('contact-form');

    if (!column1 || !column2 || !column3 || !contactForm) {
        console.error("One or more elements not found");
        return;
    }

    // reset original content and show both columns
    column1.innerHTML = originalContent; // reset column1
    column2.style.display = 'block'; // show column2
    column3.style.display = 'block'; // show column3
    contactForm.style.display = 'none'; // hide contact form
    reapplyAnimations(); // reapply animations column1 content
});

//------------------------------------------------------------------
//below is advent calendar javascript

document.getElementById("present1").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present1").textContent); 
 const button = document.getElementById("present1"); 
     button.textContent = button.textContent === "🎁" ? "🕊️" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //-----------------
 document.getElementById("present2").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present2").textContent); 
 const button = document.getElementById("present2"); 
     button.textContent = button.textContent === "🎁" ? "🍷" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //-----------------
 document.getElementById("present3").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present3").textContent); 
 const button = document.getElementById("present3"); 
     button.textContent = button.textContent === "🎁" ? "🦃" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //-----------------
 document.getElementById("present4").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present4").textContent); 
 const button = document.getElementById("present4"); 
     button.textContent = button.textContent === "🎁" ? "❄️" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //-----------------
 document.getElementById("present5").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present5").textContent); 
 const button = document.getElementById("present5"); 
     button.textContent = button.textContent === "🎁" ? "☃️" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //------------------
 document.getElementById("present6").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present6").textContent); 
 const button = document.getElementById("present6"); 
     button.textContent = button.textContent === "🎁" ? "🌟" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //------------------
 document.getElementById("present7").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present7").textContent); 
 const button = document.getElementById("present7"); 
     button.textContent = button.textContent === "🎁" ? "🔔" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //------------------
 document.getElementById("present8").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present8").textContent); 
 const button = document.getElementById("present8"); 
     button.textContent = button.textContent === "🎁" ? "🍪" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //----------------
 document.getElementById("present9").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present9").textContent); 
 const button = document.getElementById("present9"); 
     button.textContent = button.textContent === "🎁" ? "🦌" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //-----------------
 document.getElementById("present10").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present10").textContent); 
 const button = document.getElementById("present10"); 
     button.textContent = button.textContent === "🎁" ? "🎄" : "🎁";
     console.log("After toggle:", button.textContent); 
 });