function mainPage() {
    const content = document.getElementById('content');
    const body = document.body;
    body.setAttribute("style", "background-image: url('https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/1200px-Chipotle_Mexican_Grill_logo.svg.png'); background-size: 50px;");
    content.setAttribute("style", "background-image: url('https://wallpaperaccess.com/full/1556622.jpg'); background-repeat: repeat-y; margin: 0 auto; text-align: center; height: 100%; width: 700px;");
    const title = document.createElement('h1');
    title.innerText = "Chipotle Mexican Grill";

    const image = document.createElement('img');
    image.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/1200px-Chipotle_Mexican_Grill_logo.svg.png'
    image.setAttribute("style", "width: 500px;");

    const info = document.createElement('p');
    info.textContent = "Chipotle is the world's leading brand specializing in burritos. Come in to try our signature burrito bowl or go for our iconic burrito. You won't leave disappointed. Now offering quesadillas and tacos at select locations";
    content.appendChild(image);
    content.appendChild(title);
    content.appendChild(info)
}

export {mainPage};