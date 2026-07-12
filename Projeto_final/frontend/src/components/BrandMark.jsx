const BrandMark = ({ compact = false }) => {
  return (
    <div className={compact ? "brand-mark brand-mark-compact" : "brand-mark"}>
      <div className="brand-symbol">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <strong className="brand-name">Kitchen Lab</strong>
        <small className="brand-tagline">Experimente. Descubra. Vicie-se.</small>
      </div>
    </div>
  );
};

export default BrandMark;
