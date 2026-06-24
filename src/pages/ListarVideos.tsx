import useListarVideos from "./hook/useListarVideos";
import { Card, Col, Row } from "react-bootstrap";

export default function ListarVideos() {
  const hook = useListarVideos();

  return (
    <Card>
      <Card.Header>
        <Card.Title>
          {hook.t("labelNome")}
        </Card.Title>
      </Card.Header>
      <Card.Body></Card.Body>
    </Card>
  );
}
