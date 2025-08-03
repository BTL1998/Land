const landGridSize = 10;

async function loadMap() {
  const mapDiv = document.getElementById("map");
  mapDiv.innerHTML = "";
  for (let y = 0; y < landGridSize; y++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    for (let x = 0; x < landGridSize; x++) {
      const landId = y * landGridSize + x;
      const cell = document.createElement("div");
      cell.textContent = landId;
      cell.style.width = "40px";
      cell.style.height = "40px";
      cell.style.border = "1px solid #ccc";
      cell.style.textAlign = "center";
      cell.style.cursor = "pointer";
      cell.onclick = () => showLandDetail(landId);
      row.appendChild(cell);
    }
    mapDiv.appendChild(row);
  }
}

function showLandDetail(landId) {
  document.getElementById("landId").innerText = landId;
  showSection("landDetailSection");
  // Later: fetch metadata/model from blockchain
}

window.onload = loadMap;
