import React from 'react';


import '../assets/css/admin/login.css';
import logo_img from '../assets/images/admin/login/logo_img.png';



const LoginLogo = () => {
  return (
    <div>
        <div className="top-logo-wrap">
            {<img id="login-logo" src={logo_img} alt="logo" />}
        </div>
        <h3>안되는 것이 실패가 아니라 포기하는 것이 실패다</h3>
        <p>
            성공은 실패의 꼬리를 물고 온다. 지금 포기한 것이 있는가?<br />
            그렇다면 다시 시작해 보자.<br />
            안되는 것이 실패가 아니라 포기하는 것이 실패다.<br />
            포기한 순간이 성공하기 5분전이기 쉽다.<br />
            실패에서 더 많이 배운다.<br />
            실패를 반복해서 경험하면 실망하기 쉽다. <br />하지만 포기를 생각해선
            안된다. 실패는 언제나 중간역이지 종착역은 아니다. <br />
        </p>
        <p>- 이대희, ‘1%의 가능성을 희망으로 바꾼 사람들’ 에서</p>
    </div>
  );
};

export default LoginLogo;