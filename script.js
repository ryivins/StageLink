let activeCategory = "all";
let activeSearch = "";

/* =========================
   FILTER BY CATEGORY
========================= */
function filterItems(category) {
    activeCategory = category;
    applyFilters();
}

/* =========================
   SEARCH FUNCTION
========================= */
function searchItems(query) {
    activeSearch = query.toLowerCase();
    applyFilters();
}

/* =========================
   MASTER FILTER ENGINE
========================= */
function applyFilters() {
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        const category = item.getAttribute("data-category");
        const text = item.innerText.toLowerCase();

        const matchesCategory =
            activeCategory === "all" || category === activeCategory;

        const matchesSearch =
            text.includes(activeSearch);

        if (matchesCategory && matchesSearch) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}