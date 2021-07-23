function contactPage() {
    const content = document.getElementById('content');
    const body = document.body;
    body.setAttribute("style", "background-image: url('https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/1200px-Chipotle_Mexican_Grill_logo.svg.png'); background-size: 50px;");
    content.setAttribute("style", "background-image: url('https://wallpaperaccess.com/full/1556622.jpg'); background-repeat: repeat-y; margin: 0 auto; text-align: center; width: 700px;");
    const contactTitle = document.createElement('h1');
    contactTitle.innerText = 'Contact Us';
    const person1Name = document.createElement('h3');
    person1Name.innerText = 'Mr. Chipotle';
    const person1Phone = document.createElement('p');
    person1Phone.innerText = '1(234)555-6789'
    const person1Email = document.createElement('p');
    person1Email.innerText = 'chipotle@chipotle.com';
    const person1Address = document.createElement('p');
    person1Address.innerText = '123 Chipotle Way Z1Z1Z1 Texas, United States';

    const person2Name = document.createElement('h3');
    person2Name.innerText = 'Mrs. Chipotle';
    const person2Phone = document.createElement('p');
    person2Phone.innerText = '1(234)555-6789'
    const person2Email = document.createElement('p');
    person2Email.innerText = 'mrschipotle@chipotle.com';
    const person2Address = document.createElement('p');
    person2Address.innerText = '123 Chipotle Way Z1Z1Z1 Texas, United States';

    content.appendChild(contactTitle);
    content.appendChild(person1Name);
    content.appendChild(person1Phone);
    content.appendChild(person1Email);
    content.appendChild(person1Address);
    content.appendChild(person2Name);
    content.appendChild(person2Phone);
    content.appendChild(person2Email);
    content.appendChild(person2Address);
}

export {contactPage}