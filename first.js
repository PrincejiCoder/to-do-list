let tasks = [];

const renderTasks = () => {
    const tasklist = document.getElementById('taskList');
    tasklist.innerHTML = ''

    tasks.forEach((task, index) => {

        const li = document.createElement('li');
        li.textContent = task.name;
        const btn = document.createElement('button');
        btn.innerHTML = '<div>delete</div>';
        btn.className = 'delete-button';
        btn.onclick = ()=>deletetask(index)
        li.appendChild(btn);
        tasklist.appendChild(li);



    });
}

const addtask = () => {
    console.log("")
    const name = document.getElementById('taskInput');
    if (name.value !== "") {

        const task = {
            name: name.value,
            date: new Date()
        }

        console.log(task)
        tasks.push(task);
        console.log(tasks)
        renderTasks();
    } else {
        alert('empty')
    }
}
const deletetask = (index)=>{
    tasks.splice(index,1);
    renderTasks();
}
const clearalltaskes = ()=> {
    tasks = []; 
    renderTasks();
}

const counttask = ()=>{
    alert("Total number of tasks is: " + tasks.length)
}