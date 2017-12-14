var total = 0;
for (i = 1; i <= 15; i++) {
    var first = Math.floor((Math.random() * 6) + 1);
    var second = Math.floor((Math.random() * 6) + 1);
    if (i == 8 || i == 13) {
        continue;
    }

    if (first == second) {
        document.getElementById('result').innerHTML += "ИТЕРАЦИЯ: " + i + " " + "Выпал дубль. Число: " + first + " ";
    } else if ((first < 3 && second > 4) || (first > 4 && second < 3)) {
        var difference = 0;
        difference = Math.abs(second - first);
        document.getElementById("result").innerHTML += "ИТЕРАЦИЯ: " + i + " " + "Большой разброс между костями. Разница составляет: " + difference + " ";
    } else {
        document.getElementById('result').innerHTML += "ИТЕРАЦИЯ: " + i + " " + "Первая кость: " + first + " " + "Вторая кость: " + second + " ";
    }

    total += first + second;

}
document.getElementById('result').innerHTML += (total >= 100 ? "<br />Победа, вы набрали" + " " + total + " " + "очков" : "<br />Вы проиграли, у вас" + " " + total + " " + "очков");