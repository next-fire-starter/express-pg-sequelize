module.exports = {
    up: async (queryInterface, Sequelize) => {
      const data = [{
        title: 'AAAAAAAAA',
        note: 'BBBBBBBBBBBBB',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        title: 'CCCCCC',
        note: 'DDDDDDDDDDDDDDDD',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        title: 'EEEEEEEEEEEE',
        note: 'FFFFFFFFFFFFFFFFFFFFF',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        title: 'GGGGGGGGGGGG',
        note: 'HHHHHHHHHHHHHHHHHHHHHHH',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        title: 'JJJJJJJJJJJJJJJJJ',
        note: 'KKKKKKKKKKKKK',
        updatedAt: new Date(),
        createdAt: new Date()
      }];
      return await queryInterface.bulkInsert('memos', data);
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('memos', null, {});
    },
  };