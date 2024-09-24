

function round(str) {
    ind = str.length;
    while (str[ind - 1] == '0') ind--;
    if (str[ind - 1] == '.') return str.substring(0, ind - 1);
    return str.substring(0, ind);
}

function sqrt_real() {
    
    let arithm = document.querySelector("#flag").checked;
    let precision = document.querySelector("#precision").value;
    let num = document.querySelector("#data").value;
    
    if (String(num).slice(-2) === "pi") {
        num = String(num).slice(0, -2);
        if (num == "") {
            num = Math.PI;
        }
        else if (num == "-") {
            num = -Math.PI;
        }
        else if (isNaN(num)) {
            document.querySelector(".name1").innerHTML = "Ошибка ввода. Введено не число или несколько чисел.";
            return;
        }
        else {
            num = num * Math.PI;
        }
    }
    if (String(num).slice(-1) === "e") {
        num = String(num).slice(0, -1);
        if (num == "") {
            num = Math.E;
        }
        else if (num == "-") {
            num = -Math.E;
        }
        else if (isNaN(num)) {
            document.querySelector(".name1").innerHTML = "Ошибка ввода. Введено не число или несколько чисел.";
            return;
        }
        else {
            num = num * Math.E;
        }
    }

    if (precision === "") {
        precision = 3;
    }

    if (isNaN(num) || isNaN(precision)) {
        document.querySelector(".name1").innerHTML = "Ошибка ввода. Введено не число или несколько чисел.";
        return;
    }
    if (num === "") {
        document.querySelector(".name1").innerHTML = "Ничего не введено. Попробуйте использовать числа";
        return;
    }
    if (num == 0) {
        document.querySelector(".name1").innerHTML = ((arithm) ? "Арифметический " : "Алгебраический ") + "квадратный корень из числа 0 равен 0.\nТочность округления " + precision + " знаков после запятой.";
        return;
    }
    
    let neg = false;

    if (num < 0) {
        if (arithm) {
            document.querySelector(".name1").innerHTML = "Решений в действительных числах нет";
            return;
        }
        neg = true;
        num = - num;
    }

    sqr = Math.sqrt(num);
    let s = round(sqr.toFixed(precision));

    if (neg) {
        if (sqr == 1) s = "i";
        else s += "i";
    }

    if (!arithm) {
        s = s + " и -" + s;
    }

    s += "."

    document.querySelector(".name1").innerHTML = ((arithm) ? "Арифметический " : "Алгебраический ") + "квадратный корень из числа " + num + " равен " + s + "\nТочность округления " + precision + " знаков после запятой.";
    
}