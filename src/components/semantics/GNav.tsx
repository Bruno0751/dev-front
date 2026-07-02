import { Nav } from "react-bootstrap";
import useGNav from "./hook/useGNav";
import {
  INICIO,
  CADASTRAR,
} from "../../routes/constants";
import {
  House,
  PersonPlus,
} from "react-bootstrap-icons";


export default function NavBar() {
  const hook = useGNav();
  return (
    <aside className="sidebar">
      <div className="logo">Sistema</div>

      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link href={INICIO}>
            <House className="icon" />
            Inicio
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href={CADASTRAR}>
            <PersonPlus className="icon" />
            {hook.t("cadastrar")}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </aside>
  );
}
