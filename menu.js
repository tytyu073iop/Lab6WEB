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

makeItems(menu, menuElements);

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

