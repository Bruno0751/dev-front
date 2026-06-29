import type {
  FormEventHandler,
  ReactNode,
} from "react";
import { Form, Stack } from "react-bootstrap";

export interface GFormProp {
  className?: string;
  id?: string;
  method?: "POST" | "GET";
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
}
export function GForm(props: GFormProp) {
  return (
    <Form
      id={props.id}
      onSubmit={props.onSubmit}
      className={props.className}
    >
      <Stack className="gap-form">
        {props.children}
      </Stack>
    </Form>
  );
}
