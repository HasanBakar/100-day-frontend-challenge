const cards = document.querySelectorAll('.image-card');

// console.log(cards);

cards.forEach(card =>{
    card.addEventListener('click', () => {
        removeActiveClasses();//remove active class ✅ 
        card.classList.add('active');
    })
})

const removeActiveClasses = () => {
    cards.forEach(card => {
        card.classList.remove('active');
    })
}


