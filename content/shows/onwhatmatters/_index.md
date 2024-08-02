---
url: /onwhatmatters/
title: 'On What Matters'
date: 2024-04-24
type: landing

sections:
  - block: resume-biography
    content:
      # The user's folder name in `content/authors/`
      username: onwhatmatters
      # Show a call-to-action button under your biography? (optional)
      # To link to a file, upload it to your `static/uploads/` folder
      # button:
      #   text: 
      #   url: 
    design:
      # banner:
        # Upload a cover image to `assets/media/` folder and reference its filename here (optional)
        # filename: ''
      biography:
        # Customize the CSS style of your biography text (optional)
        style: ''
  - block: collection
    content:
      title: Episodes
      # subtitle: ''
      # text: ''
      count: 3
      filters:
        folders:
          - content
        author: onwhatmatters
        # category: ""
        # tag: ""
        # publication_type: ""
        # featured_only: false
        # exclude_featured: false
        # exclude_future: false
        # exclude_past: false
    design:
      view: card
      spacing:
        padding: [".5rem", 0, ".5rem", 0]
        margin: [0, 0, 0, 0]
---
