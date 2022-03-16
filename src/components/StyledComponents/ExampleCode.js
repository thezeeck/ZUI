export const ExampleCode = ({code}) => {
  const codeArray = code.split(" ");
  console.log(codeArray);
  return <div>{code}</div>
}