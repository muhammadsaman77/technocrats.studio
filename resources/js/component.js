$(document).ready(function () {
  $('.accordion-header').on('click', function () {
    const body = $(this).next('.accordion-body');

    // Close other open accordions
    $('.accordion-body').not(body).slideUp();

    // Toggle current
    body.slideToggle();
  });
});


var map = L.map('map').setView([-1.2379, 116.8529], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);