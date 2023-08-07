import { Component } from "react"
import { Section } from "./Section/Section"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Statistics } from "./Statistics/Statistics"
import { Notification } from "./Notification/Notification"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  onLeaveFeedback = ({ target }) => {
    this.setState((preState) => ({[target.name]:preState[target.name]+1}))
  }
  countTotalFeedback = () => {
    const {good, neutral, bad,}=this.state
    return good + neutral + bad
  }
  countPositiveFeedbackPercentage = () => {
    const rez = Math.round(100 / this.countTotalFeedback() * this.state.good)
    if (Number.isNaN(rez)) {
      return 0;
    }
    return rez;
}

  render() {
    return <>
      <Section title='Please leave feedback'>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} buttons={this.state} />
      </Section>
      <Section title='Statistics' >
       { this.countTotalFeedback()
            ? <Statistics {...this.state} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} />
            : <Notification message="There is no feedback"></Notification>}
        
      </Section>
    </>
  }
    

}
