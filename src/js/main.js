import 'bootstrap/dist/css/bootstrap.min.css'

import '../css/main.css'

import './icons'
import './check-updates'
import { prepareForm } from './form-util'
import { warnFacebookBrowserUserIfNecessary } from './facebook-util'
import { addVersion, addLangClassName } from './util'
import { createForm } from './form'

addLangClassName()
warnFacebookBrowserUserIfNecessary()
createForm()
prepareForm()
addVersion(process.env.VERSION)
