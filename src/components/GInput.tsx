import { Container } from "react-bootstrap";

export interface GInputProps {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  id?: string;
  required?: boolean;
  className?: string;
}
export default function GInput(
  props: GInputProps
) {
  return (
    <Container>
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        required={props.required}
        className={props.className}
      />
    </Container>
  );
}
