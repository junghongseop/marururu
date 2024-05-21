import { Row, UnderlineButton } from '@maru/ui';
import { styled } from 'styled-components';
import { useState } from 'react';
import ClosedPage from '../Closed/page';
import ApplyingPage from '../Applying/page';

const NAVIGATION_LIST = [
  {
    name: '진행 중인 신청',
  },
  {
    name: '마감된 신청',
  },
] as const;

const FairHeader = () => {
  const [selectedTab, setSelectedTab] = useState('진행 중인 신청');

  const handleTabClick = (name: string) => {
    setSelectedTab(name);
  };

  const renderContent = () => {
    if (selectedTab === '진행 중인 신청') {
      return <ApplyingPage />;
    } else if (selectedTab === '마감된 신청') {
      return <ClosedPage />;
    }
  };

  return (
    <div>
      <StyledHeader>
        <Row>
          {NAVIGATION_LIST.map((navItem, index) => (
            <UnderlineButton
              key={`navigation ${index}`}
              active={navItem.name === selectedTab}
              onClick={() => handleTabClick(navItem.name)}
            >
              {navItem.name}
            </UnderlineButton>
          ))}
        </Row>
      </StyledHeader>
      {renderContent()}
    </div>
  );
};

export default FairHeader;

const StyledHeader = styled.div`
  margin: 2% 0;
  width: 100%;
`;
