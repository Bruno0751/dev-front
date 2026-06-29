import { GButton } from "../components/GButton";
import { GForm } from "../components/GForm";
import useCadastraVideo from "./hook/useCadastraVideo";
import { Form } from "react-bootstrap";

export default function CadfastrarVideos() {
  const hook = useCadastraVideo();

  return (
    <GForm onSubmit={hook.formik.handleSubmit}>
      <Form.Group
        className="mb-3"
        controlId="nome"
      >
        <Form.Label>
          {hook.t("labelNome")}
        </Form.Label>
        <Form.Control
          type="text"
          placeholder={hook.t("labelNome")}
        />

        <GButton type="submit" variant="primary">
          Enviar
        </GButton>
      </Form.Group>
    </GForm>
  );
}
