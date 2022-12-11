import React from 'react'

export const Display = () => {
  return (
    <div className="display">
      <div className="display-group">
        <div className="display-row">
          <div className="display-label">
            <h3 className="header">Tip Amount</h3>
            <p className="unit">/ person</p>
          </div>
          <p className="display-amount">$0.00</p>
        </div>
        <div className="display-row">
          <div className="display-label">
            <h3 className="header">Tip Amount</h3>
            <p className="unit">/ person</p>
          </div>
          <p className="display-amount">$0.00</p>
        </div>
      </div>
      <button disabled className="btn">
        Reset
      </button>
    </div>
  )
}
