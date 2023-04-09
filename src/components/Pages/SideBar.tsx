import react, { useState } from "react"
import styled, { keyframes } from "styled-components"

/*

# HUBPRO의 관리자 메뉴를 구성하는 페이지입니다.
# 하위 컴포넌트 : AuthAdmin / ChangeLogo / DashboardType
#
*/
const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false)

  return (
    <div>
      {showSideBar === true && 
        <SideBarBackGround >
          <div>
            <p>testing</p>
          </div>
        </SideBarBackGround>
      }
      <SideBarShowHideButton onClick={()=> showSideBar === true ? setShowSideBar(false) : setShowSideBar(true)} />
    </div>
  )
}

/*
# Style Component 선언부 (CSS)
# Scoped
*/

const sideBarInAndOutAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const SideBarBackGround = styled.div`
  position: fixed;
  top: 0vh;
  left: 80vw;

  width: 20vw;
  height: 100vh;

  font-size: 1.2rem;

  color: white;
  background-color: #010010;

  animation: ${sideBarInAndOutAnimation} 0.2s ease-in-out;

  & > div {
    margin-top: 12vh;
    text-align: left;
    margin-left: 2vw;
  }
`

const SideBarShowHideButton = styled.div`
  position: absolute;
  z-index: 10;

  top: 2.5vh;
  left: 96vw;

  width: 2.5vw;
  height: 5vh;

  background-color: white;
`

export default SideBar;