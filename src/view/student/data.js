export default {
  init: function () {
    let filter = {
      studentName: ''
    }
    return {
      studentData: [{
        studentNo: '2111847',
        studentName: '小明',
        className: '英才班',
        gradate: '高三',
        masterName: 'davis'
      }],
      filter: filter,
      activeCollapse: 'search',
      pagination: {
        total: 0,
        current: 1,
        pageSize: 10
      },
      editVisible: false
    }
  }
}
