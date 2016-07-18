#! /usr/bin/env node

const fs = require('fs')
const os = require('os')
const path = require('path')
const cp = require('child_process')
const meow = require('meow')
const shtml = require('shtml')
const assert = require('assert-file-exists')

const cli = meow(shtml`
<div>
  <underline>Usage</underline>
  $ ntok<br><br>

  <underline>Options</underline>
  -h, --help - Display help menu
  -v, --version - Get the version
  -s, --show - Show token<br><br>

  <underline>Examples</underline>
  $ ntok
  $ ntok -v
  $ ntok -h
  $ ntok -s
</div>
`, {
  alias: {
    h: 'help',
    v: 'version',
    s: 'show'
  }
})

const npmrc = path.join(os.homedir(), '.npmrc')
assert(npmrc)

const token = fs.readFileSync(npmrc, 'utf8').split('=')[1].trim()

if (cli.flags.show) {
  console.log(token)
} else {
  const cmd = `  NPM_TOKEN=${token} ${cli.input.join(' ')}`
  cp.exec(cmd)
}
