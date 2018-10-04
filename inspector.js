// chrome.devtools.panels.elements.createSidebarPane(
// 	"Mavo",
// 	function(sidebar) {
// 		sidebar.setPage("sidebar.html");
// 
// 		sidebar.onShown.addListener(function(window) {
// 			window.sidebar = sidebar;
// 		});
// });

chrome.devtools.panels.create(
	"Mavo",
	"logo.png",
	"sidebar.html",
).then((newPanel) => {
	window.sidebar = newPanel;
});
