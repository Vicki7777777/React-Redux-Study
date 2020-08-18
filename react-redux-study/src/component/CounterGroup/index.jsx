import React, {Component} from "react";
import Counter from "../Counter";


class CounterGroup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            groupSize: this.props.groupSize,
            total:0,
            number:this.props.number
        }
    }

    onChangeHandle = (event) =>{
        this.setState({
            groupSize: parseInt(event.target.value),
            total: 0
        },this.props.reset)
    }


    increase = () =>{
        this.setState({
            total: this.state.total+1
        },this.props.increase)

    }
    decrease = () =>{
        this.setState({
            total: this.state.total-1
        },this.props.decrease)

    }


    render() {
        return(<div>
            <label>numbers of counters:</label>
            <input type="number" onChange={this.onChangeHandle}/>
            <label>total:{this.state.total}</label>
            {new Array(this.state.groupSize).fill(0).map((value, index) => <Counter key={index}
                                                                                    increase={this.increase}
                                                                                    decrease={this.decrease}
                                                                                    groupSize={this.state.groupSize}
                                                                                    reset={this.props.resetNumber}
                                                                                    number={this.state.number}/>)}
        </div>)
    }
}

export default CounterGroup;