/** 用户处理模块 */
exports.list = async (req, res, next) => {
  res.send('menu list')
}

exports.create = async (req, res, next) => {
  res.send('menu create')
}

exports.update = async (req, res, next) => {
  res.send('menu update')
}

exports.delete = async (req, res, next) => {
  res.send('menu delete')
}

exports.one = async (req, res, next) => {
  res.send('menu one')
}