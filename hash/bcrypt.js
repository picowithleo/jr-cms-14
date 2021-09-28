const bcrypt = require('bcrypt');

const password = '123';

//数字是hash几轮，越多越难解
// const hashed = bcrypt.hashSync(password, 12);
// 生成一个盐
// const salt = bcrypt.genSaltSync(12);
// console.log(salt);

const salt = '$2b$12$BGPARTBx51gGlO5teaahQe'
const hashed = bcrypt.hashSync(password, salt);


console.log(hashed);

// $2b$12$BGPARTBx51gGlO5teaahQe    om5WW8H28ShQBwM5MaerleaTVEcyioa
// $2b$12$BGPARTBx51gGlO5teaahQe