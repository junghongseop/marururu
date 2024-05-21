import { color } from '@maru/design-token';
import { Text } from '@maru/ui';

const TeacherItem = () => {
  return (
    <Text fontType="p3" color={color.gray900}>
      여기는 신청중인 교사 대상 입학설명회가 있을 구역 입니다.
    </Text>
  );
};

export default TeacherItem;
