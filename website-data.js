const { format } = require("date-fns");

const currentDate = new Date();
const formattedDate = format(currentDate, "yyyy-MM");

module.exports = {
  dateCreated: "2023-06",
  lastUpdated: formattedDate,
  stackUsed: ["JavaScript", "Node.js", "React.js", "Express.js", "Material UI"],
  author: "Celeste Zapata",
  teammates: "ChatGPT and GitHub Copilot",
};
