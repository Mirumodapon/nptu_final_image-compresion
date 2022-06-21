function Block({ value }) {
  const rgb = (value) => `rgb(${value},${value},${value})`;

  return (
    <div className="block">
      <div className="tr">
        <div className="td" style={{ background: rgb(value[0]) }}></div>
        <div className="td" style={{ background: rgb(value[1]) }}></div>
      </div>
      <div className="tr">
        <div className="td" style={{ background: rgb(value[2]) }}></div>
        <div className="td" style={{ background: rgb(value[3]) }}></div>
      </div>
    </div>
  );
}

export default Block;
