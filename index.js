const { memo } = require('./models');

const main = async () => {
    const memos = await memo.findAll({raw: true});
    console.log(memos);
}

main();