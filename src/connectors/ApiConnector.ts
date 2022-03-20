import Urls from '../routes/Urls';

async function fetchAsync(url: string) {
  const response = await fetch(url);
  return response.json();
}

export async function createRandomNumber(delay: number): Promise<{ randomNumber: number }> {
  return fetchAsync(`${Urls.randomNumber}?t=${delay}`);
}
