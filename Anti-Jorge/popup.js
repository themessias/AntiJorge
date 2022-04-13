let changeColor = document.getElementById("changeColor");

changeColor.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: setPageBackgroundColor,
    });
});

function setPageBackgroundColor(){
    var elements = [...document.getElementsByTagName('*')];
    var cont = 0;

    elements.forEach((element) => {
	element.childNodes.forEach((child) => {
	    if (child.nodeType === 3 && child.nodeValue.match(/jorge/gi) != null) {
		var changedText = child.nodeValue.replace(/jorge/gi, 'Null');
		element.replaceChild(document.createTextNode(changedText), child);
		cont++;
	    }
	});
    });
    
    if (cont == 0){
        alert("N\u00e3o h\u00e1 texto a ser substitu\u00eddo nessa p\u00e1gina.");
    }
}
