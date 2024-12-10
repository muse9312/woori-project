export const treeData = {
  fields: [
    { fieldName: 'treeId', dataType: 'text' },
    { fieldName: 'treeName', dataType: 'text' },
    { fieldName: 'column01', dataType: 'text' },
    { fieldName: 'column02', dataType: 'text' },
    { fieldName: 'column03', dataType: 'text' },
    { fieldName: 'column04', dataType: 'text' },
    { fieldName: 'column05', dataType: 'text' },
  ],
  columns: [
    { fieldName: 'treeId', name: 'treeId', visible: false },
    { fieldName: 'treeName', name: 'treeName', width: 150, header: { text: '업무명/화면명/사용부서명' }, styleName: 'text-left' },
    { fieldName: 'column01', name: 'column01', header: { text: '사용건수' }, styleName: 'text-right' },
    { fieldName: 'column02', name: 'column02', header: { text: '조회' } },
    { fieldName: 'column03', name: 'column03', header: { text: '출력' } },
    { fieldName: 'column04', name: 'column04', header: { text: '엑셀' } },
    { fieldName: 'column04', name: 'column04', header: { text: '저장' } },
  ],
  rows: [
    {
      treeId: '1',
      treeName: '세입업무',
      column01: '0000',
      column02: '0000',
      column03: '0000',
      column04: '0000',
      column05: '0000',
    },
    {
      treeId: '2',
      treeName: '세입계좌조회 거래내역장 (전체)',
      column01: '0000',
      column02: '0000',
      column03: '0000',
      column04: '0000',
      column05: '0000',
    },
    {
      treeId: '2.001',
      treeName: '종로구청',
      column01: '0000',
      column02: '0000',
      column03: '0000',
      column04: '0000',
      column05: '0000',
    },
    {
      treeId: '2.001.001',
      treeName: '건설교통국치수과',
      column01: '0000',
      column02: '0000',
      column03: '0000',
      column04: '0000',
      column05: '0000',
    },
  ],
};

export const TD_SYS0209V01 = {
  fields: [
    { fieldName: 'treeId', dataType: 'text' },
    { fieldName: 'treeName', dataType: 'text' },
    { fieldName: 'column01', dataType: 'text' },
  ],
  columns: [
    { fieldName: 'treeId', name: 'treeId', visible: false },
    { fieldName: 'treeName', name: 'treeName', width: 150, header: { text: '사용부서명' }, styleName: 'text-left' },
    { fieldName: 'column01', name: 'area1code', header: { text: '사용자건수' }, styleName: 'text-right' },
  ],
  rows: [
    {
      treeId: '1',
      treeName: '서울시',
      column01: '00',
    },
    {
      treeId: '2',
      treeName: '종로구청',
      column01: '00',
    },
    {
      treeId: '2.001',
      treeName: '종로 5,6가동',
      column01: '00',
    },
    {
      treeId: '2.002',
      treeName: '의회사무국',
      column01: '00',
    },
    {
      treeId: '2.003',
      treeName: '행정국 재무과',
      column01: '00',
    },
    {
      treeId: '3',
      treeName: '서울시',
      column01: '00',
    },
    {
      treeId: '4',
      treeName: '서울시',
      column01: '00',
    },
  ],
};

