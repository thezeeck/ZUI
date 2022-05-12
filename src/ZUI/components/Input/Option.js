import { ItemInputUI } from "./style";

export const Option = ({ label, value }) => {
  const handleKey = event => {
    console.log(event);
  };
  return (
    <ItemInputUI value={value} tabIndex="0" onKeyDown={handleKey} onKeyUp={handleKey}>{label}</ItemInputUI>
  )
};
