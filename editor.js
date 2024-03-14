"use strict";

let editorId = "editor";
let editorElement = document.getElementById(editorId);

editorElement.addEventListener("keydown", event => {
    if (event.target.tagName === "P" &&
        event.key === "Enter") {
        event.preventDefault();
        let paragraph = document.createElement("p");
        paragraph.setAttribute("contenteditable", "");
        event.target.insertAdjacentElement("afterend", paragraph);
        paragraph.focus();
    }
});

editorElement.addEventListener("keydown", event => {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    let up = event.key === "ArrowUp";
    let elem;
    if (up === true) elem = document.activeElement.previousElementSibling;
    else elem = document.activeElement.nextElementSibling;
    if (!elem) return;
    elem.focus();
});

editorElement.addEventListener("click", event => {
    if (event.target.tagName !== "DIV") return;
    editorElement.lastElementChild.focus();
});
