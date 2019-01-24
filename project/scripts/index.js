import { changeFrontColor } from './modules/preferences.js'
import { buildHUD, buildMainFrame, initiate } from './modules/setup.js'

initiate()
buildHUD()
buildMainFrame()
changeFrontColor()