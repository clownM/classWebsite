onmessage = function(e){
    postMessage(120 - e.data);
};