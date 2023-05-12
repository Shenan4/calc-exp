const salaryInp = document.getElementById('income-salary'),
      freelanceInp = document.getElementById('income-freelance'),
      extraInp1 = document.getElementById('income-extra-1'),
      extraInp2 = document.getElementById('income-extra-2');

const constFlatInp = document.getElementById('costs-flat'),
      houseServiseInp = document.getElementById('costs-house-services'),
      tranpInp = document.getElementById('costs-transport'),
      creditInp = document.getElementById('costs-credit'),
      eatInp = document.getElementById('costs-eat'),
      ostInp = document.getElementById('costs-ost');

let totalDay, totalMonth, totalYear;

const totalMonthInp = document.getElementById('total-month'),
      totalDayInp = document.getElementById('total-day'),
      totalYearInp = document.getElementById('total-year');

let moneyBoxRange = document.getElementById('money-box-range'),
    totalPrecents = document.getElementById('total-precents');
    accumulator = 0;

let accumulationInp = document.getElementById('accumulation'),
    spendInp = document.getElementById('spend')


const inputs = document.querySelectorAll('.input')
for (let input of inputs) {
    input.addEventListener('input', function() {
        freeMonthMoney()
    })
}

const strToNum = (str) => str.value ? parseInt(str.value) : 0;


const freeMonthMoney = () => {
    plusMoney = strToNum(salaryInp) + strToNum(freelanceInp) + strToNum(extraInp1) + strToNum(extraInp2) 
    minusMoney = strToNum(constFlatInp) + strToNum(houseServiseInp) + strToNum(tranpInp) + strToNum(creditInp) + strToNum(eatInp) + strToNum(ostInp)
    totalMonth = plusMoney - minusMoney
    totalMonthInp.value = totalMonth
}


totalPrecents = document.getElementById('total-precents');
moneyBoxRange.addEventListener('input', (e) => {
    totalPrecents.innerHTML = e.target.value;
    calculationProcent()
})


const calculationProcent = () => {
    accumulator = ((totalMonth * totalPrecents.innerHTML) / 100).toFixed()
    accumulationInp.value = accumulator

    spendInp.value = (totalMonth - accumulator).toFixed()
    totalDay = (accumulator/30).toFixed()
    totalDayInp.value = totalDay

    totalYear = totalDay * 365
    totalYearInp.value = totalYear
}

