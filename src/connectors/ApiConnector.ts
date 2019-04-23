import Urls from 'routes/Urls';

export async function getSomething(success: any) {
    fetch(`${Urls.fakeDelay}?t=5000'`)
        .then(success)
}
