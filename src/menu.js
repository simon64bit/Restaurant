function menu() {
    const element = document.getElementById('content');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const price1 = document.createElement('h2');
    const price2 = document.createElement('h2');


    const div = document.createElement('div');
    div.classList.add('display');

    img1.src = './images/cheese.jpg';
    img1.style.height = '50%';
    img1.style.width = '50%';

    img2.src = './images/pasta.jpg';
    img2.style.height = '50%';
    img2.style.width = '50%';

    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.flexWrap = 'wrap';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';

    price1.textContent = "Spicy pasta $9.99";
    price2.textContent = "Spaghetti with tomato sauce and bread $4.99";

    div.append(price1, img1, price2, img2)
    element.append(div);


}

export default menu