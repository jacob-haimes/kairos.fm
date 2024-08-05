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
        url: /shows/
        icon: custom/podcast
      secondary_action:
        text: All content #Explore in depth
        url: /posts/
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
          filename: tesselation.svg
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
  - block: big-logos
    content: 
      items:
        - name: Into AI Safety
          icon: custom/ias_logo_wht
          url: /intoaisafety/
          label: Into AI Safety
        - name: On What Matters
          icon: custom/owm_wht
          url: /onwhatmatters/
          label: On What Matters
    design:
      spacing:
        padding: ["1em", 0, "1em", 0]
        margin: ["1em", 0, "1em", 0]
  - block: main-collection
    content:
      title: Latest Coverage
      # subtitle: ''
      # text: ''
      count: 4
      filters:
        folders:
          - posts
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
      view: main-article-grid
      spacing:
        padding: [".5rem", 0, ".5rem", 0]
        margin: [0, 0, 0, 0]
---
