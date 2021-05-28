import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS, WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <MobileOnly>
            <Breadcrumbs>
              <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
              <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
              <Breadcrumbs.Crumb href="/sale/shoes">
                Shoes
              </Breadcrumbs.Crumb>
            </Breadcrumbs>
          </MobileOnly>
        <Header>
          <Title>Running</Title>
          <TabletAndUpOnly>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </TabletAndUpOnly>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <DesktopOnly>
        <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
      </DesktopOnly>
      </Wrapper>
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

const TabletAndUpOnly = styled.div`
  @media ${BREAKPOINTS.mobileAndDown}{
    display: none;
  }
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
