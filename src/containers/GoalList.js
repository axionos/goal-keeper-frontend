import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class GoalList extends React.Component {
  state = {
    user: "",
    startDate: new Date(),
    endDate: new Date()
  }

  componentDidMount(){
    if (!localStorage.getItem('token')){
      this.props.router.history.push('/login')
    }
  }

  handleClickAdd = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  handleClickShow = () => {
    console.log('show')
  }

  // UPDATE START DATE
  handleChangeStartDate = date => {
    this.setState({
      startDate: date
    })
  }

  // UPDATE END DATE TO THE STATE
  handleChangeEndDate = date => {
    this.setState({
      endDate: date
    })
  }

  render(){
    console.log('goal list props', this.props);
    console.log('goal list state', this.state);

    return (
      <div className="goal-list">
        <h1>Hello, {this.props.user.username}</h1>
        <button onClick={this.handleClickShow}>+</button>

        <div className="form-container">
          <form onSubmit={this.handleClickAdd}>
            <input type="text" name="title" placeholder="Goal Title"/>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChangeStartDate} />
            <DatePicker
              selected={this.state.endDate}
              onChange={this.handleChangeEndDate} />
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default GoalList;
