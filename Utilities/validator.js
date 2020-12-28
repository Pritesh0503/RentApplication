exports.ValidateName = funtion(userName){
    if(userName.length>0){
        return true;
    }
    return false;
}

exports.ValidateContact = function(contact){
    if(contact.length==10){
        return true;
    }
    return false;
}

exports.ValidateEmail = function(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}