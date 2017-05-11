function createElementTest() {
    let rootContainer = $(".root-container");
    rootContainer.empty();
    for(let i=0;i<100000;i++){
        let elem = $(document.createElement("div"));
        elem.text("Hello " + i);
        rootContainer.append(elem);
    }
    rootContainer.empty();
}

function createJQueryTest() {
    let rootContainer = $(".root-container");
    rootContainer.empty();
    let container = $("<div>");
    for(let i=0;i<100000;i++){
        let elem = $("<div>");
        elem.text("Cello " + i);
        container.append(elem);
    }
    rootContainer.append(container);
    rootContainer.empty();
}

function createJQueryWithEventHandlerTest() {
    let rootContainer = $(".root-container");
    rootContainer.empty();
    let container = $("<div>");
    for(let i=0;i<100000;i++){
        let elem = $("<div>");
        elem.bind("click", (handler) => {
              //alert("I'm clicked");
        });
        elem.text("Cello " + i);
        container.append(elem);
    }
    rootContainer.append(container);
    //rootContainer.empty();
}

function executeWithPerf(called) {
    let start = (new Date()).getTime();
    called();
    let end = (new Date()).getTime();
    alert(end-start);
}

