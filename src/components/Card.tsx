import "./Card.css";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const Card = function (props: CardProps) {
  const classNames = "card " + props.className;
  return <div className={classNames}>{props.children}</div>;
};

export default Card;
