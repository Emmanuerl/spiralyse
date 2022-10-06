$(document).ready(() => {
  $.get("/api/v1/photos", (data, status) => {
    if (status === "success") {
      setImages(data.urls);
    } else {
      alert("error loading images, please try again later");
    }
  });
});

function setImages(urls) {
  let html = "";
  for (const url of urls) {
    html += `
    <div class="item selfie col-md-4 col-12">
      <img class="img-fluid img-responsive" src="${url}" alt="" height="10px">
    </div>`;
  }
  $("#gallery-container").html(html);
}
