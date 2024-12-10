import React, { useEffect, useRef } from 'react';
import { LocalTreeDataProvider, TreeView } from 'realgrid';
import styled, { css } from 'styled-components';
import 'realgrid/dist/realgrid-style.css';
import { createRoot } from 'react-dom/client';
import WOTextBadge from './WOTextBadge';

function WOTreeTable({
  tableData,
  hasFooter,
  noneIndicator,
  footerColor,
  hasCheckBar,
  hasStateBar,
  indicatorReverse,
  checkBarHeader,
  stateBarHeader,
  checkBarWidth,
  hasAllCheckbox,
  footerRow,
  exportToFile,
  fileExtension,
  editable,
  type,
  height,
  calendarType,
  headerHight,
}) {
  const realgridElement = useRef(null);

  useEffect(() => {
    const container = realgridElement.current;
    const treeProvider = new LocalTreeDataProvider();
    const treeView = new TreeView(container);

    treeView.setDataSource(treeProvider);
    treeProvider.setFields(tableData.fields);
    treeView.setColumns(tableData.columns);
    treeProvider.setRows(tableData.rows, 'treeId', false, null, 'iconField');
    treeView.setColumnLayout(tableData.layout);

    //툴팁
    treeView.displayOptions.showTooltip = true;

    // 컴포넌트 내부 badge render
    treeView.registerCustomRenderer('badge', {
      initContent(dom) {
        //@ts-ignore
        this._root = createRoot(dom);
      },
      clearContent(dom) {
        //@ts-ignore
        const root = this._root;
        root.unmount();
      },
      render(grid, model, w, h, info) {
        console.log(model.value);
        const root = this._root;
        root.render(<WOTextBadge size='sm'>{model.value}</WOTextBadge>);
      },
      canClick(event) {
        return true;
      },
      click() {
        return {};
      },
    });

    treeView.displayOptions.useFocusClass = false;

    treeView.columnByName('treeName').styleCallback = function (grid, dataCell) {
      var ret = {};
      var model = grid.getModel(dataCell.index.itemIndex, true);
      if (model.expanded || model.level > 1) {
        ret.style = { background: '#F9F9F9' };
      }

      return ret;
    };

    // 테이블 데이터 없을시 문구 표시
    treeView.displayOptions.showEmptyMessage = true;
    treeView.displayOptions.emptyMessage = '조회된 데이터가 없습니다.';

    // 버튼 표시 여부
    treeView.buttonVisibility = 'always';
    // 버튼클릭 이벤트
    treeView.onCellItemClicked = function (grid, index, clickData) {
      clickData.value === '다운로드' && alert('다운로드 버튼 클릭');
      clickData.value === '저장' && alert('저장 버튼 클릭');
      clickData.value === '확인' && alert('확인 버튼 클릭');
      clickData.value === '초기화' && alert('초기화 버튼 클릭');
      return true;
    };

    // 인티케이터 표시 여부
    treeView.setRowIndicator({ width: 60, headText: '순번', footText: '' });

    noneIndicator &&
      treeView.setRowIndicator({
        visible: false,
      });
    // 상태바 표시여부
    hasStateBar
      ? treeView.setStateBar({
          visible: true,
        })
      : treeView.setStateBar({
          visible: false,
        });

    // 상태바 설정
    treeView.setStateBar({
      width: 60,
      headText: stateBarHeader,
      mark: 'text',
      stateTexts: {
        created: 'C',
        updated: '수정',
        deleted: 'D',
        createAndDeleted: 'X',
      },
    });
    //체크박스 표시 여부
    hasCheckBar
      ? treeView.setCheckBar({
          visible: true,
          width: checkBarWidth || 60,
          showAll: hasAllCheckbox && true,
        })
      : treeView.setCheckBar({
          visible: false,
        });
    // 체크박스 헤더지정
    treeView.setCheckBar({
      headText: checkBarHeader,
      // footText: 'F',
    });
    // 인디케이터 순서 지정
    treeView.checkBar.displayOrder = 1;
    treeView.rowIndicator.displayOrder = 2;
    if (indicatorReverse) {
      treeView.checkBar.displayOrder = 2;
      treeView.rowIndicator.displayOrder = 1;
    }

    // 스크롤바 너비 커스텀
    treeView.scrollBarHeight = 8;
    treeView.scrollBarWidth = 8;

    // header 옵션 지정
    treeView.setHeader({ height: headerHight ? headerHight : 36 });
    treeView.setEditOptions({ editable: editable ? true : false });
    treeView.header.heights = [36, 36, 36];
    // footer 표시 여부
    hasFooter ? (treeView.footers.visible = true) : (treeView.footers.visible = false);
    treeView.footer.height = 36;

    // footer 두줄일시 적용
    footerRow === 2 && treeView.setFooters([{ height: 36 }, { height: 36 }]);

    // 세입 일정표 날짜 행 스타일 적용
    calendarType === 'type01' &&
      treeView.setRowStyleCallback(function (grid, item, fixed) {
        if (item.index % 3 === 0) {
          return 'date-column';
        }
      });
    calendarType === 'type02' &&
      treeView.setRowStyleCallback(function (grid, item, fixed) {
        if (item.index % 4 === 0) {
          return 'date-column';
        }
      });
    // display 옵션
    let display = treeView.getDisplayOptions();
    display.minRowHeight = 36;
    display.fitStyle = 'fill';
    display.refreshMode = 'visibleOnly';
    display.selectionStyle = 'singleRow';
    display.rowFocusType = 'row';
    treeView.setDisplayOptions(display);
    return () => {
      treeProvider.clearRows();
      treeView.destroy();
      treeProvider.destroy();
    };
  }, [
    tableData,
    hasFooter,
    hasCheckBar,
    indicatorReverse,
    checkBarHeader,
    checkBarWidth,
    noneIndicator,
    footerRow,
    exportToFile,
    fileExtension,
    editable,
    hasStateBar,
    stateBarHeader,
    hasAllCheckbox,
    calendarType,
    type,
    headerHight,
  ]);

  return (
    <TableArea>
      <Wrapper className='table' ref={realgridElement}></Wrapper>
    </TableArea>
  );
}

