import './index.css';

const ToggleSwitch = (props) => {

  return (
    <div className="app light">
    <label className="switch">
        <input id="toggleSwitch" type="checkbox" />
        <span className="slider round"></span>
    </label>
    </div>
  )
}

export default ToggleSwitch