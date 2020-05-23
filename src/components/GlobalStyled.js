import { Global, css } from '@emotion/core';
import React from 'react';

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      * {
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
      }
      html {
        height: 100%;
      }
      body {
        font-family: Helvetica, 'sans-serif';
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: white;
      }
      header {
        width: 100%;
      }
      h1, h2, h3, h4 {
        line-height: 32px;
        padding-bottom: 4px;
      }
      a, a:link, a:visited {
        color: blue;
      } 
      p {
        margin: 20px;
      }
    `}
  />
)
