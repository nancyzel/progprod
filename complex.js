function round(str) {
    ind = str.length;
    while (str[ind - 1] == '0') ind--;
    if (str[ind - 1] == '.') return str.substring(0, ind - 1);
    return str.substring(0, ind);
}

function sqrt_complex() {
    let precision = document.querySelector("#precision").value;
    let real_num = document.querySelector("#real_num").value;
    let imagine_num = document.querySelector("#imagine_num").value;

    if (precision === "") {
        precision = 3;
    }

    if (isNaN(real_num) || isNaN(imagine_num) || isNaN(precision)) {
        document.querySelector(".name1").innerHTML = "Ошибка ввода. Введено не число или несколько чисел.";
        return;
    }
    if (real_num === "" || imagine_num === "") {
        document.querySelector(".name1").innerHTML = "Ничего не введено. Попробуйте использовать числа";
        return;
    }
    if (imagine_num == 0) {
        document.querySelector(".name1").innerHTML = "Ноль в мнимой части.\nПредлагаю ввести тоже самое на страничке для действительных чисел.";
        return;
    }
    arg1 = Math.sqrt((Math.sqrt(Math.pow(real_num, 2) + Math.pow(imagine_num, 2))) / 2 + real_num / 2);
    arg2 = Math.sqrt((Math.sqrt(Math.pow(real_num, 2) + Math.pow(imagine_num, 2)) - real_num) / 2) * (imagine_num / Math.abs(imagine_num));

    let s = (round(arg1.toFixed(precision))) + ((arg2 > 0) ? " + " : " - ") + ((Math.abs(arg2) == 1) ? "" : round(Math.abs(arg2).toFixed(precision))) + "i";

    s = "(" + s + ") и -(" + s + ")";

    document.querySelector(".name1").innerHTML = "Квадратный корень из числа (" + ((real_num != 0) ? real_num + ((imagine_num > 0) ? " + " : " - ") : ((imagine_num > 0) ? "" : "-")) + ((Math.abs(imagine_num) == 1) ? "" : Math.abs(imagine_num)) + "i) равен " + s + ".\nТочность округления " + precision + " знаков после запятой.";
}