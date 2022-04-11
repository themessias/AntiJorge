let changeColor = document.getElementById("changeColor");

changeColor.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: setPageBackgroundColor,
    });
});

function setPageBackgroundColor(){
    var elements = document.getElementsByTagName('*');
    var cont = 0;
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text.replace(/jorge/gi, 'Null');

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                    cont++;
                } 
            }
        }
    }
    if (cont == 0){
        alert("N\u00e3o h\u00e1 texto a ser substitu\u00eddo nessa p\u00e1gina.");
    }
}
