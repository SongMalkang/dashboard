import react from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogoContainer />
      <HeaderTitleContainer>
        가스안전 모니터링 시스템
      </HeaderTitleContainer>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  /* 헤더 컨테이너입니다. 로고, 타이틀이 표시됩니다. */
  position: absolute;

  top: 0px;
  left: 0px;

  width: 100vw;
  height: 10vh;
  
  background-color: black;
`

const HeaderLogoContainer = styled.div`
  /* Logo를 표시합니다. 이미지는 변경 가능하도록 수정 예정 */
  position: absolute;

  width: 10vw;
  height: 8vh;

  margin-top: 1vh;
  margin-left: 1vw;

  background-color: grey;
`

const HeaderTitleContainer = styled.div`
  /* Title을 표시합니다. 타이틀은 등록된 DB에서 가지고옵니다. */
  margin-top: 1vh;
  /* 중앙에 오도록 수정 */

  font-size: 3rem;
  font-weight: bold;

  color: yellow;
`

export default Header;