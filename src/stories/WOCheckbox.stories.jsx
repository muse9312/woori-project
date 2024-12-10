import WOCheckbox from '../components/common/WOCheckbox';
import WOFormColumn from '../components/common/WOFormColumn';
import WOLabel from '../components/common/WOLabel';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const WOCheckBox = {
  title: 'Form/WOCheckbox',
  component: WOCheckbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    item: {
      control: 'object',
      description: 'CheckBox Name,id,label 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'object', required: true },
    },

    blind: {
      control: 'boolean',
      description: 'CheckBox Label blind 여부 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },

    disabled: {
      control: 'boolean',
      description: 'CheckBox disabled 상태 여부 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
    isChecked: {
      control: 'boolean',
      description: 'CheckBox checked 여부 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
    flex: {
      control: 'select',
      options: ['column', undefined],
      description: 'CheckBox 정렬 방식 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
    readonly: {
      control: 'boolean',
      description: 'CheckBox readonly 상태 여부 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
    titleArea: {
      control: 'boolean',
      description: 'CheckBox SearchArea 내부 사용시 적용 props 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
  },
};

export default WOCheckBox;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-02',
      label: 'Label',
    },
    blind: true,
    disabled: undefined,
    isChecked: undefined,
    flex: undefined,
  },
};

export const Checked = {
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-03',
      label: 'Label',
    },
    blind: true,
    disabled: undefined,
    isChecked: true,
    flex: undefined,
  },
};

export const Disabled = {
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-04',
      label: 'Label',
    },
    blind: true,
    disabled: true,
    isChecked: undefined,
    flex: undefined,
  },
};

export const CheckedDisabled = {
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-04',
      label: 'Label',
    },
    blind: true,
    disabled: true,
    isChecked: true,
    flex: undefined,
  },
};
export const ReadOnly = {
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-05',
      label: 'Label',
    },
    blind: true,
    readonly: true,
    isChecked: undefined,
    flex: undefined,
  },
};
export const ReadOnlyChecked = {
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-06',
      label: 'Label',
    },
    blind: true,
    readonly: true,
    isChecked: true,
    flex: undefined,
  },
};

export const Label = {
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-07',
      label: 'Label',
    },
  },
};
export const LabelChecked = {
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-08',
      label: 'Label',
    },
  },
};
export const LabelDisabled = {
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-09',
      label: 'Label',
    },
    disabled: true,
    isChecked: undefined,
    flex: undefined,
  },
};
export const TitleArea = {
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-10',
      label: 'Label',
    },
    titleArea: true,
  },
};

export const Column = () => {
  return (
    <WOFormColumn direction='column'>
      <WOLabel label={'Label'} />
      <WOCheckbox
        blind
        item={{
          id: 'input01-01',
          label: 'Label',
          name: 'input01-11',
        }}
      />
    </WOFormColumn>
  );
};
