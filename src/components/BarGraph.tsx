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
  const [barItems, barsLinePercentage] = useMemo(() => {
    let highestValuePositive = 0;
    let highestValueNegative = 0;

    dataArray.forEach(({ value }) => {
      if (value > 0) {
        highestValuePositive = Math.max(highestValuePositive, value);
      } else {
        highestValueNegative = Math.max(highestValueNegative, Math.abs(value));
      }
    });

    const highestValueTotal = highestValuePositive + highestValueNegative;
    const barsLinePercent = Math.round(
      (highestValueNegative / highestValueTotal) * 100
    );
    const barsLinePercentage = `${barsLinePercent}%`;
    const barItems = dataArray.map(({ legend, value }) => {
      const isNegative = value < 0;

      return {
        legend,
        isNegative,
        barPercentage: `${Math.round(
          (Math.abs(value) / highestValueTotal) * 100
        )}%`,
        risePercentage: isNegative ? '0' : barsLinePercentage,
      };
    });

    return [barItems, barsLinePercentage];
  }, [dataArray]);

  return (
    <div className="bar-graph">
      <div className="bars-list">
        {barItems.map((barItem, idx) => (
          <BarItem
            key={idx}
            legend={barItem.legend}
            isNegative={barItem.isNegative}
            barPercentage={barItem.barPercentage}
            risePercentage={barItem.risePercentage}
          />
        ))}
      </div>
      <div className="bars-line" style={{ bottom: barsLinePercentage }} />
    </div>
  );
}
