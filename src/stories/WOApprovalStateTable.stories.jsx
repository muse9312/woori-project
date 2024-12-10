import WOApprovalStateTable from '../components/common/WOApprovalStateTable';
import { test1 } from '../data//sewonTableDatas';

const WOApprovalStateTableStory = {
  title: 'Table/WOApprovalStateTable',
  component: WOApprovalStateTable,
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
      description: 'Table type 입니다. [ ex) type이 modal 일때, min-width: auto] ',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
    background: {
      control: 'boolean',
      description: 'table 및 title padding 없을시 true 입니다 ',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
    disabled: {
      control: 'boolean',
      description: 'table 비활성화시 true 입니다. ',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
  },
};

export default WOApprovalStateTableStory;

export const Default = () => {
  return (
    <>
      <WOApprovalStateTable title={'결제진행상태'} tableData={test1} />
    </>
  );
};
export const type = () => {
  return (
    <>
      <WOApprovalStateTable title={'결제진행상태'} tableData={test1} type={'modal'} />
    </>
  );
};

export const disabled = () => {
  return (
    <>
      <WOApprovalStateTable title={'결제진행상태'} tableData={test1} disabled />
    </>
  );
};
