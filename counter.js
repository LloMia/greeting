function counter(name){
existingNames =[]
nameCounter = 0

for(var i = 0; i < existingNames.length; i ++){
  if(existingNames[name] === undefined){
    existingNames[name] = 1;
    
  }
  else(existingNames[name] === true){
    existingNames[name] = 0;
  }
}
  return nameCounter
}

counter('Loyiso','Thabang','Amanda','Viwe','Lubba')
