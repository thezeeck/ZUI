import { ItemInputUI } from "./style";

export const Item = ({ label, value }) => (
  <ItemInputUI value={value}>{label}</ItemInputUI>
);
