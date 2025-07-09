window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
});

const typing = document.getElementById('typing');
const titles = ["Public Relations", "Event Organizer", "⁠Project Manager", "Mediator", " ⁠Socio-Cultural Enthusiast", "Political-Economic Enthusiast", "Writer", "⁠Writing Editor"];
let i = 0, j = 0, currentTitle = "", isDeleting = false;

function type() {
  if (!isDeleting && j <= titles[i].length) {
    currentTitle = titles[i].substring(0, j++);
    typing.textContent = currentTitle;
    setTimeout(type, 100);
  } else if (isDeleting && j >= 0) {
    currentTitle = titles[i].substring(0, j--);
    typing.textContent = currentTitle;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i+1)%titles.length;
    setTimeout(type, 500);
  }
}
type();

window.addEventListener('scroll', () => {
  const scroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scroll / height) * 100;
  document.getElementById('progress-bar').style.width = scrolled + "%";
});
