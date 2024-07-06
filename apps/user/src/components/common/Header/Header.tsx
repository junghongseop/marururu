import { ROUTES } from '@/constants/common/constant';
import { useUser } from '@/hooks';
import { color } from '@maru/design-token';
import { Button, Row, UnderlineButton } from '@maru/ui';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import Profile from './Profile/Profile';

dayjs.extend(isBetween);

const NAVIGATION_LIST = [
  {
    name: '홈',
    route: ROUTES.MAIN,
  },
  {
    name: '원서작성',
    route: ROUTES.FORM,
  },
  {
    name: '원서관리',
    route: ROUTES.FORM_MANAGEMENT,
  },
  {
    name: '공지사항',
    route: ROUTES.NOTICE,
  },
  {
    name: '자주 묻는 질문',
    route: ROUTES.FAQ,
  },
] as const;

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { isLoggedIn } = useUser();

  return (
    <StyledHeader>
      <HeaderBox>
        <Row
          style={{ padding: '0px 100px' }}
          height={64}
          alignItems="center"
          justifyContent="space-between"
        >
          <Image
            src="/svg/logo.svg"
            style={{ cursor: 'pointer' }}
            width={120}
            height={36}
            onClick={() => router.push(ROUTES.MAIN)}
            alt="logo"
          />
          {isLoggedIn ? (
            <Profile />
          ) : (
            <Row gap={10} alignItems="center">
              <Button
                styleType="QUATERNARY"
                size="SMALL"
                onClick={() => router.push(ROUTES.LOGIN)}
              >
                로그인
              </Button>
              <Button
                styleType="PRIMARY"
                size="SMALL"
                onClick={() => router.push(ROUTES.SIGNUP)}
              >
                회원가입
              </Button>
            </Row>
          )}
        </Row>
        <Row style={{ padding: '0px 96px' }} alignItems="center">
          {NAVIGATION_LIST.map(({ route, name }, index) => (
            <UnderlineButton
              key={`navigation ${index}`}
              active={route === pathName}
              onClick={() => router.push(route)}
            >
              {name}
            </UnderlineButton>
          ))}
        </Row>
      </HeaderBox>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  box-shadow: 0 1px 0 0 ${color.gray200};
`;

const HeaderBox = styled.div`
  max-width: 1448px;
  height: 100%;
  background-color: ${color.white};
  margin: 0 auto;
`;
