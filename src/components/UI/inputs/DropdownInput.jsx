import { useEffect, useRef, useState } from "react";
import MyInputDropdown from "./MyInputDropdown";

function DropdownInput(props) {
  const [isOpenA, setIsOpenA] = useState(false);
  const ref = useRef();
  const ref2 = useRef();
  useEffect(() => {
    const fun = (e) => {
      if (!isOpenA) return;
      var rect = ref.current.getBoundingClientRect();
      var rect2 = ref2.current.getBoundingClientRect();
      if (
        e.clientX > rect2.left &&
        e.clientX < rect2.right &&
        e.clientY > rect2.top &&
        e.clientY < rect2.bottom
      ) {
        return;
      }
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        setIsOpenA(false);
      }
    };
    if (isOpenA) {
      document.addEventListener("click", fun);
    } else {
      document.removeEventListener("click", fun);
    }
    return () => {
      document.removeEventListener("click", fun);
    };
  }, [isOpenA, ref]);
  const handleChangeOpen = (e) => {
    setIsOpenA((prev) => !prev);
  };
  return (
    <div className="dropdown-input" ref={ref2}>
      <div className={`dropdown-input__wrapper`} onClick={handleChangeOpen} />
      <div className="dropdown-head" onClick={handleChangeOpen}>
        <span>{props.text}</span>
        <span>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <path d="M3 6.70703L9 12.707L15 6.70703" stroke="#C2C2C2" stroke-width="2" />
          </svg> */}

          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="p-icon p-multiselect-trigger-icon p-c"
            aria-hidden="true"
            data-pc-section="triggericon"
          >
            <path
              d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </div>
      {
        <div
          className={`dropdown-input__content ${isOpenA ? "active" : ""}`}
          style={{ display: isOpenA ? "flex" : "none" }}
          ref={ref}
        >
          <MyInputDropdown
            // id='name-input'
            // label='Your name'
            placeholder={props.placeholder1}
            type="number"
            // value={name}
            // onChange={event => setName(event.target.value)}
            metric={props.metric}
          />
          {/* <span>{props.metric}</span> */}
          <MyInputDropdown
            // id='name-input'
            // label='Your name'
            placeholder={props.placeholder2}
            type="number"
            // value={name}
            // onChange={event => setName(event.target.value)}
            metric={props.metric}
          />
        </div>
      }
    </div>
  );
}

export default DropdownInput;
