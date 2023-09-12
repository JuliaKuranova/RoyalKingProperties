import logoMob from "../../../assets/img/logo/Logo-mob.svg";
import logoDesk from "../../../assets/img/logo/Logo-desk.svg";

import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <>
      <svg
        className="arrow-modal"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="43"
        viewBox="0 0 42 43"
        fill="none"
      >
        <path
          d="M19.25 7.79297L5.25 21.793M5.25 21.793L19.25 35.793M5.25 21.793L35 21.793"
          stroke="white"
          stroke-width="2"
        />
      </svg>

      <Link className="logo" to="/">
        <img src={logoMob} className="logoMob" alt="" />
        <img src={logoDesk} className="logoDesk" alt="" />
      </Link>
    </>
  );
}
