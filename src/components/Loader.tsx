import {
  Container,
  Row,
  Spinner,
} from "react-bootstrap";

export interface LoaderProps {
  vh?: number;
}

const Loader = (props: LoaderProps) => (
  <Container
    fluid
    className={`vh-${props.vh == null ? 50 : props.vh} d-flex`}
  >
    <Row className="justify-content-center align-self-center w-100 text-center">
      <Spinner
        animation="border"
        variant="primary"
      />
    </Row>
  </Container>
);

export default Loader;
