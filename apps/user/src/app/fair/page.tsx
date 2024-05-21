'use client';

import { AppLayout } from '@/layouts';
import { styled } from 'styled-components';
import { Column, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import { flex } from '@maru/utils';
import { FairHeader } from '@/components/fair/index';

const FairPage = () => {
  return (
    <AppLayout header footer>
      <StyledFairPage>
        <Column>
          <Text fontType="H1" color={color.gray900} textAlign="left">
            2024학년도 부산소프트웨어마이스터고등학교
            <br /> 입학전형 설명회 참가 신청
          </Text>
          <FairHeader />
        </Column>
      </StyledFairPage>
    </AppLayout>
  );
};

export default FairPage;

const StyledFairPage = styled.div`
  position: relative;
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 82px 204px 240px;
`;
