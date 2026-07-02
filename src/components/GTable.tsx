import {
  Container,
  Table,
} from "react-bootstrap";
import type { ReactNode } from "react";
import "./style.css";

export interface GTableProps {
  column?: number;
  className?: string;
  id?: string;
  children?: ReactNode;
  data?: any | undefined;
}
export function GTable(props: GTableProps) {
  console.log("table");
  console.log(props.data);
  return (
    <Container>
      <Table
        className={props.className}
        id={props.id}
        responsive="true"
        variant="dark"
      >
        <thead>
          <tr>
            {Array.from({
              length: props.column ?? 0,
            }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Array.from({
              length: props.column ?? 0,
            }).map((_, index) => (
              <td key={index}>jkshiu</td>
            ))}
          </tr>
        </tbody>
        <tfoot>
          <tr>
            {Array.from({
              length: props.column ?? 0,
            }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </tfoot>
        {/* {props.children} */}
      </Table>
    </Container>
  );
}
