import React, {Component} from "react";
import Counter from "../Counter";

class CounterGroup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            groupSize: 0,
            total:0
        }
    }

    onChangeHandle = (event) =>{
        this.setState({
            groupSize: parseInt(event.target.value),
            total: 0
        })
    }


    increase = () =>{
        this.setState({
            total: this.state.total+1
        })
    }
    decrease = () =>{
        this.setState({
            total: this.state.total-1
        })
    }




    render() {

        return(<div>
            <label>numbers of counters:</label>
            <input type="number" onChange={this.onChangeHandle}/>
            <label>total:{this.state.total}</label>
            {new Array(this.state.groupSize).fill(0).map((value, index) => <Counter key={index}
                                                                                    increase={this.increase}
                                                                                    decrease={this.decrease}
                                                                                    groupSize={this.state.groupSize}/>)}
        </div>)
    }
}

export default CounterGroup;