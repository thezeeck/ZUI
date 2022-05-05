import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useThemeContext } from "../Theme";
import { DropDownMenuUI, MenuWrapper } from "./styles";

const DropDownMenu = ({children, callback, position, close}) => {
  const { theme } = useThemeContext();
  console.log(position);
  return (
    <DropDownMenuUI theme={theme} onClick={() => close(false)}>
      <MenuWrapper position={position}>{children}</MenuWrapper>
    </DropDownMenuUI>
  )
}

export const DropDownMenuPortal = props => {
  const element = document.createElement("div");

  useEffect(() => {
    const body = document.querySelector("body");
    body.appendChild(element);

    return () => {
      body.removeChild(element);
      console.log("remove");
    }
  }, [props.status]);

  return ReactDOM.createPortal(
    <DropDownMenu {...props} />,
    element
  );
}