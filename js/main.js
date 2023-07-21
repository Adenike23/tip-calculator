const  bill = document.querySelector('.bill');
const  selectTip = document.querySelector('.selectTip');
const  noOfPeople = document.querySelector('.noOfPeople');
const  tipAnswer = document.querySelector('.tipAnswer');
const  totalAnswer = document.querySelector('.totalAnswer');
const  total = document.querySelector('.sum');
const  reset = document.querySelector('.reset');
const textWarning = document.querySelector('.small')

total.addEventListener('click', function() {
    if (bill.value.length <= 0 || selectTip.value.length <= 0 || noOfPeople.value.length) {
        bill.value.textContent = ''
        selectTip.value.textContent = ''
        noOfPeople.value.textContent = ''
} else if (noOfPeople.value === 0) {
    textWarning.style.display = 'block'
}

const cal = (bill.value)/(selectTip.value)/(noOfPeople.value);
tipAnswer.textContent = `${cal}`
const cal2 = bill.value/noOfPeople.value;
const cal3 = cal2 + cal;
totalAnswer.textContent = `${cal3}`
})



