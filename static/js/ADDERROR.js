// static/js/module_addError.js
export function removeBorderOnInteract(element, elementInteract=element) {
    // elementInteract.addEventListener("focus", () => element.style.border = "");
    elementInteract.addEventListener("input", () => element.style.border = "");
}

export function removeTextOnInteract(element, elementInteract=element) {
    // elementInteract.addEventListener("focus", () => element.textContent = "");
    elementInteract.addEventListener("input", () => element.textContent = "");
}

export function addErrorBorder(element, elementInteract=element) {
    element.style.border = "2px solid red";
    removeBorderOnInteract(element, elementInteract);
}

export function addErrorText(element, message, elementInteract=element) {
    if (element === undefined || element === null) return;
    element.textContent = message;
    element.style.color = "red";
    element.style.fontSize = "0.8rem";
    element.style.marginBottom = "10px";
    removeTextOnInteract(element, elementInteract);
}

export const addError = (element, elementInteract=element, message) => {
    addErrorBorder(elementInteract);
    addErrorText(element, message, elementInteract);
}