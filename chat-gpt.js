const vscode = require("vscode");


let config = vscode.workspace.getConfiguration()
const model = config.get("aisearch.API") 
console.log(model)
// const apiUrl = "https://api.openai.com/v1/chat/completions";
// const apiKey = "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";
// const https = require("https");

// const headers = {
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${apiKey}`,
// };

// async function getAnswer(query) {
//   const data = JSON.stringify({
//     model: "gpt-3.5-turbo",
//     messages: [
//       { role: "system", content: "You are a helpful assistant." },
//       { role: "user", content: query },
//     ],
//     temperature: 0.7,
//   });
//   let options = {
//     method: "POST",
//     headers,
//     body: data,
//   };
//   const req = https.request(apiUrl, options, (res) => {
//     let data = "";
//     res.on("data", (chunk) => {
//       data += chunk;
//     });
//     res.on("end", () => {
//       const responseData = JSON.parse(data);
//       // Handle the response data here
//       console.log(responseData);
//     });
//   });

//   req.on("error", (error) => {
//     // Handle any errors that occur during the request
//     console.error(error);
//   });

//   req.end();

//   // const response = await fetch(apiUrl, {
//   //   method: "POST",
//   //   headers,
//   //   body: data,
//   // });

//   // const responseData = await response.json();
//   // return responseData.choices[0].message.content;
// }
// getAnswer("write the c++ program")































// // const apiUrl = "https://api.openai.com/v1/chat/completions";
// // const apiKey = "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";

// // const headers = {
// //   "Content-Type": "application/json",
// //   Authorization: `Bearer ${apiKey}`,
// // };

// // async function getAnswer(query) {
// //   const data = JSON.stringify({
// //     model: "gpt-3.5-turbo",
// //     messages: [
// //       { role: "system", content: "You are a helpful assistant." },
// //       { role: "user", content: query },
// //     ],
// //     temperature: 0.7,
// //   });

// //   const response = await fetch(apiUrl, {
// //     method: "POST",
// //     headers,
// //     body: data,
// //   });

// //   const responseData = await response.json();
// //   return responseData.choices[0].message.content;
// // }

// // async function getAnswerToQuery(query) {
// //   const response = await getAnswer(query);
// //   return response;
// // }

// // // Usage example:

// // function getCall(query) {
// //     getAnswerToQuery(query)
// //    .then((answer) => {
// //      console.log(answer);
// //   })
// //   .catch((error) => console.error(error));

// // }

// // // const headers = {
// // //   "Content-Type": "application/json",
// // //   Authorization: `Bearer ${apiKey}`,
// // // };
// // // async function getAnswer(query) {
// // //     const data = JSON.stringify({
// // //       model: "gpt-3.5-turbo",
// // //       messages: [
// // //         { role: "system", content: "You are a helpful assistant." },
// // //         { role: "user", content: query },
// // //       ],
// // //       temperature: 0.7,
// // //     });
// // //     let response =await fetch(apiUrl, {
// // //       method: "POST",
// // //       headers,
// // //       body: data,
// // //     });

// // //     return response.json();

// // //   //     .then((response) => response.json())
// // //   //     .then(async (data) => {
// // //   //       // Handle the API response data here
// // //   //       const response = await data.choices[0].message.content;
// // //   //       console.log(response);
// // //   //       return response.json;
// // //   //     })
// // //   //     .catch((error) => {
// // //   //       // Handle any errors that occur during the request
// // //   //       console.error(error);
// // //   //       return new error("Something went Wrong");
// // //   //     });

// // //   //   return { success: false };
// // // }

// // // const mainfunc = async function(){
// // //     const response = await getAnswer("hello world");
// // //     console.log(response);
// // //     console.log(response.choices[0].message.content);
// // //     return (response.choices[0].message.content);
// // // }
// // // console.log(mainfunc());
