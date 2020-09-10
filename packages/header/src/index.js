const Header = text => {
    const header = document.createElement('h1');
    header.innerText = text;
    header.style.color = "red";
    return header;
}

export default Header;