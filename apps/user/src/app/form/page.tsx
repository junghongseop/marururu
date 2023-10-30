'use client';

import { FormWrapper } from '@/components/common';
import { useFormStepValueStore, useSetFormStepStore } from '@/store';
import { SwitchCase } from '@toss/react';
import 보호자정보 from './보호자정보/보호자정보';
import 성적입력 from './성적입력/성적입력';
import 자기소개서 from './자기소개서/자기소개서';
import 전형선택 from './전형선택/전형선택';
import 지원자정보 from './지원자정보/지원자정보';
import 초안작성완료 from './초안작성완료/초안작성완료';
import 초안제출완료 from './초안제출완료/초안제출완료';
import 최종제출 from './최종제출/최종제출';
import 최종제출완료 from './최종제출완료/최종제출완료';
import 출신학교및학력 from './출신학교및학력/출신학교및학력';

const FormPage = () => {
  const formStep = useFormStepValueStore();
  const setFormStep = useSetFormStepStore();

  return (
    <FormWrapper>
      <SwitchCase
        value={formStep}
        caseBy={{
          지원자정보: <지원자정보 />,
          보호자정보: <보호자정보 />,
          출신학교및학력: <출신학교및학력 />,
          전형선택: <전형선택 />,
          성적입력: <성적입력 />,
          자기소개서: <자기소개서 />,
          초안작성완료: <초안작성완료 />,
          초안제출완료: <초안제출완료 />,
          최종제출: <최종제출 />,
          최종제출완료: <최종제출완료 />,
        }}
        defaultComponent={<지원자정보 />}
      />
    </FormWrapper>
  );
};

export default FormPage;
