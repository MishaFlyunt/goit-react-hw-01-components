import data from './data';
import { StatisticsItems } from './StatisticsItems';

export const Statistics = () => {
  return (
    <section>
      <h2>Upload stats</h2>
      <StatisticsItems data={data} />
    </section>
  );
};
