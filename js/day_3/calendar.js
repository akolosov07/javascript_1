function calendar(year, month) {
    month--;

    // последний день текущего месяца
    let dt = new Date(year, month, 0);

    // текущий месяц
    month--;

    let days = dt.getDate();

    dt.setDate(1);

    //индекс дня недели для первого числа месяца
    // для недели 
    let index = (dt.getDay() + 6) % 7;


    // количество строк для календаря на месяц
    let rows = Math.ceil((index +days) / 7);

    console.log(index);

    let table = '<table border=1>';
    table += `<caption>${month} ${year}</caption>`
    
    let k = 1 - index;
    for(let i = 0; i < rows; i ++){
        table += `<tr>`;
        for(let j = 0; j < 7;j++){
            table += `<td>`;
            if(k > 0 && k <= days) {
                table += k;
            }
            k++;
        }
    }

    table += '</table>';

    return table;
}

for(let i = 1; i <= 12; i++)
document.write(calendar(2021, i));