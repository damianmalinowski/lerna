const Segment = content => {
    const segment = document.createElement('div');
    segment.innerHTML = content;
    segment.style.border = "1px solid grey";
    segment.style.borderRadius = "10px";
    return segment;
}

export default Segment;