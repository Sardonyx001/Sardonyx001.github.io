"use strict";
(self.webpackChunkgatsby_starter_blog =
  self.webpackChunkgatsby_starter_blog || []).push([
  [989],
  {
    4982: function (e, t, l) {
      l.r(t),
        l.d(t, {
          Head: function () {
            return c;
          },
        });
      var r = l(7294),
        n = l(1883),
        a = l(8771),
        i = l(8678),
        o = l(9357);
      const c = (e) => {
        let {
          data: { markdownRemark: t },
        } = e;
        return r.createElement(o.Z, {
          title: t.frontmatter.title,
          description: t.frontmatter.description || t.excerpt,
        });
      };
      t.default = (e) => {
        var t;
        let {
          data: { previous: l, next: o, site: c, markdownRemark: m },
          location: s,
        } = e;
        const u =
          (null === (t = c.siteMetadata) || void 0 === t ? void 0 : t.title) ||
          "Title";
        return r.createElement(
          i.Z,
          { location: s, title: u },
          r.createElement(
            "article",
            {
              className: "blog-post",
              itemScope: !0,
              itemType: "http://schema.org/Article",
            },
            r.createElement(
              "header",
              null,
              r.createElement(
                "h1",
                { itemProp: "headline" },
                m.frontmatter.title
              ),
              r.createElement("p", null, m.frontmatter.date)
            ),
            r.createElement("section", {
              dangerouslySetInnerHTML: { __html: m.html },
              itemProp: "articleBody",
            }),
            r.createElement("hr", null),
            r.createElement("footer", null, r.createElement(a.Z, null))
          ),
          r.createElement(
            "nav",
            { className: "blog-post-nav" },
            r.createElement(
              "ul",
              {
                style: {
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  listStyle: "none",
                  padding: 0,
                },
              },
              r.createElement(
                "li",
                null,
                l &&
                  r.createElement(
                    n.Link,
                    { to: l.fields.slug, rel: "prev" },
                    "← ",
                    l.frontmatter.title
                  )
              ),
              r.createElement(
                "li",
                null,
                o &&
                  r.createElement(
                    n.Link,
                    { to: o.fields.slug, rel: "next" },
                    o.frontmatter.title,
                    " →"
                  )
              )
            )
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-templates-blog-post-js-c66e12eb4b10a9ee344e.js.map
