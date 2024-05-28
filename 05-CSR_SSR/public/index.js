// console.log("Starting");


function restart () {
    $.get('/todo', (data) => {
        console.log(data);
        for (let i in data) {
            $('#list').append(`<li>${i}</li>`)
        }
    })
}
restart();