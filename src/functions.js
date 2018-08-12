export async function fetchAsync (url) {
  let data = await (await (fetch(url)
    .catch(error => {
      throw new Error(error)
    })
  ))
  return data
}
