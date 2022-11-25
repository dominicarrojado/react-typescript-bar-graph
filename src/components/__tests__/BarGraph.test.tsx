import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import BarGraph, { Props } from '../BarGraph';

describe('<BarGraph />', () => {
  const renderComponent = (props: Props) => render(<BarGraph {...props} />);

  it('should convert positives values to percentages', () => {
    const expectedPercentages = ['29%', '43%', '100%', '71%'];
    const dataArray = [
      {
        value: 200,
        legend: faker.lorem.sentence(),
      },
      {
        value: 300,
        legend: faker.lorem.sentence(),
      },
      {
        value: 700,
        legend: faker.lorem.sentence(),
      },
      {
        value: 500,
        legend: faker.lorem.sentence(),
      },
    ];

    renderComponent({ dataArray });

    const barPercentageItems = screen.queryAllByTestId('bar-item-main');
    const barOffsetItems = screen.queryAllByTestId('bar-item-offset');
    const barLegendItems = screen.queryAllByTestId('bar-item-legend');

    expect(barPercentageItems).toHaveLength(dataArray.length);
    expect(barOffsetItems).toHaveLength(dataArray.length);

    barPercentageItems.forEach((element, idx) => {
      expect(element).toHaveStyle({
        height: expectedPercentages[idx],
      });
      expect(barOffsetItems[idx]).toHaveStyle({ height: '0%' });
      expect(barLegendItems[idx]).toHaveTextContent(dataArray[idx].legend);
    });

    const barsLine = screen.queryByTestId('bars-line');

    expect(barsLine).toHaveStyle({ bottom: '0%' });
  });

  it('should convert positive values and one negative value to percentages', () => {
    const expectedPercentages = ['56%', '33%', '22%', '78%'];
    const expectedOffsets = ['22%', '22%', '0%', '22%'];
    const expectedBarsLine = '22%';
    const dataArray = [
      {
        value: 500,
        legend: faker.lorem.sentence(),
      },
      {
        value: 300,
        legend: faker.lorem.sentence(),
      },
      {
        value: -200,
        legend: faker.lorem.sentence(),
      },
      {
        value: 700,
        legend: faker.lorem.sentence(),
      },
    ];

    renderComponent({ dataArray });

    const barPercentageItems = screen.queryAllByTestId('bar-item-main');
    const barOffsetItems = screen.queryAllByTestId('bar-item-offset');
    const barLegendItems = screen.queryAllByTestId('bar-item-legend');

    expect(barPercentageItems).toHaveLength(dataArray.length);
    expect(barOffsetItems).toHaveLength(dataArray.length);

    barPercentageItems.forEach((element, idx) => {
      expect(element).toHaveStyle({
        height: expectedPercentages[idx],
      });
      expect(barOffsetItems[idx]).toHaveStyle({ height: expectedOffsets[idx] });
      expect(barLegendItems[idx]).toHaveTextContent(dataArray[idx].legend);
    });

    const barsLine = screen.queryByTestId('bars-line');

    expect(barsLine).toHaveStyle({ bottom: expectedBarsLine });
  });

  it('should convert negatives values to percentages', () => {
    const expectedPercentages = ['21%', '43%', '100%', '71%'];
    const expectedOffsets = ['79%', '57%', '0%', '29%'];
    const expectedBarsLine = '100%';
    const dataArray = [
      {
        value: -150,
        legend: faker.lorem.sentence(),
      },
      {
        value: -300,
        legend: faker.lorem.sentence(),
      },
      {
        value: -700,
        legend: faker.lorem.sentence(),
      },
      {
        value: -500,
        legend: faker.lorem.sentence(),
      },
    ];

    renderComponent({ dataArray });

    const barPercentageItems = screen.queryAllByTestId('bar-item-main');
    const barOffsetItems = screen.queryAllByTestId('bar-item-offset');
    const barLegendItems = screen.queryAllByTestId('bar-item-legend');

    expect(barPercentageItems).toHaveLength(dataArray.length);
    expect(barOffsetItems).toHaveLength(dataArray.length);

    barPercentageItems.forEach((element, idx) => {
      expect(element).toHaveStyle({
        height: expectedPercentages[idx],
      });
      expect(barOffsetItems[idx]).toHaveStyle({ height: expectedOffsets[idx] });
      expect(barLegendItems[idx]).toHaveTextContent(dataArray[idx].legend);
    });

    const barsLine = screen.queryByTestId('bars-line');

    expect(barsLine).toHaveStyle({ bottom: expectedBarsLine });
  });
});
