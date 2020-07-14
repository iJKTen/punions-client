import React from 'react';
import styled from "@emotion/styled";

const HeaderStyle = styled.header`
  padding-top: 20px;
  & > h1 {
    text-align: center;
  }
`

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Punions</h1>
    </HeaderStyle>
  )
}

export default Header;
