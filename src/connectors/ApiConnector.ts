import Urls from 'routes/Urls';

async function fetchAsync(url) {
    const response = await fetch(url);
    return response.json();
}

export async function getIncrement(): Promise<{increment: number}> {
    return await fetchAsync(`${Urls.fakeDelay}?t=2000'`);
}
