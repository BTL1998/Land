const WEB3STORAGE_TOKEN = 'ใส่โทเคน Web3.Storage ที่นี่';

async function uploadModel() {
  const fileInput = document.getElementById('modelFile');
  const file = fileInput.files[0];
  if (!file) {
    alert("กรุณาเลือกไฟล์ก่อนอัปโหลด");
    return;
  }

  document.getElementById('uploadStatus').innerText = "⏳ Uploading to IPFS...";

  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch("https://api.web3.storage/upload", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${WEB3STORAGE_TOKEN}`,
    },
    body: file
  });

  const data = await res.json();
  if (res.ok && data.cid) {
    const url = `https://${data.cid}.ipfs.w3s.link/${file.name}`;
    document.getElementById('uploadStatus').innerHTML = `✅ Upload Complete: <a href="${url}" target="_blank">${url}</a>`;
    console.log("IPFS URL:", url);
  } else {
    document.getElementById('uploadStatus').innerText = "❌ Upload Failed";
  }
}
