// Use Download
const download = require("download-git-repo");

// Use Console
const console = require("./console");

// Export as Async/Await
module.exports = async (uri, local) => {
  // Use Promise
  return new Promise((resolve, reject) => {
    // Process Start
    console.info(`repo download start ...`);

    // Fetch Repo
    download(uri, local, { clone: true }, error => {
      // Any Error or Success
      if (error) {
        // Error Info
        console.error(error);

        // Export Reject
        return reject(false);
      }

      // Complete Download
      console.info("repo download success !");

      // Export Resolve
      return resolve(true);
    });
  });
};
