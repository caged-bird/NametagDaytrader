import { createStore } from 'redux';
const indexInitialState = {
    name: "ashikasi",
    info: {
        item_name: "aaa",
        game_name: "aaa",
        sale_price: 13,
        normal_price: 13,
        img: "",
        page_link: ""
    },
};

function indexReducer(state, action){
    switch (action.type){
        case "CHANGE_NAME":
            return Object.assign({}, state, {name: action.name});
        case "CHANGE_ITEM_INFO":
            return Object.assign({}, state, {info: action.info});
        default:
            return state;
    }
}

const indexStore = createStore(indexReducer, indexInitialState);
export {indexStore};
