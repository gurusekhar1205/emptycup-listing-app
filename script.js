// document.querySelectorAll(".shortlist-btn").forEach(btn => {
//   btn.addEventListener("click", () => {
//     const icon = btn.querySelector("i");
//     icon.classList.toggle("fa-regular");
//     icon.classList.toggle("fa-solid");
//   });
// });


const shortlistBtns = document.querySelectorAll('.shortlist-btn');
const shortlistTab = document.querySelector('.shortlist-tab');
const Cards = document.querySelectorAll('.designer-card');

let filterActive = false;

shortlistBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('shortlisted');
    
    const icon = btn.querySelector('i');

    if (btn.classList.contains('shortlisted')) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
    } else {
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
    }

    if (filterActive) {
      applyShortlistFilter();
    }
  });
});

shortlistTab.addEventListener('click', () => {
  shortlistTab.classList.toggle('active');
  filterActive = !filterActive;
  applyShortlistFilter();
});

function applyShortlistFilter() {
  Cards.forEach((card, idx) => {
    const isShortlisted = shortlistBtns[idx].classList.contains('shortlisted');
    if (filterActive) {
        card.style.display =isShortlisted ? 'flex' :'none';
      } else {
        card.style.display = 'flex';
      }
  });
}


fetch("http://127.0.0.1:5000/api/listings")
  .then(response => response.json())
  .then(data => {
    console.log(data); // later dynamically update DOM
  });
