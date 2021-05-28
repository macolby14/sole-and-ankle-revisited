import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS, COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from "../Icon";
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';


const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopOnly>
          <Nav>
              <NavLink href="/sale">Sale</NavLink>
              <NavLink href="/new">New&nbsp;Releases</NavLink>
              <NavLink href="/men">Men</NavLink>
              <NavLink href="/women">Women</NavLink>
              <NavLink href="/kids">Kids</NavLink>
              <NavLink href="/collections">Collections</NavLink>
          </Nav>
        </DesktopOnly>
        <MobileOnly>
          <Nav>
            <Icon id="shopping-bag" />
            <Icon id="search" />
            <button onClick={()=>setShowMobileMenu(true)}><Icon id="menu" /></button>
          </Nav>
        </MobileOnly>
         <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};


const DesktopOnly = styled.div`
  @media ${BREAKPOINTS.tabletAndDown}{
    display: none;
  }
`;

const MobileOnly = styled.div`
  display: none;

  @media ${BREAKPOINTS.tabletAndDown}{
    display: revert;
  }
`;

const MainHeader = styled.div`
  --padding-sides: 32px;
  display: flex;
  align-items: baseline;
  padding: 18px var(--padding-sides);
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${BREAKPOINTS.tabletAndDown}{
    --padding-sides: 16px;
    justify-content: space-between;
  }

`;

const Nav = styled.nav`
  display: flex;
  --gap-desktop: clamp( 1rem, 7.8vw - 3.25rem, 3rem);
  gap: var(--gap-desktop);
  margin: 0px var(--gap-desktop);

  
  @media ${BREAKPOINTS.tabletAndDown}{
    --gap-desktop: 32px;
    justify-content: row-reverse;
    margin: 0;
  }

  @media ${BREAKPOINTS.mobileAndDown}{
    --gap-desktop: 24px;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${BREAKPOINTS.tabletAndDown}{
    :last-of-type{
      flex-grow: 0;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
