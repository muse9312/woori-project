import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import WOCheckbox from '../common/WOCheckbox';
import WOToggleButton from '../common/WOToggleButton';

const WOWorkMenuItem = ({ title, hasChildren, children, type, id }) => {
  const [depthOepn, setDepthOpen] = useState(false);

  const handelDepthOpen = () => {
    setDepthOpen(!depthOepn);
  };

  const childrenCount = React.Children.count(children);

  return (
    <Wrappper>
      <WorkMenuItem onClick={hasChildren ? handelDepthOpen : () => {}}>
        <LeftArea>
          <Icon $depthOepn={depthOepn} $hasChildren={hasChildren} $type={type} />
          <Title>{title}</Title>
        </LeftArea>
        <RightArea>
          {!hasChildren && (
            <>
              {type === 'tab' ? (
                <>
                  <Line />
                  <Line />
                </>
              ) : (
                <>
                  <WOCheckbox
                    blind
                    item={{
                      id: { id },
                      name: 'input01-01',
                    }}
                  />
                  <WOToggleButton icon='star' />
                </>
              )}
            </>
          )}
        </RightArea>
      </WorkMenuItem>
      {children && (
        <WorkMenuChilren $depthOepn={depthOepn} $childrenCount={childrenCount - 1}>
          {children}
        </WorkMenuChilren>
      )}
    </Wrappper>
  );
};

export default WOWorkMenuItem;

const Wrappper = styled.div`
  height: auto;
`;

const WorkMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 32px;
  padding: 0 16px;

  ${(props) =>
    props.$hasChildren &&
    css`
      height: 36px;
    `}
  &:hover {
    background: var(--C-Dark-01);
  }
`;

const WorkMenuChilren = styled.div`
  height: 0;
  overflow: hidden;
  ${(props) =>
    props.$depthOepn &&
    css`
      height: auto;
    `}
`;

const LeftArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0 6px;
`;
const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0 4px;
`;

const Line = styled.div`
  width: 16px;
  height: 32px;
  background: url(/assets/images/icon/work-line.svg) no-repeat center / cover;
  & + & {
    width: 18px;
  }
`;

const Icon = styled.div`
  width: 16px;
  height: 16px;
  background: url(/assets/images/icon/folder-color.svg) no-repeat center / cover;
  ${(props) =>
    props.$hasChildren &&
    css`
      background: url(/assets/images/icon/folder-color-close.svg) no-repeat center / cover;
      ${props.$depthOepn &&
      css`
        background: url(/assets/images/icon/folder-color-open.svg) no-repeat center / cover;
      `}
    `}
  ${(props) =>
    (props.$type === 'depth' || props.$type === 'tab' || props.$type === 'firstTab') &&
    css`
      background: unset;
    `}
`;

const Title = styled.div`
  color: #333;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  ${(props) =>
    props.$hasChildren &&
    css`
      font-weight: 500;
    `}
`;
