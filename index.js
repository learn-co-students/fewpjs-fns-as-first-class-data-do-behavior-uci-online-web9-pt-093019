/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  const timeArray = timeString.split(":")
  const hourInt = parseInt(timeArray[0])
  const minInt = parseInt(timeArray[1])
  if (hourInt < 12) {
    return "Good Morning"
  }
  else if (hourInt < 17) {
    return "Good Afternoon"
  }
  else if (hourInt === 17 && minInt < 1) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}

function displayMessage(greeting) {
  const greetingHeading = document.getElementById('greeting')
  greetingHeading.innerText = greeting

}