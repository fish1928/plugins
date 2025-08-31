document.addEventListener("click", (event) => {
  let link = event.target.closest("a[href]");
  if (!link) return;

  // Only intercept left-clicks without modifier keys
  if (event.button === 0 && !event.ctrlKey && !event.shiftKey && !event.metaKey) {
    event.preventDefault(); // stop normal navigation

    chrome.runtime.sendMessage({
      action: "open-link-adjacent",
      url: link.href
    });
  }
});

