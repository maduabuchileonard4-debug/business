const chips = document.querySelectorAll(".chip");
const sections = document.querySelectorAll("[data-cat]");

chips.forEach(chip => {
    chip.addEventListener("click", () => {
        const filter = chip.dataset.filter;

        // move the gold highlight to the clicked chip
        chips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");

        // "All" shows everything; other chips show only their own section
        sections.forEach(section => {
            const show = filter === "all" || section.dataset.cat === filter;
            section.style.display = show ? "" : "none";
        });
    });
});
