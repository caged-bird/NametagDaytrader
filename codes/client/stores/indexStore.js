import { createStore } from 'redux';
const indexInitialState = {
    info: {
        item_name: "aaa",
        game_name: "aaa",
        sale_price: 13,
        normal_price: 13,
        img: "",
        page_link: ""
    },
    nametag_loading: false,
};

function indexReducer(state, action){
    switch (action.type){
        case "CHANGE_ITEM_INFO":
            return Object.assign({}, state, {info: action.info});
        case "CHANGE_NAMETAG_LOADING":
            return Object.assign({}, state, {nametag_loading: action.display});
        default:
            return state;
    }
}

const indexStore = createStore(indexReducer, indexInitialState);
export {indexStore};
