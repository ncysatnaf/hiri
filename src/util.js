import minimist from 'minimist'

function parseCommand(argv){
  const input = argv._
  delete argv._
  return {
    input,
    flags: argv
  }
}

export const confInput = (argv) => parseCommand(minimist(argv))
