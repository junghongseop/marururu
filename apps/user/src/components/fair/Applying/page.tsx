import { Column } from '@maru/ui';
import { styled } from 'styled-components';
import { color } from '@maru/design-token';
import { Text } from '@maru/ui';
import ApplyingFairList from '../FairList/ApplyingFairList';

const ApplyingPage = () => {
  return (
    <StyledApplyingPage>
      <Column gap={10}>
        <Text fontType="H3" color={color.gray900} textAlign="left">
          학생
        </Text>
        <ApplyingFairList fairType="STUDENT_AND_PARENT" />
        <Separator />
        <Text fontType="H3" color={color.gray900} textAlign="left">
          교사
        </Text>
        <ApplyingFairList fairType="TEACHER" />
      </Column>
    </StyledApplyingPage>
  );
};

export default ApplyingPage;

const StyledApplyingPage = styled.div`
  width: 100%;
`;

const Separator = styled.p`
  border: 1px solid ${color.gray400};
  margin: 1% 0;
  width: 800px;
`;
