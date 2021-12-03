import { useEffect, useState } from "react";
import { BsList } from "react-icons/bs";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  color: ${(p) => p.theme.fg.dimmer};

  svg {
    position: relative;
    top: -3px;
  }

  svg:hover {
    border-radius: 4px;
    border: 1px solid ${(p) => p.theme.bg.higher};
  }
`;

interface IProps {
  size: "xs" | "sm" | "md" | "lg";
}

function MenuBtn({ size }: IProps) {
  const [iconSize, setIconSize] = useState("16px");
  useEffect(() => {
    switch (size) {
      case "xs":
        setIconSize("16px");
        break;
      case "sm":
        setIconSize("20px");
        break;
      case "md":
        setIconSize("24px");
        break;
      case "lg":
        setIconSize("32px");
        break;
    }
  }, [size]);
  return (
    <Container
      style={{
        width: `${iconSize}`,
        height: `${iconSize}`,
        fontSize: `${iconSize}`,
      }}
    >
      <BsList />
    </Container>
  );
}

export default MenuBtn;

//16, 20, 24, 32
//xs, sm, md, lg
