const OrumeAPI = require("../dist").default;
const orumeAPI = new OrumeAPI("https://api.orume.id");
orumeAPI.license.getLicenseByKey("be6e5a4a2efbfbd13c2b6c2bf31360f283b53107cb63dee70e3bdc6aa3").then(license => {
    console.log(license.code)
});