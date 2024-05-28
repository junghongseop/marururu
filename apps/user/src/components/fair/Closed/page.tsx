import { Column } from '@maru/ui';
import { styled } from 'styled-components';
import { color } from '@maru/design-token';
import { Text } from '@maru/ui';
import StudentClosedFairList from '../FairList/StudentClosedFairList';
import TeacherClosedFairList from '../FairList/TeacherClosedFairList';

const ClosedPage = () => {
  return (
    <StyledClosedPage>
      <Column gap={10}>
        <Text fontType="H3" color={color.gray900} textAlign="left">
          학생
        </Text>
        <StudentClosedFairList fairType="STUDENT_AND_PARENT" />
        <Separator />
        <Text fontType="H3" color={color.gray900} textAlign="left">
          교사
        </Text>
        <TeacherClosedFairList fairType="TEACHER" />
      </Column>
    </StyledClosedPage>
  );
};

export default ClosedPage;

const StyledClosedPage = styled.div`
  width: 100%;
`;

const Separator = styled.p`
  border: 1px solid ${color.gray400};
  margin: 1% 0;
  width: 100%;
`;
