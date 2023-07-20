import inquirer from "inquirer";
inquirer
  .prompt([
    {
      type: "list",
      name: "strategy",
      message: "Which authentication strategy do you want to use?",
      choices: ["JWT Strategy", "AWS Cognito", "Auth0", "Google"],
    },
    {
      type: "confirm",
      name: "twoFA",
      message: "Do you want to add 2FA?",
      choices: ["YES", "NO"],
      default: true,
      when(answers) {
        return answers.strategy === "JWT Strategy";
      },
    },
    {
      type: "confirm",
      name: "captcha",
      message: "Do you want to add captcha?",
      choices: ["YES", "NO"],
      when(answers) {
        return answers.strategy === "JWT Strategy";
      },
    },
  ])
  .then(function (selAns) {
    const answers = selAns;
    console.log(answers.strategy);
    console.log(answers.twoFA);
    console.log(answers.captcha);
  });

// const handlebuttonclick = (answers) => {
//   return console.log(answers.strategy);
// };

// const sayMyName = () => {
//   return handlebuttonclick();
//   // <div>
//   //   <h1>Hello Nature</h1>
//   //   <button onClick={handlebuttonclick()}>Submit</button>
//   //   <span>{strategy}</span>
//   // </div>
// };

// module.exports = { sayMyName };
