// File: /packages/my-first-theme/src/components/loading.js
import React from "react";
import { styled, keyframes } from "frontity";
import { TokenColorWhite, TokenColorBlack } from "./tokens/lib/color/all.js";


const Loading = () => <Background><Spinner /></Background>

export default Loading;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Background = styled.div`
  position: fixed;
  top: 50px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${TokenColorBlack};
  @media all and (max-width: 991px) {
    top: 40px;
  }
  @media all and (max-width: 767px) {
    top: 30px;
  }
`;

const Spinner = styled.div`
  border: 10px solid ${TokenColorWhite};
  border-top: 10px solid ${TokenColorBlack};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spin} 2s linear infinite;
`;