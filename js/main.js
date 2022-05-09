let todo = [];
let done = [];

function addTask() {
    let input = document.getElementById('input').value;


    if (input.length > 0){
        document.getElementById('input').value = '';

        todo.push(input);

    }
    else {
        alert("Ma'lumot kiriting");
    }
    drawPage();

}

function drawPage() {
    let result = '';
    for (let i = 0; i < todo.length; i++){
        result += "<div class='alert alert-success d-flex justify-content-between align-items-center'>" +  todo[i] +  " <button class='btn btn-primary ' onclick='checkTask(" + i + ")'>&check;</button></div>"
    }
    document.getElementById('result1').innerHTML = result;

    let result2 = '';
    for (let i = 0; i < done.length; i++){
        result2 += "<div class='alert alert-success d-flex justify-content-between align-items-center'>" +  done[i] +  " <button class='btn btn-danger ' onclick='deleteTask("+ i +")' >&times;</button></div>"
    }
    document.getElementById('result2').innerHTML = result2;
}

function checkTask(index) {

    done.push(todo[index]);
    todo.splice(index, 1);
    drawPage();
    progress();

}

function deleteTask(index) {
    done.splice(index, 1);
    drawPage();
    progress();
}

function progress() {
    let progress = done.length *100 / (todo.length + done.length);
    document.getElementById('progress').style.width = progress + "%";
}