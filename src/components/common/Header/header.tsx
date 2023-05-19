import { color } from "@/styles/color";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Button from "../Button/button";
import Row from "../Flex/row";
import LogoIcon from "../Icon/Logo";
import NavigationBar from "./navigation";
import Profile from "./profile";

const Header = () => {
  const router = useRouter();

  // 로그인 상태 테스트입니다
  const loginStatus = false;

  return (
    <>
      <StyledHeader>
        <HeaderWrap>
          <LogoIcon cursor="pointer" onClick={() => router.push("/")} />
          {loginStatus ? (
            <Row gap="10px" alignItems="center">
              <Button option="QUATERNARY" size="SMALL">
                로그인
              </Button>
              <Button option="PRIMARY" size="SMALL">
                회원가입
              </Button>
            </Row>
          ) : (
            <Profile name="김석진" />
          )}
        </HeaderWrap>
      </StyledHeader>
      <NavigationBar>
        <Button option="QUATERNARY" size="SMALL">
          홈
        </Button>
        <Button option="QUATERNARY" size="SMALL">
          원서접수
        </Button>
        <Button option="QUATERNARY" size="SMALL">
          공지사항
        </Button>
        <Button option="QUATERNARY" size="SMALL">
          도움말
        </Button>
      </NavigationBar>
    </>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  background-color: ${color.white};
`;

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 86%;
  height: 100%;
`;
