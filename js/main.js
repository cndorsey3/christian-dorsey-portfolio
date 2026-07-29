// Contact sheet frames — pulled from your Pictures folder.
// 'frame' is the real scan number where available; 'caption' is used
// for images that didn't come from a numbered scan. Edit freely.
// Add an "instagram" field with the post URL to link a frame's
// "View on Instagram" overlay — frames without one just show "#".
//
// HOW TO ADD A NEW PHOTO
// 1. Resize/compress the image to match the rest of the set — 1800px
//    wide, JPEG quality ~80, which lands around 250-700KB. Example
//    using Python + Pillow (`pip install pillow` if you don't have it):
//
//      python -c "
//      from PIL import Image
//      img = Image.open('path/to/original.jpg').convert('RGB')
//      w, h = img.size
//      img = img.resize((1800, round(h * 1800 / w)), Image.LANCZOS)
//      img.save('images/your-file-name.jpg', 'JPEG', quality=80, optimize=True)
//      "
//
// 2. Add an entry for it below with its filename, a 'frame' number
//    (for numbered scans) or a 'caption' (for named shots), and an
//    'instagram' post URL if you have one (leave "" if not).
//
// 3. This image can now be randomly picked for the hero background, so
//    it also needs a graded copy in images/hero/ with the exact same
//    filename. This step is a workaround for a Firefox-specific
//    performance bug: applying grayscale/contrast/brightness as a live
//    CSS filter was fine on Chrome/Safari but made Firefox scroll very
//    slowly past the header, so the same look is pre-baked into the
//    hero copy as actual pixels instead, and no filter is applied at
//    runtime at all. Generate it with:
//
//      python -c "
//      from PIL import Image, ImageEnhance, ImageOps
//      img = Image.open('images/your-file-name.jpg').convert('RGB')
//      gray = ImageOps.grayscale(img).convert('RGB')
//      img = Image.blend(img, gray, 0.35)
//      img = ImageEnhance.Contrast(img).enhance(1.05)
//      img = ImageEnhance.Brightness(img).enhance(0.55)
//      img.save('images/hero/your-file-name.jpg', 'JPEG', quality=82, optimize=True)
//      "
//
//    (Skip this step and it'll just fall back to the ungraded original
//    if it's ever picked for the hero — not broken, just inconsistent
//    with the other hero shots.)
const FRAMES = [
  {
    "file": "little-french-boy-rome.jpg",
    "frame": "",
    "caption": "Little French Boy Rome",
    "instagram": "https://www.instagram.com/p/C7kQsoyva_j/"
  },
  {
    "file": "shout-charlie.jpg",
    "frame": "",
    "caption": "Shout Charlie",
    "instagram": "https://www.instagram.com/p/C7kKHFtvBvQ/"
  },
  {
    "file": "beach-day.jpg",
    "frame": "",
    "caption": "Beach Day",
    "instagram": "https://www.instagram.com/p/DDKjJjmPMLb/"
  },
  {
    "file": "24000016.jpg",
    "frame": "16",
    "caption": "",
    "instagram": "https://www.instagram.com/p/DT1lb6CDWZZ/"
  },
  {
    "file": "24030009.jpg",
    "frame": "09",
    "caption": "",
    "instagram": "https://www.instagram.com/p/DT1oYqNjfnz/?img_index=1"
  },
  {
    "file": "30600036.jpg",
    "frame": "36",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C8Tesl9OCF-/"
  },
  {
    "file": "30620013.jpg",
    "frame": "13",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C9YNFrVvPnr/"
  },
  {
    "file": "30620015.jpg",
    "frame": "15",
    "caption": "",
    "instagram": ""
  },
  {
    "file": "30620018.jpg",
    "frame": "18",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C7mc6pFOs9p/"
  },
  {
    "file": "30620028.jpg",
    "frame": "28",
    "caption": "",
    "instagram": ""
  },
  {
    "file": "30620029.jpg",
    "frame": "29",
    "caption": "",
    "instagram": ""
  },
  {
    "file": "30640024.jpg",
    "frame": "24",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C7qEsU_tJfG/"
  },
  {
    "file": "30650022.jpg",
    "frame": "22",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C7qnGjFOGum/"
  },
  {
    "file": "38000003.jpg",
    "frame": "03",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C8Fm9VGPLnb/"
  },
  {
    "file": "38000009.jpg",
    "frame": "09",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C8FlgWtvN0A/"
  },
  {
    "file": "38000010.jpg",
    "frame": "10",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C8xKWUFuFwB/"
  },
  {
    "file": "38000011.jpg",
    "frame": "11",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C8Fl_asPrhw/"
  },
  {
    "file": "38000016.jpg",
    "frame": "16",
    "caption": "",
    "instagram": ""
  },
  {
    "file": "38000031.jpg",
    "frame": "31",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C8Fm2Q0vsWj/"
  },
  {
    "file": "38000032.jpg",
    "frame": "32",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C8Fl3LdvILw/"
  },
  {
    "file": "38000034.jpg",
    "frame": "34",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C8Ga-4Ityuk/"
  },
  {
    "file": "38000035.jpg",
    "frame": "35",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C8Gaswbt2Z5/"
  },
  {
    "file": "40910003.jpg",
    "frame": "03",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C8XjPtGPblV/"
  },
  {
    "file": "40910011.jpg",
    "frame": "11",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C8XeGG0vQ92/"
  },
  {
    "file": "40910030.jpg",
    "frame": "30",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C8XdQsYvP_i/"
  },
  {
    "file": "59910004.jpg",
    "frame": "04",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C9vaWx9vTcn/?img_index=1"
  },
  {
    "file": "59910013.jpg",
    "frame": "13",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C9vY-0OvTfI/"
  },
  {
    "file": "59920030.jpg",
    "frame": "30",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C9vZlQbP75d/?img_index=1"
  },
  {
    "file": "64550018.jpg",
    "frame": "18",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C-GFcdju0SK/?img_index=1"
  },
  {
    "file": "64550024.jpg",
    "frame": "24",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C-GGOoburBw/?img_index=1"
  },
  {
    "file": "67390011.jpg",
    "frame": "11",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C-V0DEsP9H3/?img_index=1"
  },
  {
    "file": "67390015.jpg",
    "frame": "15",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C-VyZSQPU2e/?img_index=1"
  },
  {
    "file": "75110012.jpg",
    "frame": "12",
    "caption": "",
    "instagram": "https://www.instagram.com/p/DYAxEYbjyRM/"
  },
  {
    "file": "75130010.jpg",
    "frame": "10",
    "caption": "",
    "instagram": "https://www.instagram.com/p/DYAvA8bjyXx/"
  },
  {
    "file": "7849215224-r1-011.jpg",
    "frame": "24",
    "caption": "",
    "instagram": "https://www.instagram.com/p/DLWiREnsqOS/"
  },
  {
    "file": "coyoacan-buggy.jpg",
    "frame": "",
    "caption": "Coyoacan Buggy",
    "instagram": "https://www.instagram.com/p/DLWh83MMDUM/?img_index=1"
  },
  {
    "file": "arch-girl.jpg",
    "frame": "",
    "caption": "Arch Girl",
    "instagram": "https://www.instagram.com/p/C7kIC63vs_W/"
  },
  {
    "file": "bird-dog.jpg",
    "frame": "",
    "caption": "Bird Dog",
    "instagram": "https://www.instagram.com/p/C7kHjM_vIlh/"
  },
  {
    "file": "bottle-view-berlin.jpg",
    "frame": "",
    "caption": "Bottle View Berlin",
    "instagram": "https://www.instagram.com/p/C7qnK_Au76t/"
  },
  {
    "file": "buggy-rome.jpg",
    "frame": "",
    "caption": "Buggy Rome",
    "instagram": "https://www.instagram.com/p/C7mcq7Guc9f/"
  },
  {
    "file": "fight-charlie.jpg",
    "frame": "",
    "caption": "Fight Charlie",
    "instagram": "https://www.instagram.com/p/C7kIli1Pvsk/"
  },
  {
    "file": "free-way.jpg",
    "frame": "",
    "caption": "Free Way",
    "instagram": "https://www.instagram.com/p/C7kN63mvw7H/"
  },
  {
    "file": "hunt-rome.jpg",
    "frame": "",
    "caption": "Hunt Rome",
    "instagram": "https://www.instagram.com/p/C7qnOuduya9/"
  },
  {
    "file": "join-charlie.jpg",
    "frame": "",
    "caption": "Join Charlie",
    "instagram": "https://www.instagram.com/p/C7kLgKHvaTp/"
  },
  {
    "file": "lean-colosseum.jpg",
    "frame": "",
    "caption": "Lean Colosseum",
    "instagram": "https://www.instagram.com/p/C7mcm8POEpT/"
  },
  {
    "file": "love-charlie.jpg",
    "frame": "",
    "caption": "Love Charlie",
    "instagram": "https://www.instagram.com/p/C7kOJUQvEYw/"
  },
  {
    "file": "pace-rome.jpg",
    "frame": "",
    "caption": "Pace Rome",
    "instagram": "https://www.instagram.com/p/C7kQwoaPjqW/"
  },
  {
    "file": "police-charlie.jpg",
    "frame": "",
    "caption": "Police Charlie",
    "instagram": "https://www.instagram.com/p/C7lDETCuRct/"
  },
  {
    "file": "street-light-perspective-rome.jpg",
    "frame": "",
    "caption": "Street Light Perspective Rome",
    "instagram": "https://www.instagram.com/p/C7kQiDnvoFH/"
  },
  {
    "file": "three-black-hats.jpg",
    "frame": "",
    "caption": "Three Black Hats",
    "instagram": "https://www.instagram.com/p/C7kNWq7vGaY/"
  },
  {
    "file": "08550016.jpg",
    "frame": "16",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C5mDxPgvpBS/"
  },
  {
    "file": "08570008.jpg",
    "frame": "08",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C5S7MBcuId-/?img_index=7"
  },
  {
    "file": "08570017.jpg",
    "frame": "17",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C5S_Ze3uKRj/?img_index=3"
  },
  {
    "file": "08570020.jpg",
    "frame": "20",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C5S7MBcuId-/?img_index=5"
  },
  {
    "file": "09580002.jpg",
    "frame": "02",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C5mBJuFPAYo/?img_index=1"
  },
  {
    "file": "09580016.jpg",
    "frame": "16",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C5YtMIzu_H-/"
  },
  {
    "file": "10850006.jpg",
    "frame": "06",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C5jK8ufOrlx/?img_index=1"
  },
  {
    "file": "11630029.jpg",
    "frame": "29",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C5onMD9vxR4/"
  },
  {
    "file": "11630036.jpg",
    "frame": "36",
    "caption": "",
    "instagram": ""
  },
  {
    "file": "000043640001.jpg",
    "frame": "01",
    "caption": "",
    "instagram": "https://www.instagram.com/p/DDKjpZsPzRJ/?img_index=1"
  },
  {
    "file": "18200004.jpg",
    "frame": "04",
    "caption": "",
    "instagram": "https://www.instagram.com/p/DAoU2hMv5rl/?img_index=1"
  },
  {
    "file": "72360017.jpg",
    "frame": "17",
    "caption": "",
    "instagram": "https://www.instagram.com/p/C-vMf9FuE1-/"
  },
  {
    "file": "6609213924-R1-011.jpg",
    "frame": "11",
    "caption": "",
    "instagram": "https://www.instagram.com/p/DHuL0ZTvOz5/?img_index=1"
  },
  {
    "file": "6609213924-R1-024.jpg",
    "frame": "24",
    "caption": "",
    "instagram": "https://www.instagram.com/p/DHujXP8NZ1P/"
  },
  {
    "file": "6610213925-R1-025.jpg",
    "frame": "25",
    "caption": "",
    "instagram": "https://www.instagram.com/p/DHuKWsOvGT1/"
  }
];

