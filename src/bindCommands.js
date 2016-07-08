function bindCommand(commandCreator, dispatch){
  return () => dispatch(commandCreator)
}

export default function bindCommands(commandCreators, dispatch){
  if(typeof commandCreators === 'function'){
    return bindCommand(commandCreators,dispatch)
  }

  const keys = Object.keys(commandCreators)
  let boundCommandCreators = {}
  for( let i = 0 ; i < keys.length ; i++) {
    let key = keys[i]
    let argvs = key.split(',')

    for( let i = 0 ; i < argvs.length ; i++) {
      let argv = argvs[i]
      let commandCreator = commandCreators[key]
      if(typeof commandCreator === 'function') {
        boundCommandCreators[argv] = bindCommand(commandCreator, dispatch)
      }
    }
  }

  return boundCommandCreators
}
