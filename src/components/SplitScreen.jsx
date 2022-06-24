export const SplitScreen = ({ children, leftWeight, rightWeight }) => {
  const [left, right] = children
  return (
    <div className="split" style={{ display: "flex" }}>
      <div style={{flex: leftWeight}} >
      {left}
      </div>
      <div style={{flex: rightWeight}} >
      {right}
      </div>
    </div>
  );
};
