import WOSubViewTable from '../components/common/WOSubViewTable';

/**
## 데이터 형식 예시
```jsx

export const subViewTableData = [
  {
    id: '1',
    title: '당월누계',
    text: ' = 전월누계+당월분-당월반납',
  },
  {
    id: '2',
    title: '잔여 한도',
    text: '10,000,000',
  },
  {
    id: '3',
    title: '확인유무',
    text: '불일치',
  },
  {
    id: '4',
    title: '우리은행',
    text: '강동구청지점',
  },
];

```
 **/

const WOSubTableStory = {
  title: 'Table/WOSubViewTable',
  component: WOSubViewTable,
  parameters: {},
  decorators: [
    (Story) => (
      <div style={{ width: '1784px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    tableData: {
      control: 'array',
      description: 'Table TableData 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'array', required: true },
    },
  },
};

export default WOSubTableStory;
export const Default = () => {
  return (
    <>
      <WOSubViewTable
        tableData={[
          {
            id: '1',
            title: '당월누계',
            text: ' = 전월누계+당월분-당월반납',
          },
          {
            id: '2',
            title: '잔여 한도',
            text: '10,000,000',
          },
          {
            id: '3',
            title: '확인유무',
            text: '불일치',
          },
          {
            id: '4',
            title: '우리은행',
            text: '강동구청지점',
          },
        ]}
        type='page'
      />
    </>
  );
};
