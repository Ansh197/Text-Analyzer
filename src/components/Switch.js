import "./Switch.css";
export default function Switch(props) {
  return (
    <div>
      <div className="form-check form-switch">
        <input
          className="form-check-input mx-3 switch lh-1"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.togglemode}
        />
        <label
        style={{color:`${props.mode==='Dark'?'black':'white'}`}}
          className="form-check-label mx-4"
          htmlFor="flexSwitchCheckDefault"
          id="switch-text"
        >
          {props.mode==='Dark'?'Enable':'Disable'} Dark mode
        </label>
      </div>
    </div>
  );
}
