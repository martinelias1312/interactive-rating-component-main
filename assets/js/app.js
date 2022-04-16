'use strict';
// selectors
const ratings = [...document.querySelectorAll('.number')];
const form = document.querySelector('form');
const ratingState = document.querySelector('.rating-state');
const thanksState = document.querySelector('.thanks-state');
const rating = document.querySelector('.rating');

// listeners
ratings.forEach(item => item.addEventListener('click', handleRatings));
form.addEventListener('submit', handleSubmit);

// function to handle click on rating number
function handleRatings() {
    ratings.forEach(item => {
        if(item.classList.contains('clicked')) {
            item.classList.remove('clicked');
        }
    });
    this.classList.toggle('clicked');
}

// function to handle form submit
function handleSubmit() {
    event.preventDefault();
    
    ratings.forEach(item => {
        if(item.classList.contains('clicked')) {
            rating.innerHTML = item.innerHTML;
            ratingState.classList.add('hidden');
            thanksState.classList.remove('hidden');
        }
    });
}