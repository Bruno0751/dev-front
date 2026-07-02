import { GTable } from "../components/GTable";
import useListarVideos from "./hook/useListarVideos";

export default function ListarVideos() {
  const hook = useListarVideos();

  return (
    <GTable column={3} data={hook.list} />
    
  );
}
