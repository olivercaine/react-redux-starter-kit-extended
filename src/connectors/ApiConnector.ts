async function fetchAsync (url: string) {
  const response = await fetch(url);
  return response.json();
}
