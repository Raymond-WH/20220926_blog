// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/rbac');

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

// 1. 定义Schema(模型架构)
// const UserSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     unique: true, // 唯一
//     required: true, // 必须有
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     unique:true
//   },
//   /** 创建时间 */
//   createdAt: {
//     type: Date,
//     default:Date.now, // 默认值
//   },
//   /** 更新时间 */
//   updatedAt: {
//     type: Date,
//     default: Date.now, // 默认值
//   },
// });

// 2. 将Schema发布为Model模型
// const User = mongoose.model('User', UserSchema);

// 3. 使用Model操作数据库（CRUD）
// User.find() // 获取列表
// User.findById() // 根据Id获取单条数据
// User.findByIdAndUpdate //更加id更新数据
// User.findByIdAndRemove // 根据id删除数据

module.exports = {
  User: mongoose.model('User', require('./user')),
  Role:mongoose.model('Role',require('./role')),
  Menu: mongoose.model('Menu', require('./menu')),
  // Resource: mongoose.model('Resource', require('./resource')),

}