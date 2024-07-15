/*
 * Author: Apache X692 Attack Helicopter
 * Created on: 15/07/2024
 */
function renderGrid() {
    let gridContainer = document.getElementById("grid");

    for (let rowIndex = 0; rowIndex < globals.maxRowsGrid; rowIndex++) {
        let newGridRow = document.createElement("div");

        newGridRow.classList.add("d-flex", "flex-row");

        for (let colIndex = 0; colIndex < globals.maxColsGrid; colIndex++) {
            let newGridItem = document.createElement("div");

            newGridItem.classList.add(
                "border", "text-center", "rounded", "m-1", "p-2"
            );
            newGridItem.style.minWidth = "50px";
            newGridItem.style.minHeight = "50px";
            newGridItem.id = "i-" + rowIndex + colIndex;

            newGridRow.appendChild(newGridItem);
        }

        gridContainer.appendChild(newGridRow);
    }
}

renderGrid();
