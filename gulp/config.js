const basePath = {
  src: "app/",
  dist: "dist/",
  tmp: "tmp/"
}

let folderPath = {
  css: {
    src: basePath.src + "scss/",
    dist: basePath.dist + "styles/",
    tmp: basePath.tmp + "styles/"
  },
  js: {
    src: basePath.src + "js/",
    dist: basePath.dist + "js/",
    tmp: basePath.tmp + "js/"
  }
}

exports.path = folderPath;