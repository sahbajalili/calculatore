let doc = document

let calculateForm = doc.querySelector('.calculate-form')
let ageInput = doc.querySelector('#age-input')
let result = doc.querySelector('.result')
let calculateButton = doc.querySelector('.button')

calculateButton.addEventListener('click' , calculating)

function calculating() {

    let ageInputValue = ageInput.value.replace(/\s+/g , '').split('-')
    console.log(ageInputValue)

    if ((ageInputValue[0].length == 4) && (ageInputValue[1].length == 2) && (ageInputValue[2].length == 2)) {
        let userYear 
        let userMonth 
        let userDay
        if ((ageInputValue[1] == '01') || (ageInputValue[1] == '03') || (ageInputValue[1] == '05') || (ageInputValue[1] == '07') || (ageInputValue[1] == '08') || (ageInputValue[1] == '10') || (ageInputValue[1] == '12')) {
            if (ageInputValue[2] <= 16) {
                userDay = 16 - +ageInputValue[2]
                if (ageInputValue[1] <= 7) {
                    userMonth = 7 - +ageInputValue[1]
                    userYear = 2024 - +ageInputValue[0]
                    result.innerHTML = 'Years : ' + userYear + ' - Months : ' + userMonth + ' - Days : ' + userDay
                } else {
                    userMonth = 12 - (+ageInputValue[1] - 7) 
                    userYear = 2024 - +ageInputValue[0] - 1
                    result.innerHTML = 'Years : ' + userYear + ' - Months : ' + userMonth + ' - Days : ' + userDay
                }
            } else {
                userDay = 31 - (+ageInputValue[2] - 16)
                if (ageInputValue[1] <= 7) {
                    userMonth = 7 - +ageInputValue[1]
                    userYear = 2024 - +ageInputValue[0]
                    result.innerHTML = 'Years : ' + userYear + ' - Months : ' + --userMonth + ' - Days : ' + userDay
                } else {
                    userMonth = 12 - (+ageInputValue[1] - 7) 
                    userYear = 2024 - +ageInputValue[0] - 1
                    result.innerHTML = 'Years : ' + userYear + ' - Months : ' + --userMonth + ' - Days : ' + userDay
                }
            }
            console.log('1')

        } else if ((ageInputValue[1] == '04') || (ageInputValue[1] == '06') || (ageInputValue[1] == '09') || (ageInputValue[1] == '11')) {
            if (ageInputValue[2] <= 16) {
                userDay = 16 - +ageInputValue[2]
                if (ageInputValue[1] <= 7) {
                    userMonth = 7 - +ageInputValue[1]
                    userYear = 2024 - +ageInputValue[0]
                    result.innerHTML = 'Years : ' + userYear + ' - Months : ' + userMonth + ' - Days : ' + userDay
                } else {
                    userMonth = 12 - (+ageInputValue[1] - 7) 
                    userYear = 2024 - +ageInputValue[0] - 1
                    result.innerHTML = 'Years : ' + userYear + ' - Months : ' + userMonth + ' - Days : ' + userDay
                }
            } else {
                userDay = 30 - (+ageInputValue[2] - 16)
                if (ageInputValue[1] <= 7) {
                    userMonth = 7 - +ageInputValue[1]
                    userYear = 2024 - +ageInputValue[0]
                    result.innerHTML = 'Years : ' + userYear + ' - Months : ' + --userMonth + ' - Days : ' + userDay
                } else {
                    userMonth = 12 - (+ageInputValue[1] - 7) 
                    userYear = 2024 - +ageInputValue[0] - 1
                    result.innerHTML = 'Years : ' + userYear + ' - Months : ' + --userMonth + ' - Days : ' + userDay
                }
            }
            console.log('2')

        } else if ((ageInputValue[1] == '02')) {
            if (ageInputValue[2] <= 16) {
                userDay = 16 - +ageInputValue[2]
                if (ageInputValue[1] <= 7) {
                    userMonth = 7 - +ageInputValue[1]
                    userYear = 2024 - +ageInputValue[0]
                    result.innerHTML = 'Years : ' + userYear + ' - Months : ' + userMonth + ' - Days : ' + userDay
                } else {
                    userMonth = 12 - (+ageInputValue[1] - 7) 
                    userYear = 2024 - +ageInputValue[0] - 1
                    result.innerHTML = 'Years : ' + userYear + ' - Months : ' + userMonth + ' - Days : ' + userDay
                }
            } else {
                userDay = 28 - (+ageInputValue[2] - 16)
                if (ageInputValue[1] <= 7) {
                    userMonth = 7 - +ageInputValue[1]
                    userYear = 2024 - +ageInputValue[0]
                    result.innerHTML = 'Years : ' + userYear + ' - Months : ' + --userMonth + ' - Days : ' + userDay
                } else {
                    userMonth = 12 - (+ageInputValue[1] - 7) 
                    userYear = 2024 - +ageInputValue[0] - 1
                    result.innerHTML = 'Years : ' + userYear + ' - Months : ' + --userMonth + ' - Days : ' + userDay
                }
            }
            console.log('3')
        }

    } else {
        alert('pls enter valid year !')
    }
}