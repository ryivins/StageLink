function filterItems(category) {
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        const match = item.getAttribute("data-category");

        if (category === "all" || match === category) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function searchItems(query) {
    const items = document.querySelectorAll(".item");

    query = query.toLowerCase();

    items.forEach(item => {
        const text = item.innerText.toLowerCase();

        item.style.display = text.includes(query) ? "block" : "none";
    });
}