import React from 'react';
import './BarItem.css';

type Props = {
  legend: string;
  barPercentage: string;
};

export default function BarItem(props: Props) {
  return (
    <div className="bar-item" style={{ height: props.barPercentage }}>
      <div className="bar-item-legend">{props.legend}</div>
    </div>
  );
}
