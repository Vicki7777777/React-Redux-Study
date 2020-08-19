import React, {Component} from "react";
import Counter from "../Counter";


class CounterGroup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            groupSize: this.props.groupSize,
            total:this.props.total,
            number:this.props.number
        }
    }

    onChangeHandle = (event) =>{
        this.setState({
            groupSize: parseInt(event.target.value),
            total: 0
        },this.props.reset)
    }


    addNumber = () =>{
        this.props.increase()

    }
    reduceNumber = () =>{
        this.props.decrease()
    }


    render() {
        return(<div>
            <label>numbers of counters:</label>
            <input type="number" onChange={this.onChangeHandle}/>
            <label>total:{this.state.total}</label>
            {new Array(this.state.groupSize).fill(0).map((value, index) => <Counter key={index}
                                                                                    addNumber={this.addNumber}
                                                                                    reduceNumber={this.reduceNumber}
                                                                                    groupSize={this.state.groupSize}
                                                                                    number={this.state.number}/>)}
        </div>)
    }
}

export default CounterGroup;