document.addEventListener("DOMContentLoaded", function () {
    const createBacklog = document.getElementById("create-backlog-btn");

    const backlogContent = document.getElementById("backlog-content");


    createBacklog.addEventListener("click", () => {

        createBacklog.disabled = true;

        if(backlogContent.querySelector(".backlog-form")) return;

        const newBacklogForm = document.createElement("form");
        newBacklogForm.className = "backlog-from";


        //title
        const backlogFromContainer = document.createElement("div")

        const lable = document.createElement("label");
        lable.setAttribute("for", "backlogTitle");
        lable.textContent = "Backlog Title";

        const input = document.createElement("input")
        input.setAttribute("id", "backlogTitle")
        input.setAttribute("placeholder", "enter the backlog title...");
        input.setAttribute("type", "text");


        backlogFromContainer.appendChild(lable);
        backlogFromContainer.appendChild(input);

        // Description 
        const descriptionFromContainer = document.createElement("div")

        const descriptionlable = document.createElement("label");
        descriptionlable.setAttribute("for", "backlogDescription");
        descriptionlable.textContent = "Description";

        const descriptioninput = document.createElement("textarea")
        descriptioninput.setAttribute("id", "backlogDescription")
        descriptioninput.setAttribute("placeholder", "Enter Backlog Description...");

        descriptionFromContainer.appendChild(descriptionlable);
        descriptionFromContainer.appendChild(descriptioninput);

        //buttons

        const actions = document.createElement("div");

        const createBacklogButton = document.createElement("button");
        createBacklogButton.setAttribute("type", "submit");
        createBacklogButton.textContent = "Create Backlog";

        const cancleBtn = document.createElement("button")
        cancleBtn.type = "button"
        cancleBtn.textContent = "Cancle"

        actions.appendChild(createBacklogButton)
        actions.appendChild(cancleBtn);


        // adding in to from 
        newBacklogForm.appendChild(backlogFromContainer);
        newBacklogForm.appendChild(descriptionFromContainer);
        newBacklogForm.appendChild(actions);

        function saveTaskToLocalStorage(section , task){

            console.log(task ," ", section);
            const allTasks = localStorage.getItem("KanbanTasks") || {};  
            if(!allTasks[section]){
                
               allTasks[section] =[];

                
            }
            allTasks[section].push(task)
            
            localStorage.setItem("kanbanTasks" ,JSON.stringify( allTasks[section]));
         
            
        }


        newBacklogForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const title = input.value.trim();

            const description = descriptioninput.value.trim();

            if (!title) {
                alert("value ni  correct ga enter cheuuuu ..");
                return;
            }

            const task = {
                title,
                description,
                createAt: new Date().toISOString(),
            }

            const section = "Backlogs";

            

            saveTaskToLocalStorage(section, task)

            const backlogCard = document.createElement("article");
            backlogCard.classList.add("backlog-card");
            backlogCard.innerHTML = ` <h4>${task.title}</h4>
            <p>${task.description || "no description"}</p>
            <p>${task.createAt}</p>`;

            newBacklogForm.replaceWith(backlogCard);
            createBacklog.disabled = false;



           

           

           
        })

   

        backlogContent.appendChild(newBacklogForm);
        input.focus();


    


    });


    


});