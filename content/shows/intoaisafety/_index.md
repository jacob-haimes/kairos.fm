---
url: /intoaisafety/
title: 'Into AI Safety'
date: 2024-08-02
type: landing

design:
  # Section spacing
  spacing: 0

sections:
  - block: html-block
    content: 
      text: '<div class="max-w-prose mx-auto flex justify-center mt-10 mb-10"><article class="prose prose-slate lg:prose-xl dark:prose-invert"><h1 class="lg:text-6xl">
             Into AI Safety
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
          url: https://intoaisafety.transistor.fm
          label: Transistor
        - name: Email
          icon: at-symbol
          url: 'mailto:intoaisafety@gmail.com'
          label: Contact
    design:
      spacing:
        padding: ["1em", 0, "1em", 0]
        margin: ["1em", 0, "1em", 0]
  - block: text-center-markdown
    content: 
      text: The Into AI Safety podcast aims to make it easier for everyone, regardless of background, to get meaningfully involved with the conversations surrounding the rules and regulations which should govern the research, development, deployment, and use of the technologies encompassed by the term "artificial intelligence" or "AI"
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
  # - block: html-block
  #   content: 
  #     text: '<div class="container mx-auto max-w-screen-lg px-8 xl:px-5 pb-5 lg:pb-8"><div class="mt-4 flex justify-center"><a class="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300" href="/intoaisafety/about/"><span>Read more</span><span aria-hidden="true">→</span></a></div></div><div class="container mx-auto w-1/2"><hr style="color:white;"></div>'
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
        author: intoaisafety
        # category: ""
        # tag: ""
        # publication_type: ""
        featured_only: true
        # exclude_featured: false
        # exclude_future: false
        # exclude_past: false
      sort_by: 'Date'
      sort_ascending: false
    design:
      view: article-grid
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
  - block: transistor-block
    content:
      archive: 
        enable: true
        text: More episodes
      url: https://share.transistor.fm/e/into-ai-safety/playlist
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
        author: intoaisafety
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
      rss: https://feeds.transistor.fm/into-ai-safety
      rss_span: 3
      items:
        - name: Apple Podcasts
          icon: custom/color-logos-24/apple-podcasts
          url: https://podcasts.apple.com/us/podcast/into-ai-safety/id1720206246?uo=4
        - name: Spotify
          icon: custom/color-logos-24/spotify
          url: https://open.spotify.com/show/5AGzrA4jo6mgZuibVabTLM
        - name: Pocket Casts
          icon: custom/color-logos-24/pocket-casts
          url: https://pca.st/itunes/1720206246
        - name: Overcast
          icon: custom/color-logos-24/overcast
          url: https://overcast.fm/itunes1720206246
        - name: Castro
          icon: custom/color-logos-24/castro
          url: https://castro.fm/itunes/1720206246
        - name: YouTube
          icon: custom/color-logos-24/youtube
          url: https://www.youtube.com/@IntoAISafety/podcasts
        - name: Goodpods
          icon: custom/color-logos-24/goodpods
          url: https://www.goodpods.com/podcasts-aid/1720206246
        - name: Amazon Music
          icon: custom/color-logos-24/amazon-music
          url: https://music.amazon.com/podcasts/b2071152-dac7-4225-ab09-460b1e59eb82/into-ai-safety?refMarker=null
        - name: Castbox
          icon: custom/color-logos-24/castbox
          url: https://castbox.fm/vic/1720206246
        - name: iHeartRadio
          icon: custom/color-logos-24/iheartradio
          url: https://www.iheart.com/podcast/269-into-ai-safety-129241757/
        - name: Player FM
          icon: custom/color-logos-24/playerfm
          url: https://player.fm/series/series-3577835
        - name: Deezer
          icon: custom/color-logos-24/deezer
          url: https://www.deezer.com/show/1000983062
        - name: Podcast Addict
          icon: custom/color-logos-24/podcast-addict
          url: https://podcastaddict.com/podcast/into-ai-safety/5161809
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
---