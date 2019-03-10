---
to: serverless.yml
inject: true
after: "functions:"
skip_if: "<%= name %>:"
---
  <%= name %>:
    # tracing: false # overrides provider settings (opt out)
    handler: src/<%= name %>.<%= name %>
    memorySize: 256