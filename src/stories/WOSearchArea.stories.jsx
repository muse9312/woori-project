// 컴포넌트 import
import WOComboBox from '../components/common/WOComboBox';
import WODatePicker from '../components/common/WODatePicker';
import WOFormColumn from '../components/common/WOFormColumn';
import WOSearchArea, { ColumnTitle, ColumnWrap } from '../components/common/WOSearchArea';

const WOSearchAreaStory = {
  // 좌측 메뉴 depth
  title: 'Form/WOSearchArea',
  // 컴포넌트 명
  component: WOSearchArea,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {
    // props 명
    radioList: {
      control: 'array',
      description: ' WOSearchArea radioList 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'array', required: true },
    },
    noneBtn: {
      control: 'boolean',
      description: 'WOSearchArea 조회 버튼 제거 props 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
    noneToggleBtn: {
      control: 'boolean',
      description: 'WOSearchArea Toggle 버튼 제거 props 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
    type: {
      control: 'text',
      description: 'WOSearchArea type 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
    btnText: {
      control: 'text',
      description: 'WOSearchArea btnText 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
  },
};

export default WOSearchAreaStory;

export const Default = () => {
  return (
    <WOSearchArea>
      <WOFormColumn>
        <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
      </WOFormColumn>
      <WOFormColumn>
        <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 강동구청' }]} isAutoComplete={true} />
      </WOFormColumn>
      <WOFormColumn>
        <WODatePicker label={'기준일자'} value={'2023.06.14'} />
      </WOFormColumn>
      <WOFormColumn>
        <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
      </WOFormColumn>
      <WOFormColumn>
        <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 강동구청' }]} isAutoComplete={true} />
      </WOFormColumn>
      <WOFormColumn>
        <WODatePicker label={'기준일자'} value={'2023.06.14'} />
      </WOFormColumn>
    </WOSearchArea>
  );
};

export const NoneToggleBtn = () => {
  return (
    <WOSearchArea noneToggleBtn={true}>
      <WOFormColumn>
        <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
      </WOFormColumn>
      <WOFormColumn>
        <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 강동구청' }]} isAutoComplete={true} />
      </WOFormColumn>
      <WOFormColumn>
        <WODatePicker label={'기준일자'} value={'2023.06.14'} />
      </WOFormColumn>
      <WOFormColumn>
        <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
      </WOFormColumn>
      <WOFormColumn>
        <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 강동구청' }]} isAutoComplete={true} />
      </WOFormColumn>
      <WOFormColumn>
        <WODatePicker label={'기준일자'} value={'2023.06.14'} />
      </WOFormColumn>
    </WOSearchArea>
  );
};
export const TypeModal = () => {
  return (
    <WOSearchArea type='modal'>
      <WOFormColumn>
        <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
      </WOFormColumn>
      <WOFormColumn>
        <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 강동구청' }]} isAutoComplete={true} />
      </WOFormColumn>
      <WOFormColumn>
        <WODatePicker label={'기준일자'} value={'2023.06.14'} />
      </WOFormColumn>
      <WOFormColumn>
        <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
      </WOFormColumn>
      <WOFormColumn>
        <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 강동구청' }]} isAutoComplete={true} />
      </WOFormColumn>
      <WOFormColumn>
        <WODatePicker label={'기준일자'} value={'2023.06.14'} />
      </WOFormColumn>
    </WOSearchArea>
  );
};
export const TypeModalNoneBtn = () => {
  return (
    <WOSearchArea noneBtn={true} type='modal'>
      <WOFormColumn>
        <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
      </WOFormColumn>
      <WOFormColumn>
        <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 강동구청' }]} isAutoComplete={true} />
      </WOFormColumn>
      <WOFormColumn>
        <WODatePicker label={'기준일자'} value={'2023.06.14'} />
      </WOFormColumn>
      <WOFormColumn>
        <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
      </WOFormColumn>
      <WOFormColumn>
        <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 강동구청' }]} isAutoComplete={true} />
      </WOFormColumn>
      <WOFormColumn>
        <WODatePicker label={'기준일자'} value={'2023.06.14'} />
      </WOFormColumn>
    </WOSearchArea>
  );
};
export const TypeModalNoneBtnTitle = () => {
  return (
    <div style={{ width: '1700px', padding: '0 100px' }}>
      <WOSearchArea noneBtn={true} type='modal'>
        <ColumnWrap>
          <ColumnTitle>사업자 정보</ColumnTitle>
          <WOFormColumn>
            <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
          </WOFormColumn>
          <WOFormColumn>
            <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 강동구청' }]} isAutoComplete={true} />
          </WOFormColumn>
        </ColumnWrap>
        <ColumnWrap>
          <ColumnTitle>회계/감사담당자 정보</ColumnTitle>
          <WOFormColumn>
            <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
          </WOFormColumn>
          <WOFormColumn>
            <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 강동구청' }]} isAutoComplete={true} />
          </WOFormColumn>
        </ColumnWrap>
      </WOSearchArea>
    </div>
  );
};
export const TypeModalNoneBtnTitleSub = () => {
  return (
    <div style={{ width: '1700px', padding: '0 100px' }}>
      <WOSearchArea noneBtn={true} type='modal'>
        <WOFormColumn>
          <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
        </WOFormColumn>
        <WOFormColumn>
          <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 강동구청' }]} isAutoComplete={true} />
        </WOFormColumn>
        <ColumnWrap $type='sub'>
          <ColumnTitle>카카오톡 수신여부</ColumnTitle>
          <WOFormColumn>
            <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 강동구청' }]} isAutoComplete={true} />
            <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
          </WOFormColumn>
        </ColumnWrap>
        <ColumnWrap $type='sub'>
          <ColumnTitle>PUSH 수신여부</ColumnTitle>
          <WOFormColumn>
            <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 강동구청' }]} isAutoComplete={true} />
            <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
          </WOFormColumn>
        </ColumnWrap>
      </WOSearchArea>
    </div>
  );
};
export const BtnText = () => {
  return (
    <div style={{ width: '1700px', padding: '0 100px' }}>
      <WOSearchArea btnText='복호화 처리'>
        <WOFormColumn>
          <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
        </WOFormColumn>
        <WOFormColumn>
          <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 강동구청' }]} isAutoComplete={true} />
        </WOFormColumn>
        <WOFormColumn>
          <WODatePicker label={'기준일자'} value={'2023.06.14'} />
        </WOFormColumn>
        <WOFormColumn>
          <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
        </WOFormColumn>
        <WOFormColumn>
          <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 강동구청' }]} isAutoComplete={true} />
        </WOFormColumn>
        <WOFormColumn>
          <WODatePicker label={'기준일자'} value={'2023.06.14'} />
        </WOFormColumn>
      </WOSearchArea>
    </div>
  );
};
