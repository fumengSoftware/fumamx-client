const path = require('path')
const electron = require('electron')
const Tray = electron.Tray
const Menu = electron.Menu
let appIcon = null

module.exports = (Win) => {
  const iconPath = path.join(process.cwd(), 'windows-icon.png')
  appIcon = new Tray(iconPath)
  appIcon.setToolTip('MX')
  const menu = Menu.buildFromTemplate([
    {
      label: 'Sign out',
      click: function () {
        Win.close()
        appIcon.destroy()
      }
    }
  ])
  appIcon.setContextMenu(menu)
  appIcon.on('click', () => {
    if (Win.isMinimized()) {
      // 还原
      Win.restore()
      // 显示在任务栏中
      Win.setSkipTaskbar(false)
      // 设置层级最高
      Win.isAlwaysOnTop()
    } else {
      Win.minimize()
    }
  })
  return appIcon
}
