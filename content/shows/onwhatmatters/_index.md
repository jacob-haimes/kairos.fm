---
url: /onwhatmatters/
title: 'On What Matters'
date: 2024-08-02
type: landing

sections:
  - block: html-block
    content: 
      text: '<div class="max-w-prose mx-auto flex justify-center mt-10 mb-10"><article class="prose prose-slate lg:prose-xl dark:prose-invert"><h1 class="lg:text-6xl">
             On What Matters
             </h1></article></div>'
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      css_class: "dark"
      background:
        color: "#1B4066"
  - block: brand-links
    content: 
      items:
        - name: Transistor
          icon: custom/transistor
          url: https://onwhatmatters.transistor.fm
          label: Transistor
        - name: Email
          icon: at-symbol
          url: 'mailto:'
          label: Contact
        - name: TikTok
          icon: custom/tiktok
          url: https://www.tiktok.com/@21sttalks
          label: TikTok
    design:
      spacing:
        padding: ["1em", 0, "1em", 0]
        margin: ["1em", 0, "1em", 0]
  - block: text-center-markdown
    content: 
      text: What are the greatest forces, risks, and ideas that define the 21st Century? Each week existential risk researcher Coleman Snell speaks with academics, thinkers, and artists whose work speaks to life in the 21st Century for the modern individual. We talk about the biggest risks/challenges facing our species, solutions, unique aspects of 21st Century Life, and how we can find meaning in this strange century.
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
  # - block: html-block
  #   content: 
  #     text: '<div class="container mx-auto max-w-screen-lg px-8 xl:px-5 pb-5 lg:pb-8"><div class="mt-4 flex justify-center"><a class="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300" href="/onwhatmatters/about/"><span>Read more</span><span aria-hidden="true">→</span></a></div></div><div class="container mx-auto w-1/2"><hr style="color:white;"></div>'
  #   design:
  #     spacing:
  #       padding: [0, 0, 0, 0]
  #       margin: [0, 0, 0, 0]
  - block: featured-episodes
    content:
      archive:
        enable: false
      title: Featured Episodes
      # subtitle: ''
      # text: 
      count: 2
      filters:
        folders:
          - posts
        author: onwhatmatters
        # category: ""
        # tag: ""
        # publication_type: ""
        # featured_only: true
        # exclude_featured: false
        # exclude_future: false
        # exclude_past: false
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: tag-article-grid
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
  - block: transistor-block
    content:
      archive: 
        enable: true
        text: More episodes
      url: https://share.transistor.fm/e/onwhatmatters/playlist
    design:
      color: "#1B4066"
      spacing:
        padding: ["1em", 0, 0, 0]
        margin: [0, 0, 0, 0]
  - block: to-archive-button
    content:
      label: More episodes
      filters:
        folders:
          - posts
        author: onwhatmatters
        # category: ""
        # tag: ""
        # publication_type: ""
        # featured_only: true
        # exclude_featured: false
        # exclude_future: false
        # exclude_past: false
      sort_by: 'Date'
      sort_ascending: false
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
  - block: subscribe
    content: 
      title: Listen Anywhere
      rss: https://feeds.transistor.fm/onwhatmatters
      rss_span: 3
      items:
        - name: Apple Podcasts
          icon: custom/color-logos-24/apple-podcasts
          url: https://podcasts.apple.com/us/podcast/21st-talks/id1534982172
        - name: Spotify
          icon: custom/color-logos-24/spotify
          url: https://open.spotify.com/show/5rc49nYFlis1buOZdO8gJm?si=WVMPxJXSS7WaJrU2hRtXLQ
        - name: Pocket Casts
          icon: custom/color-logos-24/pocket-casts
          url: 
        - name: Overcast
          icon: custom/color-logos-24/overcast
          url: 
        - name: Castro
          icon: custom/color-logos-24/castro
          url: 
        - name: YouTube
          icon: custom/color-logos-24/youtube
          url: 
        - name: Goodpods
          icon: custom/color-logos-24/goodpods
          url: 
        - name: Amazon Music
          icon: custom/color-logos-24/amazon-music
          url: 
        - name: Castbox
          icon: custom/color-logos-24/castbox
          url: 
        - name: iHeartRadio
          icon: custom/color-logos-24/iheartradio
          url: 
        - name: Player FM
          icon: custom/color-logos-24/playerfm
          url: 
        - name: Deezer
          icon: custom/color-logos-24/deezer
          url: 
        - name: Podcast Addict
          icon: custom/color-logos-24/podcast-addict
          url: 
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
---
