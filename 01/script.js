function popshare() {
    var butshare = document.getElementById("popshare");
    if (butshare.style.display == "none") {
        butshare.style.display = "flex";
    } else {
        butshare.style.display = "none";
    }
}

document.addEventListener('mouseup', function(e) {
    let container = document.getElementById('popshare');
    if (!container.contains(e.target)) {
      container.style.display = 'none';
      
    }
});