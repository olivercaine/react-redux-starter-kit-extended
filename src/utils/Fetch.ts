export async function fetchAsync(url: string) {
  const data = await (await (fetch(url)
    .catch((error) => {
      throw new Error(error)
    })
  ))
  return data
}
