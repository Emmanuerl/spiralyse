const imageContainer = $("image-container");

function $(id) {
  return document.getElementById(id);
}

async function setImages() {
  const images = await fetchImages();
  let html = "";
  for (const image of images) {
    html += `<img
    src="${image.url}"
    alt="${image.title}"
    class="w-100 shadow-1-strong mb-4"
    alt="Boat on Calm Water"
  />`;
    $("image-container").innerHTML = html;
  }
}

document.addEventListener("DOMContentLoaded", setImages);
