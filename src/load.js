function load() {
    const element = document.getElementById('content');

    const title = document.createElement('span');
    const header = document.createElement('header');
    const navigation = document.createElement('span');
    navigation.classList.add('nav');

    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');

    span1.setAttribute('id', 'span1');
    span2.setAttribute('id', 'span2');
    span3.setAttribute('id', 'span3');

    span1.textContent = "Home";
    span2.textContent = "Menu";
    span3.textContent = "Contact Us"
    title.textContent = "Chef's delight";


    navigation.append(span1, span2, span3);
    header.append(title, navigation);






    element.append(header);
}

export default load