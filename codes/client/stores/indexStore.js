import { createStore } from 'redux';
const indexInitialState = {
    name: "ashikasi"
};

function indexReducer(state, action){
    switch (action.type){
        case "CHANGE_NAME":
            return Object.assign({}, state, {name: action.name});
        default:
            return state;
    }
}

const indexStore = createStore(indexReducer, indexInitialState);
export {indexStore};
