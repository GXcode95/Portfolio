import LsCmd from "./components/shell/commands/LsCmd/LsCmd"
import EchoCmd from "./components/shell/commands/EchoCmd/EchoCmd"
import FetchCmd from "./components/shell/commands/FetchCmd/FetchCmd"
import BannerCmd from "./components/shell/commands/BannerCmd/BannerCmd"
import GuiCmd from "./components/shell/commands/GuiCmd/GuiCmd"
import HelpCmd from "./components/shell/commands/HelpCmd/HelpCmd"
import ClearCmd from "./components/shell/commands/ClearCmd/ClearCmd"

const COMMANDS = {
  google: {
    component: null,
    exec: () => window.open('http://google.com'),
    description: 'Open google'
  },
  github: {
    component: null,
    exec: () => window.open('http://github.com'),
    description: 'Open the repo of this project'
  },
  ls: {
    component: LsCmd,
    exec: null,
    description: 'List all files and directory in current working directory'
  },
  fetch: {
    component: FetchCmd,
    exec: null,
    description: 'display summary'
  },
  echo: {
    component: EchoCmd,
    exec: null,
    description: 'Writes any specified operands to standard output'
  },
  banner: {
    component: BannerCmd,
    exec: null,
    description: 'Display greeting banner'
  },
  gui: {
    component: GuiCmd,
    exec: null,
    description: 'Switch to traditional website'
  },
  help: {
    component: HelpCmd,
    exec: null,
    description: 'You obviously know what it does.'
  },
  clear: {
    component: ClearCmd,
    exec: null,
    description: 'Clear the standard output visible on the screen'
  }

}

export default COMMANDS