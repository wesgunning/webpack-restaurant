import './styles.css'
const home = () => {
    const content = document.getElementById('content');
    const contentHeader = document.createElement('div');
    contentHeader.id = ('content-header');
    content.appendChild(contentHeader);
    const contentH1 = document.createElement('h1');
    contentH1.innerText = "Gianni's Artisan Pizzeria";
    contentHeader.appendChild(contentH1);
    const about = document.createElement('div');
    about.classList.add('about');
    content.appendChild(about);
    const aboutPara = document.createElement('p');
    aboutPara.innerText = "At Giannis's we believe in using high-quality, fresh ingredients along with our time-honored family traditions to bring you modern pizzas using authentic cooking techniques.";
    about.appendChild(aboutPara);
    const hours = document.createElement('div');
    hours.id = ('hours');
    const hoursPara = document.createElement('p');
    hoursPara.innerHTML = "Mon-Thurs: 9:00am - 7:00pm <br>Fri - Sat: 9:00am - 10:00pm <br>Sun: 11:00am - 7:00pm";
    content.appendChild(hours);
    hours.appendChild(hoursPara);
    const address = document.createElement('div');
    address.id = ('address');
    const addressH2 = document.createElement('h2');
    addressH2.innerText = 'Address';
    content.appendChild(address);
    address.appendChild(addressH2);
    const addressPara = document.createElement('p');
    addressPara.innerText = "123 Pepperoni Pl, Boston, MA";
    address.appendChild(addressPara);
    const menu = document.getElementById('menu');
    menu.setAttribute("onclick", 'contentClear()');
}
const contentClear = () => {
    const content = document.getElementById('content');
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild)
    };
}
home();
const content = document.getElementById('content');
const homeTab = document.getElementById('home');
const menuTab = document.getElementById('menu');
homeTab.setAttribute('onclick', 'myLibrary.contentClear()');

export {contentClear};