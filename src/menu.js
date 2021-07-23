function menu() {
    const content = document.getElementById('content');
    const menuTitle = document.createElement('h1');
    const body = document.body;
    body.setAttribute("style", "background-image: url('https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/1200px-Chipotle_Mexican_Grill_logo.svg.png'); background-size: 50px;");
    content.setAttribute("style", "background-image: url('https://wallpaperaccess.com/full/1556622.jpg'); background-repeat: repeat-y; margin: 0 auto; text-align: center; width: 700px;");
    menuTitle.innerText = 'MENU';
    const item1 = document.createElement('div');
    const item1title = document.createElement('h2');
    const item1img = document.createElement('img');
    const item1content = document.createElement('h4');
    item1title.innerText = 'Create Your Own Burrito';
    item1img.src = 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/3/4/1/FNM_040113-Chipotle-Chicken-Burritos-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1381343667380.jpeg';
    item1img.setAttribute("style", "width: 400px;");
    item1content.innerText = 'Enjoy a handcrafted burrito with fresh ingredients available 24/7. Choose your flavor of rice, meat, veggies and much more';
    const item2 = document.createElement('div');
    const item2title = document.createElement('h2');
    const item2img = document.createElement('img');
    const item2content = document.createElement('h4');
    item2title.innerText = 'Create Your Own Burrito Bowl';
    item2img.src = 'https://www.thespruceeats.com/thmb/d9GhPgMo9WpgOZPCSXDBWy_wLmo=/2560x1920/smart/filters:no_upscale()/copycat-chipotle-chicken-burrito-bowl-4173869-hero-01-12a58fec59284f0cac31a49a80380fcd.jpg';
    item2img.setAttribute("style", "width: 400px;");
    item2content.innerText = 'Enjoy your own personal burrito bowl with fresh ingredients available 24/7. Comes with complementary cutlery and free guacamole to all customers in the doors before 11 am';
    const item3 = document.createElement('div');
    const item3title = document.createElement('h2');
    const item3img = document.createElement('img');
    const item3content = document.createElement('h4');
    item3title.innerText = 'Try our new quesadillas';
    item3img.src = 'https://static01.nyt.com/images/2018/06/22/business/22chipotle2/merlin_139925220_d45544db-5a97-47a2-b7a2-4d1b1fef4438-superJumbo.jpg';
    item3img.setAttribute("style", "width: 400px;");
    item3content.innerText = 'Introducing our brand new quesadillas! Never before have we ever added such a delicious option to our menu. Be sure to check it out, only at Chipotle!';
    item1.appendChild(item1title);
    item1.appendChild(item1img);
    item1.appendChild(item1content);
    item2.appendChild(item2title);
    item2.appendChild(item2img);
    item2.appendChild(item2content);
    item3.appendChild(item3title);
    item3.appendChild(item3img);
    item3.appendChild(item3content);
    content.appendChild(menuTitle);
    content.appendChild(item1);
    content.appendChild(item2);
    content.appendChild(item3);
    //content.appendChild(body);
}

export {menu}