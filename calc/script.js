const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

const plusBtn = document.getElementById('plusBtn')
const minusBtn = document.getElementById('minusBtn')
const mulBtn = document.getElementById('mulBtn')
const subBtn = document.getElementById('subBtn')

const result = document.getElementById('result')


plusBtn.onclick = function () {
    result.textContent = Number(input1.value) + Number(input2.value)
}

minusBtn.onclick = function () {
    result.textContent = Number(input1.value) - Number(input2.value)
}

mulBtn.onclick = function () {
    result.textContent = Number(input1.value) * Number(input2.value)
}

subBtn.onclick = function () {
    result.textContent = Number(input1.value) / Number(input2.value)
}