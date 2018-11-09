const { app, BrowserWindow } = require('electron')
let win;

function creatWindow() {
  //create the browser window.
  win = new BrowserWindow({
    width:600,
    height:600,
    backgroundColor:'#fff' ,
    icon: `file://${__dirname}/dist/angular-electron/assets/electronlogo.png`
  })

  win.loadURL(`file://${__dirname}/dist/angular-electron/index.html`)
  win.webContents.openDevTools()
  win.on('closed', function() {
    win=null;
  })
}


app.on('ready', creatWindow)

app.on('window-all-closed', function(){
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if(win === null) {
    createWindow()
  }
})
