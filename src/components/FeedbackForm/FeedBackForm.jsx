import { Component } from 'react';

export class FeedbackForm extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    render() {
        const { good, neutral, bad } = this.props;
        return (
        <section >
            <h1>Please, leave Feedback</h1>
            <ul>
                <li>
                    <button onClick={e => console.log(e)} type="button">Good</button>
                </li>
                <li>
                    <button type="button">Neutral</button>
                </li>
                <li>
                    <button type="button">Bad</button>
                </li>
                </ul>
        </section>
    )
    }
    
}