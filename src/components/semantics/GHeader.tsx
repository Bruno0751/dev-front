import { Link } from "react-router-dom";
import ReactLogo from "../../assets/react.svg";

export default function Header() {
  return (
    <header className="container-fluid">
      <Link to="/">
        {/* <Card.Img variant="top" src={ReactLogo} /> */}
        <img src={ReactLogo} alt="logo" />
      </Link>
    </header>
  );
}
