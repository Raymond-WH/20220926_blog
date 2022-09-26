const mongoose = require('mongoose');
const RoleSchema = new mongoose.Schema({
  
  /** 角色名称 */
  name: {
    type: String,
    required: true, // 必须有
  },

  /** 角色描述 */
  description: {
    type: String,
    default: '',
  },

  /** 菜单权限 */
  menus: {
    type: [Schema.Types.ObjectId],
    ref:'Menu',
  },

  /** 资源权限 */
  resources:{
    type: [Schema.Types.ObjectId],
    ref:'Resource',
  },


  /** 是否启用 */
  status: {
    type: Number,
    default: 0,
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
module.exports = RoleSchema