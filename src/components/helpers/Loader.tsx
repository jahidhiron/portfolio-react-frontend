import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="loaderWrapper">
      <div
        className="spinner-border"
        role="status"
        style={{ color: '#A537DC', margin: '0 auto' } as React.CSSProperties}
      >
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
};

export default Loader;
