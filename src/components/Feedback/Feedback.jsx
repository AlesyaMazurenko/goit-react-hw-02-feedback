import React from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from '../Section/Section';
import Notification from 'components/Notification/Notification';

import './Feedback.css';

class Feedback extends React.Component {
    static defaultProps = {
        initialValue: 0,
    };

    static propTypes = {
        //
    };
// обьявляем начальное сост
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    // handleGood = () => {
    //     console.log('click on Good');
    //    // this.setState({ good: 10, }); - используем если просто назнасть новое знасение
    //      // обновляем от предыдущего состояния
    //     this.setState(prevState => {
    //         return {
    //             good: prevState.good + 1,
    //         };
    //     });   
        // event доступен в синхронном коде, и сразу очищается, сохранякм в переменную
        // const target = event;
    // };
 
    onLeaveFeedback = (key) => {
        this.setState(prevState => {
            return {
                [key]: prevState[key] + 1,
            };
        });
    }
    countTotalFeedback () {
       // const { good, neutral, bad } = this.state;
      //  return good + neutral + bad;
        return Object.values(this.state).reduce((total, item) => total + item, 0);
    };

    countPositiveFeedbackPercentage() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        if (total === 0) {
            return 0;
        }       
        const calc = Math.round((good / total * 100))
        return calc;
    }

    render() {
      
        const total = this.countTotalFeedback();
        const countPositivePercentage = this.countPositiveFeedbackPercentage();
       // const onLeaveFeedback = [this.handleGood, this.handleNeutral, this.handleBad]
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={this.state}
                        onLeaveFeedback={this.onLeaveFeedback}
                        // onGood={this.handleGood} onNeutral={this.handleNeutral} onBad={this.handleBad}
                    />
                </Section>

                <Section title="Statistics">   
                    {total === 0 ? (
                        <Notification message={"There is no feedback"} />
                    ) : (
                        < Statistics good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    totalV={total}
                    positivePercentage={countPositivePercentage} 
                    /> )   }
                    
                </Section>    
        </div>        
        );
    }
}

export default Feedback;