import type { ReactNode } from "react";
import { Container, Form } from "react-bootstrap";

export interface GFormProp {
  children: ReactNode;
}
export function GForm(props: GFormProp) {
  return (
    <Container>
      <Form>{props.children}</Form>
    </Container>
  );
}
