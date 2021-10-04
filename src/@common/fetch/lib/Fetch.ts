import { fetch, Request } from 'cross-fetch';
import { merge } from 'merge-anything';

// Based on https://www.carlrippon.com/fetch-with-async-await-and-typescript/

async function http<T>(request: RequestInfo): Promise<IHttpResponse<T>> {
    const response: IHttpResponse<T> = await fetch(request);
    try { // May error if there's no body
        response.parsedBody = await response.json();
    } catch (ex) {
        throw new Error('No body in response');
    }
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}

export interface IHttpResponse<T> extends Response { parsedBody?: T; }

// CRUD
export async function get<T>(
    path: string,
    argsDefault: RequestInit = { method: 'get' },
    argsExtra?: object,
): Promise<IHttpResponse<T>> {
    if (argsExtra !== undefined) { argsDefault = merge(argsDefault, argsExtra); }
    return http<T>(new Request(path, argsDefault));
}

export async function post<T>(
    path: string,
    body: any,
    argsDefault: RequestInit = { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) },
    argsExtra?: object,
): Promise<IHttpResponse<T>> {
    if (argsExtra !== undefined) { argsDefault = merge(argsDefault, argsExtra); }
    return http<T>(new Request(path, argsDefault));
}

export async function put<T>(
    path: string,
    body: any,
    argsDefault: RequestInit = { method: 'put', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) },
    argsExtra?: object,
): Promise<IHttpResponse<T>> {
    if (argsExtra !== undefined) { argsDefault = merge(argsDefault, argsExtra); }
    return http<T>(new Request(path, argsDefault));
}

export async function del<T>(
    path: string,
    body: any,
    argsDefault: RequestInit = { method: 'delete', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) },
    argsExtra?: object,
): Promise<IHttpResponse<T>> {
    if (argsExtra !== undefined) { argsDefault = merge(argsDefault, argsExtra); }
    return http<T>(new Request(path, argsDefault));
}
