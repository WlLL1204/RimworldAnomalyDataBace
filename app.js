const characters = [
    {
        name: "ドスケベ天使(テスト)",
        category: "アリィエル",
        summary: "可愛いねぇアダルベロンくん",
        image: "images/image.png"
    }
];

const list = document.getElementById("list");
characters.forEach((character) => {
    const card = document.createElement("article");
    const title = document.createElement("h2");
    title.textContent = character.name;
    const category = document.createElement("p");
    category.textContent = character.category;
    const summary = document.createElement("p");
    summary.textContent = character.summary;
    const image = document.createElement("img");
    image.src = character.image;
    image.alt = character.name;
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(category);
    card.appendChild(summary);
    list.appendChild(card);
});