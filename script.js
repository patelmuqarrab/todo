
const inputBox = document.getElementById('inbox');
const containerList = document.getElementById('containerList');

function addWork() {
    if (inputBox.value === '') {
        alert("Please Write Something");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        containerList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveWork();
}

containerList.addEventListener("click", function(e) {
    const liElement = e.target.closest("li");
    if (liElement) {
        if (e.target.tagName === "SPAN") {
            liElement.remove(); 
            saveWork();
        } else {
            liElement.classList.toggle("done");
            saveWork();
        }
    }
}, false);


function saveWork() {
    localStorage.setItem("data", containerList.innerHTML);
}

function showData() {
    containerList.innerHTML = localStorage.getItem("data");
}

showData();

inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addWork();
    }
});