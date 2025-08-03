const sampleMarketData = [
  { landId: 12, priceKKUB: 10 },
  { landId: 27, priceKKUB: 15 },
  { landId: 55, priceKKUB: 8 },
];

function loadMarketplace() {
  const container = document.getElementById("marketplaceList");
  container.innerHTML = "";

  sampleMarketData.forEach(item => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.margin = "8px";
    card.style.padding = "10px";

    card.innerHTML = `
      <strong>Land ID: ${item.landId}</strong><br>
      Price: ${item.priceKKUB} KKUB<br>
      <button onclick="buyLand(${item.landId}, ${item.priceKKUB})">Buy</button>
    `;
    container.appendChild(card);
  });
}

async function buyLand(landId, priceKKUB) {
  if (!signer) {
    alert("Please connect wallet first");
    return;
  }

  try {
    const recipient = "0xa7488cE82Af54E534C16f94DBf6D9eA9C0809De8"; // Owner wallet
    const tx = await signer.sendTransaction({
      to: recipient,
      value: ethers.utils.parseEther(priceKKUB.toString()),
    });

    alert(`Transaction sent! TX Hash: ${tx.hash}`);
  } catch (err) {
    console.error("Buy failed:", err);
    alert("❌ Transaction failed.");
  }
}

// Load on section show
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("marketSection")?.addEventListener("click", loadMarketplace);
});
