---
url: /links/
title: Linkpage
type: landing

# design:
#   background:
#     color: "#1B4066"
#     image:
#       # Add your image background to `assets/media/`.
#       filename: tesselation.svg
#       filters:
#         brightness: 0.4

sections:
  - block: hero-author
    content:
      title: Kairos.fm
      username: admin
      primary_action: 
        text: Join our Discord server
        url: 'https://discord.gg/uFVBJgRgR5'
        icon: custom/discord
      # primary_action: 
      #   text: 
      #   url: 
      #   icon: custom/portrait
      # secondary_action:
      #   text: Schedule a meeting
      #   url: https://cal.com/jacobhaimes
        # icon: custom/calendar
    design:
      no_padding: true
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 6, 0, 0]
      # For full-screen, add `min-h-screen` below
  - block: link-list
    content: 
      buttons:
        - text: Email
          icon: at-symbol
          url: mailto:listen@kairos.fm
        - text: LinkedIn
          icon: brands/linkedin
          url: https://www.linkedin.com/company/kairos-fm/
        - text: YouTube
          icon: brands/youtube
          url: https://www.youtube.com/channel/UCFrRF0l4C_CPuyucx6Dt8Qg
        - text: Bluesky
          icon: custom/bluesky
          url: https://bsky.app/profile/kairos.fm
        - text: Patreon
          icon: custom/patreon-icon
          url: https://www.patreon.com/cw/Kairosfm
        - text: Ko-Fi
          icon: custom/ko-fi
          url: https://ko-fi.com/kairosfm
        
    design:
      no_padding: true
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
  - block: markdown
    content:
      text: "## Our Podcasts"
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: ['2rem', 0, '1.5rem', 0]
  - block: podcast-tiles
    content: 
      items:
        - text: Into AI Safety
          icon: custom/ias_logo_currentcolor
          url: /intoaisafety/
        - text: muckrAIkers
          icon: custom/muckrAIkers-logo-currentColor
          url: /muckraikers/
        - text: On What Matters
          icon: custom/owm_wht
          url: /onwhatmatters/
    design:
      spacing:
        padding: ['2rem', 0, '3rem', 0]
        margin: [0, 0, 0, 0]
---
