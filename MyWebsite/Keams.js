
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => { link.addEventListener("click", () => { navLinks.forEach(l => l.classList.remove("active")); 
link.classList.add("active"); }); });


const forms = document.querySelectorAll("form");
forms.forEach(form => { form.addEventListener("submit", function (e) { e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon."); 
    form.reset(); }); });


const typeText = document.getElementById("typeText"); if (typeText) 
{ const text = "Welcome to Keams Creations"; let i = 0; const speed = 100; function typeWriter()
{ if (i < text.length) { typeText.innerHTML += text.charAt(i); i++; setTimeout(typeWriter, speed); } } typeWriter(); }

let currentIndex = 0;

const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('closeBtn');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');

function showImage(index) {
  if (index >= 0 && index < galleryItems.length) {
    currentIndex = index;
    lightboxImg.src = galleryItems[currentIndex].src;
    lightbox.classList.remove('hidden');
  }
}

galleryItems.forEach((img, i) => {
  img.addEventListener('click', () => {
    showImage(i);
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

prevArrow.addEventListener('click', () => {
  showImage((currentIndex - 1 + galleryItems.length) % galleryItems.length);
});

nextArrow.addEventListener('click', () => {
  showImage((currentIndex + 1) % galleryItems.length);
});




