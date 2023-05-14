"use strict";

const swiper = new Swiper(".mySwiper", {
	direction: "vertical",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
	loop: true,
});

const swiper2 = new Swiper(".mySwiper2", {
	slidesPerView: 3,
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	loop: true,
});

const blogs = document.querySelectorAll(".blog__subtitle");
blogs.forEach((blog) => {
	blog.addEventListener("click", () => {
		blog.classList.toggle("short");
	});
});

// Мапа

google.maps.event.addDomListener(window, "load", init);

function init() {
	let mapOptions = {
		zoom: 11,
		disableDefaultUI: true,
		center: new google.maps.LatLng(
			51.916649,
			4.4746764,
			12
		),
		styles: [
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [{ color: "#e2e2e2" }, { lightness: 17 }],
			},
			{
				featureType: "landscape",
				elementType: "geometry",
				stylers: [{ color: "#e7e7e7" }, { lightness: 20 }], 
			},
			{
				featureType: "road.highway",
				elementType: "geometry.fill",
				stylers: [{ color: "#ffffff" }, { lightness: 17 }],
			},
			{
				featureType: "road.highway",
				elementType: "geometry.stroke",
				stylers: [
					{ color: "#ffffff" },
					{ lightness: 29 },
					{ weight: 0.2 },
				],
			},
			{
				featureType: "road.arterial",
				elementType: "geometry",
				stylers: [{ color: "#ffffff" }, { lightness: 18 }],
			},
			{
				featureType: "road.local",
				elementType: "geometry",
				stylers: [{ color: "#ffffff" }, { lightness: 16 }],
			},
			{
				featureType: "poi",
				elementType: "geometry",
				stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
			},
			{
				featureType: "poi.park",
				elementType: "geometry",
				stylers: [{ color: "#dedede" }, { lightness: 21 }],
			},
			{
				elementType: "labels.text.stroke",
				stylers: [
					{ visibility: "on" },
					{ color: "#ffffff" },
					{ lightness: 16 },
				],
			},
			{
				elementType: "labels.text.fill",
				stylers: [
					{ saturation: 36 },
					{ color: "#333333" },
					{ lightness: 40 },
				],
			},
			{
				elementType: "labels.icon",
				stylers: [{ visibility: "off" }],
			},
			{
				featureType: "transit",
				elementType: "geometry",
				stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
			},
			{
				featureType: "administrative",
				elementType: "geometry.fill",
				stylers: [{ color: "#fefefe" }, { lightness: 20 }],
			},
			{
				featureType: "administrative",
				elementType: "geometry.stroke",
				stylers: [
					{ color: "#fefefe" },
					{ lightness: 17 },
					{ weight: 1.2 },
				],
			},
		],
	};

	let mapElement = document.getElementById("map");

	let map = new google.maps.Map(mapElement, mapOptions);

	const iconBase = "./assets/images/icons/"; 

	const icons = {
		info: {
			icon: iconBase + "Pin.svg",
		},
	};

	const points = [
		{
			position: new google.maps.LatLng(
				51.922975,
				4.4639904,
				15
			),
			type: "info",
		},
	];

	for (let i = 0; i < points.length; i++) {
		const marker = new google.maps.Marker({
			position: points[i].position,
			icon: icons[points[i].type].icon,
			map: map,
			animation: google.maps.Animation.BOUNCE, // підскакування вверх вниз 
		});
	}
}

var btnContainer = document.getElementById("myDIV");

var btns = btnContainer.getElementsByClassName("nav__bullet");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
  
	if (window.innerWidth > 768) {
	  document.querySelectorAll('.section').forEach((el, i) => {
		if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
		  document.querySelectorAll('.nav__bullet').forEach((el) => {
			if (el.classList.contains('active')) {
			  el.classList.remove('active');
			}
		  });
  
		  document.querySelectorAll('.nav__list-item')[i].querySelector('a').classList.add('active');
		}
	  });
	}
  });

  input.onblur = function() {
	if (!input.value.includes('@')) {
	  input.classList.add('invalid');
	error.innerHTML = 'Invalid value'
	}
  };
  
  input.onfocus = function() {
	if (this.classList.contains('invalid')) {
	 this.classList.remove('invalid');
	error.innerHTML = "";
	}
};





