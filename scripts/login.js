function login(username, password, callbackResp){
    if (username === "" || password === ""){
        callbackResp(["Failed", "Please don't leave fields blank"]);
        return;
    }
    else{
        firebase.database().ref(`Users/${username}`).on('value', (dataSet) => {
            console.log(dataSet.val());
            if (dataSet.exists()){
                const credential = dataSet.val();
                if (credential['password'] === password){
                    callbackResp(['Success']);
                } else {
                    callbackResp(['Failed', 'Password does not match']);
                }
            } else {
                callbackResp(['Failed', 'Username not found, please Regester first']);
            }
        });
    }
    
}

// indexedDB documentation
// https://javascript.info/indexeddb


