import {connect} from 'react-redux'
import CounterGroup from "../../component/CounterGroup";
import {changeGroupSize, decrease, increase, resetNumber} from "../../actions";


const mapStateToProps = (state) =>({
    groupSize: state.groupSize,
    total: state.total
})

const mapDispatchToProps = (dispatch) =>({
    changeGroupSize: (groupSize) => {
        dispatch(changeGroupSize(groupSize))
    },
    increase: () => {
        dispatch(increase())
    },
    decrease: () =>{
        dispatch(decrease())
    },
    resetNumber: () =>{
        dispatch(resetNumber())
    }
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterGroup)