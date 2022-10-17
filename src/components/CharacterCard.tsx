import React from 'react';

type CharacterCardProps = {
  character: {
    id: string;
    name: string;
  };
};

export const CharacterCard = ({ character: { name } }: CharacterCardProps) => {
  return <div>{name}</div>;
};
