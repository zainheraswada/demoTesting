{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 (function (w, s, p, o, r, t) \{\
    r = document.createElement(s);\
    t = document.getElementsByTagName(s)[0];\
    r.async = true;\
    r.src = p;\
    t.parentNode.insertBefore(r, t);\
    r.onload = () => \{\
        w['thesports']?.setProfile(o.profile, o.options);\
    \};\
\})(\
    window,\
    'script',\
    `//cdn-saas.thesports.com/loader.umd.js?t=$\{parseInt(Date.now() / 1e7)\}`,\
    \{\
        profile: \{\
            profile_id: "n4ho4l5yjou9upbo",\
            sport: "football",\
            widget_id: "match_overview",\
            match_id: "8yomo4h39836q0j",\
            lang: "en",\
        \},\
        options: \{\
            theme: "auto",\
            color_primary_light: "#FF0100",\
            color_bg_light: "#FFFFFF",\
            color_text_light: "#050917",\
            color_inplay_light: "#FF0100",\
            color_primary_dark: "#FF0100",\
            color_bg_dark: "#050917",\
            color_text_dark: "#FFFFFF",\
            color_inplay_dark: "#FF0100",\
        \},\
    \}\
);\
}