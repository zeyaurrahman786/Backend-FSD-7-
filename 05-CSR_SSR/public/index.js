// console.log("Starting");


function restart () {
    $("#list").empty();
    $.get('/todo', (data) => {
        console.log(data);
        for (let i of data) {
            $('#list').append(`<li>${i}</li>`)
        }
    })
}

restart();



$('#btn').on('click' ,() => {
    let data = $('#inp').val()
    console.log(data, "datasss!");
    $.post('/todo', {data}, (res) => {
        console.log(res, "Yahi haiiii!");
        $('#inp').val("");
        restart();
    })
})
