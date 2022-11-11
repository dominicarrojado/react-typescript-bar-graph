import React, { useMemo } from 'react';
import BarItem from './BarItem';
import './BarGraph.css';

type Props = {
  dataArray: Array<{
    value: number;
    legend: string;
  }>;
};

export default function BarGraph({ dataArray }: Props) {
  const barItems = useMemo(() => {
    let highestValue = 0;

    dataArray.forEach(({ value }) => {
      highestValue = Math.max(highestValue, value);
    });

    return dataArray.map((item) => ({
      legend: item.legend,
      barPercentage: `${Math.round((item.value / highestValue) * 100)}%`,
    }));
  }, [dataArray]);

  return (
    <div className="bar-graph">
      <div className="bars-list">
        {barItems.map((barItem, idx) => (
          <BarItem
            key={idx}
            legend={barItem.legend}
            barPercentage={barItem.barPercentage}
          />
        ))}
      </div>
      <div className="bars-line" />
    </div>
  );
}
