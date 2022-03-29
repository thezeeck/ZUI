import { ExampleCode } from "../ExampleCode";
export const Colors = ({title, constName, id}) => (
  <>
  <h3 id={id}>{title}</h3>
      <ExampleCode  lang='javascript' noCopy>
      {`const ${constName} =
  | 'text'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';
`}</ExampleCode>
  </>
);