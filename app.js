let toSection2 = document.getElementById('toSection2');
let section1 = document.getElementById('toSection1');
toSection2.addEventListener('click', () => {
    section1.classList.remove('--active');
    toSection2.classList.add('--active');
});

toSection1.addEventListener('click', () => {
    toSection2.classList.remove('--active');
    section1.classList.add('--active');
});

	const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
})

sr.reveal(`.content-div`, {origin: 'top', delay: 300})
sr.reveal(`.image-div`, {origin: 'bottom', delay: 500})
sr.reveal(`.box-1`, {origin: 'top', delay: 500})
sr.reveal(`.box-2`, {origin: 'top', delay: 600})
sr.reveal(`.box-3`, {origin: 'top', delay: 700})

