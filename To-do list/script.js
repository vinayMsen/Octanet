const inputbox= document.getElementById("input-box");
const list= document.getElementById("list-container");


function AddTask()
{
    if(inputbox.value===''){
        alert("Please write first");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= inputbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    saveData();
}

list.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
        {
            e.target.parentElement.remove();
            
        }
        saveData();
}, false);

function saveData()
{
    localStorage.setItem("data", list.innerHTML);
}


