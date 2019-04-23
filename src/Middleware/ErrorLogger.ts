import { Middleware } from 'redux';

export const errorLoggerMiddleware: Middleware = (store) => (next) => (action) => {

    if ((/[A-Z]*_ERROR/i).test(action.type)) {
        // tslint:disable-next-line
        console.log(`Error with event name ${action.type} occurred`)
        // TODO: Log in Google Analytics
        // ga('send', {
        //     hitType: 'event',
        //     eventCategory: 'UserAction',
        //     eventAction: action.type,
        // })
    }

    return next(action);
}
