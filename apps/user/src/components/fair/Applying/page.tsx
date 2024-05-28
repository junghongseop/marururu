import { Column } from '@maru/ui';
import { styled } from 'styled-components';
import { color } from '@maru/design-token';
import { Text } from '@maru/ui';
import StudentApplyingFairList from '../FairList/StudentApplyingFairList';
import TeacherApplyingFairList from '../FairList/TeacherApplyingFairList';

const ApplyingPage = () => {
  return (
    <StyledApplyingPage>
      <Column gap={10}>
        <Text fontType="H3" color={color.gray900} textAlign="left">
          학생
        </Text>
        <StudentApplyingFairList fairType="STUDENT_AND_PARENT" />
        <Separator />
        <Text fontType="H3" color={color.gray900} textAlign="left">
          교사
        </Text>
        <TeacherApplyingFairList fairType="TEACHER" />
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
  width: 100%;
`;
