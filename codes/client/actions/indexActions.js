// information root component receives
export function mapStateToProps(state){
    return {
        name: state.name
    };
}

// function list to trigger state change.
// or application logics such as sending data to server.
export function mapDispatchToProps(dispatch){
    return {
    changeNameTask(name){
            dispatch(changeName(name));
        },
    };
}

// operations for changing state.
function changeName(name){
    return {type: "CHANGE_NAME", name: name}
}
