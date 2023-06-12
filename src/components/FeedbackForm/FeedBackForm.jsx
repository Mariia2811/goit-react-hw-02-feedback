import { Component } from 'react';

export class FeedbackForm extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    render() {
        return (
        <section>
            <h1>Please, leave Feedback</h1>
            <ul>
                <li>
                    <button type="button">Good</button>
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