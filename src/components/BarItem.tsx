import React from 'react';
import cn from 'classnames';
import './BarItem.css';

type Props = {
  legend: string;
  isNegative: boolean;
  barPercentage: string;
  risePercentage: string;
};

export default function BarItem(props: Props) {
  return (
    <div className={cn('bar-item', { 'is-negative': props.isNegative })}>
      <div className="bar-item-main" style={{ height: props.barPercentage }} />
      <div
        className="bar-item-offset"
        style={{ height: props.risePercentage }}
      />
      <div className="bar-item-legend">{props.legend}</div>
    </div>
  );
}
