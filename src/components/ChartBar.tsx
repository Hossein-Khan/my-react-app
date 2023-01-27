import "./ChartBar.css";

interface ChartBarProps {
  lable: string;
  value: number;
  maxValue: number;
}
const ChartBar = function (props: ChartBarProps) {
  let barFillHeight = "0%";
  if (props.value > 0) {
    barFillHeight = (props.value / props.maxValue) * 100 + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__lable">{props.lable}</div>
    </div>
  );
};
export default ChartBar;
