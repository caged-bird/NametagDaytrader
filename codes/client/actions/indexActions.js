// information root component receives
export function mapStateToProps(state){
    return {
        info: state.info
    };
}

// function list to trigger state change.
// or application logics such as sending data to server.
export function mapDispatchToProps(dispatch){
    return {
        changeItemInfoTask(info){
            dispatch(changeItemInfo(info));
        },
    };
}

// operations for changing state.
function changeItemInfo(info){
    return {type: "CHANGE_ITEM_INFO", info: info}
}
