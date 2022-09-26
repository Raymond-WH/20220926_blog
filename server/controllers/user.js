/** 用户处理模块 */
exports.list = async (req, res, next) => {
  res.send('user list')
}

exports.create = async (req, res, next) => {
  res.send('user create')
}

exports.update = async (req, res, next) => {
  res.send('user update')
}

exports.delete = async (req, res, next) => {
  res.send('user delete')
}

exports.one = async (req, res, next) => {
  res.send('user one')
}

exports.updateRoles = async (req, res, next) => {
  res.send('user updateRoles')
}