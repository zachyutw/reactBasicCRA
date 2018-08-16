export default (password)=>{
    let passwordStrength=0;
    if (!password ) {
        return 0;
    }
    else if(password.length>=6){
       passwordStrength=passwordStrength+1;
    }
    if((/[a-z]/.test(password))){
      passwordStrength=passwordStrength+1;
    }
    if((/[A-Z]/.test(password))){
      passwordStrength=passwordStrength+1;
    }
    return passwordStrength;
}