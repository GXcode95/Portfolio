import LsCmd from "./components/commands/LsCmd"
import EchoCmd from "./components/commands/EchoCmd"
import FetchCmd from "./components/commands/FetchCmd"
import BannerCmd from "./components/commands/BannerCmd"
import EncodeCmd from './components/commands/EncodeCmd'

const COMMANDS = {
  google: {
    component: null,
    exec: () => window.open('http://google.com')
  },
  github: {
    component: null,
    exec: () => window.open('http://github.com')
  },
  ls: {
    component: LsCmd,
    exec: null,
  },
  fetch: {
    component: FetchCmd,
    exec: null,
  },
  echo: {
    component: EchoCmd,
    exec: null,
  },
  banner: {
    component: BannerCmd,
    exec: null,
  },
  encode: {
    component: EncodeCmd,
    exec: null
  }

}

export default COMMANDS