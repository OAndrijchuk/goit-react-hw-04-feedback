import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
`;
export const Item = styled.p`
  color: ${props =>
    props.$color ||
    `rgb(${100 - props.$feedback}%,${props.$feedback / 2}%, 0%)`};
`;
