import React from 'react';
import BarItem from './BarItem';
import './BarGraph.css';

export default function BarGraph() {
  return (
    <div className="bar-graph">
      <div className="bars-list">
        <BarItem legend="Year 1" />
        <BarItem legend="Year 2" />
        <BarItem legend="Year 3" />
        <BarItem legend="Thereafter" />
      </div>
      <div className="bars-line" />
    </div>
  );
}
