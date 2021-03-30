function contact() {
    const element = document.getElementById('content');
    const info = document.createElement('h2');
    const number = document.createElement('h2');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');

    const div = document.createElement('div');
    div.classList.add('display');

    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.flexDirection = 'column';

    info.textContent = "12345 Gibberish Street";
    number.textContent = "999 - 999 - 9999";
    img1.src = "./images/outside.jpg";
    img2.src = "./images/inside.jpg";
    img1.style.width = '50%';
    img1.style.height = '50%';
    img2.style.width = '50%';
    img2.style.height = '50%';
    img1.style.borderBottom = "2em solid #0c1013";


    div.append(info, number, img1, img2);
    element.append(div);

}

export default contact