export const TD_SYS0307M01 = {
  fields: [
    { fieldName: 'treeId', dataType: 'text' },
    { fieldName: 'treeName', dataType: 'text' },
    { fieldName: 'column01' },
    { fieldName: 'column02' },
    { fieldName: 'column03' },
    { fieldName: 'column04' },
    { fieldName: 'column05' },
    { fieldName: 'column06' },
    { fieldName: 'column07' },
    { fieldName: 'column08' },
    { fieldName: 'column09' },
    { fieldName: 'column10' },
    { fieldName: 'column11' },
  ],
  columns: [
    { fieldName: 'treeId', name: 'treeId', visible: false },
    { fieldName: 'treeName', name: 'treeName', width: 150, header: { text: '시스템명/메뉴명' }, styleName: 'text-left' },
    {
      fieldName: 'column01',
      name: 'column01',
      header: '세무관리',
      renderer: {
        type: 'html',
        callback: function (grid, cell, w, h) {
          var str = cell.value ? '<span class="table-circle"></span>' : '';
          return str;
        },
      },
    },
    {
      fieldName: 'column02',
      name: 'column02',
      header: '자금관리',
      renderer: {
        type: 'html',
        callback: function (grid, cell, w, h) {
          var str = cell.value ? '<span class="table-circle"></span>' : '';
          return str;
        },
      },
    },
    {
      fieldName: 'column03',
      name: 'column03',
      header: '산하기관',
      renderer: {
        type: 'html',
        callback: function (grid, cell, w, h) {
          var str = cell.value ? '<span class="table-circle"></span>' : '';
          return str;
        },
      },
    },
    {
      fieldName: 'column04',
      name: 'column04',
      header: '의사결정지원',
      renderer: {
        type: 'html',
        callback: function (grid, cell, w, h) {
          var str = cell.value ? '<span class="table-circle"></span>' : '';
          return str;
        },
      },
    },
    {
      fieldName: 'column05',
      name: 'column05',
      header: '세무정보',
      renderer: {
        type: 'html',
        callback: function (grid, cell, w, h) {
          var str = cell.value ? '<span class="table-circle"></span>' : '';
          return str;
        },
      },
    },
    {
      fieldName: 'column06',
      name: 'column06',
      header: '자금전망',
      renderer: {
        type: 'html',
        callback: function (grid, cell, w, h) {
          var str = cell.value ? '<span class="table-circle"></span>' : '';
          return str;
        },
      },
    },
    {
      fieldName: 'column07',
      name: 'column07',
      header: '공금영업부',
      renderer: {
        type: 'html',
        callback: function (grid, cell, w, h) {
          var str = cell.value ? '<span class="table-circle"></span>' : '';
          return str;
        },
      },
    },
    {
      fieldName: 'column08',
      name: 'column08',
      header: '시스템관리',
      renderer: {
        type: 'html',
        callback: function (grid, cell, w, h) {
          var str = cell.value ? '<span class="table-circle"></span>' : '';
          return str;
        },
      },
    },
    {
      fieldName: 'column09',
      name: 'column09',
      header: { text: '기금권한', styleName: 'bg-color01' },
      renderer: {
        type: 'html',
        callback: function (grid, cell, w, h) {
          var str = cell.value ? '<span class="table-circle"></span>' : '';
          return str;
        },
      },
    },
    {
      fieldName: 'column10',
      name: 'column10',
      header: { text: '카드권한', styleName: 'bg-color01' },
      renderer: {
        type: 'html',
        callback: function (grid, cell, w, h) {
          var str = cell.value ? '<span class="table-circle"></span>' : '';
          return str;
        },
      },
    },
    {
      fieldName: 'column11',
      name: 'column11',
      header: { text: '환경세권한', styleName: 'bg-color01' },
      renderer: {
        type: 'html',
        callback: function (grid, cell, w, h) {
          var str = cell.value ? '<span class="table-circle"></span>' : '';
          return str;
        },
      },
    },
  ],
  rows: [
    {
      treeId: '1',
      treeName: '세입업무',
      column01: '',
      column02: '',
      column03: '',
      column04: '',
      column05: '',
      column06: '',
      column07: '',
      column08: '',
      column09: '',
      column10: '',
      column11: '',
    },
    {
      treeId: '2',
      treeName: '계좌별',
      column01: true,
      column02: true,
      column03: true,
      column04: true,
      column05: true,
      column06: true,
      column07: true,
      column08: true,
      column09: true,
      column10: true,
      column11: true,
    },
    {
      treeId: '2.001',
      treeName: '세입계좌 거래내역',
      column01: true,
      column02: true,
      column03: true,
      column04: true,
      column05: true,
      column06: true,
      column07: true,
      column08: true,
      column09: true,
      column10: true,
      column11: true,
    },
    {
      treeId: '2.002',
      treeName: '세입계좌 현황',
      column01: true,
      column02: true,
      column03: true,
      column04: true,
      column05: true,
      column06: true,
      column07: true,
      column08: true,
      column09: true,
      column10: true,
      column11: true,
    },
    {
      treeId: '2.003',
      treeName: '세입계좌 거래내역',
      column01: true,
      column02: true,
      column03: true,
      column04: true,
      column05: true,
      column06: true,
      column07: true,
      column08: true,
      column09: true,
      column10: true,
      column11: true,
    },
  ],
  layout: [
    'treeId',
    'treeName',
    {
      name: 'hd_gr01',
      direction: 'horizontal',
      items: ['column01', 'column02', 'column03', 'column04', 'column05', 'column06', 'column07', 'column08'],
      header: {
        text: '사이트',
      },
    },
    {
      name: 'hd_gr02',
      direction: 'horizontal',
      items: ['column09', 'column10', 'column11'],
      header: {
        text: '특화메뉴',
        styleName: 'bg-color01',
      },
    },
  ],
};
export const TD_SYS0309M01 = {
  fields: [
    { fieldName: 'treeId', dataType: 'text' },
    { fieldName: 'treeName', dataType: 'text' },
    { fieldName: 'column01' },
    { fieldName: 'column02' },
    { fieldName: 'column03' },
    { fieldName: 'column04' },
    { fieldName: 'column05' },
    { fieldName: 'column06' },
    { fieldName: 'column07' },
    { fieldName: 'column08' },
    { fieldName: 'column09' },
    { fieldName: 'column10' },
    { fieldName: 'column11' },
    { fieldName: 'column12' },
    { fieldName: 'column13' },
    { fieldName: 'column14' },
    { fieldName: 'column15' },
    { fieldName: 'column16' },
    { fieldName: 'column17' },
    { fieldName: 'column18' },
    { fieldName: 'column19' },
    { fieldName: 'column20' },
  ],
  columns: [
    { fieldName: 'treeId', name: 'treeId', visible: false },
    { fieldName: 'treeName', name: 'treeName', width: 150, header: { text: '메뉴명' }, styleName: 'text-left', editable: false },
    {
      fieldName: 'column01',
      name: 'column01',
      header: '과/동주민센터(전체)',
      width: 130,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '조회'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column02',
      name: 'column02',
      header: '본청 전체 DW 업무(세입/세출)',
      width: 200,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column03',
      name: 'column03',
      header: '서울시 고위직 관리자',
      width: 150,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column04',
      name: 'column04',
      header: '본청 전체 DW 업무(세입)',
      width: 200,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column05',
      name: 'column05',
      header: '본청 전체 DW 업무(세출)',
      width: 200,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column06',
      name: 'column06',
      header: '구청 전체 DW 업무(세입)',
      width: 200,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column07',
      name: 'column07',
      header: '구청 전체 DW 업무(세출)',
      width: 200,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column08',
      name: 'column08',
      header: '구청 전체 DW 업무(세입/세출)',
      width: 200,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column09',
      name: 'column09',
      header: '시/구청 전체 업무(세입/세출)',
      width: 200,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column10',
      name: 'column10',
      header: '시/구청 세출 업무',
      width: 135,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column11',
      name: 'column11',
      header: '과/동주민센터(일상경비)',
      width: 170,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column12',
      name: 'column12',
      header: '과/동주민센터(세출)',
      width: 135,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column13',
      name: 'column13',
      header: '과/동주민센터(세입)',
      width: 135,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column14',
      name: 'column14',
      header: '과/동주민센터(기금)',
      width: 135,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column15',
      name: 'column15',
      header: '이탈금고사용자',
      width: 135,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column16',
      name: 'column16',
      header: '시스템 관리자',
      width: 135,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column17',
      name: 'column17',
      header: '우리은행 관리자',
      width: 135,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column18',
      name: 'column18',
      header: '시스템 모니터링',
      width: 135,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column19',
      name: 'column19',
      header: '우리은행 금고영업점(임원)',
      width: 180,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
    {
      fieldName: 'column20',
      name: 'column20',
      header: '우리은행 금고영업점',
      width: 135,
      sortable: false,
      lookupDisplay: true,
      editButtonVisibility: 'always',
      values: ['value01', 'value02'],
      labels: ['입력', '입력'],
      editor: {
        type: 'dropdown',
        partialMatch: true,
      },
      styleName: 'dropdown-cell',
      styleCallback: function (grid, dataCell) {
        var treeId = grid.getValue(dataCell.index.itemIndex, 'treeId');
        var ret = {};
        if (treeId === '1') {
          ret.editor = {
            type: 'text',
          };
          ret.editable = false;
        }
        return ret;
      },
    },
  ],
  rows: [
    {
      treeId: '1',
      treeName: '세입업무',
      column01: '',
      column02: '',
      column03: '',
      column04: '',
      column05: '',
      column06: '',
      column07: '',
      column08: '',
      column09: '',
      column10: '',
      column11: '',
      column12: '',
      column13: '',
      column14: '',
      column15: '',
      column16: '',
      column17: '',
      column18: '',
      column19: '',
      column20: '',
    },
    {
      treeId: '2',
      treeName: '세입계좌 거래내역',
      column01: '입력',
      column02: '입력',
      column03: '입력',
      column04: '입력',
      column05: '입력',
      column06: '입력',
      column07: '입력',
      column08: '입력',
      column09: '입력',
      column10: '입력',
      column11: '입력',
      column12: '입력',
      column13: '입력',
      column14: '입력',
      column15: '입력',
      column16: '입력',
      column17: '입력',
      column18: '입력',
      column19: '입력',
      column20: '입력',
    },
    {
      treeId: '2.001',
      treeName: '세입계좌 현황',
      column01: '입력',
      column02: '입력',
      column03: '입력',
      column04: '입력',
      column05: '입력',
      column06: '입력',
      column07: '입력',
      column08: '입력',
      column09: '입력',
      column10: '입력',
      column11: '입력',
      column12: '입력',
      column13: '입력',
      column14: '입력',
      column15: '입력',
      column16: '입력',
      column17: '입력',
      column18: '입력',
      column19: '입력',
      column20: '입력',
    },
    {
      treeId: '2.002',
      treeName: '세입계좌 거래내역',
      column01: '입력',
      column02: '입력',
      column03: '입력',
      column04: '입력',
      column05: '입력',
      column06: '입력',
      column07: '입력',
      column08: '입력',
      column09: '입력',
      column10: '입력',
      column11: '입력',
      column12: '입력',
      column13: '입력',
      column14: '입력',
      column15: '입력',
      column16: '입력',
      column17: '입력',
      column18: '입력',
      column19: '입력',
      column20: '입력',
    },
    {
      treeId: '1',
      treeName: '세입계좌 거래내역',
      column01: '',
      column02: '',
      column03: '',
      column04: '',
      column05: '',
      column06: '',
      column07: '',
      column08: '',
      column09: '',
      column10: '',
      column11: '',
      column12: '',
      column13: '',
      column14: '',
      column15: '',
      column16: '',
      column17: '',
      column18: '',
      column19: '',
      column20: '',
    },
    {
      treeId: '2',
      treeName: '세입계좌 거래내역',
      column01: '입력',
      column02: '입력',
      column03: '입력',
      column04: '입력',
      column05: '입력',
      column06: '입력',
      column07: '입력',
      column08: '입력',
      column09: '입력',
      column10: '입력',
      column11: '입력',
      column12: '입력',
      column13: '입력',
      column14: '입력',
      column15: '입력',
      column16: '입력',
      column17: '입력',
      column18: '입력',
      column19: '입력',
      column20: '입력',
    },
    {
      treeId: '2.001',
      treeName: '세입계좌 현황',
      column01: '입력',
      column02: '입력',
      column03: '입력',
      column04: '입력',
      column05: '입력',
      column06: '입력',
      column07: '입력',
      column08: '입력',
      column09: '입력',
      column10: '입력',
      column11: '입력',
      column12: '입력',
      column13: '입력',
      column14: '입력',
      column15: '입력',
      column16: '입력',
      column17: '입력',
      column18: '입력',
      column19: '입력',
      column20: '입력',
    },
    {
      treeId: '2.002',
      treeName: '세입계좌 거래내역',
      column01: '입력',
      column02: '입력',
      column03: '입력',
      column04: '입력',
      column05: '입력',
      column06: '입력',
      column07: '입력',
      column08: '입력',
      column09: '입력',
      column10: '입력',
      column11: '입력',
      column12: '입력',
      column13: '입력',
      column14: '입력',
      column15: '입력',
      column16: '입력',
      column17: '입력',
      column18: '입력',
      column19: '입력',
      column20: '입력',
    },
  ],
};
