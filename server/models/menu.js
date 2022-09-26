const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true, // 唯一
    required: true, // 必须有
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true
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

  name: {
    type: String,
    required:true,
  },
  description: {
    type: String,
    default: '',
    
  },

  /** 上级菜单 */
  parentId: {
    type: Schema.Types.ObjectId
  },

  /** 前端名称 */
  unique: {
    type: String,
    unique: true,
    required: true,
    
  },

  /** 菜单图标 */
  icon: {
    type: String,
    default:'',
  },

  /** 是否显示 */
  hidden: {
    type: Boolean,
    default:false,
  },


  /** 是否启用 */
  status: {
    type: Number,
    default: 0,
  },

  /** 排序 */
  sort: {
    type: Number,
    default: 0
  },
});
module.exports = UserSchema