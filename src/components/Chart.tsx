import "./Chart.css";
import ChartBar from "./ChartBar";

interface ChartProps {
  dataPoints: { lable: string; value: number }[];
}

const Chart = function (props: ChartProps) {
  const maxValue = Math.max(
    ...props.dataPoints.map((dataPoint) => dataPoint.value)
  );
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          lable={dataPoint.lable}
          value={dataPoint.value}
          maxValue={maxValue}
        ></ChartBar>
      ))}
    </div>
  );
};
export default Chart;
