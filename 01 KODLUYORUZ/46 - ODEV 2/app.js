let addButtonDOM = document.querySelector("#liveToastBtn");
let taskDOM = document.querySelector("#task");
let listDOM = document.querySelector("#list");
let toastWarningDOM = document.querySelector("#toastWarning");
let liveToastDOM = document.querySelector("#liveToast");

addButtonDOM.addEventListener("click", addItem);
function addItem(event) {
    event.preventDefault();
    if (taskDOM.value === "") {
        $("#toastWarning").toast("show");
    } else {
        let liDOM = document.createElement("li");
        liDOM.innerHTML = taskDOM.value;
        listDOM.appendChild(liDOM);
        let closeBtnDOM = document.createElement("button");
        closeBtnDOM.innerHTML = "x";
        closeBtnDOM.classList.add("close");
        liDOM.appendChild(closeBtnDOM);

        $("#liveToast").toast("show");
        taskDOM.value = "";
    }
}

taskDOM.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addItem(e);
    }
});

listDOM.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    } else if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
});
