type ResultCountProps = {
  totalNumberOfResults: number;
};
export default function ResultsCount({
  totalNumberOfResults,
}: ResultCountProps) {
  return (
    <p className="count">
      <span className="u-bold">{totalNumberOfResults}</span> results
    </p>
  );
}
