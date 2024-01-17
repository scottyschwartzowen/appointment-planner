import React from 'react';

import { Tile } from '../tile/Tile.js';

export const TileList = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <Tile key={index} name={item.name} description={{ ...item }} />
      ))}
    </div>
  );
};
