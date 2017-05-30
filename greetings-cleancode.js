var namesGreeted = {}

function values(name) {
    if (namesGreeted[name] === undefined) {
        namesGreeted[name] = 1;
    }
}


function checkedLanguage(name, language) {
    if (language === "english") {
        return "Hello!, " + name
    }
    if (language === "setswana") {
        return "Dumela!, " + name
    }
    if (language === "french") {
        return "Bonjour!, " + name
    }
}



function storeNames() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        return localStorage.clickcount;
    }
}

function resetClear(){
  localStorage.clickcount = 0
return localStorage.clickcount
}
