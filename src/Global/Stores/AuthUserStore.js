import { EventEmitter } from 'events';
import { actionTypes } from '../Actions/AuthUserActions';
import { Dispatcher } from '../Dispatcher/Dispatcher';

const CHANGE = "CHANGE";
let State = {
    loggedIn: false,
    userId: '',
    name: '',
    email: '',
    picture: '',
};

class AuthUserStore extends EventEmitter {
    

    addChangeListener(callback) {
        this.on(CHANGE, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE, callback);
    }

    emitChange() {
        this.emit(CHANGE);
    }

    getAuthUser() {
        return State;
    }
}

const _AuthUserStore = new AuthUserStore();

Dispatcher.register(function(action) {
    switch(action.type) {
        case actionTypes.SET_AUTH : 
            State = {
                ...State,
                ...action.payload,
            };

            _AuthUserStore.emitChange();
            break;
            
        default: ;
    }
});

export {_AuthUserStore as AuthUserStore};