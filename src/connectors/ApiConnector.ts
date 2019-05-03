import Urls from '../routes/Urls';

async function fetchAsync(url) {
    const response = await fetch(url);
    return response.json();
}

export async function createRandomNumber(delay: number): Promise<{randomNumber: number}> {
    return await fetchAsync(`${Urls.randomNumber}?t=${delay}`);
}
