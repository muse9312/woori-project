import { css, styled } from 'styled-components';

export const Wrap = styled.div`
  height: 100%;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 60px 0 82px 80px;
  min-width: 1432px;

  ${(props) =>
    props.$noneFooter &&
    css`
      padding: 60px 0 12px 80px;
    `}
  ${(props) =>
    props.$heightAuto &&
    css`
      height: auto;
      ${ContentWrap} {
        height: auto;
      }
    `}
`;

export const EmptyBox = styled.div`
  ${(props) =>
    props.$height &&
    css`
      height: ${props.$height}px;
    `}
`;

export const TopArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  background-color: #0e213f;
  padding: 20px 60px 16px;
  &::after {
    content: '';
    position: absolute;
    bottom: -44px;
    left: 0;
    width: 100%;
    height: 44px;
    background-color: #0e213f;
  }
  .btn {
    position: absolute;
    bottom: 60px;
    right: 60px;
  }
`;
export const SearchArea = styled.div`
  flex: 0 0 auto;
  width: 100%;
`;

export const SubInputTableWrap = styled.div`
  display: flex;
  padding: 28px 26px;
  margin-top: 12px;
  border-radius: 16px;
  background: #f5f6fa;
`;

export const ViewArea = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.$gap &&
    css`
      gap: ${props.$gap}px 0px;
    `}

  width:100%;
  height: 100%;
  padding: 20px;
  border-radius: 12px;
  background-color: #fff;
  ${(props) =>
    props.$bgColor === 'grey' &&
    css`
      background: var(--C-Dark-01);
    `}
  ${(props) =>
    props.$height &&
    css`
      height: ${props.$height};
    `}
  .sub-table {
    min-width: 1216px;
  }
  ${(props) =>
    props.$fit &&
    css`
      height: fit-content;
    `}
  ${(props) =>
    props.$type === 'modal' &&
    css`
      border-radius: 12px;
      border: 1px solid #ededf3;
    `}
`;

export const GridBox = styled.div`
  display: flex;
  gap: 12px 12px;
  width: 100%;
  height: 100%;
  ${(props) =>
    props.$direction === 'column' &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.$isAlign === 'center' &&
    css`
      align-items: center;
    `}
`;

export const GridTableBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  height: 100%;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--C-Dark-02);
  ${(props) =>
    props.$height &&
    css`
      height: ${props.$height}px;
    `}
  & + & {
    margin-top: 12px;
  }
`;

export const GridTableTitle = styled.div`
  color: var(--C-Dark-12);

  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
`;

export const NoticeArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Notice = styled.div`
  margin-top: -4px;
  padding: 0 12px;
  color: #ff5d5d;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  .blue-color {
    display: block;
    color: var(--Violet-01);
  }
  // 참고 notice
  ${(props) =>
    props.type === 'refer' &&
    css`
      color: var(--Violet-01);
      padding: 0;
    `}

  // margin-top unset
  ${(props) =>
    props.type === 'warning' &&
    css`
      margin: unset;
    `}
  // padding unset
  ${(props) =>
    props.type === 'normal' &&
    css`
      padding: 0;
    `}

  ${(props) =>
    props.type === 'modal' &&
    css`
      margin: unset;
      padding: 0;
      word-break: break-all;
    `}
    ${(props) =>
    props.type === 'modal2' &&
    css`
      margin: 8px 0;
      padding: 0;
    `}
`;

export const TableBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;

  .table {
    & + ${Notice} {
      margin-top: 20px;
      padding: 0px 0px;
    }
  }
  .sub-view-table {
    margin-top: 8px;
  }
`;

export const EditorArea = styled.div`
  position: relative;
  height: 100%;
  padding: 52px 0 20px;
  border-radius: 12px;
  background: var(--C-Dark-02);
  overflow-y: hidden;
  .img-wrap {
    overflow-y: scroll;
    height: 100%;
    padding: 20px 20px 0;
    img {
      width: 100%;
      height: 200px; // 확인후 수정
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: calc(100% - 116px);
    height: 52px;
    background: url(/assets/images/temp/editor-menu.svg) no-repeat left top / cover;
  }

  &::after {
    left: unset;
    right: 0;
    max-width: 116px;
    background-position: right top;
  }
  ${(props) =>
    props.$height &&
    css`
      height: ${props.$height}px;
    `}
  ${(props) =>
    props.$type === 'modal' &&
    css`
      /* margin: 0 -20px; */
      border-radius: 0px;
      padding-bottom: 0px;
      &::before,
      &::after {
        background: url(/assets/images/temp/editor-modal-menu.svg) no-repeat left top / cover;
      }
      &::after {
        background-position: right top;
      }
    `}
`;
export const ContentWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  height: 100%;
  padding: 0 48px;
  .sub-table {
    & + ${ViewArea} {
      margin-top: 8px;
    }
  }
  ${(props) =>
    props.$heightAuto &&
    css`
      height: 100%;
    `}
`;

export const InnerFooter = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  ${(props) =>
    props.content === 'space-between' &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.content === 'flex-end' &&
    css`
      justify-content: flex-end;
    `}
`;

export const RightBtnWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  ${(props) =>
    props.$type === 'modal' &&
    css`
      .btn {
        & + .btn {
          margin-left: 4px;
        }
      }
    `}
`;

export const DownloadBtnWrap = styled.div`
  display: flex;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  .tab {
    margin-left: 20px;
  }
