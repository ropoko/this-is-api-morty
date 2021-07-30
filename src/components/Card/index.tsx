import React from 'react';
import { StyledCard } from './CardStyle';

interface Props {
  name: string;
  image: string;
}

const Card: React.FC<Props> = (rick) => {
  return (
    <StyledCard>
        <header>
          <img src={rick.image} alt="" />
        </header>
        <main>
          <h3>{rick.name}</h3>
        </main>
    </StyledCard>
  );
};

export default Card;