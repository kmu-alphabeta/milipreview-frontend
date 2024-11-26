import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'; //각 브라우저마다 기본적으로 설정된 스타일을 초기화

const GlobalStyle = createGlobalStyle`
	${reset}  // styled-reset을 사용하여 브라우저 기본 스타일 초기화
    * {
    box-sizing: border-box;  // 모든 요소에 대해 박스 크기 계산을 border-box로 설정
    }
    @font-face {
    font-family: "Pretendard";
    src: url('/src/styles/fonts/PretendardVariable.woff2') format('woff');
    font-weight: 100 900; /*가변 폰트라 100에서 900까지의 모든 weight 지원 */
    font-style: normal;
    }
    body{
    margin:0;
    padding:0;
    } 
    //미디어 쿼리
    @media screen and (max-width: 1260px) {
      width: 80%;
      height: 100vh;
      margin: 0 auto;
    }

    :root {
        //colors
        --green: #437550;
        --gray: #D9D9D9;
        --red: #C00F0C;
        --white: #FFFFFF;
        --black: #000000;
        //font weight
        --semi-light: 400;
        --light: 500;
        --medium: 600;
        --semi-bold: 700;
        --bold: 800;
        //font size
        --sm: 15px;
        --semi-sm: 20px;
        --regular: 25px;
        --large: 30px;
    }

	a {
		text-decoration: none; /* 밑줄 제거 */
		color: inherit; /* 텍스트 색상 상속 */
	}

	a:hover {
		text-decoration: none; /* hover 상태에서도 밑줄 제거 */
	}
`;

export default GlobalStyle;
