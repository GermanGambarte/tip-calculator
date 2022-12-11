import dolarIcon from '../assets/icon-dollar.svg'
import personIcon from '../assets/icon-person.svg'
export const Form = () => {
  return (
    <form className="form">
      <div className="label-group">
        <label className="label" htmlFor="bill">
          Bill
        </label>
        <div className="input-wrapper">
          <input className="number-input" id="bill" name="bill" type="text" />
          <img aria-hidden="true" className="icon" src={dolarIcon} />
        </div>
      </div>
      <div className="tip-section">
        <p className="label">Selected Tip %</p>
        <div className="tip-amount-wrapper">
          <div className="tip-amount">
            <input id="tip" name="tip" type="radio" value=".05" />
            <button className="tip-btn">5%</button>
          </div>
          <div className="tip-amount">
            <input id="tip" name="tip" type="radio" value=".1" />
            <button className="tip-btn">10%</button>
          </div>
          <div className="tip-amount">
            <input id="tip" name="tip" type="radio" value=".15" />
            <button className="tip-btn">15%</button>
          </div>
          <div className="tip-amount">
            <input id="tip" name="tip" type="radio" value=".25" />
            <button className="tip-btn">25%</button>
          </div>
          <div className="tip-amount">
            <input id="tip" name="tip" type="radio" value=".50" />
            <button className="tip-btn">50%</button>
          </div>
          <input className="tip-custom" id="custom" name="custom" type="text" />
        </div>
      </div>
      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="people">
            Number of People
          </label>
          <p>Error Message</p>
        </div>
        <div className="input-wrapper">
          <input
            className="number-input"
            id="people"
            name="people"
            type="text"
          />
          <img aria-hidden="true" className="icon" src={personIcon} />
        </div>
      </div>
    </form>
  )
}
