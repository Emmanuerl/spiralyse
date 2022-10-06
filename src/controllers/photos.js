import axios from "axios";

const urls = [];

export async function list(req, res, next) {
  if (urls.length) return res.json({ urls });

  const params = {
    method: "flickr.galleries.getPhotos",
    api_key: process.env.FLICKR_API_KEY,
    gallery_id: "66911286-72157721107456014",
    format: "json",
    nojsoncallback: 1,
  };
  const { data } = await axios.get(`https://api.flickr.com/services/rest/`, {
    params,
  });
  const photos = data.photos.photo;
  for (const photo of photos) {
    urls.push(
      `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
    );
  }
  res.json({ urls });
}

export const photoController = { list };
