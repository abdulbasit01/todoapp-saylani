console.log('started')
const todo=document.getElementById('todo')
const todoList=document.getElementById('todoList')
function addTodo(){
    // get text from input and tyhe append a todo in list
    if(todo.value!==""){
        var li=document.createElement('li')
        li.setAttribute('class','list-group-item d-flex justify-content-between')
        var liText=document.createTextNode(todo.value)
        li.appendChild(liText)
        todoList.appendChild(li)
        todo.value=""
        // 
        // when appednd a text we need a buttons too for some functions
        var btnDel=document.createElement('button')
        var btnImg=document.createElement('img')
        btnImg.setAttribute('src','./binpng.png')
        btnImg.setAttribute('class','bin')
        btnDel.setAttribute('class',"btn btn-danger btn-sm")
        btnDel.setAttribute('onclick','deleteTodo(this)')
        btnDel.appendChild(btnImg)
        li.appendChild(btnDel)
        var btnEdit=document.createElement('button')
        var btnEdidImg=document.createElement('img')
        btnEdidImg.setAttribute('src','./editpng.png')
        btnEdidImg.setAttribute('class','bin')
        btnEdit.setAttribute('class',"btn btn-info btn-sm")
        btnEdit.setAttribute('onclick',"editTodo(this)")

        btnEdit.appendChild(btnEdidImg)
        li.appendChild(btnEdit)
    }else{
        todo.focus()
        document.getElementById('message').innerHTML='please insert value'
        todo.title="input field not be empty"
        setTimeout(()=>{
            document.getElementById('message').innerHTML=""
        },750)
        
    }
}

function deleteTodo(e){
    e.parentNode.remove()
}

function deleteAll(e){
    todoList.innerHTML=""
    var noTodo=document.getElementsByTagName('li')
    var li=document.createElement('li')
    var liText=document.createTextNode("You have no remaing todos")
    li.appendChild(liText)
    li.setAttribute('class','list-group-item text-success')
    todoList.appendChild(li)
}
function editTodo(e){
    var val=e.parentNode.firstChild.nodeValue
    var edit=prompt('enter value',val)
    console.log(edit)
    if(edit.length > 0 ){
        e.parentNode.firstChild.nodeValue=edit
    }else{
        alert('value not updated')
    }
}
