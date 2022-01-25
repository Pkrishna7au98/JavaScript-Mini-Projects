function DgtWatch(){
    var date = new Date();

    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var div = ['PM' , 'AM'];
    var dayNames = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY","FRIDAY", "SATURDAY"];

    document.getElementById('day').textContent = dayNames[dayNumber];

    ampm = div[1];
    ampm = hour > 12 ? div[0] : ampm;
    hour = hour % 12;
    hour = hour < 10 ? '0' + hour : hour;  // // Another way to use the if condition in javascript
    minute = minute < 10 ? '0' + minute : minute;  // Another way to use the if condition in javascript
    second = second < 10 ? "0" + second : second;

    document.getElementById('hour').textContent = hour ;
    document.getElementById('minute').textContent = minute;
    document.getElementById('second').textContent = second;
    document.getElementById('ampm').textContent = ampm;

    setTimeout(DgtWatch, 200);
}

window.onload = function() {
    DgtWatch();
};
