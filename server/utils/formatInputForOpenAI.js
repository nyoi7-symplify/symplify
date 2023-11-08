function formatInputForOpenAI(jsCode) {
  // Add any specific instructions or context for the API here
  const input = `
    Please analyze the time and space complexity of the following JavaScript code:
    ${jsCode}
  `;

  return input;
}

module.exports = formatInputForOpenAI;