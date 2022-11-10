import React from 'react';
import BarItem from './BarItem';
import './BarGraph.css';

export default function BarGraph() {
  return (
    <div className="bar-graph">
      <div className="bars-list">
        <BarItem />
        <BarItem />
        <BarItem />
        <BarItem />
      </div>
      <div className="bars-line" />
    </div>
  );
}
