const Button = text => {
    const button = document.createElement('button');
    button.innerText = text;
    button.style.padding = "10px 20px";
    button.style.backgroundColor = "green";
    button.style.borderRadius = "8px";
    button.style.color = "white";
    return button;
}

export default Button;