export default WOTreeTable;
const TableArea = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (props.$height ? `${props.$height}px` : '100%')};
`;

const Wrapper = styled.div`
  //tree style
  .rg-tree-lines {
    display: none;
  }
  .rg-tree-renderer {
    margin-left: 9px;
    .rg-tree-leaf {
      display: none;
    }
    .rg-tree-icon {
      display: none;
    }
    .rg-tree-expanded {
      background: url(/assets/images/icon/table-tree-arr.svg) no-repeat center / cover;
    }
    .rg-tree-collapsed {
      background: url(/assets/images/icon/table-tree-arr.svg) no-repeat center / cover;
      transform: rotate(-90deg);
    }
  }
  width: 100%;
  height: 100%;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  .rg-grid {
    border: unset;
    .rg-empty-grid {
      span {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px 0;
        width: 100%;
        height: 100%;
        color: #555;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        &::before {
          content: '';
          width: 90px;
          height: 90px;
          background: url(/assets/images/etc/table-nonedata.svg) no-repeat center / cover;
        }
      }
    }
  }
  .rg-root .rg-table,
  .rg-root .rg-table tr,
  .rg-root .rg-table td {
    box-sizing: border-box !important;
  }

  table {
    border-spacing: 0;
  }

  // 체크박스
  .rg-checkbox {
    display: block;
    width: 16px;
    height: 16px;
    background: url(/assets/images/icon/table-check-default.svg) no-repeat center / cover;
    cursor: pointer;
    &:checked {
      background: url(/assets/images/icon/table-check-active.svg) no-repeat center / cover;
    }
  }
  .rg-header-check {
    display: block !important;
    width: 16px;
    height: 16px;
    margin: 6px auto 0 !important;
    background: url(/assets/images/icon/table-check-default.svg) no-repeat center / cover;
    cursor: pointer;
    &:checked {
      background: url(/assets/images/icon/table-check-active.svg) no-repeat center / cover;
    }
  }
  /* 에디터 */
  .rg-editor-container {
    border: 1px solid #3284ff;
    ${(props) =>
      props.$type === 'calendarEdit' &&
      css`
        border: unset !important;
        background: none !important;
        box-shadow: unset !important;
        .rg-text-editor {
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          width: calc(100% - 12px) !important;
          height: fit-content !important;
          margin: 0 auto !important;
          padding: 7px 10px !important;
          border-radius: 4px;
          border: 1px solid var(--C-Dark-02) !important;
          background: #fff;
        }
      `}
  }

  .rg-cell-buttons {
    right: 8px !important;
    top: 50% !important;
    transform: translateY(-50%);
    &:has(.rg-button-list) {
      right: 12px !important;
    }
    .rg-button-list {
      width: 16px;
      height: 16px;
      background: url(/assets/images/icon/table-dropdown-arr.svg) no-repeat center / cover;
    }
  }
  .rg-foot-cell {
    background: var(--C-Dark-02);
    border: 1px solid #d7d7de !important;
  }
  .rg-head {
    background: var(--C-Dark-02);
    ${(props) =>
      props.$type === 'modal' &&
      css`
        background: var(--C-Dark-01);
      `}
    td {
      vertical-align: middle;
      border: 1px solid #d7d7de !important;
      border-bottom: unset !important;
      & + td {
        border-left: unset !important;
      }
      &.rg-checkbar-head {
        span {
          word-break: normal;
          white-space: pre-wrap;
        }
      }
      div {
        max-height: 36px !important;
        height: 100%;
        padding: 0 8px;
        font-weight: 700;
        line-height: 1.2;
        font-size: 12px;
        color: #333;
        text-align: center;
      }
    }
  }
  //rg-rowbarcontainer
  .rg-rowbarcontainer {
    table {
      tr {
        background: #fff;
        &:first-child {
          td {
            border-top: 1px solid #d7d7de;
          }
        }
        &.rg-updated-row {
          .rg-statebar-cell {
            div {
              width: fit-content;
              min-width: 37px;
              height: 22px;
              padding: 0px 4px;
              margin: 0 auto;
              gap: 10px;
              border-radius: 1000px;
              background: var(--Blue-02);
              color: #fff;
              font-size: 12px;
              font-weight: 400;
              line-height: 22px;
            }
          }
        }
        &.rg-created-row {
          .rg-statebar-cell {
            div {
              width: fit-content;
              min-width: 37px;
              height: 22px;
              padding: 0px 4px;
              margin: 0 auto;
              gap: 10px;
              border-radius: 1000px;
              background: #3c4b63;
              color: #fff;
              font-size: 12px;
              font-weight: 400;
              line-height: 22px;
            }
          }
        }
        td {
          background-color: #fff !important;
          border: 1px solid #ededf3;
          border-top: unset;
          vertical-align: middle;
          &.rg-rowindicator-focus {
            background-color: unset !important;
          }

          & + td {
            border-left: unset !important;
          }

          div {
            line-height: 1.2;
            text-align: center;
            font-size: 12px;
            font-weight: 400;
            color: #333;
          }
        }
      }
    }
  }
  // grid header
  .rg-header {
    background: var(--C-Dark-02);
    ${(props) =>
      props.$type === 'modal' &&
      css`
        background: var(--C-Dark-01);
      `}
    .rg-header-sort-ascending {
      left: auto !important;
      right: 12px !important;
      width: 14px !important;
      height: 14px !important;
      background: url(/assets/images/icon/arrow-dropdown-black.svg) no-repeat center / cover;
      transform: rotate(180deg);
    }
    .rg-header-sort-descending {
      left: auto !important;
      right: 12px !important;
      width: 14px !important;
      height: 14px !important;
      background: url(/assets/images/icon/arrow-dropdown-black.svg) no-repeat center / cover;
    }
    &-focus {
      background: var(--C-Dark-03);
      ${(props) =>
        props.$type === 'modal' &&
        css`
          background: var(--C-Dark-02);
        `}
    }
    table {
      text-align: center;

      tr {
        height: 100%;
        td {
          position: relative;
          vertical-align: middle;
          border-right: 1px solid #d7d7de;
          border-top: 1px solid #d7d7de;
          border-bottom: unset;
          &:first-child {
            border-left: unset;
            ${(props) =>
              props.$noneIndicator && props.$hasCheckBar !== true
                ? css`
                    border-left: 1px solid #d7d7de;
                  `
                : ''}
            ${(props) =>
              props.$noneIndicator && props.$hasStateBar
                ? css`
                    border-left: unset;
                  `
                : ''}
          }

          &.rg-header-group-cell {
            background: var(--C-Dark-02);
            ${(props) =>
              props.$type === 'modal' &&
              css`
                background: var(--C-Dark-01);
              `}
            span {
              display: block;
              height: 100%;
              padding: 0 8px;
              font-size: 12px;
              font-weight: 700;
              line-height: 1.2;
              color: #333;
            }
          }
          &.rg-header-select {
            background: var(--C-Dark-02);
            ${(props) =>
              props.$type === 'modal' &&
              css`
                background: var(--C-Dark-01);
              `}
          }

          .rg-header-renderer {
            display: block;
            height: 100%;
            padding: 0 8px;
            font-weight: 700;
            /* line-height: 42px; */
            color: #333;
            font-size: 12px;
            line-height: 1.2;

            span {
            }
          }

          &.sunday {
            span {
              color: var(--Red-01) !important;
            }
          }
          &.saturday {
            span {
              color: var(--Blue-02) !important;
            }
          }
          &.num-data {
            background-color: #fff;
            text-align: right;
            span {
              font-weight: 400;
            }
          }
          &.text-red {
            span {
              color: var(--Red-01, #ff5d5d);
            }
          }
          &.text-blue {
            span {
              color: var(--Blue-01, #3284ff);
            }
          }
          &.text-blue2 {
            span {
              color: var(--Blue-02);
            }
          }
          &.white-space {
            span {
              display: block;
              line-height: 1.2;
            }
          }
          &.bg-color01 {
            background: var(--C-Dark-03);
          }
        }
      }
    }
  }
  // grid body
  .rg-body {
    table {
      text-align: center;
      tr {
        &:first-child {
          td {
            border-top: 1px solid #d7d7de;
          }
        }
        &.rg-alternate-row {
          background: inherit !important;
          td {
          }
        }
        &.date-column {
          td {
            border: 1px solid var(--C-Dark-04) !important;
            border-left: unset !important;
            border-right: 1px solid #ededf3 !important;
            &:first-child {
              border-left: 1px solid #ededf3 !important;
            }

            .rg-renderer {
              font-weight: 700;
            }
          }
        }
        &.exchange {
          td {
            height: 48px;
            .rg-renderer {
              color: #249a9a !important;
              white-space: pre-wrap;
            }
          }

          .rg-merged-cell {
            border-bottom: unset !important;
          }
          &.none-line {
            td {
              border-bottom: unset !important;
            }
            &:last-child {
              td {
                border-bottom: 1px solid #ededf3 !important;
                &.rg-merged-cell {
                  border-bottom: 1px solid #ededf3 !important;
                }
              }
            }
          }
        }
        &.difference {
          .rg-merged-cell {
            border-bottom: unset !important;
          }
          &.none-line {
            td {
              border-bottom: unset !important;
            }
          }
          td {
            height: 48px;
            .rg-renderer {
              color: #a964a6 !important;
              white-space: pre-wrap;
            }
          }
          &:last-child {
            td {
              border-bottom: 1px solid #ededf3 !important;
            }
          }
        }
        td {
          height: 36px;
          vertical-align: middle;
          border-bottom: 1px solid #ededf3;
          border-right: 1px solid #ededf3;
          background: #fff;
          // 수정 영역 스타일
          &.dropdown-cell {
            .rg-renderer {
              text-align: left !important;
              padding-right: 30px;
            }
          }
          &.calendar-cell {
            .rg-renderer {
              text-align: left !important;
              padding-right: 30px;
            }
          }
          &.rg-data-cell:not(.rg-data-readonly-cell):not(.dropdown-cell):not(.calendar-cell) {
            position: relative;

            .rg-renderer:not(.rg-check-renderer) {
              text-align: left !important;
              padding-right: 30px;
              overflow: hidden;

              &::after {
                content: '';
                position: absolute;
                top: 50%;
                right: 12px;
                transform: translateY(-50%);
                display: block;
                width: 16px;
                height: 16px;
                background: url(/assets/images/icon/table-edit-icon.svg) no-repeat center / cover;
              }
            }
            &.text-right {
              .rg-renderer {
                text-align: right !important;
              }
            }
          }
          &:first-child {
            border-left: unset;

            ${(props) =>
              props.$noneIndicator && props.$hasCheckBar !== true
                ? css`
                    border-left: 1px solid #ededf3;
                  `
                : ''}
            ${(props) =>
              props.$noneIndicator && props.$hasStateBar
                ? css`
                    border-left: unset;
                  `
                : ''}
          }
          ${(props) =>
            props.$editable === true
              ? css`
                  &.line-edit {
                    padding: 0 6px !important;
                    .rg-renderer {
                      min-height: 34px;
                      padding: 7px 10px;
                      border-radius: 4px;
                      border: 1px solid var(--C-Dark-02);
                      background: #fff;
                      white-space: nowrap;
                      justify-content: flex-start;
                    }
                  }
                `
              : ''}

          &.edit-radio-cell {
            .rg-renderer {
              display: flex;
              flex-direction: column;
              .edit-radio-wrap {
                display: flex;
                align-items: center;
                gap: 0 8px;
                .edit-radio {
                  display: block;
                  width: 16px;
                  height: 16px;
                  background: url(/assets/images/icon/radio-default.svg) no-repeat center / cover;
                  &:checked {
                    background: url(/assets/images/icon/radio-active.svg) no-repeat center / cover;
                  }
                }
                label {
                  display: block;
                  color: #333;
                  font-size: 12px;
                  font-weight: 400;
                  line-height: 23px;
                }
              }
            }
          }
          //placeholder
          &.rg-data-empty-cell {
            .rg-renderer {
              color: #aaa;
              text-align: left !important;
            }
          }

          &.sunday {
            background-color: rgba(255, 93, 93, 0.1) !important;
            .rg-renderer {
              color: var(--Red-01) !important;
            }
            &.rg-merged-cell {
              border-bottom: 1px solid #ededf3 !important;
            }
          }
          &.holyday {
            background-color: rgba(255, 93, 93, 0.1) !important;
            .rg-renderer {
              color: var(--Red-01) !important;
            }
            &-cell {
              background-color: rgba(255, 93, 93, 0.1) !important;
              .rg-renderer {
                display: none;
              }
            }
          }

          &.saturday {
            background-color: rgba(189, 215, 255, 0.3) !important;
            .rg-renderer {
              color: var(--Blue-02) !important;
            }
          }
          &.text-left {
            .rg-renderer {
              text-align: left !important;
            }
          }
          &.text-right {
            .rg-renderer {
              text-align: right !important;
            }
          }

          &.text-red {
            .rg-renderer {
              color: var(--Red-01, #ff5d5d);
            }
          }
          &.rgsample-bold-column {
            .rg-renderer {
              font-weight: 700;
            }
          }
          &.button {
            .rg-button-renderer-button {
              width: fit-content;
              height: 24px;
              margin: 0 auto;
              padding: 0 8px;
              border-radius: 4px;
              border: 1px solid var(--C-Dark-04);
              visibility: visible !important;
              background: #fff !important;
              color: var(--Cool-Dark-10);
              font-size: 12px;
              font-weight: 700;
              line-height: 1.2;
            }
            &.download {
              .rg-button-renderer-button {
                position: relative;
                display: flex !important;
                align-items: center;
                gap: 0 4px;
                padding: 0 8px 0 26px;
                &::before {
                  content: '';
                  position: absolute;
                  top: 50%;
                  left: 6px;
                  transform: translateY(-50%);
                  width: 16px;
                  height: 16px;
                  background: url(/assets/images/icon/download.svg) no-repeat center / cover;
                }
              }
            }
            &.text-btn {
              .rg-button-renderer-button {
                color: var(--Blue-01);
                font-size: 12px;
                font-weight: 400;
                line-height: 1.2;
                text-decoration-line: underline;
              }
            }
          }

          .rg-check-renderer {
            input {
              display: block;
              width: 16px;
              height: 16px;
              background: url(/assets/images/icon/checkbox-default.svg) no-repeat center / cover;
              cursor: pointer;
              &:checked {
                background: url(/assets/images/icon/checkbox-active.svg) no-repeat center / cover;
              }
            }
          }
          .rg-renderer {
            width: 100%;
            text-align: center !important;
            padding: 0px 12px;
            color: #333;
            vertical-align: middle;
            max-width: unset !important;
            font-size: 12px;
            font-weight: 400;
            line-height: 1.2;

            .table-circle {
              width: 16px;
              height: 16px;
              border: 3px solid var(--Blue-04);
              border-radius: 50%;
            }
          }
          .table-btn {
            display: block;
            width: fit-content;
            height: 24px;
            padding: 0 8px;
            margin: 0 auto;
            border: 1px solid #000;
            border-radius: 4px;
            border: 1px solid var(--C-Dark-04);
            color: var(--Cool-Dark-10);
            font-size: 12px;
            font-weight: 700;
            line-height: 1.2;
          }
        }
      }
    }
  }

  // 선택 영역 스타일
  .rg-rowfocus {
    background: rgba(189, 215, 255, 0.3) !important;
    ${(props) =>
      props.$calendarType &&
      css`
        background: unset !important;
      `}
  }

  // 병합 데이터 스타일
  .rg-data-row {
    .rg-data-cell {
    }
    .rg-renderer {
    }
  }
  .rg-footer {
    .rg-footer-cell {
      background: var(--C-Dark-02);
      text-align: center;
      border: 1px solid #d7d7de !important;
      border-right: unset !important;
      vertical-align: middle;
      font-size: 12px;
      font-weight: 400;
      color: #333;
      &:first-child {
        border-left: unset !important;
        ${(props) =>
          props.$footerColor === 'blue' &&
          css`
            border-left: unset !important;
          `}
      }
      &:last-child {
        border-right: 1px solid #d7d7de !important;
      }
      &.text-right {
        text-align: right;
      }
      &.text-red {
        color: var(--Red-01, #ff5d5d);
      }
      .rg-footer-renderer {
        padding: 0 12px;
        font-weight: 700;
        line-height: 1.2;
      }
    }
    tbody {
      tr {
        &:nth-child(n + 2) {
          .rg-footer-cell {
            border-top: unset;
          }
        }
      }
    }
  }

  ${(props) =>
    props.$footerColor === 'blue' &&
    css`
      .rg-footer {
        .rg-footer-cell {
          background: #bdd7ff;
          border-right: 1px solid #99c1ff !important;
        }
      }
      .rg-footer-cell,
      .rg-rowindicator-foot {
        background: #bdd7ff;
        border-right: 1px solid #99c1ff !important;
      }
    `}
  .rg-hscrollbar {
    .rg-scrolltrack {
      background-color: #ededf3;
    }
    .rg-scrollthumb {
      top: 1px !important;
      height: 6px !important;
      border-radius: 3px;
      background-color: #99a3ff;
    }
  }
  .rg-vscrollbar {
    .rg-scrolltrack {
      background-color: #ededf3;
    }
    .rg-scrollthumb {
      left: 1px !important;
      width: 6px !important;
      border-radius: 3px;
      background-color: #99a3ff;
    }
  }
  .rg-scrolledge {
    background-color: #ededf3;
  }

  .rg-focus {
    /* 포커스 셀의 색깔 변경 */
    background-color: unset !important;
    border: unset !important;
  }

  /* ... */

  .rg-selection-cell {
    /* 선택 영역의 색깔 변경 */
    background: unset !important;
    color: inherit;
  }

  .rg-selection {
    ${(props) =>
      props.$selectionStyle
        ? css`
            background: rgba(189, 215, 255, 0.3) !important;
            border: unset !important;
          `
        : css`
            background-color: unset !important;
            border: unset !important;
          `}
  }
  .rg-focused-cell {
    background-color: unset !important;
  }

  .rg-focused-row {
    background: unset !important;
  }

  // 열 고정 스타일 제거
  .rg-fixed-body {
    tr {
      &:first-child {
        td {
          border-top: 1px solid #d7d7de;
        }
      }
    }
    tr {
      td {
        height: 36px;
        vertical-align: middle;
        border-bottom: 1px solid #ededf3;
        border-right: 1px solid #ededf3;
        background: #fff;
      }
    }
  }
  .rg-fixed-footer {
    tr {
      td {
        &:first-child {
        }
        background: var(--C-Dark-02);
        text-align: center;
        border: 1px solid #d7d7de !important;
        border-left: unset !important;
        vertical-align: middle;
        font-size: 12px;
        font-weight: 700;
        color: #333;
      }
    }
  }
  .rg-fixed-column-bar {
    /* display: none; */
  }

  .rg-button-calendar {
    background: url(/assets/images/icon/calendar.svg) no-repeat center / cover !important;
  }

  .rg-tooltip {
    background-color: #fff;
    border: unset;
    border-radius: 2px;
  }
`;
