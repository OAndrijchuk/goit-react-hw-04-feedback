import PropTypes from 'prop-types';
import { Sections } from './Section.styled';

export const Section = ({ title, children }) => { 

    return (
        <Sections>
            <h1>{title}</h1>
            {children}
        </Sections>
        )

}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};