// Parallax: hero background moves slower than scroll
const heroBg = document.getElementById('heroBg');
const heroBgImg = document.getElementById('heroBgImg');
const heroImage = FRAMES[Math.floor(Math.random() * FRAMES.length)].file;
// Pre-graded (grayscale/contrast/brightness baked in) copy — see images/hero/
heroBgImg.style.backgroundImage = `url('images/hero/${heroImage}')`;

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
  const atBottom = y + window.innerHeight >= document.documentElement.scrollHeight - 2;
  let activeIndex = -1;
  sectionOffsets.forEach((offset, i) => {
    if (offset <= scrollPos) activeIndex = i;
  });
  if (atBottom) activeIndex = navLinks.length - 1;
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
// Frames without their own post link fall back to the profile page.
const INSTAGRAM_PROFILE = 'https://www.instagram.com/chino.byl/';
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
      <a class="frame-link" href="${f.instagram || INSTAGRAM_PROFILE}" target="_blank" rel="noopener">View on Instagram &#8599;</a>
    </div>
  `;
  grid.appendChild(div);
});

// Lightbox — click a frame to view it large, with prev/next carousel nav.
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
let lightboxIndex = -1;

function showLightboxFrame(index) {
  lightboxIndex = index;
  const f = FRAMES[lightboxIndex];
  lightboxImg.src = `images/${f.file}`;
  lightboxImg.alt = f.caption || (f.frame ? `Frame ${f.frame}` : '');
}

function openLightbox(index) {
  showLightboxFrame(index);
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxIndex = -1;
  document.body.style.overflow = '';
}

grid.addEventListener('click', (e) => {
  if (e.target.closest('.frame-link')) return; // let the Instagram link behave normally
  const frameEl = e.target.closest('.frame');
  if (!frameEl) return;
  openLightbox(Array.from(grid.children).indexOf(frameEl));
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => showLightboxFrame((lightboxIndex - 1 + FRAMES.length) % FRAMES.length));
lightboxNext.addEventListener('click', () => showLightboxFrame((lightboxIndex + 1) % FRAMES.length));
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
window.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowLeft') lightboxPrev.click();
  else if (e.key === 'ArrowRight') lightboxNext.click();
});

// Measure section offsets now that the grid has its real height, then
// run the initial nav/parallax state.
measureSections();
updateOnScroll();

// Contact email — built at runtime instead of sitting in the HTML as
// plain text/mailto, so scrapers crawling the static markup don't pick it up.
const emailUser = 'christian.dorsey3';
const emailDomain = 'gmail.com';
const emailLink = document.getElementById('emailLink');
const emailAddress = `${emailUser}@${emailDomain}`;
emailLink.href = `mailto:${emailAddress}`;
emailLink.textContent = emailAddress;
