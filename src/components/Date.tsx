interface Props {
  amount: number;
  label: string;
}

export const Date = (props: Props) => {
  const amount = props.amount || '--';
  const label = props.label;

  return (
    <p>
      <span>{amount}</span>
      {label}
    </p>
  );
};
