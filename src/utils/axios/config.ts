const config = {
  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: `http://localhost:${process.env.SERVER_PORT || 3001}/`
}

export { config }
