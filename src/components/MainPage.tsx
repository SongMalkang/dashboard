import react from "react"
import SideBar from "./Pages/SideBar";
import Header from "./Pages/Header";

/*

# HUBPRO의 관리자 메뉴를 구성하는 페이지입니다.
# 하위 컴포넌트 : AuthAdmin / ChangeLogo / DashboardType
#
*/
const MainPage = () => {

  return (
    <div>
      <Header />
      <SideBar />
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default MainPage;