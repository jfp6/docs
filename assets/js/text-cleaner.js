document.addEventListener("DOMContentLoaded", function () {
  console.log("Text cleaner loaded");

  const input = document.getElementById("inputText");
  const output = document.getElementById("outputText");

  if (!input || !output) {
    console.error("Text cleaner: elements not found");
    return;
  }

  input.addEventListener("input", function () {
    let text = input.value;

    // Remove multiple spaces
    text = text.replace(/\s{2,}/g, " ");

    // Capitalize first letter of each sentence
    text = text.replace(
      /(^\s*[a-z])|([.!?]\s+[a-z])/g,
      m => m.toUpperCase()
    );

    output.value = text;
  });
});
