        let currentSlide = 0;
        let isDragging = false;
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let animationID;
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slides .card').length;

        function moveSlide(step) {
            currentSlide = (currentSlide + step + totalSlides) % totalSlides;
            updateSlidePosition();
        }

        function updateSlidePosition() {
            currentTranslate = -currentSlide * 100;
            slides.style.transform = `translateX(${currentTranslate}%)`;
        }

        function startDrag(event) {
            isDragging = true;
            startPos = getPositionX(event);
            slides.style.cursor = 'grabbing';
            animationID = requestAnimationFrame(animation);
        }

        function drag(event) {
            if (!isDragging) return;
            const currentPosition = getPositionX(event);
            const diff = currentPosition - startPos;
            slides.style.transform = `translateX(${currentTranslate + diff}px)`;
        }

        function endDrag() {
            if (!isDragging) return;
            isDragging = false;
            cancelAnimationFrame(animationID);
            slides.style.cursor = 'grab';
            const movedBy = currentTranslate + getPositionX(event) - startPos;
            if (movedBy < -50) {
                moveSlide(1);
            } else if (movedBy > 50) {
                moveSlide(-1);
            } else {
                updateSlidePosition();
            }
        }

        function getPositionX(event) {
            return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
        }

        function animation() {
            if (isDragging) requestAnimationFrame(animation);
        }

        slides.addEventListener('mousedown', startDrag);
        slides.addEventListener('mouseup', endDrag);
        slides.addEventListener('mousemove', drag);
        slides.addEventListener('mouseleave', endDrag);

        slides.addEventListener('touchstart', startDrag);
        slides.addEventListener('touchend', endDrag);
        slides.addEventListener('touchmove', drag);
    

   const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const arrowButton = document.querySelector('.arrow-button');
const navLinks = document.querySelectorAll('.navbar-links a');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.add('active');
});

arrowButton.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.classList.remove('active');
    });
});
    

      const themeCheckbox = document.getElementById('theme-checkbox');
const body = document.body;

// Load mode based on previous choice or default
if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeCheckbox.checked = true;
} else {
    body.classList.add('light-theme');
}

themeCheckbox.addEventListener('change', function() {
    if(this.checked) {
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light');
    }
});
    

const date = new Date();
const hours = date.getHours();

if (hours >= 5 && hours < 12) {
  document.getElementById("good").innerHTML = "Good Morning! Everybody!";
}
if (hours >= 12 && hours < 17) {
  document.getElementById("good").innerHTML = "Good Afternoon! Everybody!";
}
if (hours >= 17 && hours < 19) {
  document.getElementById("good").innerHTML = "Good Evening! Everyone!";
}
if (hours >= 19 && hours < 24) {
  document.getElementById("good").innerHTML = "Good Night! Everyone";
}
if (hours >= 24 && hours < 5) {
  document.getElementById("good").innerHTML = "Go Sleep,Its Midnight!";
}


const dynamicText = document.querySelector("#unique-span");
const words = ["Student", "Web Developer", "Web Coder", "Front-End Dev" , "Human"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();

const DynamicText = document.querySelector("#mamads");
const Words = ["Welcome! To", "My Profile Website", "Nice To Meet You!"];

// Variables to track the position and deletion status of the word
let WordIndex = 0;
let CharIndex = 0;
let IsDeleting = false;

const TypeEffect = () => {
    const CurrentWord = Words[WordIndex];
    const CurrentChar = CurrentWord.substring(0, CharIndex);
    DynamicText.textContent = CurrentChar;
    DynamicText.classList.add("stop-blinking");

    if (!IsDeleting && CharIndex < CurrentWord.length) {
        // If condition is true, type the next character
        CharIndex++;
        setTimeout(TypeEffect, 145);
    } else if (IsDeleting && CharIndex > 0) {
        // If condition is true, remove the previous character
        CharIndex--;
        setTimeout(TypeEffect, 90);
    } else {
        // If word is deleted then switch to the next word
        IsDeleting = !IsDeleting;
        DynamicText.classList.remove("stop-blinking");
        WordIndex = !IsDeleting ? (WordIndex + 1) % Words.length : WordIndex;
        setTimeout(TypeEffect, 1000);
    }
}
TypeEffect();

// Saat user meninggalkan halaman, simpan posisi scroll
window.addEventListener("beforeunload", function() {
    sessionStorage.setItem("scrollPosition", window.scrollY);
});

// Ketika halaman dimuat kembali, ambil posisi scroll dari sessionStorage
window.addEventListener("load", function() {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
    }
});
