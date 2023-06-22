const vscode = require("vscode");
const apiUrl = "https://api.openai.com/v1/chat/completions";
let apiKey = "";
// import fetch from 'node-fetch';
const fetch = require("node-fetch");

let config = vscode.workspace.getConfiguration();
let model = config.get("aisearch.API");
model = model.slice(1, model.length - 1);

apiKey = model;
// console.log(model);
// apiKey = model

async function getAnswer(query) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };
  let data = JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: query },
    ],
    temperature: 0.7,
  });

  const response = await fetch(apiUrl, {
    method: "POST",
    headers,
    body: data,
  });

  const responseData = await response.json();
  return responseData.choices[0].message.content;
}

async function getAnswerToQuery(query) {
  try {
    const response = await getAnswer(query);
    // console.log(response);
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

// Usage example:

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
  // console.log('Congratulations, your extension "deep-helper" is now active!');

  let disposable = vscode.commands.registerCommand(
    "deep-helper.AiSearch",
    async function () {
      let configI = vscode.workspace.getConfiguration();
      let modelI = configI.get("aisearch.API");
      apiKey = modelI;
      // Take input from the user Then we need to call chat gpt for that query
      const input = await vscode.window.showInputBox();
      vscode.window.showInformationMessage(input);
      vscode.window.showInformationMessage("Hello from Deep-Helper!");

      const panel = vscode.window.createWebviewPanel(
        "output", // Identifies the type of the webview. Used internally
        "AI Answer", // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in.
        {} // Webview options. More on these later.
      );
      if (input == "" || input == null) {
        panel.webview.html = getWebviewContent("Enter Some Response ¯_(ツ)_/¯");
        return;
      }
      panel.webview.html = getWebviewContent("Wating for response (～￣▽￣)～");
      setTimeout(() => {
        let prom = getAnswerToQuery(input);
        prom.then((response) => {
          panel.webview.html = getWebviewContent(response);
        });
      }, 10000);

      //   prom.then((answer) => {
      //     console.log(answer);
      //     panel.webview.html = getWebviewContent(answer);
      //  })
      //  .catch((error) => console.error(error));
      // getAnswerToQuery("Hello world!")
      // .then((answer)=>{
      // })
      // .catch(error => console.error(error));
    }
  );

  context.subscriptions.push(disposable);
}

function getWebviewContent(input) {
  return `<!DOCTYPE html>
  <html>
  <head>
    <title>Code Example</title>
    <style>
      div {
        background-color: black;
        padding: 10px;
        width: 100%;
        color: green
      }
    </style>
  </head>
  <body>
    <h1>Code Example</h1>
    <div style="white-space: pre-wrap;">${input}</div>
  
    <script src="script.js"></script>
  </body>
  </html>`;
}
// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
