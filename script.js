// script.js
// You can add your JavaScript code here. For demo, we'll log a message.
document.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded!');

  // Tìm phần tử ảnh trong nav (ảnh lớn)
  const navImg = document.querySelector('nav ~ img');
  if (!navImg) return;

  // Tìm tất cả ảnh trong gallery
  const galleries = document.querySelectorAll('.neighborhood-gallery img, .parks-gallery img');
  galleries.forEach(img => {
    img.addEventListener('mouseenter', function() {
      navImg.src = this.src;
      navImg.alt = this.alt;
    });
    img.addEventListener('mouseleave', function() {
      navImg.src = 'images/BaconGallupPark.jpeg';
      navImg.alt = 'Brown Labradoodle sitting next to a statue.';
    });
  });
});
