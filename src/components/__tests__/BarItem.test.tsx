import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import BarItem, { Props } from '../BarItem';

describe('<BarItem />', () => {
  const renderComponent = (props: Props) => render(<BarItem {...props} />);

  it('should render a bar with positive values', () => {
    const legend = faker.lorem.sentence();
    const barPercent = faker.datatype.number({ min: 0, max: 100 });
    const barPercentage = `${barPercent}%`;
    const risePercent = faker.datatype.number({ min: 0, max: barPercent });
    const risePercentage = `${risePercent}%`;

    renderComponent({
      legend,
      barPercentage,
      risePercentage,
      isNegative: false,
    });

    const barItemEl = screen.queryByTestId('bar-item');
    const barMainEl = screen.queryByTestId('bar-item-main');
    const barOffsetEl = screen.queryByTestId('bar-item-offset');
    const barLegendEl = screen.queryByTestId('bar-item-legend');

    expect(barItemEl).not.toHaveClass('is-negative');
    expect(barMainEl).toHaveStyle({ height: barPercentage });
    expect(barOffsetEl).toHaveStyle({ height: risePercentage });
    expect(barLegendEl).toHaveTextContent(legend);
  });

  it('should render a bar with negative values', () => {
    const legend = faker.lorem.sentence();
    const barPercent = faker.datatype.number({ min: 0, max: 100 });
    const barPercentage = `${barPercent}%`;
    const risePercent = faker.datatype.number({ min: 0, max: barPercent });
    const risePercentage = `${risePercent}%`;

    renderComponent({
      legend,
      barPercentage,
      risePercentage,
      isNegative: true,
    });

    const barItemEl = screen.queryByTestId('bar-item');
    const barMainEl = screen.queryByTestId('bar-item-main');
    const barOffsetEl = screen.queryByTestId('bar-item-offset');
    const barLegendEl = screen.queryByTestId('bar-item-legend');

    expect(barItemEl).toHaveClass('is-negative');
    expect(barMainEl).toHaveStyle({ height: barPercentage });
    expect(barOffsetEl).toHaveStyle({ height: risePercentage });
    expect(barLegendEl).toHaveTextContent(legend);
  });
});
