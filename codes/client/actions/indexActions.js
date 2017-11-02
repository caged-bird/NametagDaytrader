// information root component receives
export function mapStateToProps(state){
    return {
        info: state.info,
        nametag_loading: state.nametag_loading
    };
}

// function list to trigger state change.
// or application logics such as sending data to server.
export function mapDispatchToProps(dispatch){
    return {
        changeItemInfoTask(info){
            dispatch(changeItemInfo(info));
        },
        changeNametagLoadingTask(display){
            dispatch(changeNametagLoading(display));
        },
    };
}

// operations for changing state.
function changeItemInfo(info){
    return {type: "CHANGE_ITEM_INFO", info: info}
}
function changeNametagLoading(display){
    return {type: "CHANGE_NAMETAG_LOADING", display: display}
}
