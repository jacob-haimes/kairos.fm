---
title: 'Home'
type: landing

sections:
  - block: hero-image
    content:
      title: Pythonic Media
      text: Making the conversations surrounding complex problems accessible
      image:
        file: logo
      primary_action: 
        text: Podcasts
        url: https://pythonic-media.gitlab.io/pythonic-media-website/shows/all/
        icon: custom/podcast
      secondary_action:
        text: All content #Explore in depth
        url: https://pythonic-media.gitlab.io/pythonic-media-website/content/
    design:
      no_padding: true
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      # For full-screen, add `min-h-screen` below
      css_class: "dark"
      background:
        color: "#1B4066"
        image:
          # Add your image background to `assets/media/`.
          filename: pythonic-tesselation_quarter-res.jpeg
          filters:
            brightness: 0.6
  - block: text-center-markdown
    content: 
      # title:
      # subtitle:
      text: We believe that the best way to improve overall wellbeing for humanity, both in the immediate future and much further down the line, is to have as many people as possible meaningfully involved in the conversations surrounding the complex problems that our world is faced with.
    design:
      spacing:
        padding: ["1rem", ".5rem", "1rem", ".5rem"]
        margin: [0, 0, 0, 0]
  - block: collection
    content:
      title: Latest Coverage
      # subtitle: ''
      # text: ''
      count: 4
      filters:
        folders:
          - content
        # author: ""
        # category: ""
        # tag: ""
        # publication_type: ""
        # featured_only: false
        # exclude_featured: false
        # exclude_future: false
        # exclude_past: false
      archive:
        text: Check out more content
    design:
      view: article-grid
      spacing:
        padding: [".5rem", 0, ".5rem", 0]
        margin: [0, 0, 0, 0]
---