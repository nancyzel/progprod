
function round(str) {
    ind = str.length;
    while (str[ind - 1] == '0') ind--;
    if (str[ind - 1] == '.') return str.substring(0, ind - 1);
    return str.substring(0, ind);
}

function sqrt_polynom() {
    /*let arithm = document.querySelector("#flag").checked;*/
    let precision = document.querySelector("#precision").value;
    let arg_a = document.querySelector("#arg_a").value;
    let arg_b = document.querySelector("#arg_b").value;
    let arg_c = document.querySelector("#arg_c").value;

    if (precision === "") {
        precision = 3;
    }

    if (isNaN(arg_a) || isNaN(arg_b) || isNaN(arg_c) || isNaN(precision)) {
        document.querySelector(".name1").innerHTML = "Ошибка ввода. Введено не число или несколько чисел.";
        return;
    }
    if (arg_a === "" || arg_b === "" || arg_c === "") {
        document.querySelector(".name1").innerHTML = "Ничего не введено. Попробуйте использовать числа";
        return;
    }

    if (arg_a * arg_c < 0) {
        document.querySelector(".name1").innerHTML = "Очень жаль. Взятие корня у этого многочлена невозможно.";
        return;
    }

    kompl = false;

    if (arg_a < 0) {
        if (arithm) {
            document.querySelector(".name1").innerHTML = "Очень жаль. Взятие корня у этого многочлена невозможно.";
            return;
        }
        kompl = true;
        arg_a = -arg_a;
        arg_b = -arg_b;
        arg_c = -arg_c;
    }

    k1 = Math.sqrt(arg_a);
    k2 = Math.sqrt(arg_c);

    if (k1 == 0 && k2 == 0) {
        document.querySelector(".name1").innerHTML = "Квадратный корень из многочлена 0 равен 0" + "\nТочность округления " + precision + " знаков после запятой.";
        return;
    }

    if (k1 * k2 * 2 != Math.abs(arg_b)) {
        document.querySelector(".name1").innerHTML = "Очень жаль. Взятие корня у этого многочлена невозможно.";
        return;
    }

    neg = false;

    if (arg_b < 0) {
        neg = true;
    }

    if (k2 == 0) {
        s = ((k1 == 1) ? "" : round(k1.toFixed(precision))) + "x";
    }
    else if (k1 == 0) {
        s = round(k2.toFixed(precision))
    }
    else {
        s = ((k1 == 1) ? "" : round(k1.toFixed(precision))) + "x " + ((neg) ? "- " : "+ ") + round(k2.toFixed(precision));
    }

    if (kompl || !arithm) {
        s = "(" + s + ")";
        if (kompl) {
            s += "i";
        } 
        if (!arithm) {
            s = s + " и -" + s;
        }
    }

    document.querySelector(".name1").innerHTML = "Квадратный корень из многочлена " + ((kompl) ? "-" : "") +"(" + ((arg_a == 0) ? "" : ((arg_a == 1) ? "" : arg_a) + "x^2") + ((arg_b == 0) ? "" : ((arg_b > 0) ? " + " : " - ") + ((Math.abs(arg_b) == 1) ? "" : Math.abs(arg_b)) + "x") + ((arg_c == 0) ? "" : ((arg_a == 0 && arg_b == 0) ? "" : " + ") + arg_c) + ") равен " + s + ".\nТочность округления " + precision + " знаков после запятой.";
}