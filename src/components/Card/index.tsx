import React from 'react';
import { StyledCard } from './CardStyle';

interface Props {
  name: string;
  image: string;
}

const Card: React.FC<Props> = (rick) => {
  return (
    <StyledCard>
        <h3>Hello from Card</h3>
        <div className="image-container">
            <img src={rick.image} alt="" />
        </div>
        <div className="details">
            <h1>{rick.name}</h1>
        </div>
    </StyledCard>
  );
};

export default Card;