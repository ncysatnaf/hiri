import {confInput} from './util'
import minimist from 'minimist'
import bindCommands from './bindCommands'

export class hiri{
  constructor(){
    this.argv = this.getInput()
    this.commands = {}
    this.commandlist = []
    this.createCommand = this.createCommand.bind(this)
    this.listen = this.listen.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  getInput(){
    let argv = process.argv.slice(2)

    return confInput(argv)
  }

  createCommand(commands){
    let keys = Object.keys(commands)
    keys.forEach(val => {
      val.split(',').forEach(val=> {
        this.commandlist.push(val)
      })
    })

    this.commands = bindCommands(commands,this.dispatch)
  }

  dispatch(command){
    const context = {
      input: this.argv.input,
      flags: this.argv.flags
    }
    command.call(context)
  }

  runCommand(command){
    command()
  }

  listen(){
    let command = this.argv.flags && Object.keys(this.argv.flags)

    command.forEach(val=> {
      if(this.commandlist.indexOf(val) !== -1 ){
        this.runCommand(this.commands[val])
      }
    })
  }
}
