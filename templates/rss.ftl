<?xml version="1.0"?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" version="2.0">
  <channel>
    <title>DE or DIE: talks</title>
    <link>${config.site_host}</link>
    <atom:link href="${config.site_host}/${config.feed_file}" rel="self" type="application/rss+xml"/>
    <description>Here we are discussing topics and news somehow related to the data engineering</description>
    <language>en-gb</language>
    <image>
      <url>https://user-images.githubusercontent.com/408149/113920628-af5bbb80-97ed-11eb-91df-523cf5d27254.png
      </url>
      <title>DE or DIE: Talks</title>
      <link>${config.site_host}</link>
    </image>
    <generator>jbake</generator>
    <pubDate>${published_date?string("EEE, d MMM yyyy HH:mm:ss Z")}</pubDate>
    <lastBuildDate>${published_date?string("EEE, d MMM yyyy HH:mm:ss Z")}</lastBuildDate>
    <copyright><![CDATA[2021 DE or DIE]]></copyright>
    <language><![CDATA[ru]]></language>
    <managingEditor><![CDATA[Pasha Finkelshteyn]]></managingEditor>
    <webMaster><![CDATA[Pasha Finkelshteyn]]></webMaster>
    <ttl>60</ttl>
    <category><![CDATA[Technology]]></category>
    <itunes:subtitle>Data engineering from Data Engineers</itunes:subtitle>
    <itunes:explicit>false</itunes:explicit>
    <itunes:author>DE or DIE</itunes:author>
    <itunes:summary>Here we are discussing topics and news somehow related to the data engineering</itunes:summary>
    <itunes:owner>
      <itunes:name>DE or DIE</itunes:name>
      <itunes:email>digest@deordie.org</itunes:email>
    </itunes:owner>
    <itunes:image
            href="https://raw.githubusercontent.com/deordie/deordie-talks/main/src/images/deordie-icon_upscaled.png"/>
    <itunes:category text="Technology"/>
    <#list published_posts as post>
      <item>
        <title><#escape x as x?xml>${post.title}</#escape></title>
        <link>${config.site_host}/${post.uri}</link>
        <pubDate>${post.date?string("EEE, d MMM yyyy HH:mm:ss Z")}</pubDate>
        <guid isPermaLink="false">${post.uri}</guid>
        <description>
          <#escape x as x?xml>
            ${post.body}
          </#escape>
        </description>
        <dc:creator><![CDATA[Pasha Finkelshteyn]]></dc:creator>
        <enclosure url="${post.url}" length="0" type="audio/mpeg"/>
        <content:encoded/>
        <itunes:explicit>no</itunes:explicit>
        <itunes:episodeType>full</itunes:episodeType>
        <itunes:title><#escape x as x?xml>${post.title}</#escape></itunes:title>
        <itunes:episode>${post.number}</itunes:episode>
        <itunes:summary>
          <#escape x as x?xml>
            ${post.body}
          </#escape>
        </itunes:summary>
        <itunes:author>Pasha Finkelshteyn</itunes:author>
        <itunes:image href="https://user-images.githubusercontent.com/408149/113920628-af5bbb80-97ed-11eb-91df-523cf5d27254.png"/>
      </item>
    </#list>
  </channel>
</rss>
