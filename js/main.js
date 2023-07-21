let priceINP = document.getElementById('price');
let ageINP = document.getElementById('age');
let btn_go = document.getElementById('btn-go')

let interest = 0
let down_payment_percentage = 0
let installment_years = 0

let table = document.getElementById('table-1')
let interestSystem = 0
let cartona =``;
// console.log(table);
btn_go.addEventListener('click', function () {
    let price = Number(priceINP.value)
    let age = Number(ageINP.value)

    if (price >= 400000 && price <= 1400000) {
        interest = 1.8
        interestSystem = 3
    } else if (price > 1400000 && price <= 2500000) {
        interest = 5
        interestSystem = 8

    } else {
        alert('The customer cannot obtain real estate financing.')
    }


    if (price >= 400000 && price <= 1100000) {
        down_payment_percentage = 15/100;
    } else if (price > 1100000 && price <= 2500000) {
        down_payment_percentage = 20/100;
    }

    if (age >= 21.5 && age <= 30) {
        installment_years = 30
    } else if (age > 30 && age < 60) {
        installment_years = 60 - age;
    }

    let down_payment = price * down_payment_percentage;
    let The_remaining_amount = price - down_payment;

    let monthly_installment = (((The_remaining_amount * (interest / 100)) * installment_years) + The_remaining_amount) / (installment_years * 12)


 cartona = `
    <div class="table-responsive">
        <table class="table table-primary">
            <thead>
                <tr>
                    <th scope="col">Down Payment</th>
                    <th scope="col"> Interest System </th>
                    <th scope="col">installment years</th>
                    <th scope="col">Monthly installment</th>

                </tr>
            </thead>
            <tbody>
                <tr class="">
                    <td scope="row">${down_payment}</td>
                    <td>${interestSystem}</td>
                    <td>${installment_years}</td>
                    <td>${monthly_installment}</td>

                </tr>
                
            </tbody>
        </table>`


    table.innerHTML += cartona;
})