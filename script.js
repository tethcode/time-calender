var get_Month = new Date().getMonth();

var month_lists = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

if (get_Month == 1) {
    current_month = month_lists[0];
} else if (get_Month == 2) {
    current_month = month_lists[1];
} else if (get_Month == 3) {
    current_month = month_lists[2]
} else if (get_Month == 4) {
    current_month = month_lists[3]
}else if (get_Month == 5) {
    current_month = month_lists[4]
}else if (get_Month == 6) {
    current_month = month_lists[6]
}else if (get_Month == 7) {
    current_month = month_lists[7]
}else if (get_Month == 8) {
    current_month = month_lists[8]
}else if (get_Month == 9) {
    current_month = month_lists[9]
}else if (get_Month == 10) {
    current_month = month_lists[10]
}else if (get_Month == 11) {
    current_month = month_lists[11]
}else if (get_Month == 12) {
    current_month = month_lists[12]
}

switch (new_day = new Date().getDay()) {
    case 1: get_week = 'MONDAY'; break;
    case 2: get_week = 'TUESDAY'; break;
    case 3: get_week = 'WEDNESDAY'; break;
    case 4: get_week = 'THURSDAY'; break;
    case 5: get_week = 'FRIDAY'; break;
    case 6: get_week = 'SATURDAY'; break;
    case 0: get_week = 'SUNDAY'; break;
}
var date = document.querySelector('#date').innerHTML = new Date().getDate();
var month = document.querySelector('#month').innerHTML = current_month;
var week = document.querySelector('#week').innerHTML = get_week;
var day = document.querySelector('#day').innerHTML = new Date().getDay();
var year = document.querySelector('#year').innerHTML = new Date().getFullYear();
console.log(new Date().getTime())