exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/play/)) {
    page.matchPath = "/play/*"

    // Update the page.
    createPage(page)
  }
}
