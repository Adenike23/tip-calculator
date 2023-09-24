const  bill = document.querySelector('.bill');
const  selectTip = document.querySelector('.selectTip');
const  noOfPeople = document.querySelector('.noOfPeople');
const  tipAnswer = document.querySelector('.tipAnswer');
const  totalAnswer = document.querySelector('.totalAnswer');
const  total = document.querySelector('.sum');
const  reset = document.querySelector('.reset');
const textWarning = document.querySelector('.small')

total.addEventListener('click', function() {
    if (bill.value.length <= 0 || selectTip.value.length <= 0 ||
         noOfPeople.value.length <= 0 || Number(noOfPeople.value) < 1) {
        bill.value = ''
        selectTip.value = ''
        noOfPeople.value = ''
            return
}

const a = (selectTip.value/100) * bill.value
const cal = a/(noOfPeople.value);
tipAnswer.textContent = `${cal}`
const cal2 = bill.value/noOfPeople.value;
const cal3 = cal2 + cal;
totalAnswer.textContent = `${cal3}`
})

reset.addEventListener('click', function() {
    bill.value = '';
    selectTip.value = '';
    noOfPeople.value = '';
    tipAnswer.textContent = '0.00';
    totalAnswer.textContent = '0.00'
})



