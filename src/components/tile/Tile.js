import React from 'react';

export const Tile = ({ name, description }) => {
  const valuesArray = Object.values(description);

  return (
    <div>
      <p className="tile-title">{name}</p>
      {valuesArray.map((value, index) => (
        <p key={index} className="tile">
          {value}
        </p>
      ))}
    </div>
  );
};
