import { Column } from '@maru/ui';
import { styled } from 'styled-components';
import { color } from '@maru/design-token';
import { Text } from '@maru/ui';
import StudentItem from '../ClosedItem/StudentItem';
import TeacherItem from '../ClosedItem/TeacherItem';

const ClosedPage = () => {
  return (
    <StyledClosedPage>
      <Column>
        <Text fontType="H3" color={color.gray900} textAlign="left">
          학생
        </Text>
        <StudentItem />
        <Separator />
        <Text fontType="H3" color={color.gray900} textAlign="left">
          교사
        </Text>
        <TeacherItem />
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
  margin: 2% 0;
  width: 90%;
`;
