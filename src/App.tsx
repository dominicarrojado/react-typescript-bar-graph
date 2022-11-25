import './App.css';
import BarGraph from './components/BarGraph';

export default function App() {
  const dataArray1 = [
    {
      value: 200,
      legend: 'Year 1',
    },
    {
      value: 300,
      legend: 'Year 2',
    },
    {
      value: 700,
      legend: 'Year 3',
    },
    {
      value: 500,
      legend: 'Thereafter',
    },
  ];
  const dataArray2 = [
    {
      value: 500,
      legend: 'Year 1',
    },
    {
      value: 300,
      legend: 'Year 2',
    },
    {
      value: -200,
      legend: 'Year 3',
    },
    {
      value: 700,
      legend: 'Thereafter',
    },
  ];
  const dataArray3 = [
    {
      value: -150,
      legend: 'Year 1',
    },
    {
      value: -300,
      legend: 'Year 2',
    },
    {
      value: -700,
      legend: 'Year 3',
    },
    {
      value: -500,
      legend: 'Thereafter',
    },
  ];

  return (
    <div className="container">
      <h1>React TypeScript Bar Graph</h1>
      <BarGraph dataArray={dataArray1} />
      <BarGraph dataArray={dataArray2} />
      <BarGraph dataArray={dataArray3} />
      <footer className="footer">
        <a href="https://dominicarrojado.com/posts/how-to-create-your-own-bar-graph-in-react-and-typescript-with-tests-part-1/">
          Learn how to build this bar graph component in React and TypeScript
        </a>
      </footer>
    </div>
  );
}
