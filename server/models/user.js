const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({

  /** 用户名 */
  username: {
    type: String,
    unique: true, // 唯一
    required: true, // 必须有
  },

  /** 密码 */
  password: {
    type: String,
    required: true,
    select:false,
  },


  email: {
    type: String,
    unique: true
  },


 

  /** 姓名 */
  name: {
    type: String,
    default: ''
  },

  /** 角色 */
  roles: {
    type: [Schema.Types.ObjectId],
    ref: 'Role',
  },

  /** 是否启用 */
  status: {
    type: Number,
    default: 0, // 0未启用
  },


  /** 创建时间 */
  createdAt: {
    type: Date,
    default: Date.now, // 默认值
  },
  /** 更新时间 */
  updatedAt: {
    type: Date,
    default: Date.now, // 默认值
  },
  
  /** 是否是超级管理员 */
  idAdmin: {
    type: Boolean,
    default: false,
  }
});
module.exports = UserSchema