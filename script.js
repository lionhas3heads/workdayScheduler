const currentDayEl = document.querySelector('#currentDay');
const timeBlockWrapperEl = document.querySelector('#time-block-wrapper');
currentDayEl.textContent = dayjs().format('MM-DD-YYYY');

let currentHour = dayjs().hour();

for(i = 0; i <=9; i++) {
  if (currentHour == timeBlockWrapperEl.children[i].id.slice(5)) {
    timeBlockWrapperEl.children[i].classList.add('present'); 
  } else if (currentHour > timeBlockWrapperEl.children[i].id.slice(5)) {
    timeBlockWrapperEl.children[i].classList.add('past');
  } else {
    timeBlockWrapperEl.children[i].classList.add('future');
  }
}

function saveHourNote(event) {
  let target = event.target;

  if (target.tagName === 'BUTTON' ) {
    localStorage.setItem(
      target.parentElement.children[0].textContent,
      target.parentElement.children[1].value,
    );
  } else if (target.tagName === 'I') {
    localStorage.setItem(
      target.parentElement.parentElement.children[0].textContent,
      target.parentElement.parentElement.children[1].value,
    );
  } else return;
}

for (i = 0 ; i < timeBlockWrapperEl.children.length ; i++) {
  timeBlockWrapperEl.children[i].children[1].value = localStorage.getItem(timeBlockWrapperEl.children[i].children[0].textContent)
}

timeBlockWrapperEl.addEventListener('click', saveHourNote);