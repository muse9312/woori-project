import WOTable from '../components/common/WOTable';
import { TD_SYS0101M01_01 } from '../data/response';
import { TD_AXP0101V01, TD_AXP0101V04, TD_AXP0501V01 } from '../data/tableDatas';
const WOTableStory = {
  title: 'Table/WOTable',
  component: WOTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    gridData: {
      control: 'array',
      description: 'Table GridData 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'array', required: true },
    },
    hasFooter: {
      control: 'boolean',
      description: 'Table Footer 여부 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
    footerColor: {
      control: 'select',
      options: ['blue', undefined],
      description: 'Table footerColor 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
    hasCheckBar: {
      control: 'boolean',
      description: 'Table 체크박스 여부 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
    checkBarHeader: {
      control: 'text',
      description: 'Table checkBarHeader Text 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
    checkBarWidth: {
      control: 'number',
      description: 'Table checkBarWidth 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'number', required: false },
    },
    hasAllCheckbox: {
      control: 'boolean',
      description: 'Table header 전체 선택 체크박스 여부 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
    hasStateBar: {
      control: 'boolean',
      description: 'Table 상태바 여부 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
    stateBarHeader: {
      control: 'text',
      description: 'Table 상태바 header Text 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
    indicatorReverse: {
      control: 'boolean',
      description: 'Table indicator 위치 변경 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
    noneIndicator: {
      control: 'boolean',
      description: 'Table indicator 없을시 true 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
    footerRow: {
      control: 'number',
      description: 'Table footer 행 수 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'number', required: false },
    },
    type: {
      control: 'text',
      description: 'Table type 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
  },
};

export default WOTableStory;

export const Default = () => {
  return (
    <div style={{ width: '1200px', height: '300px' }}>
      <WOTable tableData={TD_AXP0101V01} />
    </div>
  );
};
export const Footer = () => {
  return (
    <div style={{ width: '1200px', height: '300px' }}>
      <WOTable tableData={TD_AXP0501V01} hasFooter={true} />
    </div>
  );
};
export const FooterColor = () => {
  return (
    <div style={{ width: '1200px', height: '300px' }}>
      <WOTable tableData={TD_AXP0501V01} hasFooter={true} footerColor='blue' />
    </div>
  );
};
export const HasCheckBar = () => {
  return (
    <div style={{ width: '1600px', height: '300px' }}>
      <WOTable tableData={TD_AXP0501V01} hasFooter={true} hasCheckBar={true} checkBarHeader='체크' checkBarWidth={60} />
    </div>
  );
};
export const IndicatorReverse = () => {
  return (
    <div style={{ width: '1600px', height: '300px' }}>
      <WOTable tableData={TD_AXP0501V01} hasFooter={true} hasCheckBar={true} checkBarHeader='체크' checkBarWidth={60} indicatorReverse={true} />
    </div>
  );
};
export const NoneIndicator = () => {
  return (
    <div style={{ width: '1600px', height: '300px' }}>
      <WOTable tableData={TD_AXP0101V04} hasFooter={true} noneIndicator={true} />
    </div>
  );
};
export const FooterRow = () => {
  return (
    <div style={{ width: '1600px', height: '300px' }}>
      <WOTable tableData={TD_AXP0101V04} hasFooter={true} noneIndicator={true} footerRow={2} />
    </div>
  );
};
export const Editable = () => {
  return (
    <div style={{ width: '1600px', height: '300px' }}>
      <WOTable tableData={TD_AXP0101V01} hasFooter={true} editable={true} />
    </div>
  );
};
export const StateBar = () => {
  return (
    <div style={{ width: '1600px', height: '300px' }}>
      <WOTable tableData={TD_AXP0101V01} hasFooter={true} hasStateBar={true} stateBarHeader='수정' editable={true} />
    </div>
  );
};
/**
```jsx
그리드 기본 CheckBar 위치가 아닌 다른곳에서 사용시

fields 데이터 체크박스 컬럼   { fieldName: 'column07', dataType: Boolean }, 데이터 타입 추가 후


컬럼 데이터에
columns:
    {
      fieldName: 'column07',
      type: 'data',
      width: '200',
      fillWidth: 0,
      header: '사용여부',
      renderer: {
        type: 'check',
      },
    },

renderer type 추가
```
 **/

export const Check = () => {
  return (
    <div style={{ width: '1600px', height: '300px' }}>
      <WOTable tableData={TD_SYS0101M01_01} />
    </div>
  );
};
export const HasAllCheckbox = () => {
  return (
    <div style={{ width: '1600px', height: '300px' }}>
      <WOTable tableData={TD_SYS0101M01_01} hasCheckBar={true} hasAllCheckbox={true} />
    </div>
  );
};
export const ModalTable = () => {
  return (
    <div style={{ width: '1600px', height: '300px' }}>
      <WOTable tableData={TD_SYS0101M01_01} hasCheckBar={true} hasAllCheckbox={true} type='modal' />
    </div>
  );
};
