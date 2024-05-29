import { color } from '@maru/design-token';
import { Column, Row, Text } from '@maru/ui';
import { styled } from 'styled-components';
import { flex, formatApplicationAt } from '@maru/utils';
import formatStartDate from '@/utils/formatStartDate';
import { formatStatus } from '@/utils/formatStatus';

interface Props {
  start: string;
  place: string;
  applicationStartDate: string;
  applicationEndDate: string;
  status: string | null;
}

const TeacherItem = ({
  start,
  place,
  applicationEndDate,
  applicationStartDate,
  status,
}: Props) => {
  const handleFormatStatus = formatStatus(status);

  if (handleFormatStatus === '신청 가능' || handleFormatStatus === '신청 전') {
    return null;
  }

  return (
    <StyledStudentApplyingBox>
      <Column gap={24}>
        <Row alignItems="center" gap={90}>
          <Text fontType="H4">{formatStartDate(start)}</Text>
          <StyledApplyingStatus status={handleFormatStatus}>
            <Text fontType="context" color={color.red}>
              {handleFormatStatus}
            </Text>
          </StyledApplyingStatus>
        </Row>
        <Text fontType="p2" color={color.gray500}>
          장소: {place}
          <br />
          신청 기한: {formatApplicationAt(applicationStartDate)} ~{' '}
          {formatApplicationAt(applicationEndDate)}
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
  padding: 28px 32px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  cursor: pointer;
`;

const StyledApplyingStatus = styled.div<{ status: string }>`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  padding-top: 5px;
  width: 80px;
  height: 32px;
  border-radius: 16px;
  background-color: rgba(244, 67, 54, 0.1);
  text-align: center;
  align-items: center;
  border: 1px solid ${color.red};
`;
