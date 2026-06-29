import { Nav, Card } from "react-bootstrap";
import useGNav from "./hook/useGNav";
import { INICIO, CADASTRAR } from "../../routes/constants";

export default function NavBar() {
  const hook = useGNav();
  return (
      <nav className="container-fluid">
        <Card>
          <Card.Header>
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link href={CADASTRAR}>{hook.t("cadastrar")}</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
        </Card>
      </nav>
  );
}