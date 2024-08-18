let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelector('.carousel-slide');
  const totalSlides = slides.children.length;
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  const offset = -slideIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

document.getElementById('search').addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  const items = document.querySelectorAll('.image-item');

  items.forEach(item => {
      const tags = item.getAttribute('data-tags').toLowerCase();
      if (tags.includes(filter)) {
          item.style.display = '';
      } else {
          item.style.display = 'none';
      }
  });
});

document.getElementById('file-input').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const preview = document.getElementById('preview');
          preview.src = e.target.result;
          preview.style.display = 'block';
      };
      reader.readAsDataURL(file);
  }
});
const btns=document.querySelector(".btn");
  btns.addEventListener("click", () => {
       alert("Image Uploaded!");
  });

let btn=document.querySelector(".btn");
btn.addEventListener("click",()=> {
      window.scrollTo({
        top:0,
        behavior:'smooth'
      });
});
