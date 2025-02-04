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
          label: Listening platforms
        - icon: custom/apple-podcasts
          url: https://podcasts.apple.com/us/podcast/on-what-matters/id1769983936
          label: Apple Podcasts
        - icon: custom/spotify-logo
          url: https://open.spotify.com/show/5rc49nYFlis1buOZdO8gJm?si=b4245c676c31445e
          label: Spotify
        - icon: brands/youtube
          url: https://www.youtube.com/playlist?list=PL4wh4RzMmaBfwCsb6s8m9k9fQS19ul0Eg
        - icon: custom/bluesky
          url: https://bsky.app/profile/on-what-matters.bsky.social
          label: Bluesky
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


  # - block: featured-episodes
  #   content:
  #     title: Featured Episodes
  #     # subtitle: ''
  #     # text: 
  #     count: 2
  #     filters:
  #       folders:
  #         - posts
  #       author: onwhatmatters
  #       # category: ""
  #       # tag: ""
  #       # publication_type: ""
  #       # featured_only: true
  #       # exclude_featured: false
  #       # exclude_future: false
  #       # exclude_past: false
  #     sort_by: 'Date'
  #     sort_ascending: false
  #     archive:
  #       enable: false
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
      url: https://share.transistor.fm/e/onwhatmatters/playlist
    design:
      color: "#1B4066"
      spacing:
        padding: ["1em", 0, 0, 0]
        margin: [0, 0, 0, 0]

  - block: html-block
    content: 
      text: '<div class="container mx-auto max-w-screen-lg px-8 xl:px-5" style="padding-top:1rem;padding-bottom:.75rem;"><div class="mt-4 flex justify-center"><a class="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300" href="/onwhatmatters/episodes/"><span>Episode pages</span></a></div></div>'
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
  #       author: onwhatmatters
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
      rss: https://feeds.transistor.fm/onwhatmatters
      rss_span: 3
      items:
        - name: Apple Podcasts
          icon: custom/color-logos-24/apple-podcasts
          url: https://podcasts.apple.com/us/podcast/on-what-matters/id1769983936
        - name: Spotify
          icon: custom/color-logos-24/spotify
          url: https://open.spotify.com/show/5rc49nYFlis1buOZdO8gJm?si=b4245c676c31445e
        - name: Pocket Casts
          icon: custom/color-logos-24/pocket-casts
          url: https://pca.st/57qbmndm
        - name: Overcast
          icon: custom/color-logos-24/overcast
          url: https://overcast.fm/itunes1769983936
        - name: Castro
          icon: custom/color-logos-24/castro
          url: https://castro.fm/itunes/1769983936
        - name: YouTube
          icon: custom/color-logos-24/youtube
          url: https://www.youtube.com/playlist?list=PL4wh4RzMmaBfwCsb6s8m9k9fQS19ul0Eg
        - name: Goodpods
          icon: custom/color-logos-24/goodpods
          url: https://www.goodpods.com/podcasts-aid/1769983936
        - name: Amazon Music
          icon: custom/color-logos-24/amazon-music
          url: https://music.amazon.com/podcasts/ae9e756b-613f-4a5b-94af-553416d534f9
        - name: Castbox
          icon: custom/color-logos-24/castbox
          url: https://castbox.fm/vic/1769983936
        - name: iHeartRadio
          icon: custom/color-logos-24/iheartradio
          url: https://iheart.com/podcast/219857382/
        - name: Player FM
          icon: custom/color-logos-24/playerfm
          url: https://player.fm/series/series-3602636
        - name: Deezer
          icon: custom/color-logos-24/deezer
          url: https://www.deezer.com/show/1001255451
        - name: Podcast Addict
          icon: custom/color-logos-24/podcast-addict
          url: https://podcastaddict.com/podcast/on-what-matters/5342100
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
---
