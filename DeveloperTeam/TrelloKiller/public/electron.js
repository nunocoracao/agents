const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const isDev = process.env.ELECTRON_IS_DEV === 'true';

let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      webSecurity: true
    },
    titleBarStyle: 'hiddenInset', // Mac-native title bar
    show: false, // Don't show until ready
    icon: path.join(__dirname, '../assets/icon.png')
  });

  // Load the app
  const startUrl = isDev 
    ? 'http://localhost:3000' 
    : `file://${path.join(__dirname, '../build/index.html')}`;
  
  mainWindow.loadURL(startUrl);

  // Show window when ready to prevent visual flash
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    
    // Open DevTools in development
    if (isDev) {
      mainWindow.webContents.openDevTools();
    }
  });

  // Dereference the window object when closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Set up the application menu (Mac-specific)
  createApplicationMenu();
}

function createApplicationMenu() {
  const template = [
    {
      label: 'TrelloKiller',
      submenu: [
        { label: 'About TrelloKiller', role: 'about' },
        { type: 'separator' },
        { label: 'Hide TrelloKiller', accelerator: 'Command+H', role: 'hide' },
        { label: 'Hide Others', accelerator: 'Command+Shift+H', role: 'hideothers' },
        { label: 'Show All', role: 'unhide' },
        { type: 'separator' },
        { label: 'Quit', accelerator: 'Command+Q', click: () => app.quit() }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Undo', accelerator: 'Command+Z', role: 'undo' },
        { label: 'Redo', accelerator: 'Shift+Command+Z', role: 'redo' },
        { type: 'separator' },
        { label: 'Cut', accelerator: 'Command+X', role: 'cut' },
        { label: 'Copy', accelerator: 'Command+C', role: 'copy' },
        { label: 'Paste', accelerator: 'Command+V', role: 'paste' },
        { label: 'Select All', accelerator: 'Command+A', role: 'selectall' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { label: 'Reload', accelerator: 'Command+R', role: 'reload' },
        { label: 'Force Reload', accelerator: 'Command+Shift+R', role: 'forceReload' },
        { label: 'Toggle Developer Tools', accelerator: 'F12', role: 'toggleDevTools' },
        { type: 'separator' },
        { label: 'Actual Size', accelerator: 'Command+0', role: 'resetZoom' },
        { label: 'Zoom In', accelerator: 'Command+Plus', role: 'zoomIn' },
        { label: 'Zoom Out', accelerator: 'Command+-', role: 'zoomOut' },
        { type: 'separator' },
        { label: 'Toggle Fullscreen', accelerator: 'Ctrl+Command+F', role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Window',
      submenu: [
        { label: 'Minimize', accelerator: 'Command+M', role: 'minimize' },
        { label: 'Close', accelerator: 'Command+W', role: 'close' }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

// App event handlers
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  // On macOS, keep app running even when all windows are closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS, re-create window when dock icon is clicked
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Prevent new window creation
app.on('web-contents-created', (event, contents) => {
  contents.on('new-window', (navigationEvent, url) => {
    navigationEvent.preventDefault();
  });
});