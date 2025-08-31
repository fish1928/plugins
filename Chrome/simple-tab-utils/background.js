chrome.commands.onCommand.addListener((command) => {
  if (command === "move-tab-rightmost") {
    // Move current tab to far right
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0) return;
      let tab = tabs[0];
      chrome.tabs.move(tab.id, { index: -1 });
    });
  }

  if (command === "open-tab-adjacent") {
    // Open new tab right next to the current one
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0) return;
      let tab = tabs[0];
      chrome.tabs.create({
        index: tab.index + 1,
        url: "chrome://newtab"
      });
    });
  }
});

// Listen for messages from content.js (link click handler)
chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.action === "open-link-adjacent") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0) return;
      let tab = tabs[0];
      chrome.tabs.create({
        index: tab.index + 1,
        url: message.url
      });
    });
  }
});

