import PropTypes from 'prop-types';
import { BtnContainer, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, buttons }) => {
   
    return (
        <BtnContainer>
            {Object.keys(buttons)
                .map((el, index) => <Button type="button" name={el} onClick={onLeaveFeedback} key={index}>{ucFirst(el)}</Button>)}
        </BtnContainer>
        
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    buttons: PropTypes.objectOf(PropTypes.number).isRequired,
}

 function ucFirst(str) {
            if (!str) return str;
            return str[0].toUpperCase() + str.slice(1);
        }