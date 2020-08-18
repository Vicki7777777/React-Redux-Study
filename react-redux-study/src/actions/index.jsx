export const changeGroupSize = (groupSize) => {
    return{
        type: 'CHANGE_SIZE',
        groupSize:groupSize
    }
}

export const increase = () => {
    return{
        type:'INCREASE'
    }
}

export const decrease = () => {
    return{
        type:'DECREASE'
    }
}

export const resetNumber = () => {
    return{
        type:'RESET',
        total:0
    }
}