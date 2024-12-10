import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import WORadio from '../common/WORadio';

const WOAreaMenuItem = ({ title, hasChildren, children, type, id }) => {
  const [depthOepn, setDepthOpen] = useState(false);

  const handelDepthOpen = () => {
    setDepthOpen(!depthOepn);
  };

  const childrenCount = React.Children.count(children);

  return (
    <Wrappper>
      <WorkMenuItem onClick={hasChildren ? handelDepthOpen : () => {}}>
        {type === 'depth3' ? (
          <LeftArea>
            <Line />
            <WORadio
              blind
              item={{
                id: { id },
              }}
            />
            <Title>{title}</Title>
          </LeftArea>
        ) : (
          <LeftArea>
            <Icon $depthOepn={depthOepn} $hasChildren={hasChildren} $type={type} />
            <WORadio
              blind
              item={{
                id: { id },
              }}
            />
            <Title>{title}</Title>
          </LeftArea>
        )}
      </WorkMenuItem>
      {children && (
        <WorkMenuChildren $depthOepn={depthOepn} $childrenCount={childrenCount}>
          {children}
        </WorkMenuChildren>
      )}
    </Wrappper>
  );
};

export default WOAreaMenuItem;

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
  &:hover {
    background: var(--C-Dark-01);
  }
`;

const WorkMenuChildren = styled.div`
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

const Line = styled.div`
  width: 16px;
  height: 32px;
  margin-left: 22px;
  background: url(/assets/images/icon/work-line.svg) no-repeat center / cover;
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
    props.$type === 'depth2' &&
    css`
      background: url(/assets/images/icon/folder-white-close.svg) no-repeat center / cover;
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
