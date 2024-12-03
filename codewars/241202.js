function areYouPlayingBanjo(name) {
  // Implement me
  if(name.charAt(0) === "R" || name.charAt(0) === "r"){
    return `${name} plays banjo`
  }
  
  return `${name} does not play banjo`;
}

areYouPlayingBanjo('Dorooo')