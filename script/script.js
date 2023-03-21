let inpName= document.querySelector('.name-inp')
let inpTask = document.querySelector('.task-inp')
let btn = document.querySelector('.add-btn')
let h3ElemName = document.querySelectorAll('.nameuser')

function funcAdd(task){

    h3ElemName.forEach(function(name){

        if(inpName.value === name.innerHTML){
            let newInpTask = inpTask.value

            let newLi = document.createElement('li')
            newLi.innerHTML = newInpTask
            newLi.className = 'task'

            let userParent = name.parentNode
            userParent.append(newLi)
            console.log(userParent);
        }
    })
    inpName.value = ""
    inpTask.value = ""
}

btn.addEventListener('click',funcAdd)

