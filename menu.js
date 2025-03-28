let menu = document.getElementById("menu");

let menuElements = [
    {name: "Кактусы", submenu:[
        {
            name: "Опунциевые",
            submenu: [
                { name: "Опунция обыкновенная", url: "/opuntioideae/vulgaris" },
                { name: "Опунция мелковолосистая", url: "/opuntioideae/microdasys" }
            ]
        },
        {
            name: "Цереусовые",
            submenu: [
                { name: "Цереус перуанский", url: "/cereae/peruvianus" },
                { name: "Цереус репандус", url: "/cereae/repandus" }
            ]
        },
        {
            name: "Маммиллярии",
            submenu: [
                { name: "Маммиллярия бокасанская", url: "/mammillaria/bocasana" },
                { name: "Маммиллярия Зейльмана", url: "/mammillaria/zeilmanniana" }
            ]
        }
    ]},
    {
        name: "Цветы",
        submenu: [
            {
                name: "Однолетние",
                submenu: [
                    { name: "Бархатцы", url: "/annual/marigold" },
                    { name: "Петуния", url: "/annual/petunia" }
                ]
            },
            {
                name: "Многолетние",
                submenu: [
                    { name: "Розы", url: "/perennial/roses" },
                    { name: "Пионы", url: "/perennial/peonies" }
                ]
            },
            {
                name: "Луковичные",
                submenu: [
                    { name: "Тюльпаны", url: "/bulbous/tulips" },
                    { name: "Нарциссы", url: "/bulbous/daffodils" }
                ]
            }
        ]
    }
]

let horizont = false;

ShowMenu(menuElements, menu);

function ShowMenu(MenuItemsA,ParentElem) {
    console.log(ParentElem.children);
    console.log(ParentElem);
    let cur = ParentElem;
    while(cur.previousElementSibling) {
        cur = cur.previousElementSibling;
        if (cur.firstElementChild) {
            cur.firstElementChild.remove();
        }
    }
    cur = ParentElem
    while(cur.nextElementSibling) {
        cur = cur.nextElementSibling;
        if (cur.firstElementChild) {
            cur.firstElementChild.remove();
        }
    }

    let horizontal = false;
    if (ParentElem === menu) {
        horizontal = true;
        
    }

    const rect = ParentElem.getBoundingClientRect();
    
    let div = document.createElement("div");
    div.style.display = "flex";

    ParentElem.appendChild(div);
    if (!horizontal) {
        div.style.flexDirection = "column";
        div.style.position = "fixed";
        console.log(ParentElem);
        // const style = window.getComputedStyle(ParentElem);
        console.log(ParentElem.classList);
        if(!ParentElem.hor) {
            console.log("!hor");
            console.log(ParentElem);
            console.log(ParentElem.style.flexDirection);
            div.style.left = `${rect.right}px`;
            div.style.top = `${rect.top}px`;
        }
    } else {
        div.hor = true;
    }
    
    for (let element of MenuItemsA) {
        if (element.url) {
        let a = document.createElement("a");
        a.href = element.url;
        a.innerText = element.name;
        a.classList.add("menuElement");
        
        div.appendChild(a);
        } else if (element.submenu) {
            let di = document.createElement("div");
            di.innerText = element.name;
            di.classList.add("menuElement");
            di.addEventListener("click", (event) => {event.stopPropagation(); ShowMenu(element.submenu, event.currentTarget);});
            if (horizontal) {
                di.hor = true;
            }
            div.appendChild(di);
        }
    }

    // results;
    horizont = horizontal;
}

function makeItems(navElement, menuElements) {
    let ul = document.createElement("ul");
    navElement.appendChild(ul);
    
    for (element of menuElements) {
        let li = document.createElement("li");
        ul.appendChild(li);
        
        if (element.submenu) {
            li.innerHTML = `<span>${element.name}: </span>`;
            makeItems(li, element.submenu);
        } else if (element.url) {
            let a = document.createElement("a");
            a.href = element.url;
            a.innerText = element.name;
            li.appendChild(a);
        } else {
            alert("somethig wrong with arr");
        }
    }
}

