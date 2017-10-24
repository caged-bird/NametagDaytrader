// information root component receives
export function mapStateToProps(state){
    return {
        name: state.name,
        info: state.info
    };
}

// function list to trigger state change.
// or application logics such as sending data to server.
export function mapDispatchToProps(dispatch){
    return {
        changeNameTask(name){
            dispatch(changeName(name));
        },
        changeItemInfoTask(info){
            dispatch(changeItemInfo(info));
        },
    };
}

// operations for changing state.
function changeName(name){
    return {type: "CHANGE_NAME", name: name}
}
function changeItemInfo(info){
    return {type: "CHANGE_ITEM_INFO", info: info}
}
