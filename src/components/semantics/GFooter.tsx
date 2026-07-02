import { Card } from "react-bootstrap";
import useGFooter from "./hook/useGFooter";

export default function Footer() {
  const hook = useGFooter();
  return (
    <footer className="container-fluid">
      <Card>
        <address>
          &copy; {hook.t("rodaPe")}
        </address>
      </Card>
    </footer>
  );
}
