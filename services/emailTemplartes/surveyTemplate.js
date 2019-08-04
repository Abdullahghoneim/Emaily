const keys = require("../../config/key");
module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center ; ">
            <h3> i'd Like Your Input  </h3>
            <p> place answer the following question : </p>
            <p> ${survey.body}  </p>
            <div>
              <a href="${keys.redirectDomain}/api/survey/thanks"> yes </a>
              <a href="${keys.redirectDomain}/api/survey/thanks"> No </a>
            </div>
        </div>  
      </body>
    </html>
  `;
};
