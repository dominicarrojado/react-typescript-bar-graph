import React from 'react';
import './BarItem.css';

type Props = {
  legend: string;
};

export default function BarItem(props: Props) {
  return (
    <div className="bar-item">
      <div className="bar-item-legend">{props.legend}</div>
    </div>
  );
}
