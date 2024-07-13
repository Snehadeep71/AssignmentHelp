/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu');
 /*--------------css for section 1 form starts here ---------------------*/ 
 function updatePageCount(change) {
    const pageInput = document.getElementById('pages');
    const totalWords = document.getElementById('total-words');
    let pageCount = parseInt(pageInput.value, 10);

    pageCount += change;

    if (pageCount < 1) {
        pageCount = 1;
    }

    pageInput.value = pageCount;
    totalWords.textContent = pageCount * 250;
}
function whatsapp() {
    const phoneNumber = "+916289570081"; // Replace with your WhatsApp number
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const datetime = document.getElementById("datetime").value;
    const pages = document.getElementById("pages").value;

    // Construct the message text
    const message = `
        *Name:* ${name}%0a
        *Mobile No:* ${mobile}%0a
        *Email Id:* ${email}%0a
        *Subject/Course:* ${subject}%0a
        *Deadline:* ${datetime}%0a
        *Pages:* ${pages}
    `;

    // Construct the WhatsApp URL
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(url, '_blank');
}
 /*--------------css for section 1 form ends here ---------------------*/ 
//  <script>
// <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
//    <div class="elfsight-app-9e61bd6e-1f0b-45aa-aec0-bf58a9a2262e" data-elfsight-app-lazy></div>
// </script>