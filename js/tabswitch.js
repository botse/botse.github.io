// Tab switching functionality
function switchTab(event, tabId) {
    event.preventDefault();
    
    // Remove active class from all tabs
    var tabs = document.querySelectorAll('.nav-tabs li');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    
    // Add active class to clicked tab
    event.target.parentElement.classList.add('active');
    
    // Hide all tab panes
    var tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(function(pane) {
        pane.classList.remove('in', 'active');
    });
    
    // Show selected tab pane
    var selectedPane = document.getElementById(tabId);
    selectedPane.classList.add('in', 'active');
}