`;

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: var(--C-Dark-12);

  ${(props) =>
    props.$isPadding &&
    css`
      padding: 0 12px;
    `}
`;

export const ModalTitleline = styled.div`
  width: 100%;
  height: 20px;
  border-top: 1px solid #ededf3;
`;

export const TableTitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => (props.$mrgnb ? `${props.$mrgnb}px` : '12px')};
  ${(props) =>
    props.$isJustifyBetween &&
    css`
      justify-content: space-between;
    `}
  .tit {
    display: flex;
    align-items: center;
    color: #0e213f;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
  }
  .notice {
    &-blue {
      margin-left: 12px;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: var(--Blue-01);
    }
    &-red {
      margin-left: 12px;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: var(--Red-01);
    }
  }

  .refer {
    display: flex;
    align-items: center;
    color: var(--C-Dark-12);
    margin-left: 6px;
    font-size: 12px;
    font-weight: 400;
    line-height: 21px;
  }

  .btn-wrap {
    display: flex;
    margin-left: auto;
    .btn {
      & + .btn {
        margin-left: 4px;
      }
    }
    .calender-cate {
      position: relative;
      padding-left: 12px;
      color: #333;
      font-size: 12px;
      font-weight: 700;
      line-height: 18px;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 2px;
      }
      &.exchange {
        &::before {
          background: #249a9a;
        }
      }
      &.difference {
        &::before {
          background: #a964a6;
        }
      }
      & + .calender-cate {
        margin-left: 12px;
      }
    }
  }
`;

export const ModalTitleWrap = styled(TableTitleWrap)`
  margin-bottom: 8px;
`;

export const DetailBoxArea = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const RankingBoxArea = styled.div`
  padding-top: 18px;
  ${SubTitle} {
    padding: 0 12px;
    align-items: center;
    justify-content: space-between;
  }
  .ranking-box-wrap {
    padding-top: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const SubButtonArea = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0 -4px;
`;

// 간격을 위한 레이아웃 컨테이너
export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => `${props.$direction || 'column'}`};
  gap: ${(props) => `${props.$gap || 20}px`};
  align-items: ${(props) => props.$isAlignItem || ''};
  justify-content: ${(props) => props.$isJustifyContent || ''};
  margin: ${(props) => props.$margin || ''};
`;

export const TextBadgeBox = styled.div`
  width: 70px;
  margin-top: 12px;
`;

// ==================================================================
export const LoginModalDescript = styled.div`
  padding-top: 20px;
  color: var(--C-Dark-08);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

export const SignContentWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 114px 0 120px 480px;
  .content-box {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    width: 400px;
    .logo-image {
      width: 42px;
      height: 42px;
    }
    .title {
      color: #333;
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      margin-top: 12px;
    }

    .description {
      color: #333;
      font-size: 12px;
      font-weight: 700;
      line-height: 18px;
      margin-top: 8px;

      &__sub {
        color: #333;
        font-size: 12px;
        font-weight: 700;
        line-height: 18px;
        margin-top: 8px;
        font-weight: 400;
      }
    }
  }
`;

export const SignTitleArea = styled.div`
  width: 100%;
  height: 126px;
  display: flex;
  flex-direction: column;
`;

export const SignFormArea = styled.form`
  position: ${(props) => props.$position || ''};
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.$mgTop || ''}px;
  gap: ${(props) => `${props.$gap || 20}px`};
  .warning {
    color: var(--Red-02);
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: -0.12px;
  }
`;

export const SignButtonArea = styled.div`
  .btn {
    margin-top: ${(props) => props.$mgTop}px;
    width: 100%;
    height: 52px;
    font-size: 18px;
  }
`;

export const SignCheckBoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(props) => `${props.$height || 48}px`};
  padding: 0 16px;
  background: #fff;
  border-radius: 4px;
  border: ${(props) => (!props.$isBorder ? '' : '1px solid var(--C-Dark-03, #e5e5ed)')};
`;

export const SignAcceptBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  width: 400px;
  padding: 12px 16px;
  border-radius: 4px;
  background: #e7f0ff;

  span {
    color: var(--C-Dark-10);
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
  }
  p {
    color: var(--Blue-01, #3284ff);
    font-size: 14px;
    font-weight: 700;
    line-height: 21px; /* 21px */
  }
`;

export const TooltipContent = styled.div`
  width: max-content;
  .tooltip-product-list {
    .tooltip-product-item {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 400;
      color: #3c4b63;

      &::before {
        content: '';
        display: inline-block;
        width: 3px;
        height: 3px;
        margin: 0 5px;
        border-radius: 100%;
        background-color: #000;
        vertical-align: top;
      }
    }

    > ul {
      padding-left: 10px;
    }

    &.multi {
      display: flex;
      gap: 16px;
      justify-content: space-between;

      .tooltip-product-item {
        flex-direction: column;
        align-items: flex-start;
        padding-left: 12px;

        &::before {
          display: none;
        }

        > ul {
          font-size: 12px;
          font-weight: 400;
          padding-left: 6px;
        }
      }

      .tooltip-product-title {
        display: inline-block;
        margin-left: -6px;
        font-weight: 700;
        line-height: 1.25;
        vertical-align: bottom;
        margin-bottom: 2px;

        &::before {
          content: '';
          display: inline-block;
          width: 3px;
          height: 3px;
          vertical-align: 3px;
          margin-right: 8px;
          border-radius: 100%;
          background-color: #000;
        }
      }
    }
  }
`;
