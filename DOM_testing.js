function languageSelected() {

    var inputText = document.querySelector("#inputText");
    var language = document.querySelector("input[name='Language']:checked")

    return {
        inputText: inputText.value,
        language: language.value
    }
}
