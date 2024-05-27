import { color } from '@maru/design-token';
import { Column, Row, Text } from '@maru/ui';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';

const TeacherItem = () => {
  return (
    <StyledStudentApplyingBox>
      <Column gap={24}>
        <Row alignItems="center" gap={90}>
          <Text fontType="H4">9월 16일(토) 11:00</Text>
          <StyledApplyingStatus>
            <Text fontType="context" color={color.maruDefault}>
              신청 가능
            </Text>
          </StyledApplyingStatus>
        </Row>
        <Text fontType="p2" color={color.gray500}>
          장소: 본교 SRC관 1층
          <br />
          신청 기한: 2023.09.01 ~ 2023.09.13
        </Text>
      </Column>
    </StyledStudentApplyingBox>
  );
};

export default TeacherItem;

const StyledStudentApplyingBox = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: 400px;
  height: 160px;
  padding: 25px 32px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  cursor: pointer;
`;

const StyledApplyingStatus = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  padding-top: 5px;
  width: 80px;
  height: 32px;
  border-radius: 16px;
  background-color: rgba(37, 124, 255, 0.1);
  text-align: center;
  align-items: center;
  border: 1px solid ${color.maruDefault};
`;
