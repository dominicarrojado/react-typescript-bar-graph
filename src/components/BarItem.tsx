import React from 'react';
import cn from 'classnames';
import './BarItem.css';

export type Props = {
  legend: string;
  isNegative: boolean;
  barPercentage: string;
  risePercentage: string;
};

export default function BarItem(props: Props) {
  return (
    <div
      className={cn('bar-item', { 'is-negative': props.isNegative })}
      data-testid="bar-item"
    >
      <div
        className="bar-item-main"
        style={{ height: props.barPercentage }}
        data-testid="bar-item-main"
      />
      <div
        className="bar-item-offset"
        data-testid="bar-item-offset"
        style={{ height: props.risePercentage }}
      />
      <div className="bar-item-legend" data-testid="bar-item-legend">
        {props.legend}
      </div>
    </div>
  );
}
