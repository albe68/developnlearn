import sanitize, * as sanitizeHtml from "sanitize-html";
export const santizeData = (data: any) => {

  Object.keys(data).forEach((key) => {
  console.log(`DATA SANTIZED ${data[key]} `.bg_green)

    if (typeof data[key] === "string") {
      data[key] = data[key].replace(/\$/g, ""); // santize $ sign from the string
      data[key] = sanitize(data[key], {
        allowedTags: [],
        allowedAttributes: {},
      });
    }
  });
};
