let correctAnswer = 0
let incorrectAnswer = 0

const answer1 = prompt('2+2')
const rightAnswer1 = 4
console.log(Number(answer1.trim()))
if (Number(answer1) === rightAnswer1) {
  alert('Ответ верный'), correctAnswer++
} else {
  alert('Ответ Неверно'), incorrectAnswer++
}

const answer2 = prompt('2*2')
const rightAnswer2 = 4
console.log(Number(answer2.trim()))
if (Number(answer2) === rightAnswer2) {
  alert('Ответ верный'), correctAnswer++
} else {
  alert('Ответ Неверно'), incorrectAnswer++
}

const answer3 = prompt(
  'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'
).trim()
const rightAnswer3 = 1
if (Number(answer3) === rightAnswer3) {
  alert('Ответ верный'), correctAnswer++
} else {
  alert('Ответ Неверно'), incorrectAnswer++
}

const answer4 = prompt(
  'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'
).trim()
const rightAnswer4 = 2
if (Number(answer4) === rightAnswer4) {
  alert('Ответ верный'), correctAnswer++
} else {
  alert('Ответ Неверно'), incorrectAnswer++
}

const answer5 = prompt('Сколько будет 2 + 2 * 2?').trim()
const rightAnswer5 = 6
if (Number(answer5) === rightAnswer5) {
  alert('Ответ верный'), correctAnswer++
} else {
  alert('Ответ Неверно'), incorrectAnswer++
}
alert(
  `"Конец теста"! Правильные ответы ${correctAnswer} ; Неправильные ответы ${incorrectAnswer}`
)
