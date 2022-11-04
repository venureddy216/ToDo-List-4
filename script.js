//getting all required elemnets

const inputField=document.querySelector(".input-field textarea");
todolists=document.querySelector(".todolists ");
pendingNum=document.querySelector(".pending-num");
clearButton=document.querySelector(".clear-button ");

// we will call function while adding deleting checking and unchecking 
function allTasks(){
    let tasks=document.querySelectorAll(".pending");
    //if task lenth is 0 then it diaplays no tasks.otherwise it displays tasks numbers
    pendingNum.textContent =tasks.length==0 ? "no" : tasks.length;
}

//add task while we put value in text area and press enter

inputField.addEventListener("keyup",(e)=>{
	let inputVal=inputField.value.trim();//trim function removes spaces
    // if enter button is press and input value is greater than 0
	if(e.key==='Enter' && inputVal.length>0){
        let liTag = `<li class= "list pending" onclick= "handleStatus(this) " >
                    <input type="checkbox">
                     <span class="task">${inputVal}</span>
                      <i class="uil uil-times-circle" onclick="deleteTasks(this)"></i>
        </li>` ;
        todolists.insertAdjacentHTML('beforeend',liTag);//insert li tag within the todo list div\
        inputField.value= "";//removing value from input field
        allTasks();
    }

});

//checking and unchecking the checkbox while we click on the task

function handleStatus(e){
    const checkbox=e.querySelector("input");
    checkbox.checked=checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}
// deleting the while we click on the X symbol
function deleteTasks(e){
    
    e.parentElement.remove();
    allTasks();
}
// deleting all the tasks while click o the clear button

clearButton.addEventListener("click",()=>{
    todolists.innerHTML="";
    allTasks();
})
