import WOCheckbox from '../components/common/WOCheckbox';
import WOMenuPermissionTable, { TableWrapper } from '../components/common/WOMenuPermissionTable';
const WOMenuPermissionTableStory = {
  title: 'Table/WOMenuPermissionTable',
  component: WOMenuPermissionTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default WOMenuPermissionTableStory;

export const Default = () => {
  return (
    <WOMenuPermissionTable>
      <colgroup>
        <col />
        <col width={'53px'} />
        <col width={'53px'} />
      </colgroup>
      <thead>
        <tr>
          <th>세입</th>
          <th>
            조회
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </th>
          <th>
            등록
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>세입계좌현황</td>
          <td></td>
          <td></td>
        </tr>
        <tr className='tab-item'>
          <td>계좌현황</td>
          <td rowSpan={5}>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
          <td rowSpan={5}>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
        </tr>
        <tr className='tab-item'>
          <td>거래내역장</td>
        </tr>
        <tr className='tab-item'>
          <td>거래명세</td>
        </tr>
        <tr className='tab-item'>
          <td>구좌경정/과오납</td>
        </tr>
        <tr className='tab-item'>
          <td>입출금 집계</td>
        </tr>

        <tr>
          <td>세입이체일정표</td>
          <td>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
          <td>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>보조금교부내역조회</td>
          <td>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
          <td>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>공금연동 보통예금 계좌조회</td>
          <td>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
          <td>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>희망번호통장 표지 출력</td>
          <td>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
          <td>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>공금예금 이자 조회</td>
          <td>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
          <td>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>이자결산 사전검증</td>
          <td>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
          <td>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>보통예금 이자 자동이체 조회</td>
          <td>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
          <td>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
        </tr>
        <tr>
          <td>세입거래내역장 조회(과거)</td>
          <td>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
          <td>
            <WOCheckbox
              blind
              type='table'
              item={{
                id: 'input01-02',
                label: 'Label',
                name: 'input01-01',
              }}
            />
          </td>
        </tr>
      </tbody>
    </WOMenuPermissionTable>
  );
};
export const TableWrap = () => {
  return (
    <TableWrapper>
      <WOMenuPermissionTable>
        <colgroup>
          <col />
          <col width={'53px'} />
          <col width={'53px'} />
        </colgroup>
        <thead>
          <tr>
            <th>세입</th>
            <th>
              조회
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </th>
            <th>
              등록
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>세입계좌현황</td>
            <td></td>
            <td></td>
          </tr>
          <tr className='tab-item'>
            <td>계좌현황</td>
            <td rowSpan={5}>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
            <td rowSpan={5}>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
          </tr>
          <tr className='tab-item'>
            <td>거래내역장</td>
          </tr>
          <tr className='tab-item'>
            <td>거래명세</td>
          </tr>
          <tr className='tab-item'>
            <td>구좌경정/과오납</td>
          </tr>
          <tr className='tab-item'>
            <td>입출금 집계</td>
          </tr>

          <tr>
            <td>세입이체일정표</td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
          </tr>
          <tr>
            <td>보조금교부내역조회</td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
          </tr>
          <tr>
            <td>공금연동 보통예금 계좌조회</td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
          </tr>
          <tr>
            <td>희망번호통장 표지 출력</td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
          </tr>
          <tr>
            <td>공금예금 이자 조회</td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
          </tr>
          <tr>
            <td>이자결산 사전검증</td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
          </tr>
          <tr>
            <td>보통예금 이자 자동이체 조회</td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
          </tr>
          <tr>
            <td>세입거래내역장 조회(과거)</td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
          </tr>
        </tbody>
      </WOMenuPermissionTable>
      <WOMenuPermissionTable>
        <colgroup>
          <col />
          <col width={'53px'} />
          <col width={'53px'} />
        </colgroup>
        <thead>
          <tr>
            <th>세출</th>
            <th>
              조회
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </th>
            <th>
              등록
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>세출계좌 현황</td>
            <td></td>
            <td></td>
          </tr>
          <tr className='tab-item'>
            <td>계좌현황</td>
            <td rowSpan={5}>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
            <td rowSpan={5}>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
          </tr>
          <tr className='tab-item'>
            <td>거래내역장</td>
          </tr>
          <tr className='tab-item'>
            <td>거래명세</td>
          </tr>
          <tr className='tab-item'>
            <td>비목별지급내역</td>
          </tr>
          <tr className='tab-item'>
            <td>자금현황표</td>
          </tr>

          <tr>
            <td>자금배정내역</td>
            <td></td>
            <td></td>
          </tr>
          <tr className='tab-item'>
            <td>자금배정내역</td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
          </tr>
          <tr>
            <td>반납(여입) 거래명세</td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
          </tr>
          <tr>
            <td>회계별 전기관 잔액</td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
          </tr>
          <tr>
            <td>정부보관금 내역조회</td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
          </tr>
          <tr>
            <td>세출거래내역장 조회(과거)</td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
            <td>
              <WOCheckbox
                blind
                type='table'
                item={{
                  id: 'input01-02',
                  label: 'Label',
                  name: 'input01-01',
                }}
              />
            </td>
          </tr>
        </tbody>
      </WOMenuPermissionTable>
    </TableWrapper>
  );
};
