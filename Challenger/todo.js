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

let ischecked =false

const renderTask= function(todo,incomplete){
    const filteredTask= todo.filter(function(task){
        return task.text.toLowerCase().includes(incomplete.searchText.toLowerCase())
    })

    document.querySelector('#displayfiltered').innerHTML =''
    document.querySelector('#header2').innerHTML =''
    let index=0
    filteredTask.forEach(function (element){
    
        if (ischecked==false){
            if (element.completed==false){
                index++
            }
            
            const newElement = document.createElement('p')
            newElement.textContent=element.text
            document.querySelector('#displayfiltered').appendChild(newElement)
            
        }else{
            if(element.completed==false){
                index++
                const newElement = document.createElement('p')
                newElement.textContent=element.text
                document.querySelector('#displayfiltered').appendChild(newElement)
        
            }
            
        }
        
    })
    const newParagraph = document.createElement('p')
            newParagraph.textContent=`Total incomplete tasks: ${index}`
            document.querySelector('#header2').appendChild(newParagraph)
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
    if (indexoftheDeleteItem!=-1){
        todo.splice(indexoftheDeleteItem,1)
    }
    
    //console.log("new array2: "+todo)
    
    e.target.elements.deleteTaskinput.value=''
    renderTask(todo,incomplete)
})


document.querySelector('#checkForhidCompleted').addEventListener('change',function(e){
    ischecked=e.target.checked
    console.log("ischecked: "+ischecked)
    renderTask(todo,incomplete)
})