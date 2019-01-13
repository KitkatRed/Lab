const todo=[{
    text:'order cat food',
    completed: false
}, {
    text:'Clean kitchen',
    completed: true
}, {
    text:'cook meal',
    completed: true
}, {
    text:'Do work',
    completed: false
}, {
    text:'Exercise',
    completed: false
}
]

const incomplete= {
    searchText:''
}

const renderTask= function(todo,incomplete){
    const filteredTask= todo.filter(function(task){
        return task.text.toLowerCase().includes(incomplete.searchText.toLowerCase())
    })

    document.querySelector('#displayfiltered').innerHTML =''

    filteredTask.forEach(function (element){
        const newElement = document.createElement('p')
        newElement.textContent=element.text
        document.querySelector('#displayfiltered').appendChild(newElement)

    })
}

renderTask(todo,incomplete)

document.querySelector('#filter').addEventListener('input', function(e){
    incomplete.searchText = e.target.value
    renderTask(todo,incomplete)
})

document.querySelector('#formCreateTask').addEventListener('submit',function(e){
    e.preventDefault()
    console.log("task title to be created: "+e.target.elements.newTaskTitle.value)
    
    todo.push({
        text: e.target.elements.newTaskTitle.value,
        completed: false
    })
    //console.log("new array1: "+todo)

    e.target.elements.newTaskTitle.value=''
    renderTask(todo,incomplete)
})

document.querySelector('#formDeleteTask').addEventListener('submit',function(e){
    e.preventDefault()
    console.log("task name to be deleted: "+e.target.elements.deleteTaskinput.value)
    
    const indexoftheDeleteItem =todo.findIndex(x=>x.text==e.target.elements.deleteTaskinput.value)

    //console.log("index of deleteItem: "+indexoftheDeleteItem)

    todo.splice(indexoftheDeleteItem,1)
    //console.log("new array2: "+todo)
    
    e.target.elements.deleteTaskinput.value=''
    renderTask(todo,incomplete)
})