import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOComboBox from '../../components/common/WOComboBox';
import { APV_06_breadCrumbList } from '../../data/tableDatas';
import WOCheckbox from '../../components/common/WOCheckbox';
import WOLabel from '../../components/common/WOLabel';
import WORadioGroup from '../../components/common/WORadioGroup';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOTooltip from '../../components/common/WOTooltip';

const ARV0601V01 = () => {
  const [checkedItem, setCheckedItem] = useState(1);

  const handleChangeCheckedItem = (checkedItem) => {
    setCheckedItem(checkedItem.id);
  };

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main $noneFooter={true}>
        <S.TopArea>
          <WOBreacCrumbs list={APV_06_breadCrumbList} />
          <S.Title>공금예금 이자 조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>

              <WOFormColumn>
                <WOComboBox label={'시세/구세'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'지급/회계연도'} optionList={[{ id: 1, label: '2023' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn col={2}>
                <WORadioGroup
                  onChange={(checkedItem) => handleChangeCheckedItem(checkedItem)}
                  radioItems={[
                    {
                      id: 1,
                      label: '명세조회',
                      name: 'radio01',
                      value: '명세조회',
                    },
                    {
                      id: 2,
                      label: '결산이자명세',
                      name: 'radio01',
                      value: '결산이자명세',
                    },
                    {
                      id: 3,
                      label: '입금내역',
                      name: 'radio01',
                      value: '입금내역',
                    },
                  ]}
                  defaultCheckedValue={{
                    id: 1,
                    label: '명세조회',
                    name: 'radio01',
                    value: '명세조회',
                  }}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label={'지급월'}
                  optionList={[{ id: 1, label: '2023.12' }]}
                  isAutoComplete={true}
                  disabled={checkedItem === 2 || checkedItem === 3 ? true : false}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label={'대행계좌구분'}
                  optionList={[{ id: 1, label: '전체' }]}
                  isAutoComplete={true}
                  disabled={checkedItem === 1 || checkedItem === 3 ? true : false}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'계좌'} optionList={[{ id: 1, label: '세입' }]} isAutoComplete={true} disabled={checkedItem === 1 ? true : false} />
                <WOComboBox optionList={[{ id: 1, label: '1601-54' }]} isAutoComplete={true} disabled={checkedItem === 1 ? true : false} />
              </WOFormColumn>
              <WOFormColumn direction='column'>
                <WOLabel label='기준일자' />
                <WOFormColumn isAlignCenter='center'>
                  <WOCheckbox item={{ id: 1, name: 'checkbox01' }} blind disabled={checkedItem === 1 ? true : false} />
                  <WODateRangePicker periodValue={['2023-11-01', '2023-11-01']} disabled={checkedItem === 1 ? true : false} />
                </WOFormColumn>
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.Notice>
            * 공금예금 이자 조회 용어 설명
            <WOTooltip useIcon width='16' height='16' iconName='tooltip-mark' iconActiveName='tooltip-mark-active' position='bottom'>
              <S.TooltipContent>
                <ul className='tooltip-product-list'>
                  <li className='tooltip-product-item'>명세조회 : 이자 입금월 1월, 3월, 7월 기준으로 세출금액 적수에 대한 이자금액 조회</li>
                  <li className='tooltip-product-item'>결산이자명세 : 세출계좌의 조회일자 기준으로 세출금액 적수에 대한 이자금액 조회</li>
                  <li className='tooltip-product-item'>입금내역 : 세입계좌의 조회일자 기준으로 이자원가계좌(세입계좌)에 입금된 이자금액 조회</li>
                  <li className='tooltip-product-item'>적수 : 일정기간 동안 매일의 최종 잔액에 대한 누적 수 </li>
                </ul>
              </S.TooltipContent>
            </WOTooltip>
          </S.Notice>
          <S.EditorArea>
            <div className='img-wrap'>
              <img src='assets/images/temp/editor-page.svg' alt='임시 에디터' />
            </div>
          </S.EditorArea>
        </S.ContentWrap>
      </S.Main>

      {/* END: Content */}
    </S.Wrap>
  );
};

export default ARV0601V01;
