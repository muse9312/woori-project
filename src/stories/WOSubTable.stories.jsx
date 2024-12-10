import WOSubTable from '../components/common/WOSubTable';
import { TD_ARV0101V01_Sub01 } from '../data/tableDatas';

const WOSubTableStory = {
  title: 'Table/WOSubTable',
  component: WOSubTable,
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
    type: {
      control: 'select',
      options: ['page', undefined],
      description: 'Table type 입니다. ( 모달 내부 아닌 페이지 에서 사용시 추가 )',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
  },
};

export default WOSubTableStory;

export const Default = () => {
  return (
    <>
      <WOSubTable tableData={TD_ARV0101V01_Sub01} />
    </>
  );
};
export const PageType = () => {
  return (
    <>
      <WOSubTable tableData={TD_ARV0101V01_Sub01} type='page' />
    </>
  );
};
