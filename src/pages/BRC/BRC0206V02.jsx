import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { BRC_02_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';

import { TD_BRC0206V02 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';

import WOIcon from '../../components/common/WOIcon';

import WODatePicker from '../../components/common/WODatePicker';

const BRC0206V02 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={BRC_02_breadCrumbList} />
          <S.Title>예산수혜업체 유치</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 예산수혜업체 유치 */}

        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              {/* 기간 */}
              <WOFormColumn>
                <WODatePicker label={'기간'} value={'2023-11-01'} dateFormat='YYYY.MM' />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_BRC0206V02} />
            </S.TableBox>
          </S.ViewArea>
        </S.ContentWrap>
      </S.Main>

      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
            다운로드
          </WOButton>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
            출력
          </WOButton>
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default BRC0206V02;
