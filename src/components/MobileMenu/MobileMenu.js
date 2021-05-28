/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <StyledOverlay>
      <StyledContent aria-label="Mobile Menu">
      <ExitStyle>
        <button onClick={onDismiss}><Icon id="close" /></button>
      </ExitStyle>
      <Side />
      <StyledNav>
        <a href="/sale">Sale</a>
        <a href="/new">New&nbsp;Releases</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/collections">Collections</a>
      </StyledNav>
      <Side>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Side>
      </StyledContent>
    </StyledOverlay>
  );
};

export default MobileMenu;


const StyledOverlay = styled(DialogOverlay)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: white;
  padding: 32px;
`;

const StyledContent = styled(DialogContent)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;

  a{
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    font-size: ${18 / 16}rem;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  gap: 14px;

  a{
    text-decoration: none;
    color: ${COLORS.gray[700]};
    font-weight: 600;
    font-size: ${14 / 16}rem;
  }
`;

const ExitStyle = styled.div`
  position: absolute;
  top: 32px;
  right: 22px;

  button{
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;