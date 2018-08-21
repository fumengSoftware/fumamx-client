'use strict'
import { app, BrowserWindow, ipcMain, dialog, globalShortcut } from 'electron'

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */
import { autoUpdater } from 'electron-updater'
import log from 'electron-log'
import { getTrayimg } from './funs'
import tray from './tray'

const isWin = process.platform === 'win32'
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}
// 当前打开窗口
let Win
// 创建登录窗口
let loginWindow
// 创建登录托盘
let loginTray
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

async function createWindow () {
  /**
   * Initial window options
   */
  loginWindow = new BrowserWindow({
    width: 300,
    height: 380,
    useContentSize: true,
    frame: false
  })

  loginWindow.loadURL(winURL)

  loginWindow.on('closed', () => {
    loginWindow = null
  })

  Win = loginWindow
  if (isWin) {
    // 这里先获取托盘图片
    let res = await getTrayimg()
    console.log(res)

    // 创建托盘
    loginTray = tray(loginWindow)
  }

  // 组册快捷操作
  globalShortcut.register('CommandOrControl+W', function () {
    // 使窗口不显示在任务栏中
    Win.setSkipTaskbar(true)
    Win.minimize()
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (loginWindow === null) {
    createWindow()
  }
})

app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})

/**
 * 注册登陆窗口事件
 */
ipcMain.on('window-login', function (event, option) {
  if (option === 'window-close') {
    // 关闭窗口
    loginWindow.close()
    // 取消托盘
    isWin && loginTray.destroy()
  } else if (option === 'close-appIcon') {
    // 托盘不显示在任务栏中
    isWin && loginTray.destroy()
  } else if (option === 'setSkipTaskbar') {
    // 使窗口不显示在任务栏中
    loginWindow.setSkipTaskbar(true)
    loginWindow.minimize()
  } else if (option === 'show-window') {
    // 最大化
    loginWindow.maximize()
  } else if (option === 'window-min') {
    // 登录窗口最小化
    loginWindow.minimize()
  } else if (option === 'window-max') {
    // 登录窗口最大化
    if (loginWindow.isMaximized()) {
      loginWindow.restore()
    } else {
      loginWindow.maximize()
    }
  } else if (option === 'orignal-window') {
    // 还原
    loginWindow.unmaximize()
  }
})

// 创建主系统窗口
let mainSysWindow
ipcMain.on('window-mainsys', function (event, option, href) {
  if (option === 'createMainSysWindow') {
    mainSysWindow = new BrowserWindow({
      width: 1150,
      height: 620,
      frame: false
    })
    mainSysWindow.show()
    mainSysWindow.loadURL(href)

    Win = mainSysWindow
    if (isWin) {
      // 创建托盘
      tray(mainSysWindow)
    }
    // 关闭登陆窗口
    loginWindow.close()
    isWin && loginTray.destroy()
    // 当前窗口最大化
    mainSysWindow.maximize()
  } else if (option === 'setSkipTaskbar') {
    // 使窗口不显示在任务栏中
    mainSysWindow.setSkipTaskbar(true)
    mainSysWindow.minimize()
  } else if (option === 'show-window') {
    // 最大化
    mainSysWindow.maximize()
  } else if (option === 'window-min') {
    // 登录窗口最小化
    mainSysWindow.minimize()
  } else if (option === 'window-max') {
    // 登录窗口最大化
    if (mainSysWindow.isMaximized()) {
      mainSysWindow.restore()
    } else {
      mainSysWindow.maximize()
    }
  } else if (option === 'orignal-window') {
    // 还原
    mainSysWindow.unmaximize()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
// 应用加载完成检查更新
app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})

function sendStatusToWindow (text) {
  log.info(text)
  loginWindow.webContents.send('message', text)
}
autoUpdater.on('checking-for-update', () => {
  sendStatusToWindow('开始检查更新的时候触发。')
})
autoUpdater.on('update-available', (info) => {
  sendStatusToWindow('发现一个可用更新的时候触发，更新包下载会自动开始。')
})
autoUpdater.on('update-not-available', (info) => {
  sendStatusToWindow('没有可用更新的时候触发。')
})
autoUpdater.on('error', (err) => {
  sendStatusToWindow('更新发生错误的时候触发。 ' + err)
})
autoUpdater.on('download-progress', (progressObj) => {
  sendStatusToWindow('下载速度: ' + progressObj.bytesPerSecond + 'kB/s,下载进度: ' + progressObj.percent.toFixed(2) + '%, (' + progressObj.transferred + 'kB/' + progressObj.total + 'kB)')
})
autoUpdater.on('update-downloaded', (info) => {
  sendStatusToWindow('更新下载完成的时候触发。', info)
  const options = {
    type: 'info',
    title: '信息',
    message: '更新完成，是否立刻重启？',
    buttons: ['是', '否']
  }
  dialog.showMessageBox(options, function (index) {
    if (index === 0) {
      autoUpdater.quitAndInstall()
    }
  })
})
