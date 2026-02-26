function switchTab(event, tabId) {
    event.preventDefault();

    // Update active nav tab
    document.querySelectorAll('#papers-section .nav-tabs li').forEach(function(tab) {
        tab.classList.remove('active');
    });
    event.target.parentElement.classList.add('active');

    // Force hide both panes
    var panes = ['accepted-papers', 'call-for-papers'];
    panes.forEach(function(id) {
        var el = document.getElementById(id);
        el.style.cssText = 'display: none !important;';
    });

    // Force show selected pane
    var selected = document.getElementById(tabId);
    selected.style.cssText = 'display: block !important;';
}