$(document).ready(function() {
    $("#momento").text (moment().format("MMMM Do YY, h:mm:ss"));
    $(".saveBtn").on("click",function() {

console.log(this);
var text = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");
localStorage.setItem(time ,text);
    })
$('#hour1 .description').val(localStorage.getItem('hour1')) ;
$('#hour2 .description').val(localStorage.getItem('hour2')) ;
$('#hour3 .description').val(localStorage.getItem('hour3')) ;
$('#hour4 .description').val(localStorage.getItem('hour4')) ;
$('#hour5 .description').val(localStorage.getItem('hour5')) ;
$('#hour6 .description').val(localStorage.getItem('hour6')) ;
$('#hour7 .description').val(localStorage.getItem('hour7')) ;
$('#hour8 .description').val(localStorage.getItem('hour8')) ;
$('#hour9 .description').val(localStorage.getItem('hour9')) ;
$('#hour10 .description').val(localStorage.getItem('hour10')) ;
function currentTime(){
    var ahorita = moment().hour();
    $('.time-block').each(function () {
        var timeBlock=parseint($(this).attr('id').split('hour')[1])
        console.log(ahorita, timeBlock)
        if (ahorita > timeBlock){
            $(this).addClass('past');
            $(this).removeClass('future');
            $(this).removeClass('present');
        }
        else if (ahorita === timeBlock){
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
        }
        else {
            $(this).removeClass('present');
            $(this).removeClass('past');
            $(this).addClass('future');
        }
    }
    )
}
currentTime();
})