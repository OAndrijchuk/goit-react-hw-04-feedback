import PropTypes from 'prop-types';
import { Item, StatisticsContainer } from './Statistics.styled';


export const Statistics = (props) => { 
    const { good,
        neutral,
        bad,
        total,
        positivePercentage, } = props;
    
    return (
        <StatisticsContainer>
            <Item $color='green'>Good: {good}</Item>
            <Item $color='grey'>Neutral: {neutral}</Item>
            <Item $color='red'>Bad: {bad}</Item>
            <Item>Total: {total()}</Item>
            <Item $feedback={positivePercentage()}>Positive feedback: {positivePercentage()}%</Item>
        </StatisticsContainer>
        )

}

Statistics.propTypes = {
    good:PropTypes.number,
    neutral:PropTypes.number,
    bad:PropTypes.number,
    total:PropTypes.func,
    positivePercentage:PropTypes.func,
}