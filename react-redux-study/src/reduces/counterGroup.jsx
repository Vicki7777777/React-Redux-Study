const counterGroup = (state={
    groupSize:0,
    total:0
},action) => {
    switch (action.type){
        case 'ADD_NUMBER':
            return this.state.total+1
        case 'REDUCE_NUMBER':
            return this.state.total-1
        case 'CHANGE_SIZE':
            return action.groupSize
        case 'RESET_NUMBER':
            return action.total
        default:
            return state
    }
}

export default counterGroup