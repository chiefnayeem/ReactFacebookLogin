import { Dispatcher } from "../Dispatcher/Dispatcher";

const Namespace = 'APP/AUTH/USER';

function USE(actionName) {
    return Namespace + actionName;
}

const actionTypes = {
    SET_AUTH: USE("SET_AUTH"),
};

export function SetAuthUser(loggedIn, userId, name, email, picture) {
    Dispatcher.dispatch({
        type: actionTypes.SET_AUTH,
        payload: {loggedIn, userId, name, email, picture}
    });
}

export {actionTypes};