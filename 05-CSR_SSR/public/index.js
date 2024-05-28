// console.log("Starting");


function restart () {
    $.get('/todo', (data) => {
        console.log(data);
    })
}
restart();