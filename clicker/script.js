const number = document.getElementById('number');
const addOne = document.getElementById('addOne');
const addTen = document.getElementById('addTen');
const clearBtn = document.getElementById('clear')

counter = 0

addOne.onclick = function () {
    counter +=1
    number.textContent = counter
}

addTen.onclick = function () {
    counter +=10
    number.textContent = counter
}

clearBtn.onclick = function () {
    counter = 0
    number.textContent = counter
}