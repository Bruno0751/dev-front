import { GTable } from "../components/GTable";
import useListarVideos from "./hook/useListarVideos";

export default function ListarVideos() {
  const hook = useListarVideos();

  return (
    <GTable column={3} data={hook.list}>
      {/* <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 3 }).map(
            (_, index) => (
              <th key={index}>Table heading</th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 3 }).map(
            (_, index) => (
              <td key={index}>
                Table cell {index}
              </td>
            )
          )}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 3 }).map(
            (_, index) => (
              <td key={index}>
                Table cell {index}
              </td>
            )
          )}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 3 }).map(
            (_, index) => (
              <td key={index}>
                Table cell {index}
              </td>
            )
          )}
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>#</th>
          {Array.from({ length: 3 }).map(
            (_, index) => (
              <th key={index}>Table heading</th>
            )
          )}
        </tr>
      </tfoot> */}
    </GTable>
  );
}
