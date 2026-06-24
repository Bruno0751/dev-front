import GInput from "../components/GInput";
import { GForm } from "../components/GForm";
import useCadastraVideo from "./hook/useCadastraVideo";
import { Form } from "react-bootstrap";

export default function CadfastrarVideos() {
  const hook = useCadastraVideo();

  return (
    <GForm>
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
      </Form.Group>

      <GInput
        type="text"
        label={hook.t("labelNome")}
        name="txtNome"
      />
    </GForm>
  );
}
