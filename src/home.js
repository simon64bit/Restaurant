function home() {
    const element = document.getElementById('content');
    const image = document.createElement('img');
    const div = document.createElement('div');

    image.src = './images/food.jpg';
    image.style.height = '85vh';
    image.style.width = '100vw';
    div.classList.add('display');

    div.append(image);
    div.classList.add('display');

    element.append(div);

}

export default home