import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import { useThemeContext } from "../Theme";
import { DropDownMenuUI, MenuWrapper } from "./styles";

const DropDownMenu = ({ children, callback, position, close }) => {
  const { theme } = useThemeContext();
  const menuRef = useRef(null);

  useEffect(() => {
    console.log(menuRef.current.firstChild);
    setTimeout(() => menuRef.current.firstChild.focus(), 100);
  }, []);

  return (
    <DropDownMenuUI theme={theme} onClick={() => close(false)}>
      <MenuWrapper ref={menuRef} position={position}>
        {children}
      </MenuWrapper>
    </DropDownMenuUI>
  );
};

export const DropDownMenuPortal = (props) => {
  const element = document.createElement("div");

  useEffect(() => {
    const body = document.querySelector("body");
    body.appendChild(element);

    return () => {
      body.removeChild(element);
      console.log("remove");
    };
  }, [props.status, element]);

  return ReactDOM.createPortal(<DropDownMenu {...props} />, element);
};
