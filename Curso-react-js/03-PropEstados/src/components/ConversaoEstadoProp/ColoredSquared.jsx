export default function ColoredSquared({ color }) {
  const styles = {
    backgroundColor: color,
  };

  return (
    <>
      <div className="w-25 h-25" style={styles}></div>
    </>
  );
}
