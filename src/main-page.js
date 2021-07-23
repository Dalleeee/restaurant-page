import './style.css';

function mainPage() {
    const body = document.body;
    body.classList.add('body');
    const content = document.getElementById('content');
    content.classList.add('container');
    
    const title = document.createElement('h1');
    title.innerText = "Chipotle Mexican Grill";

    const image = document.createElement('img');
    image.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/1200px-Chipotle_Mexican_Grill_logo.svg.png'
    image.classList.add('logo');

    const info = document.createElement('p');
    info.textContent = "Chipotle is the world's leading brand specializing in burritos. Come in to try our signature burrito bowl or go for our iconic burrito. You won't leave disappointed. Now offering quesadillas and tacos at select locations";

    content.appendChild(image);
    content.appendChild(title);
    content.appendChild(info)
}

export {mainPage};