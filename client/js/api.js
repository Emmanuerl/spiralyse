async function fetchImages() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=12"
  );
  return await res.json();
}
