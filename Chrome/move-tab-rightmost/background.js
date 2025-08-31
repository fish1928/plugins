chrome.commands.onCommand.addListener((command) => {
  if (command === "move-tab-rightmost") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0) return;
      let tab = tabs[0];
      chrome.tabs.move(tab.id, { index: -1 }); // -1 means last position
    });
  }
});