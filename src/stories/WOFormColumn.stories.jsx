// 컴포넌트 import
import WOComboBox from '../components/common/WOComboBox';
import WODateRangePicker from '../components/common/WODateRangePicker';
import WOFormColumn from '../components/common/WOFormColumn';

/**
```jsx
Form에서 각 input들의 너비를 제어하기 위한 일종의 Grid system 컴포넌트 
```
 **/

const WOFormColumnStory = {
  // 좌측 메뉴 depth
  title: 'Form/WOFormColumn',
  // 컴포넌트 명
  component: WOFormColumn,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '230px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {
    // props 명
    col: {
      control: 'number',
      description: '차지할 input 컬럼 갯수 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'number', required: false },
    },
    width: {
      control: 'number',
      description: '컬럼 너비값 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'number', required: false },
    },
    gridType: {
      control: 'select',
      options: ['type01'],
      description: '각 요소들의 너비가 다른 경우 입니다.',
      defaultValue: { summary: 'button' },
      type: { summary: 'string', required: false },
    },
    isAlignCenter: {
      control: 'boolean',
      description: '여러개의 input이 들어가는 경우 수직정렬 여부 입니다. (기본: end)',
      defaultValue: { summary: false },
      type: { summary: 'boolean', required: false },
    },
    children: {
      description: '보여질 input요소 입니다',
    },
  },
};

export default WOFormColumnStory;

// 죄측 메뉴 컴포넌트 명
export const Default = {
  args: {
    children: (
      <WOComboBox
        label={'부서명'}
        optionList={[
          { id: 1, label: '전체' },
          { id: 2, label: 'option' },
        ]}
      />
    ),
  },
};

export const Col2 = {
  args: {
    col: 2,
    children: (
      <WOComboBox
        label={'부서명'}
        optionList={[
          { id: 1, label: '전체' },
          { id: 2, label: 'option' },
        ]}
      />
    ),
  },
};
export const Col2Input2 = {
  args: {
    col: 2,
    children: (
      <>
        <WOComboBox
          label={'부서명'}
          optionList={[
            { id: 1, label: '전체' },
            { id: 2, label: 'option' },
          ]}
        />
        <WOComboBox
          label={'부서명'}
          optionList={[
            { id: 1, label: '전체' },
            { id: 2, label: 'option' },
          ]}
        />
      </>
    ),
  },
};
export const Width300 = {
  args: {
    width: 300,
    children: (
      <>
        <WOComboBox
          label={'부서명'}
          optionList={[
            { id: 1, label: '전체' },
            { id: 2, label: 'option' },
          ]}
        />
      </>
    ),
  },
};
export const GridType = {
  args: {
    col: 2,
    gridType: 'type01',
    children: (
      <>
        <WOComboBox
          label={'일자구분'}
          optionList={[
            { id: 1, label: '승인일자' },
            { id: 2, label: 'option' },
          ]}
          isAutoComplete={true}
        />
        <WODateRangePicker label={''} periodValue={['2023-11-01', '2023-11-01']} />
      </>
    ),
  },
};
