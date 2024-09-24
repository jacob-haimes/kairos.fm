---
url: /muckraikers/
title: 'muckrAIkers'
date: 
type: landing

design:
  # Section spacing
  spacing: 0

sections:
  - block: html-block
    content: 
      text: '<div class="max-w-prose mx-auto flex justify-center mt-10 mb-10"><article class="prose prose-slate lg:prose-xl dark:prose-invert"><h1 class="lg:text-6xl">
             muckrAIkers
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
          url: https://muckraikers.transistor.fm
          label: Transistor
        # - name: Email
        #   icon: at-symbol
        #   url: 'mailto:intoaisafety@gmail.com'
        #   label: Contact
    design:
      spacing:
        padding: ["1em", 0, "1em", 0]
        margin: ["1em", 0, "1em", 0]
  - block: text-center-markdown
    content: 
      text: Join us as we dig a tiny bit deeper into the hype surrounding "AI" press releases, research papers, and more. Each episode, we'll highlight ongoing research and investigations, providing some much needed contextualization, constructive critique, and even a smidge of occasional good will teasing to the conversation, trying to find the meaning under all of this muck.
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

  # - block: featured-episodes
  #   content:
  #     archive:
  #       enable: false
  #     title: Featured Episodes
  #     # subtitle: ''
  #     # text: 
  #     count: 2
  #     filters:
  #       folders:
  #         - posts
  #       author: muckraikers
  #       # category: ""
  #       # tag: ""
  #       # publication_type: ""
  #       featured_only: true
  #       # exclude_featured: false
  #       # exclude_future: false
  #       # exclude_past: false
  #     sort_by: 'Date'
  #     sort_ascending: false
  #   design:
  #     view: article-grid
  #     spacing:
  #       padding: [0, 0, 0, 0]
  #       margin: [0, 0, 0, 0]

  - block: transistor-block
    content:
      archive: 
        enable: true
        text: More episodes
      url: https://share.transistor.fm/e/muckraikers/playlist
    design:
      color: "#1B4066"
      spacing:
        padding: ["1em", 0, 0, 0]
        margin: [0, 0, 0, 0]

  - block: html-block
    content: 
      text: '<div class="container mx-auto max-w-screen-lg px-8 xl:px-5" style="padding-top:1rem;padding-bottom:.75rem;"><div class="mt-4 flex justify-center"><a class="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300" href="/muckraikers/episodes/"><span>Episode pages</span></a></div></div>'
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]

  # - block: to-archive-button
  #   content:
  #     label: More episodes
  #     filters:
  #       folders:
  #         - posts
  #       author: muckraikers
  #       # category: ""
  #       # tag: ""
  #       # publication_type: ""
  #       # featured_only: true
  #       # exclude_featured: false
  #       # exclude_future: false
  #       # exclude_past: false
  #     sort_by: 'Date'
  #     sort_ascending: false
  #   design:
  #     spacing:
  #       padding: [0, 0, 0, 0]
  #       margin: [0, 0, 0, 0]

  - block: subscribe
    content: 
      title: Listen Anywhere
      rss: https://feeds.transistor.fm/muckraikers
      rss_span: 3
      items:
        - name: Apple Podcasts
          icon: custom/color-logos-24/apple-podcasts
          url: https://podcasts.apple.com/us/podcast/muckraikers/
        - name: Spotify
          icon: custom/color-logos-24/spotify
          url: https://open.spotify.com/show/7q69qn0UDjLfzmYWtbbWXb
        - name: Pocket Casts
          icon: custom/color-logos-24/pocket-casts
          url: https://pca.st/2dlev1ig
        - name: Overcast
          icon: custom/color-logos-24/overcast
          url: https://overcast.fm/
        - name: Castro
          icon: custom/color-logos-24/castro
          url: https://castro.fm/itunes/
        - name: YouTube
          icon: custom/color-logos-24/youtube
          url: https://www.youtube.com/
        - name: Goodpods
          icon: custom/color-logos-24/goodpods
          url: https://www.goodpods.com/podcasts-aid/
        - name: Amazon Music
          icon: custom/color-logos-24/amazon-music
          url: https://music.amazon.com/podcasts/
        - name: Castbox
          icon: custom/color-logos-24/castbox
          url: https://castbox.fm/vic/
        - name: iHeartRadio
          icon: custom/color-logos-24/iheartradio
          url: https://www.iheart.com/podcast/
        - name: Player FM
          icon: custom/color-logos-24/playerfm
          url: https://player.fm/series/series-3602894
        - name: Deezer
          icon: custom/color-logos-24/deezer
          url: https://www.deezer.com/show/1001259541
        - name: Podcast Addict
          icon: custom/color-logos-24/podcast-addict
          url: https://podcastaddict.com/podcast/muckraikers/5360668
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
---