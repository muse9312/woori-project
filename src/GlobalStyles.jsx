import { createGlobalStyle } from 'styled-components';
import { defaulButtonStyle, primaryButtonStyle, secondaryButtonStyle, sizeMdButtonStyle } from './styles/common.styled';

const GlobalStyle = createGlobalStyle`


/* 웹킷 기반 브라우저용 스크롤바 스타일 */
 ::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: none; /* 스크롤바 트랙 색상 */
    border-radius: 4px; /* 스크롤바 트랙의 border-radius */
  }

  ::-webkit-scrollbar-thumb {
    background: #99A3FF; /* 스크롤바 썸(움직이는 부분) 색상 */
    border-radius:4px; /* 스크롤바 썸의 border-radius */
    background-clip: padding-box; /* 내부에 테두리를 추가하기 위해 padding-box를 사용합니다. */
    border: 1.5px solid transparent;  /* 내부 여백 사용을 위해 투명 border 추가 */
  }
  body{
    &::-webkit-scrollbar-thumb {
    background: #C9C9D0; /* 스크롤바 썸(움직이는 부분) 색상 */
  }
  }

  :root {
    --White: #fff;
    --W-Dark-01: #f9f9f9; 
    --W-Dark-02: #efefef;
    --W-Dark-03:#ddd;
    --W-Dark-04:#ccc;
    --W-Dark-05: #bbb;
    --W-Dark-06: #aaa;
    --W-Dark-07:#999;
    --W-Dark-08: #888;
    --W-Dark-09: #777;
    --W-Dark-10: #555;
    --W-Dark-11: #333;
    --W-Dark-12:#111;

    --Black: #000;
    --C-Dark-01: #F5F6FA;
    --C-Dark-02: #EDEDF3;
    --C-Dark-03:#E5E5ED;
    --C-Dark-04:#D7D7DE; 
    --C-Dark-05: #C9C9D0;
    --C-Dark-06: #9EA6B2;
    --C-Dark-07:#86909F;
    --C-Dark-08: #566479;
    --C-Dark-09:#3C4B63;
    --C-Dark-10: #263752;
    --C-Dark-11: #1A2C49;
    --C-Dark-12:#0E213F;
 
    --Grad-BG-01:linear-gradient(180deg, #EBEDFF 0%, #FFEAEA 100%);
    --Grad-BG-02:linear-gradient(343deg, #B0EBCC -1.81%, #99A3FF 46.2%);
    --Grad-Red-01:linear-gradient(180deg, #FF5D5D 0%, #E26F6F 100%);
    --Grad-Yellow-01:linear-gradient(180deg, #FFA985 0%, #FAB530 100%);

    --Violet-01:#99A3FF;
    --Blue-01:#3284FF;
    --Blue-02:#599CFF;
    --Blue-03:#99C1FF; 
    --Blue-04:#BDD7FF;
    --Red-01:#FF5D5D;
    --Red-02:#FC8686;
    --Yellow-01:#FAB530;
    --Green-01:#72ECAA;
  }

  /* normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */
  html {
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    background: #f5f6fa;

    /* .layout-hide{
        position: fixed;
        overflow: hidden !important;
        top: 0px;
        left: 0px;
    } */
  }

  article,
  aside,
  footer,
  header,
  nav,
  section {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  figcaption,
  figure,
  main {
    display: block;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  dfn {
    font-style: italic;
  }

  mark {
    background-color: #ff0;
    color: #000;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  audio,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  img {
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button {
    cursor: pointer;
    background-color: unset;
  }
  input {
    box-sizing: border-box;
    padding: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
  }
  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html [type='button'],
  [type='reset'],
  [type='submit'] {
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    /* padding: 0.35em 0.75em 0.625em; */
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    display: inline-block;
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details,
  menu {
    display: block;
  }

  summary {
    display: list-item;
  }

  canvas {
    display: inline-block;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  /*---------------------------------------------
	reset override
---------------------------------------------*/

  /*---------------------------------------------
	web font
---------------------------------------------*/
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: local('Pretendard Bold'), url('/assets/font/Pretendard/Pretendard-Bold.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src: local('Pretendard SemiBold'), url('/assets/font/Pretendard/Pretendard-SemiBold.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src: local('Pretendard Medium'), url('/assets/font/Pretendard/Pretendard-Medium.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: local('Pretendard Regular'), url('/assets/font/Pretendard/Pretendard-Regular.woff') format('woff');
  }

  * {
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
    padding: 0;
    border: 0;
    font-size: 100%;
    line-height: 1.5;
    vertical-align: baseline;
    font-style: normal;
    box-sizing: border-box;
    word-break: keep-all;
  }

  html,
  body {
    height: 100%;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
  }

  body {
    width: 100%;
    height: 100%;
    line-height: 1.5;
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
    color: #000;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  button,
  input,
  textarea,
  select,
  a {
    font-family: 'Pretendard', sans-serif;
    line-height: 1.5;
    font-size: 15px;
    color: #000;
  }
  img {
    display: block;
  }

  input::-webkit-inner-spin-button {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}


  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  a,
  a:link,
  a:visited,
  a:hover {
    text-decoration: none;
  }

  ul,
  li,
  ol,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  dl,
  dt,
  dd {
    margin: 0;
  }

  button {
    display: block;
    padding: 0;
    appearance: none;
    text-decoration: none;
    border: none;
    background-color: transparent;
    font-weight: normal;
    text-align: center;
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
  }

  // layout
  #root {
    height: 100%;
  }

  body{
    &.scroll-fix{
      overflow: hidden;
    }
  }
  // common
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .text {
    &-left {
      text-align: left !important;
    }
    &-center {
      text-align: center !important;
    }
    &-right {
      text-align: right !important;
    }
  }

  .text{
    &-red{
      color:var(--Red-01);
    }
  }
  
  .block {
    display: block;
  }

  .inline-block {
    display: inline-block;
  }

  .flex {
    display: flex;
  }

  .text{
    &-bold{
      font-weight: 700;
    }
  }

  .text{
    &-btn{
      color: var(--Blue-01);
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      text-decoration-line: underline;
    }

 
  }
  .align {
    &-center {
      align-items: center;
    }
    &-start {
      align-items: start;
    }
    &-end {
      align-items: end;
    }
    &-stretch {
      align-items: stretch;
    }
  }
  .justify {
    &-center {
      justify-content: center;
    }
    &-start {
      justify-content: start;
    }
    &-end {
      justify-content: end;
    }
    &-space-between {
      justify-content: space-between;
    }
  }

  .m {
    &l {
      &-auto {
        margin-left: auto;
      }
      &-0 {
        margin-left: 0;
      }
    }
  }

  .white-space {
  white-space: pre-wrap;
}

.font-weight {
  font-weight : 700;
}
.header-bold {
  font-weight: 700;
}

  // mui
  .MuiPopover-root {
    // 셀렉트 optionBox
    .MuiPopover-paper {
      max-height: 250px;
      // 각각의 옵션
      .MuiMenuItem-root {
        font-family: 'Pretendard', sans-serif;
        color: #333;
        font-size: 12px;
        font-weight: 400;
        &[aria-selected='true'] {
          background-color: transparent;
        }
        &.Mui-focused {
          background-color: #ededf3;
        }
      }
    }
  }



  // sweetAlert2
  .swal2 {
    &-container{
      z-index: 1400;
    }
    &-modal {
      width: 320px;
      padding: 0;
    
      // content
      .swal2-html-container {
        margin: 0;
        padding: 0 20px 24px;
        font-size: 16px;
        font-weight: 500;
        color: var(--W-Dark-12);
        text-align: left;
      }
      // close버튼
      .swal2-close {
        position: absolute;
        top:20px;
        right:20px;
        width:24px;
        height:24px;
        &:focus {
          box-shadow: none;
        }
      }
    }

    &-title {
      padding: 20px;
      font-size: 18px;
      font-weight: 700;
      color: var(--W-Dark-11);
      text-align: left;
    }
    &-actions {
      width: 100%;
      justify-content: flex-end;
      margin: 0;
      padding: 10px 20px;
      
      > button.swal2-styled {
        margin: 0;
        ${defaulButtonStyle}
        ${sizeMdButtonStyle}
        &:focus {
            box-shadow: none;
          }
        & + button {
          margin-left: 10px;
        }

        // cancel버튼
        &.swal2-cancel {
          ${secondaryButtonStyle}
        }
        // confirm버튼
        &.swal2-confirm {
          ${primaryButtonStyle}
        }
      }
    }
  }

 // realgrid dropdown style
.rg-dropdownlist{
  .rg-dropdown-select{
    background: var(--Blue-04);
    color:#555;
  }
}

@keyframes rotate360 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

`;

export default GlobalStyle;
