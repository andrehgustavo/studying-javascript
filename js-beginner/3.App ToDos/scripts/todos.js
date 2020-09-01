var buttonElement = document.querySelector('button');
var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';

    for (const todo of todos) {
        var toDoElement = document.createElement('li');        
        var todoText = document.createTextNode(todo);

        

        var linkElement = document.createElement('a'); 
        
        linkElement.setAttribute('href', '#')

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteToDo(' + pos +')');
        
        var linkText = document.createTextNode('Excluir');


        linkElement.appendChild(linkText);

        toDoElement.appendChild(todoText);  
        toDoElement.appendChild(linkElement);        

        listElement.appendChild(toDoElement);
    }
}

buttonElement.onclick = addToDo;

function addToDo(){
    var todoText = inputElement.value;
    
    todos.push(todoText);
    inputElement.value = "";

    renderTodos();
    saveToStorage();
}

function deleteToDo(pos){
    todos.splice(pos, 1);

    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

renderTodos();