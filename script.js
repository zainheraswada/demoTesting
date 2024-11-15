(function (w, s, p, o, r, t) {
    r = document.createElement(s);
    t = document.getElementsByTagName(s)[0];
    r.async = true;
    r.src = p;
    t.parentNode.insertBefore(r, t);
    r.onload = () => {
        w['thesports']?.setProfile(o.profile, o.options);
    };
})(
    window,
    'script',
    `//cdn-saas.thesports.com/loader.umd.js?t=${parseInt(Date.now() / 1e7)}`,
    {
        profile: {
            profile_id: "n4ho4l5yjou9upbo",
            sport: "football",
            widget_id: "match_overview",
            match_id: "8yomo4h39836q0j",
            lang: "en",
        },
        options: {
            theme: "auto",
            color_primary_light: "#FF0100",
            color_bg_light: "#FFFFFF",
            color_text_light: "#050917",
            color_inplay_light: "#FF0100",
            color_primary_dark: "#FF0100",
            color_bg_dark: "#050917",
            color_text_dark: "#FFFFFF",
            color_inplay_dark: "#FF0100",
        },
    }
);
