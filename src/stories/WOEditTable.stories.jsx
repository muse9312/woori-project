import WOComboBox from '../components/common/WOComboBox';
import WOEditTable from '../components/common/WOEditTable';
import WOInput from '../components/common/WOInput';

const WOEditTableStory = {
  title: 'Table/WOEditTable',
  component: WOEditTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    scroll: {
      control: 'select',
      options: ['x', 'y', undefined],
      description: 'table 스크롤 방향 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
  },
};

export default WOEditTableStory;

export const Default = () => {
  return (
    <div style={{ width: '800px' }}>
      <WOEditTable>
        <caption>O2UX 퍼블리싱 프로젝트 환경</caption>
        <tbody>
          <tr>
            <th>본인(SMS/카카오톡,UMS) 수신여부 설정</th>
            <td>내용</td>
          </tr>
          <tr>
            <th>항목</th>
            <td>내용</td>
          </tr>
          <tr>
            <th>항목</th>
            <td>내용</td>
          </tr>
        </tbody>
      </WOEditTable>
    </div>
  );
};
export const Input = () => {
  return (
    <div style={{ width: '800px' }}>
      <WOEditTable>
        <caption>O2UX 퍼블리싱 프로젝트 환경</caption>
        <tbody>
          <tr>
            <th>항목</th>
            <td>
              <WOInput id='input01' name='input01' placeholder='placeholder' blind={true}></WOInput>
            </td>
          </tr>
          <tr>
            <th>항목</th>
            <td>
              <WOComboBox optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
            </td>
          </tr>
          <tr>
            <th>항목</th>
            <td>
              <div className='flex-box'>
                <WOInput id='input01' name='input01' placeholder='placeholder' blind={true}></WOInput>
                <WOInput id='input01' name='input01' placeholder='placeholder' blind={true}></WOInput>
              </div>
            </td>
          </tr>
        </tbody>
      </WOEditTable>
    </div>
  );
};
export const ColSpan = () => {
  return (
    <div style={{ width: '800px' }}>
      <WOEditTable>
        <caption>O2UX 퍼블리싱 프로젝트 환경</caption>
        <tbody>
          <tr>
            <th>항목</th>
            <td colSpan={3}>항목</td>
          </tr>
          <tr>
            <th>항목</th>
            <td colSpan={3}>
              <WOInput id='input01' name='input01' placeholder='placeholder' blind={true}></WOInput>
            </td>
          </tr>
          <tr>
            <th>항목</th>
            <td colSpan={3}>
              <WOComboBox optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
            </td>
          </tr>
          <tr>
            <th>항목</th>
            <td>
              <div className='flex-box'>
                <WOInput id='input01' name='input01' placeholder='placeholder' blind={true}></WOInput>
                <WOInput id='input01' name='input01' placeholder='placeholder' blind={true}></WOInput>
              </div>
            </td>
            <th>항목</th>
            <td>
              <div className='flex-box'>
                <WOInput id='input01' name='input01' placeholder='placeholder' blind={true}></WOInput>
                <WOInput id='input01' name='input01' placeholder='placeholder' blind={true}></WOInput>
              </div>
            </td>
          </tr>
        </tbody>
      </WOEditTable>
    </div>
  );
};
