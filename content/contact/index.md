---
title: 'Contact Us'
type: landing

_build:
  render: never
  list: never
cascade:
  _build:
    render: never
    list: never

sections:
  - block: hero-image
    content:
      title: Kairos.fm
      text: Making the conversations surrounding complex problems accessible
      image:
        folder: main
      primary_action: 
        text: Podcasts
        url: https://kairos.fm/shows/all/
        icon: custom/podcast
      secondary_action:
        text: Explore in depth
        url: https://kairos.fm/post/
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
---
