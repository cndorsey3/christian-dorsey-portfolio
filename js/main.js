// Contact sheet frames — pulled from your Pictures folder.
// 'frame' is the real scan number where available; 'caption' is used
// for images that didn't come from a numbered scan. Edit freely.
const FRAMES = [
  {
    "file": "24000016.jpg",
    "frame": "16",
    "caption": ""
  },
  {
    "file": "24030009.jpg",
    "frame": "09",
    "caption": ""
  },
  {
    "file": "30600036.jpg",
    "frame": "36",
    "caption": ""
  },
  {
    "file": "30620013.jpg",
    "frame": "13",
    "caption": ""
  },
  {
    "file": "30620015.jpg",
    "frame": "15",
    "caption": ""
  },
  {
    "file": "30620018.jpg",
    "frame": "18",
    "caption": ""
  },
  {
    "file": "30620028.jpg",
    "frame": "28",
    "caption": ""
  },
  {
    "file": "30620029.jpg",
    "frame": "29",
    "caption": ""
  },
  {
    "file": "30640024.jpg",
    "frame": "24",
    "caption": ""
  },
  {
    "file": "30650022.jpg",
    "frame": "22",
    "caption": ""
  },
  {
    "file": "38000003.jpg",
    "frame": "03",
    "caption": ""
  },
  {
    "file": "38000009.jpg",
    "frame": "09",
    "caption": ""
  },
  {
    "file": "38000010.jpg",
    "frame": "10",
    "caption": ""
  },
  {
    "file": "38000011.jpg",
    "frame": "11",
    "caption": ""
  },
  {
    "file": "38000016.jpg",
    "frame": "16",
    "caption": ""
  },
  {
    "file": "38000031.jpg",
    "frame": "31",
    "caption": ""
  },
  {
    "file": "38000032.jpg",
    "frame": "32",
    "caption": ""
  },
  {
    "file": "38000034.jpg",
    "frame": "34",
    "caption": ""
  },
  {
    "file": "38000035.jpg",
    "frame": "35",
    "caption": ""
  },
  {
    "file": "40910003.jpg",
    "frame": "03",
    "caption": ""
  },
  {
    "file": "40910011.jpg",
    "frame": "11",
    "caption": ""
  },
  {
    "file": "40910030.jpg",
    "frame": "30",
    "caption": ""
  },
  {
    "file": "59910004.jpg",
    "frame": "04",
    "caption": ""
  },
  {
    "file": "59910013.jpg",
    "frame": "13",
    "caption": ""
  },
  {
    "file": "59920030.jpg",
    "frame": "30",
    "caption": ""
  },
  {
    "file": "64550018.jpg",
    "frame": "18",
    "caption": ""
  },
  {
    "file": "64550024.jpg",
    "frame": "24",
    "caption": ""
  },
  {
    "file": "67390011.jpg",
    "frame": "11",
    "caption": ""
  },
  {
    "file": "67390015.jpg",
    "frame": "15",
    "caption": ""
  },
  {
    "file": "75110012.jpg",
    "frame": "12",
    "caption": ""
  },
  {
    "file": "75130010.jpg",
    "frame": "10",
    "caption": ""
  },
  {
    "file": "7849215224-r1-011.jpg",
    "frame": "24",
    "caption": ""
  },
  {
    "file": "coyoacan-buggy.jpg",
    "frame": "",
    "caption": "Coyoacan Buggy"
  },
  {
    "file": "arch-girl.jpg",
    "frame": "",
    "caption": "Arch Girl"
  },
  {
    "file": "bird-dog.jpg",
    "frame": "",
    "caption": "Bird Dog"
  },
  {
    "file": "bottle-view-berlin.jpg",
    "frame": "",
    "caption": "Bottle View Berlin"
  },
  {
    "file": "buggy-rome.jpg",
    "frame": "",
    "caption": "Buggy Rome"
  },
  {
    "file": "fight-charlie.jpg",
    "frame": "",
    "caption": "Fight Charlie"
  },
  {
    "file": "free-way.jpg",
    "frame": "",
    "caption": "Free Way"
  },
  {
    "file": "hunt-rome.jpg",
    "frame": "",
    "caption": "Hunt Rome"
  },
  {
    "file": "join-charlie.jpg",
    "frame": "",
    "caption": "Join Charlie"
  },
  {
    "file": "lean-colosseum.jpg",
    "frame": "",
    "caption": "Lean Colosseum"
  },
  {
    "file": "little-french-boy-rome.jpg",
    "frame": "",
    "caption": "Little French Boy Rome"
  },
  {
    "file": "love-charlie.jpg",
    "frame": "",
    "caption": "Love Charlie"
  },
  {
    "file": "pace-rome.jpg",
    "frame": "",
    "caption": "Pace Rome"
  },
  {
    "file": "police-charlie.jpg",
    "frame": "",
    "caption": "Police Charlie"
  },
  {
    "file": "shout-charlie.jpg",
    "frame": "",
    "caption": "Shout Charlie"
  },
  {
    "file": "street-light-perspective-rome.jpg",
    "frame": "",
    "caption": "Street Light Perspective Rome"
  },
  {
    "file": "three-black-hats.jpg",
    "frame": "",
    "caption": "Three Black Hats"
  }
];

