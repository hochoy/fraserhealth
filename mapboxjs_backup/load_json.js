
var businesses2;
var dataloaded = false;

document.getElementById('import').onclick = function() {
    var files = document.getElementById('selectFiles').files;
    if (files.length <= 0) {
        return false;
    }

    var fr = new FileReader();

    fr.onload = function(e) {
        var result = JSON.parse(e.target.result);
        //var formatted = JSON.stringify(result, null, 2);
        businesses = result;
        dataloaded = true;
        attemptloadmapbox();
    };

    fr.readAsText(files.item(0));
    
};
