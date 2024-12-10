import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { SYS_01_breadCrumbList, TD_SYS0108M01_Sub01 } from '../../data/response';
import WOInput from '../../components/common/WOInput';
import WOSubTable from '../../components/common/WOSubTable';
const SYS0108M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main $noneFooter={true} $heightAuto={true}>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_01_breadCrumbList} />
          <S.Title>문서위변조확인</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea btnText='복호화 처리'>
              <WOFormColumn gridType='full'>
                <WOInput label='암호문 입력' placeholder='' />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.ViewArea $height={'108px'}>
            <WOSubTable tableData={TD_SYS0108M01_Sub01} />
          </S.ViewArea>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
    </S.Wrap>
  );
};

export default SYS0108M01;
