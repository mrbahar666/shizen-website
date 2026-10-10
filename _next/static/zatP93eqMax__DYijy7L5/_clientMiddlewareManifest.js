self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/shizen-website(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(\\/?index|\\/?index\\.json|\\/?index(?:\\.rsc|\\.segments\\/.+\\.segment\\.rsc)))?[\\/#\\?]?$",
    "originalSource": "/"
  },
  {
    "regexp": "^\\/shizen-website(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next|api|files|images|icon|apple-icon|robots.txt|sitemap.xml).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!_next|api|files|images|icon|apple-icon|robots.txt|sitemap.xml).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()