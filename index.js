// const getDateFunction = () => {
//     const date = new Date();

//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     const hours = String(date.getHours()).padStart(2, '0');
//     const minutes = String(date.getMinutes()).padStart(2, '0');
//     const seconds = String(date.getSeconds()).padStart(2, '0');

//     return `
//     year:${year}, 
//     month:${month},
//     day:${day},
//     hours:$`
// }

// console.log(getDateFunction);


// task 1

// const startBtn = document.querySelector("[data-action-start]");
// const stopBtn = document.querySelector("[data-action-stop]");
// const clockface = document.querySelector(".js-clockface");

// let intervalId = null;
// let startTime = null;

// startBtn.addEventListener("click", startTimer);
// stopBtn.addEventListener("click", stopTimer);


// function formatTime(ms) {
//     const date = new Date(ms);
  
//     const hours = String(date.getUTCHours()).padStart(2, "0");
//     const minutes = String(date.getUTCMinutes()).padStart(2, "0");
//     const seconds = String(date.getUTCSeconds()).padStart(2, "0");
//     const milliseconds = String(date.getUTCMilliseconds()).padStart(3, "0");
  
//     return `${hours}:${minutes}:${seconds}.${milliseconds}`;
//   }


//   function updateClockface(time) {
//     clockface.textContent = formatTime(time);
//   }


//   function startTimer() {
//     if (intervalId) return;
  
//     startTime = Date.now();
  
//     intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       updateClockface(deltaTime);
//     }, 100);
//   }


//   function stopTimer() {
//     clearInterval(intervalId);
//     intervalId = null;
//   }


// task 2
// Створити функцію, яка приймає дату та повертає рік.

// function getYear(dateYear) {
//     const date = new Date(dateYear);
//     return date.getFullYear();
// }

// console.log(getYear("2007-10-10")); 



// task 3
// Створити функцію, яка приймає дату та повертає місяць.

function getMonth(dateMonth) {
    const date = new Date(dateMonth);

    return date.getMonth() + 1;
}

console.log(getMonth("2007-10-10"));