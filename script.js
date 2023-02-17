var app = {
//Init
    init: function()
    {
        console.log('init');
        app.addTitle();
        app.taskList();
        app.addNewTask();
    },

    //Titre
    addTitle: function()
    {
        var divContainer = document.querySelector('.container')
        var title = document.createElement('h1')
        title.innerText = 'Ma TODO List'
        title.classList.add('header')
        divContainer.appendChild(title)
    },

//Liste des tâches
    taskList: function()
    {
        //Champ d'affichage des tâches
        var divTask = document.querySelector('.container')
        var taskTable = document.createElement('div')
        var upperTable = document.createElement('div')

        taskTable.appendChild(upperTable)
        divTask.appendChild(taskTable)

        //Creation du champ de texte et d'un bouton
        var typeTask = document.createElement('div')
        var textArea = document.createElement('textarea')
        var buttonTask = document.createElement('button')

        //Ajout des classes
        upperTable.className = 'displayTasks'
        typeTask.className = 'addTasks'
        taskTable.className = 'tasks'
        textArea.className = 'addTasksInput'
        buttonTask.className = 'button'

        //Work on text area


        //Work on button
        buttonTask.innerText = 'Ajouter'
        buttonTask.setAttribute('id','button')

        //Ajout au DOM
        taskTable.appendChild(typeTask)
        typeTask.appendChild(textArea)
        typeTask.appendChild(buttonTask)
    },
//Gestion de l'event
    addNewTask: function()
    {
        //Ajouer d'une tâche au 'click'
        var button = document.getElementById('button')
        button.addEventListener('click',app.addTaskToDom)

    },
//Ajout de la tâche au cadre
    addTaskToDom: function()
    {
        //Ajout de la tâche au DOM
        var textArea = document.querySelector('textarea').value;
        var newTask = document.createElement('li');
        newTask.textContent = textArea;
        var taskList = document.querySelector('ul');
        if (!taskList)
        {
            var cadreTasks = document.querySelector('div.displayTasks')
            console.log(cadreTasks)
        
            taskList = document.createElement('ul');
            cadreTasks.appendChild(taskList);
        }
        taskList.appendChild(newTask);
    },
}

document.addEventListener('DOMContentLoaded',app.init);