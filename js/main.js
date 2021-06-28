const Base_Url = `https://reqres.in/api/users`;
// get User
const getUser = async () => {
    try {
        const res = await axios.get(`${Base_Url}`);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}
//end get User
const ul = document.getElementById('ul');
// console.log(ul);

// set User
const setUser = async () => {
    const res = await getUser();
    let activLink;
    res.data.map((value, index) => {
        const messageNumber = Math.floor(Math.random() * 10 + 12);
        const a = document.createElement('a');
        const fullName = ` ${value.first_name} ${value.last_name}`
        const img = `${value.avatar}`
        a.addEventListener('click', function (e) {
            let unread = document.getElementById(`unread${index}`)
            activLink?.classList?.remove('active');
            e.target.classList.add('active');
            activLink = e.target;
            unread.style.display = "none";
            setMassage(messageNumber, fullName, img);
        })
        a.className = `list-group-item list-group-item-action`;
        a.innerHTML = `<img class="userImg"
        src="${value.avatar}"
        alt="">
    <div class="userTitle">
        <div class="topTitle"><span class="text-start"> <i class="fas fa-users"></i> ${fullName}</span></div>
        <div class="bottomtitle">Behzod:xo'p</div>
    </div>
    <div class="time ms-5">
        <span>${getTime(value.id)}</span>
        <span id='unread${index}' class="bg-info text-white">${messageNumber}</span>
    </div>`
        ul.appendChild(a);

    })
}
// end set User
// get time
const getTime = (n) => {
    const date = new Date();
    const hour = date.getHours() + n;
    const minut = date.getMinutes() + n;
    return `${hour}:${minut}`;
}
// get time
document.getElementById('subTitle').innerHTML = `last seen at ${getTime(0)}`
// set massage
const setMassage = (messageNumber, title, img) => {
    const navbarchat = document.getElementById('navbarchat');
    navbarchat.className = "navbar bg-white px-5 w-100 d-flex justify-content-between align-items-center";
    navbarchat.innerHTML = `<div class="navbarText">
    <h3 class="title fs-5">${title}</h3>
    <span id="subTitle" class="mb-1">${getTime(2)}</span>
</div>
<div class="navbarIcon mb-2">
    <i class="fas fa-search mx-2"></i>
    <i class="fas fa-phone mx-2"></i>
    <i class="fas fa-ellipsis-v mx-2"></i>
    <i class="fas fa-th-list mx-2"></i>
</div>`
    const chatBody = document.getElementById('chatBody');
    chatBody.innerHTML = "";
    for (let i = 1; i <= messageNumber; i++) {
        const str = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis laudantium sequi ipsum ea voluptatibus dolorem, inventore vel veniam quidem? Id commodi, blanditiis iusto provident aut numquam velit cum veniam magni, atque facere vitae, incidunt ullam accusantium quia iste quidem voluptate excepturi. Officiis vel unde iure expedita, porro error distinctio. Dolores.`;
        const p = document.createElement('p');
        p.className = `mb-3 text-start px-3 ms-3 py-2 bg-white rounded `;
        p.innerHTML = `${str.slice(Math.floor(Math.random() * 10), Math.floor(Math.random() * 100 + 15))}`;
        if (i != messageNumber) {
            chatBody.appendChild(p);
        }
        else {
            const div = document.createElement('div');
            div.className = `d-flex justify-content-between position-relative`;
            div.innerHTML = `<img  src="${img}" class="userImgMini" alt=""> `;
            div.appendChild(p);
            chatBody.appendChild(div);
        }
    }
    const setText = document.getElementById('setText');
    const userText = document.getElementById('userText');
    setText.addEventListener('click', function () {
        let p = document.createElement('p');
        p.className = `mb-3 text-start px-3 py-2 ms-3 bg-white rounded `;
        let div = document.createElement('div');
        div.className = `d-flex justify-content-between position-relative`;
        p.innerText = `${userText.value}`;
        let img = document.createElement("img");
        img.src = "img/avatar_mine.jpg";
        img.className = "userImgMini";
        div.appendChild(img);
        div.appendChild(p)
        chatBody.appendChild(div);
        userText.value = "";
    })
}
// set massage
const bars = document.getElementById('bars');
const sideBar = document.getElementById('sideBar');
const clickBars = () => {
    bars.classList.remove('d-none');
}
const clickSidebar = () => {
    // bars.classList.remove('');
    bars.classList.add('d-none');
}



setUser()