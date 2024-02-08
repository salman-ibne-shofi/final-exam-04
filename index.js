function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number";
    } else {
        const ticketPrice = 120;
        const security = 500;
        const lunch = 8 * 50;

        const saleTotal = ticketSale * ticketPrice;
        const cost = security + lunch;

        const income = saleTotal - cost;

        return income;
    }
}

function checkName(name) {
    const lastChar = name.charAt(name.length - 1);
    const target = ["a", "y", "i", "e", "o", "u", "w"];

    if (typeof name !== String) {
        return "Invalid!";
    }

    if (target.includes(lastChar)) {
        return "good name";
    } else {
        return "bad name";
    }
}

function deleteInvalids(array) {
    const numberarray = array.map((element) => parseInt(element));
    return numberarray;
}

function password(obj) {
    const setPassword = obj.siteName + "#" + obj.name + "@" + obj.birthYear;
    return setPassword;
}

function monthlySavings(arr, livingCost) {
    const totalIncome = 0;
    arr.map((element) => {
        if (element >= 3000) {
            const newIncome = element - element * 0.2;

            totalIncome = totalIncome + newIncome;
        } else {
            totalIncome = totalIncome + element;
        }
    });
}
