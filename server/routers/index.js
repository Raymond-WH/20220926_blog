const express = require('express')
const userCtrl = require('../controllers/user')
const roleCtrl = require('../controllers/role')
const menuCtrl = require('../controllers/menu')
// 1.创建一个路由容器
const router = express.Router()
// 2.将路由挂载给路由容器
router.get('/', (req, res) => {
  res.send('hello,rbac')
})

// 用户管理路由
router.get('/users',userCtrl.list) // 获取用户列表
  .post('/users',userCtrl.create) // 创建用户
  .put('/users/:id', userCtrl.update) // 更新用户
  .delete('/users/:id', userCtrl.delete) // 删除用户
  .get('/users/:id', userCtrl.one) // 根据id获取单个用户
  .patch('/users/:id/roles', userCtrl.updateRoles) // 给用户分配角色
  
// 角色管理路由
router.get('/roles', roleCtrl.list) // 获取角色列表
  .post('/roles', roleCtrl.create) // 创建角色
  .put('/roles/:id', roleCtrl.update) // 更新角色
  .delete('/roles/:id', roleCtrl.delete) // 删除角色
  .get('/roles/:id', roleCtrl.one) // 根据id获取单个角色
  .patch('/roles/:id/menus', roleCtrl.updateMenus) // 给角色分配权限

// 权限管理路由
router.get('/menus', menuCtrl.list) // 获取权限列表
  .post('/menus', menuCtrl.create) // 创建权限
  .put('/menus/:id', menuCtrl.update) // 更新权限
  .delete('/menus/:id', menuCtrl.delete) // 删除权限
  .get('/menus/:id', menuCtrl.one) // 根据id获取单个权限

// 3.将路由容器挂载到express应用实力生效
module.exports = router