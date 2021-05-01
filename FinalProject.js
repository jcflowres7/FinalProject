var form = document.querySelector("form");

var ul = document.querySelector("ul");

var todoListArray = [];

function AddTodo(e) {

  e.preventDefault();
  var todo = {
    id: todoListArray.length,
    text: e.target[0].value,
    complete: false,
  };

  todoListArray.push(todo);


  showTodo();

}
function deleteTodo(element) {
  var newTodoArray = todoListArray.filter(function (todo) {
    return todo.id != element.id;
  
  });
  

  todoListArray = newTodoArray;

  showTodo();
  
}
function checkOff(element) {

  if (todoListArray[element.id]) {
    
    todoListArray[element.id].complete = true;
  
  }

  showTodo();

}

function showLineThrough(id) {
  var checkOff = `
        text-decoration:line-through
      `;


  if (todoListArray[id] && todoListArray[id].complete == true) {
  
    return checkOff;
  
  } else {
  
    return "";
  }
}
function showTodo() {
  
  var todoString = todoListArray
    .map(function (todo) {
    
      var classForText = "";
      
      if (todo.id != undefined) {
      
        classForText = showLineThrough(todo.id);
        
      }
      
      return `<li ><span  style="${classForText}">${todo.text}</span><button id=${todo.id} onclick="deleteTodo(this)">X</button><button id=${todo.id} onclick="checkOff(this)">Check Off</button></li>`;
    })
    .join(" ");
  

  ul.innerHTML = todoString;
  
}

form.addEventListener("submit", AddTodo);