// Parallax: hero background moves slower than scroll
const heroBg = document.getElementById('heroBg');
const heroBgImg = document.getElementById('heroBgImg');
const heroImage = FRAMES[Math.floor(Math.random() * FRAMES.length)].file;
heroBgImg.style.backgroundImage = `url('images/${heroImage}')`;

// Nav: translucent bar that hides on scroll and reappears near the top edge
const nav = document.querySelector('nav');
const navLinks = Array.from(document.querySelectorAll('nav .links a'));
const navSections = navLinks.map(a => document.querySelector(a.getAttribute('href')));
const NAV_HIDE_THRESHOLD = 80;
const NAV_REVEAL_ZONE = 80;

// Section offsets are cached (not read during scroll) so the scroll handler
// never mixes layout reads with style writes — mixing the two forces a
// synchronous layout flush on every frame and is what caused the jank.
let sectionOffsets = [];
function measureSections() {
  sectionOffsets = navSections.map(section => section ? section.offsetTop : Infinity);
}
window.addEventListener('resize', measureSections);
window.addEventListener('load', measureSections);

function updateOnScroll() {
  const y = window.scrollY;

  heroBg.style.transform = `translateY(${y * 0.35}px)`;

  nav.classList.toggle('nav-hidden', y > NAV_HIDE_THRESHOLD);

  const scrollPos = y + NAV_HIDE_THRESHOLD + 40;
  let activeIndex = -1;
  sectionOffsets.forEach((offset, i) => {
    if (offset <= scrollPos) activeIndex = i;
  });
  navLinks.forEach((a, i) => a.classList.toggle('active', i === activeIndex));
}

let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    updateOnScroll();
    scrollTicking = false;
  });
}, { passive: true });

let lastMouseY = 0;
let mouseTicking = false;
window.addEventListener('mousemove', (e) => {
  lastMouseY = e.clientY;
  if (mouseTicking) return;
  mouseTicking = true;
  requestAnimationFrame(() => {
    if (lastMouseY <= NAV_REVEAL_ZONE) {
      nav.classList.remove('nav-hidden');
    } else if (window.scrollY > NAV_HIDE_THRESHOLD) {
      nav.classList.add('nav-hidden');
    }
    mouseTicking = false;
  });
}, { passive: true });

// Sprocket strip — decorative filmstrip perforations
const sprockets = document.getElementById('sprockets');
for (let i = 0; i < 28; i++) {
  const span = document.createElement('span');
  sprockets.appendChild(span);
}

// Populate contact sheet grid
// Replace each frame's 'href' below with the matching Instagram post URL
const grid = document.getElementById('grid');
FRAMES.forEach(f => {
  const div = document.createElement('div');
  div.className = 'frame';
  const label = f.frame
    ? `<span class="frame-num">#${f.frame}</span>`
    : `<span class="frame-caption">${f.caption}</span>`;
  div.innerHTML = `
    <img src="images/${f.file}" alt="${f.caption || 'Frame ' + f.frame}" loading="lazy">
    <div class="frame-overlay">
      ${label}
      <a class="frame-link" href="#" target="_blank" rel="noopener">View on Instagram &#8599;</a>
    </div>
  `;
  grid.appendChild(div);
});

// Measure section offsets now that the grid has its real height, then
// run the initial nav/parallax state.
measureSections();
updateOnScroll();
