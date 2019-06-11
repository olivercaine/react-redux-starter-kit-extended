import { Middleware } from 'redux';

export const ERROR_SUFFIX = '_ERROR'

export const errorLoggerMiddleware: Middleware = (store) => (next) => (action) => {

    if ((/[A-Z]*_ERROR/i).test(action.type)) {
        // tslint:disable-next-line
        console.log(`Error ${action.type} occurred with stack "${action['payload'].stack}"`)
        // TODO: Log in Google Analytics
        // ga('send', {
        //     hitType: 'event',
        //     eventCategory: 'UserAction',
        //     eventAction: action.type,
        // })
    }
    return next(action);

}
