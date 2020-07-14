import React from 'react'
import styled from "@emotion/styled";

const FooterStyle = styled.footer`
  background-color: #FFF;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  height: 98px;
  line-height: 98px;
  position: fixed;  
  bottom: 0px;
  width: 100%;
`

const LI = styled.li`
  float: left;
  padding: 0px 8px;

  & > a {
    text-decoration: none;
    color: #000;
  }
`

const Footer = () => {
  return (
    <FooterStyle>
      <div>&copy; 2020</div>
      <div>
        <ul>
          <LI>Rules</LI>
          <LI>
            <a
              href='//github.com/iJKTen/'
              target='_blank'
              rel='noopener noreferrer'
            >GitHub
            </a>
          </LI>
          <LI>Privacy Policy</LI>
        </ul>
      </div>
    </FooterStyle>
  )
}

export default Footer;
