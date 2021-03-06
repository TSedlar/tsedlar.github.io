var $SendToKindle = window.$SendToKindle = {
    extensionUrl: "",
    lowQualityAction: "ASK",
    platformInfo: {
        name: "s2k-extractor",
        version: "1.0.1.74",
        platform: "unknown",
        ref: "ukn",
        versionId: 74
    },
    extractionProcessTimeoutInMillis: 3E4
};
$SendToKindle.getActiveWindow = function() {
    return window
};
$SendToKindle.getActiveDocument = function() {
    return window.document
};
$SendToKindle.getState = function() {
    var a = $SendToKindle.getActiveWindow().stkState;
    void 0 === a && (a = $SendToKindle.getActiveWindow().stkState = new $SendToKindle.State);
    return a
};
$SendToKindle.Metrics = function(a) {
    this.sessionTime = void 0;
    this.counters = {};
    this.timers = {};
    this.service = a;
    this.metricsMode = "emit-metrics"
};
$SendToKindle.Metrics.prototype = {
    NAMES: {
        c_source: {
            ctr: "source."
        },
        c_send_document: {
            ctr: "send.document",
            ref: "sd_doc"
        },
        c_send_success: {
            ctr: "send.success",
            ref: "sd_scs"
        },
        c_send_error: {
            ctr: "send.error",
            ref: "sd_err"
        },
        c_send_no_auth: {
            ctr: "send.no_auth",
            ref: "no_auth"
        },
        c_send_no_setup: {
            ctr: "send.no_setup",
            ref: "no_setup"
        },
        c_ext_ddown_send: {
            ctr: "ext.ddown_send",
            ref: "snd"
        },
        c_ext_ddown_send_text: {
            ctr: "ext.ddown_selected",
            ref: "snd_txt"
        },
        c_ext_ddown_preview: {
            ctr: "ext.ddown_preview",
            ref: "prvw"
        },
        c_ext_ddown_setup: {
            ctr: "ext.ddown_setup",
            ref: "stp_ddwn"
        },
        c_ext_sc_send: {
            ctr: "ext.sc_send",
            ref: "sc_snd"
        },
        c_ext_sc_preview: {
            ctr: "ext.sc_preview",
            ref: "sc_prvw"
        },
        c_extraction_ncrt: {
            ctr: "extraction.ncrt",
            ref: "et_nrct"
        },
        c_extraction_maps: {
            ctr: "extraction.maps",
            ref: "et_mps"
        },
        c_extraction_multipage: {
            ctr: "extraction.multipage",
            ref: "et_mlp"
        },
        c_extraction_result_ncrt: {
            ctr: "extraction.result.ncrt",
            ref: "et_r_nrct"
        },
        c_extraction_result_vlb: {
            ctr: "extraction.result.vlb",
            ref: "et_r_vlb"
        },
        c_extraction_result_atfp: {
            ctr: "extraction.result.atfp",
            ref: "et_r_atfp"
        },
        c_extraction_error: {
            ctr: "extraction.error",
            ref: "et_err"
        },
        c_invalid_page: {
            ctr: "extraction.invalid_page",
            ref: "et_ip"
        },
        c_invalid_image: {
            ctr: "extraction.invalid_image",
            ref: "et_ii"
        },
        c_preview_show: {
            ctr: "preview.show",
            ref: "show"
        },
        c_preview_close: {
            ctr: "preview.close",
            ref: "close"
        },
        c_preview_send: {
            ctr: "preview.document",
            ref: "sdd"
        },
        c_quality_good: {
            ctr: "quality.good",
            ref: "qlty_gd"
        },
        c_quality_bad: {
            ctr: "quality.bad",
            ref: "qlty_bd"
        },
        c_quality_lowcd: {
            ctr: "quality.confidence",
            ref: "qlty_lwcd"
        },
        c_feedback: {
            ctr: "feedback",
            ref: "fdbck"
        },
        c_ui_resize: {
            ctr: "ui.resize",
            ref: "rsz"
        },
        c_ui_menu_layout: {
            ctr: "ui.menu_layout",
            ref: "mn_lyt"
        },
        c_ui_fsize_1: {
            ctr: "ui.font_size_1",
            ref: "fnt_sz_1"
        },
        c_ui_fsize_2: {
            ctr: "ui.font_size_2",
            ref: "fnt_sz_2"
        },
        c_ui_fsize_3: {
            ctr: "ui.font_size_3",
            ref: "fnt_sz_3"
        },
        c_ui_fsize_4: {
            ctr: "ui.font_size_4",
            ref: "fnt_sz_4"
        },
        c_ui_fsize_5: {
            ctr: "ui.font_size_5",
            ref: "fnt_sz_5"
        },
        c_ui_margin_1: {
            ctr: "ui.margin_1",
            ref: "mrgn_1"
        },
        c_ui_margin_2: {
            ctr: "ui.margin_2",
            ref: "mrgn_2"
        },
        c_ui_margin_3: {
            ctr: "ui.margin_3",
            ref: "mrgn_3"
        },
        c_ui_margin_4: {
            ctr: "ui.margin_4",
            ref: "mrgn_4"
        },
        c_ui_margin_5: {
            ctr: "ui.margin_5",
            ref: "mrgn_5"
        },
        c_ui_line_1: {
            ctr: "ui.line_1",
            ref: "ln_1"
        },
        c_ui_line_2: {
            ctr: "ui.line_2",
            ref: "ln_2"
        },
        c_ui_line_3: {
            ctr: "ui.line_3",
            ref: "ln_3"
        },
        c_ui_line_4: {
            ctr: "ui.line_4",
            ref: "ln_4"
        },
        c_ui_line_5: {
            ctr: "ui.line_5",
            ref: "ln_5"
        },
        c_ui_mode_white: {
            ctr: "ui.mode_white",
            ref: "md_wht"
        },
        c_ui_mode_sepia: {
            ctr: "ui.mode_sepia",
            ref: "md_sp"
        },
        c_ui_mode_black: {
            ctr: "ui.mode_black",
            ref: "md_blck"
        },
        c_ui_face_georgia: {
            ctr: "ui.face_georgia",
            ref: "fc_grg"
        },
        c_ui_face_pt: {
            ctr: "ui.face_georgia",
            ref: "fc_pt"
        },
        c_ui_face_palatino: {
            ctr: "ui.face_georgia",
            ref: "fc_pltn"
        },
        c_ui_scroll: {
            ctr: "ui.scroll",
            ref: "scr"
        },
        c_ui_scroll_small: {
            ctr: "ui.scroll_small",
            ref: "scr_smll"
        },
        c_ui_scroll_medium: {
            ctr: "ui.scroll_medium",
            ref: "scr_mdm"
        },
        c_ui_scroll_large: {
            ctr: "ui.scroll_large",
            ref: "scr_lrg"
        },
        t_send: {
            tmr: "send.time_send"
        },
        t_send_url: {
            tmr: "send.time_url"
        },
        t_send_upload: {
            tmr: "send.time_upload"
        },
        t_send_enqueue: {
            tmr: "send.time_enqueue"
        },
        t_extraction: {
            tmr: "extraction"
        },
        t_ui_resize: {
            tmr: "ui.time_resize"
        },
        t_ui_layout: {
            tmr: "ui.time_layout"
        },
        t_feedback: {
            tmr: "send.time_feedback"
        }
    },
    init: function() {
        this.sessionTime = Date.now();
        this.counters = {};
        this.timers = {}
    },
    terminate: function(a) {
        var b = !0;
        if (void 0 !== this.sessionTime) {
            this.sessionTime = Date.now() - this.sessionTime;
            var c = {},
                d;
            for (d in this.timers) {
                var e = this.timers[d];
                0 < e.count && (c[d] = {
                    value: parseInt(e.sum / e.count, 10),
                    repeat: e.count
                })
            }
            d = {};
            for (var f in this.counters)
                d[f] = {
                    value: this.counters[f]
                };
            c = {
                sessionTime: this.sessionTime,
                counters: d,
                timers: c
            };
            "emit-metrics" === this.metricsMode ? (b = !1,
                this.service.emitMetrics(JSON.stringify(c), a)) : void 0 !== window.console && window.console.log(JSON.stringify(c));
            this.init()
        }!0 === b && void 0 !== a && a()
    },
    recordTimer: function(a, b) {
        if (void 0 !== a && void 0 !== a.tmr) {
            var c = this.timers[a.tmr];
            void 0 === c && (c = {
                    sum: 0,
                    count: 0
                },
                this.timers[a.tmr] = c);
            c.sum += b;
            c.count++
        }
    },
    startTimer: function(a) {
        if (void 0 !== a && void 0 !== a.tmr) {
            var b = this.timers[a.tmr];
            void 0 !== b && void 0 === b.start ? b.start = Date.now() : void 0 === b && (this.timers[a.tmr] = {
                sum: 0,
                count: 0,
                start: Date.now()
            })
        }
    },
    stopTimer: function(a) {
        void 0 !== a && void 0 !== a.tmr && (a = this.timers[a.tmr],
            void 0 !== a && void 0 !== a.start && (a.sum += Date.now() - a.start,
                a.count++,
                a.start = void 0))
    },
    countWithPrefix: function(a, b) {
        if (void 0 !== a && void 0 !== a.ctr) {
            var c = a.ctr + (b || "");
            void 0 !== this.counters[c] ? this.counters[c]++ : this.counters[c] = 1
        }
    },
    count: function() {
        for (var a = 0; a < arguments.length; a++) {
            var b = arguments[a];
            void 0 !== b && void 0 !== b.ctr && (this.countWithPrefix(b, void 0),
                void 0 !== b.ref && this.service.sendRefTag(b.ref))
        }
    }
};
$SendToKindle.Service = function() {};
$SendToKindle.Service.prototype = {
    SERVICE_URL: "https://www.amazon.com/gp/sendtokindle/service",
    S3_HTTP_VERB: "PUT",
    ajax: function(a) {
        a = a || {};
        a.url = a.url || this.SERVICE_URL;
        a.type = a.type || "GET";
        a.data = a.data || null;
        a.success = a.success || function() {};
        a.error = a.error || function() {};
        a.complete = a.complete || function() {};
        a.timeout = a.timeout || 3E4;
        a.async = a.async || !0;
        a.cache = a.cache || !1;
        a.binary = a.binary || !1;
        a.responseType = a.responseType || "";
        a.dataType = a.dataType || "text";
        try {
            var b = new XMLHttpRequest;
            b.open(a.type, a.url, a.async);
            b.timeout = a.timeout;
            b.responseType = a.responseType;
            !1 === a.cache && b.setRequestHeader("If-Modified-Since", (new Date).toLocaleString());
            null !== a.data && !1 === a.binary && b.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            b.addEventListener("error", function() {
                a.error(b, b.statusCode, b.statusText);
                a.complete()
            }, !1);
            b.addEventListener("timeout", function() {
                a.error(b, b.statusCode, b.statusText);
                a.complete()
            }, !1);
            b.addEventListener("load", function() {
                var c = "arraybuffer" === b.responseType ? b.response : b.responseText,
                    e = b.getResponseHeader("Content-Type");
                if ("json" === a.dataType || "application/json" === e)
                    c = JSON.parse(c);
                a.success(c, e);
                a.complete()
            }, !1);
            b.send(a.data && !1 === a.binary ? $.param(a.data) : a.data)
        } catch (c) {
            a.error(null, "exception", "S2K_AJAX_EXCEPTION"),
                a.complete()
        }
    },
    downloadAndEncodeImage: function(a, b, c) {
        this.downloadAsBinary(a, function(a, c) {
                b(this.encodeArrayBufferBase64(a), c)
            }
            .bind(this), c)
    },
    downloadAsBinary: function(a, b, c) {
        this.ajax({
            url: a,
            cache: !0,
            responseType: "arraybuffer",
            timeout: 7E3,
            success: function(c, e) {
                    if (void 0 !== b) {
                        if (null == e) {
                            var f = a.split(".").pop().toLowerCase();
                            "jpg" === f || "jpeg" === f ? e = "image/jpeg" : "png" === f ? e = "image/png" : "gif" === f && (e = "image/gif")
                        }
                        b(c, e)
                    }
                }
                .bind(this),
            error: function() {
                void 0 !== c && c()
            }
        })
    },
    redirectToPreview: function(a, b, c) {
        var d = $SendToKindle.getState();
        null !== d && null !== d.content && (a || (b || c) || d.statusMessage.setMessage("preview"),
            this.sendExtensionMessage("store-content", {
                send: a,
                setup: b,
                auth: c,
                token: d.content.token,
                content: d.content.asStorageJson()
            }, function(a) {
                d.metrics.terminate(function() {
                    d.statusMessage.terminate(!1, !0);
                    var b = function() {
                        window.location.assign(a.url);
                        setTimeout(b, 500)
                    };
                    b()
                })
            }))
    },
    convertToBinary: function(a) {
        a = unescape(encodeURIComponent(a));
        for (var b = new ArrayBuffer(a.length), b = new Uint8Array(b), c = 0, d = a.length; c < d; c++)
            b[c] = a.charCodeAt(c);
        return b
    },
    getUploadUrl: function(a) {
        a.binaryData && 0 < a.binaryData.byteLength ? (a.metrics.startTimer(a.metrics.NAMES.t_send_url),
            this.ajax({
                type: "POST",
                dataType: "json",
                data: {
                    action: "uploadUrl",
                    extName: $SendToKindle.platformInfo.name,
                    extVersion: $SendToKindle.platformInfo.version,
                    s2kGuid: $SendToKindle.s2kGuid,
                    fileSize: a.binaryData.byteLength
                },
                success: function(b) {
                        !0 === b.status ? (a.uploadUrl = b.uploadUrl,
                            a.stkToken = b.stkToken,
                            this.uploadToS3(a)) : (b.setupRequired && a.metrics.count(a.metrics.NAMES.c_send_no_auth),
                            b.authRequired && a.metrics.count(a.metrics.NAMES.c_send_no_auth),
                            this.redirectToPreview(!0, b.setupRequired, b.authRequired))
                    }
                    .bind(this),
                error: function() {
                    void 0 !== a.error && a.error()
                },
                complete: function() {
                    a.metrics.stopTimer(a.metrics.NAMES.t_send_url)
                }
            })) : void 0 !== a.error && a.error()
    },
    uploadToS3: function(a) {
        a.metrics.startTimer(a.metrics.NAMES.t_send_upload);
        this.ajax({
            url: a.uploadUrl,
            type: "PUT",
            data: a.binaryData,
            cache: !0,
            binary: !0,
            success: function() {
                    this.sendDocument(a)
                }
                .bind(this),
            error: function() {
                void 0 !== a.error && a.error()
            },
            complete: function() {
                a.metrics.stopTimer(a.metrics.NAMES.t_send_upload)
            }
        })
    },
    sendDocument: function(a) {
        a.metrics.startTimer(a.metrics.NAMES.t_send_enqueue);
        this.ajax({
            type: "POST",
            dataType: "json",
            data: {
                action: "sendToKindle",
                extName: $SendToKindle.platformInfo.name,
                extVersion: $SendToKindle.platformInfo.version,
                s2kGuid: $SendToKindle.s2kGuid,
                stkToken: a.stkToken,
                title: a.title,
                dataType: a.dataType,
                author: a.author || a.source
            },
            success: function(b) {
                a.metrics.stopTimer(a.metrics.NAMES.t_send_enqueue);
                !0 === b.status ? a.success() : a.error()
            },
            error: function() {
                a.metrics.stopTimer(a.metrics.NAMES.t_send_enqueue);
                a.error()
            }
        })
    },
    sendToKindle: function() {
        var a = $SendToKindle.getState();
        if (null !== a && null !== a.content) {
            a.statusMessage.setMessage("send");
            a.metrics.count(a.metrics.NAMES.c_send_document);
            a.metrics.startTimer(a.metrics.NAMES.t_send);
            var b = a.content.asStorageJson(!0);
            b.metrics = a.metrics;
            null === b.binaryData && (b.binaryData = this.convertToBinary(b.content));
            b.success = function() {
                    a.statusMessage.setMessage("success");
                    a.statusMessage.terminate(!1, !1);
                    a.metrics.count(a.metrics.NAMES.c_send_success);
                    a.metrics.stopTimer(a.metrics.NAMES.t_send);
                    a.metrics.terminate()
                }
                .bind(this);
            b.error = function() {
                    a.statusMessage.setMessage("error");
                    a.statusMessage.terminate(!0, !1);
                    a.metrics.count(a.metrics.NAMES.c_send_error);
                    a.metrics.stopTimer(a.metrics.NAMES.t_send);
                    a.metrics.terminate()
                }
                .bind(this);
            this.sendExtensionMessage("store-content", {
                    content: a.content.asStorageJson()
                }, function() {
                    this.getUploadUrl(b)
                }
                .bind(this))
        } else
            a.statusMessage.setMessage("error"),
            a.statusMessage.terminate(!0, !1),
            a.metrics.count(a.metrics.NAMES.c_send_error),
            a.metrics.terminate()
    },
    sendRefTag: function(a) {
        a = "stk_" + $SendToKindle.platformInfo.ref + "_ext_" + a;
        this.ajax({
            url: this.SERVICE_URL + "?action\x3dreftag\x26ref_\x3d" + a,
            type: "GET",
            dataType: "json",
            cache: !1,
            timeout: 7E3
        })
    },
    emitMetrics: function(a, b) {
        this.ajax({
            type: "POST",
            dataType: "json",
            cache: !1,
            timeout: 1E4,
            data: {
                action: "metrics",
                extName: $SendToKindle.platformInfo.name,
                extVersion: $SendToKindle.platformInfo.version,
                metrics: a
            },
            complete: b
        })
    },
    setDefaultEngineAction: function(a, b) {
        this.ajax({
            type: "POST",
            data: {
                action: "setup-engine",
                s2kGuid: $SendToKindle.s2kGuid,
                setting: "SEND" === a ? a : "ASK"
            },
            complete: b
        })
    },
    sendExtensionMessage: function(a, b) {
        throw "Did not call platform-specific implementation for " + a + " on " + b;
    },
    encodeArrayBufferBase64: function(a) {
        var b = "";
        a = new Uint8Array(a);
        for (var c = a.byteLength, d = c % 3, c = c - d, e, f, g, h, k = 0; k < c; k += 3)
            h = a[k] << 16 | a[k + 1] << 8 | a[k + 2],
            e = (h & 16515072) >> 18,
            f = (h & 258048) >> 12,
            g = (h & 4032) >> 6,
            h &= 63,
            b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [e] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [f] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [g] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [h];
        1 === d ? (h = a[c],
            b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [(h & 252) >> 2] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [(h & 3) << 4] + "\x3d\x3d") : 2 === d && (h = a[c] << 8 | a[c + 1],
            b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [(h & 64512) >> 10] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [(h & 1008) >> 4] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [(h & 15) << 2] + "\x3d");
        return b
    }
};
$SendToKindle.NodeMetrics = function(a, b, c, d, e, f, g) {
    this.index = b;
    this.depth = c;
    this.layer_index = d;
    this.node_id = a.attr("id") || "#unknown_id";
    this.node_style_class = a.attr("class") || "#unknown_class";
    this.node = a;
    this.node_name = this.tag_name = "#invalid";
    this.node_area = this.node_height = this.node_width = 0;
    this.is_link = this.is_link_text = this.is_plain_text = this.is_text = this.is_skip_image = this.is_large_image = this.is_medium_image = this.is_small_image = this.is_valid_container = !1;
    this.is_inside_link = f;
    this.is_inline_node = this.is_named_node = this.is_ad_node = this.is_ad_image = this.is_ad_link = !1;
    this.is_visible_node = e;
    this.is_metadata_node = this.is_btf_node = this.is_atf_node = this.is_comment_node = this.is_skip_node = !1;
    this.is_inside_metadata = g;
    this.is_pagination = this.is_date_node = this.is_title_node = this.is_author_node = !1;
    this.subtree_ratio_length_link_text = this.subtree_ratio_length_plain_text = this.subtree_link_text_density = this.subtree_link_density = this.subtree_length_plain_text = this.subtree_length_link_text = this.subtree_length_text = this.subtree_metadata_nodes = this.subtree_inline_nodes = this.subtree_valid_containers = this.subtree_large_paragraphs = this.subtree_small_paragraphs = this.subtree_words = this.subtree_lines = this.subtree_skip_images = this.subtree_large_images = this.subtree_medium_images = this.subtree_small_images = this.subtree_images = this.subtree_ad_images = this.subtree_ad_links = this.subtree_ad_nodes = this.subtree_link_texts = this.subtree_plain_texts = this.subtree_texts = this.subtree_links = this.ratio_node_btf = this.ratio_node_atf = this.ratio_node_area = this.ratio_node_width = this.ratio_length_text = this.ratio_length_link_text = this.ratio_length_plain_text = this.link_text_density = this.link_density = this.length_text = this.length_plain_text = this.length_link_text = this.count_metadata_nodes = this.count_inline_nodes = this.count_valid_containers = this.count_large_paragraphs = this.count_small_paragraphs = this.count_words = this.count_lines = this.count_skip_images = this.count_large_images = this.count_medium_images = this.count_small_images = this.count_images = this.count_ad_images = this.count_ad_links = this.count_ad_nodes = this.count_link_texts = this.count_plain_texts = this.count_texts = this.count_links = 0;
    this.is_ncrt_candidate = !1;
    this.ncrt_content_index = 1;
    this.ncrt_score = this.ncrt_noise_index = Number.MAX_VALUE;
    this.is_vlb_candidate = !1;
    this.vlb_content_index = 1;
    this.vlb_score = this.vlb_noise_index = Number.MAX_VALUE;
    this.count_child_nodes = this.node[0].childNodes.length;
    this.analyzeNode()
};
$SendToKindle.NodeMetrics.prototype = {
    SMALL_IMAGE_AREA: 5500,
    MEDIUM_IMAGE_AREA: 15E3,
    LARGE_IMAGE_AREA: 5E4,
    SMALL_IMAGE_WIDTH: 90,
    SMALL_IMAGE_HEIGHT: 90,
    MEDIUM_IMAGE_WIDTH: 150,
    MEDIUM_IMAGE_HEIGHT: 150,
    LARGE_IMAGE_WIDTH: 400,
    LARGE_IMAGE_HEIGHT: 100,
    DEFAULT_LINE_LENGTH: 80,
    SMALL_PARAGRAPH_WORDS: 50,
    LARGE_PARAGRAPH_WORDS: 80,
    SKIP_ELEMENT: /^(button|input|select|textarea|optgroup|command|datalist|frame|frameset|iframe|noframes|style|script|noscript|canvas|applet|map|marquee|area|base|details|dir|object|embed|aside|menu|source|audio|video|del|ins|select)$/i,
    CONTAINER_TAGS: /^(body|article|section|div|td|li|dd|center|span|content|table)$/i,
    INLINE_TAGS: /^(h1|h2|h3|h4|h5|h6|b|strong|i|em|p|pre)$/i,
    AD_DOMAINS: /googlesyndication\.com|\.2mdn\.net|de17a\.com|content\.aimatch\.com|doubleclick\.net|adbrite\.com|adbureau\.net|admob\.com|bannersxchange\.com|buysellads\.com|impact\-ad\.jp|atdmt\.com|advertising\.com/i,
    AD_WRAPPER_ATTRS: ["id", "class"],
    AD_WRAPPER: /(^|\s|\w+_)(ad[s]?|advertisement|sponsored|strybtmmorebx|resaudio|articlead)(_\w+|\s|$)/i,
    AD_WRAPPER_EXCLUDE: /ads_backsplashSkin/i,
    NAME_ATTRS: "id class ref prop itemprop property name".split(" "),
    NODE_NAMES: /posttext|post_text|postbody|post_body|entry|entry_body|body|storycontent|storybody|story_content|story_body|article\-body|articlebody|story|mainstory|CPLjOe|amabot_center/i,
    NODE_NAMES_EXCLUDE: /[\s\-_]?(date|time|timestamp|tmstmp|title|headline|header|author|byline)[\s\-_]?/i,
    COMMENT_NAMES: /disqus|comment|comments|dsqs|cmmnt|disqus_thread|gemAid|share/i,
    COMMENT_NAMES_EXCLUDE: /c_comment/i,
    META_DATE_NAMES: /[\s\-_]?(date|time|timestamp|datestamp|posted\-on|tmstmp)[\s\-_]?/i,
    META_TITLE_NAMES: /[\s\-_]?(title|headline|story-header|heading|hed)[\s\-_]?|(^name$)/i,
    META_AUTHOR_NAMES: /[\s\-_]?(author|byline|posted\-by|postFrom|cnnByline|writer)[\s\-_]?/i,
    META_EXCLUDE: /[\s\-_]?(hentry|entry-content|post-body|timeline|twitter|facebook|tw\w+|fb-status|mw-headline|hyper|ignore|captioned|expCaption|authorIdentification|caption|editable|nav|program|subheading|timestamp-\d+)[\s\-_]?/i,
    PAGE_NAME_ATTRS: ["id", "class"],
    PAGE_NAMES: /pag|^(nav|controls)$/i,
    PAGE_NAMES_EXCLUDE: /newpage|pagenum|\w+-item/i,
    analyzeTagName: function() {
        var a = this.node[0].nodeType,
            b = this.node[0].tagName;
        3 === a ? this.tag_name = "#text" : 1 === a && (b && "" < b) && (this.is_valid_container = this.CONTAINER_TAGS.test(b) && !this.is_inside_link,
            this.tag_name = b.toLowerCase(),
            this.node_name = this.tag_name + ("#unknown_id" !== this.node_id ? "#" + this.node_id : "") + ("#unknown_class" !== this.node_style_class ? "." + $.trim(this.node_style_class).replace(/\s/g, ".") : ""))
    },
    analyzeTextNode: function() {
        var a = this.node[0];
        if (3 === a.nodeType && 0 !== a.nodeValue.length && !/^\s+$/.test(a.nodeValue)) {
            var b = a.nodeValue.length;
            this.is_text = !0;
            this.is_plain_text = !this.is_inside_link;
            this.is_link_text = this.is_inside_link;
            this.length_text = b;
            this.length_link_text = this.is_inside_link ? b : 0;
            this.length_plain_text = this.is_inside_link ? 0 : b;
            this.count_words = a.nodeValue.split(" ").length;
            this.count_lines = b / this.DEFAULT_LINE_LENGTH;
            this.count_small_paragraphs = this.count_words / this.SMALL_PARAGRAPH_WORDS;
            this.count_large_paragraphs = this.count_words / this.LARGE_PARAGRAPH_WORDS
        }
    },
    analyzeLinkNode: function() {
        var a = this.node[0];
        (this.is_link = a.href && "" !== a.href) && this.AD_DOMAINS.test(a.href) && (this.is_ad_link = this.is_ad_node = !0)
    },
    analyzeImageNode: function() {
        var a = this.node[0],
            b = this.node.width(),
            c = this.node.height();
        b * c > this.LARGE_IMAGE_AREA || b >= this.LARGE_IMAGE_WIDTH && c >= this.LARGE_IMAGE_HEIGHT ? this.is_large_image = !0 : b * c > this.MEDIUM_IMAGE_AREA || b >= this.MEDIUM_IMAGE_WIDTH && c >= this.MEDIUM_IMAGE_HEIGHT ? this.is_medium_image = !0 : b * c < this.SMALL_IMAGE_AREA || b <= this.SMALL_IMAGE_WIDTH && c <= this.SMALL_IMAGE_HEIGHT ? this.is_skip_image = !0 : this.is_small_image = !0;
        a.src && this.AD_DOMAINS.test(a.src) && (this.is_ad_image = this.is_ad_node = !0)
    },
    mergeChild: function(a) {
        this.count_child_nodes -= 1;
        null !== a && void 0 !== a && (this.count_texts += a.is_text ? 1 : 0,
            this.count_plain_texts += a.is_plain_text ? 1 : 0,
            this.count_link_texts += a.is_link_text ? 1 : 0,
            this.count_links += a.is_link ? 1 : 0,
            this.count_ad_images += a.is_ad_image ? 1 : 0,
            this.count_ad_links += a.is_ad_link ? 1 : 0,
            this.count_ad_nodes += a.is_ad_node ? 1 : 0,
            this.count_images += a.is_small_image || a.is_medium_image || a.is_large_image ? 1 : 0,
            this.count_small_images += a.is_small_image ? 1 : 0,
            this.count_medium_images += a.is_medium_image ? 1 : 0,
            this.count_large_images += a.is_large_image ? 1 : 0,
            this.count_skip_images += a.is_skip_image ? 1 : 0,
            this.count_inline_nodes += a.is_inline_node ? 1 : 0,
            this.count_valid_containers += a.is_valid_container ? 1 : 0,
            !1 === a.is_valid_container && (this.length_text += a.length_text,
                this.length_link_text += a.length_link_text,
                this.length_plain_text += a.length_plain_text),
            !1 === this.is_metadata_node && !1 === this.is_inside_metadata && (this.count_metadata_nodes += a.is_metadata_node ? 1 : 0,
                this.subtree_metadata_nodes += a.subtree_metadata_nodes),
            this.subtree_links += a.subtree_links,
            this.subtree_texts += a.subtree_texts,
            this.subtree_ad_nodes += a.subtree_ad_nodes,
            this.subtree_ad_images += a.subtree_ad_images,
            this.subtree_ad_links += a.subtree_ad_links,
            this.subtree_plain_texts += a.subtree_plain_texts,
            this.subtree_link_texts += a.subtree_link_texts,
            this.subtree_images += a.subtree_images,
            this.subtree_small_images += a.subtree_small_images,
            this.subtree_medium_images += a.subtree_medium_images,
            this.subtree_large_images += a.subtree_large_images,
            this.subtree_skip_images += a.subtree_skip_images,
            this.subtree_lines += a.subtree_lines,
            this.subtree_words += a.subtree_words,
            this.subtree_small_paragraphs += a.subtree_small_paragraphs,
            this.subtree_large_paragraphs += a.subtree_large_paragraphs,
            this.subtree_inline_nodes += a.subtree_inline_nodes,
            this.subtree_valid_containers += a.subtree_valid_containers,
            this.subtree_length_text += a.subtree_length_text,
            this.subtree_length_link_text += a.subtree_length_link_text,
            this.subtree_length_plain_text += a.subtree_length_plain_text)
    },
    analyzeMetadataNode: function() {
        var a = this.node.parent();
        0 < a.length && ("blockquote" !== a[0].nodeName.toLowerCase() && 0 !== this.index) && (this.is_author_node = this.analyzeNodeNames(this.NAME_ATTRS, this.META_AUTHOR_NAMES, this.META_EXCLUDE) || "cite" === this.tag_name && this.analyzeNodeNames(this.NAME_ATTRS, null, this.META_EXCLUDE) && !1 === this.node.parent().is("figcaption"),
            this.is_date_node = this.analyzeNodeNames(this.NAME_ATTRS, this.META_DATE_NAMES, this.META_EXCLUDE) || "time" === this.tag_name && this.analyzeNodeNames(this.NAME_ATTRS, null, this.META_EXCLUDE),
            this.is_title_node = this.node.is(":header") && this.node.parent().is("hgroup") || this.analyzeNodeNames(this.NAME_ATTRS, this.META_TITLE_NAMES, this.META_EXCLUDE) && this.node.is(":header"));
        return this.is_title_node || this.is_author_node || this.is_date_node
    },
    analyzeGenericNode: function() {
        this.INLINE_TAGS.test(this.tag_name) ? this.is_inline_node = !0 : (this.is_comment_node = this.analyzeNodeNames(this.NAME_ATTRS, this.COMMENT_NAMES, this.COMMENT_NAMES_EXCLUDE) && 0 !== this.index,
            this.is_named_node = this.analyzeNodeNames(this.NAME_ATTRS, this.NODE_NAMES, this.NODE_NAMES_EXCLUDE));
        this.is_comment_node || (this.is_named_node || !this.is_visible_node || !1 !== /^article$/i.test(this.tag_name)) || (this.is_pagination = this.analyzeNodeNames(this.PAGE_NAME_ATTRS, this.PAGE_NAMES, this.PAGE_NAMES_EXCLUDE),
            this.is_metadata_node = this.analyzeMetadataNode())
    },
    analyzeNodeNames: function(a, b, c) {
        var d = this.node,
            e = !1,
            f = !1;
        $.each(a, function() {
            if (!f && !e) {
                var a = d.attr("" + this);
                f = c && a ? c.test(a) : !1;
                null !== b && (null !== a && void 0 !== a && b.test(a)) && (e = !0)
            }
        });
        return null !== b ? e && !f : !f
    },
    analyzeNode: function() {
        this.analyzeTagName();
        if ("#invalid" === this.tag_name || this.SKIP_ELEMENT.test(this.tag_name))
            this.is_skip_node = !0;
        else if (this.analyzeNodeNames(this.AD_WRAPPER_ATTRS, this.AD_WRAPPER, this.AD_WRAPPER_EXCLUDE) && 0 !== this.index)
            this.is_ad_node = !0;
        else {
            switch (this.tag_name) {
                case "#text":
                    this.analyzeTextNode();
                    break;
                case "a":
                    this.analyzeLinkNode();
                    break;
                case "img":
                    this.analyzeImageNode();
                    break;
                default:
                    this.analyzeGenericNode()
            }
            if ("#text" !== this.tag_name) {
                this.node_width = Math.min(this.node.parent().width(), this.node.width());
                this.node_height = Math.min(this.node.parent().height(), this.node.height());
                this.node_area = this.node_width * this.node_height;
                var a = this.node.offset(),
                    b = $($SendToKindle.getActiveWindow());
                this.is_atf_node = a.top < b.height();
                this.is_btf_node = !this.is_atf_node;
                a = b.height() - a.top;
                a = 0 > a ? 0 : a;
                this.node_atf_area = this.node_width * a;
                this.ratio_node_atf = this.node_atf_area / this.node_area;
                this.node_btf_area = this.node_width * (this.node_height - a);
                this.ratio_node_btf = this.node_btf_area / this.node_area
            }
        }
    },
    prepare: function() {
        this.subtree_links += this.count_links;
        this.subtree_texts += this.count_texts;
        this.subtree_ad_nodes += this.count_ad_nodes;
        this.subtree_ad_images += this.count_ad_images;
        this.subtree_ad_links += this.count_ad_links;
        this.subtree_plain_texts += this.count_plain_texts;
        this.subtree_link_texts += this.count_link_texts;
        this.subtree_images += this.count_images;
        this.subtree_small_images += this.count_small_images;
        this.subtree_medium_images += this.count_medium_images;
        this.subtree_large_images += this.count_large_images;
        this.subtree_skip_images += this.count_skip_images;
        this.subtree_lines += this.count_lines;
        this.subtree_words += this.count_words;
        this.subtree_small_paragraphs += this.count_small_paragraphs;
        this.subtree_large_paragraphs += this.count_large_paragraphs;
        this.subtree_inline_nodes += this.count_inline_nodes;
        this.subtree_valid_containers += this.count_valid_containers;
        this.subtree_metadata_nodes += this.count_metadata_nodes;
        this.subtree_length_text += this.length_text;
        this.subtree_length_link_text += this.length_link_text;
        this.subtree_length_plain_text += this.length_plain_text;
        this.link_density = Math.min(this.count_links / (this.count_plain_texts || 1), 1);
        this.link_text_density = Math.min(this.length_link_text / (this.length_plain_text || 1), 1);
        this.subtree_link_density = Math.min(this.subtree_links / (this.subtree_plain_texts || 1), 1);
        this.subtree_link_text_density = Math.min(this.subtree_length_link_text / (this.subtree_length_plain_text || 1), 1);
        this.subtree_ratio_length_link_text = Math.min(this.subtree_length_link_text / (this.subtree_length_text || 1), 1);
        this.subtree_ratio_length_plain_text = Math.min(this.subtree_length_plain_text / (this.subtree_length_text || 1), 1);
        this.node.data("s2k", this)
    },
    score: function(a) {
        this.scoreAsNCRT(a, !1);
        this.scoreAsVLB(a)
    },
    scoreAsNCRT: function(a, b) {
        this.ratio_length_text = this.subtree_length_text / a.subtree_length_text;
        this.ratio_length_plain_text = this.subtree_length_plain_text / a.subtree_length_plain_text;
        this.ratio_length_link_text = this.subtree_length_link_text / a.subtree_length_link_text;
        !b && (0.2 > this.ratio_length_plain_text || 0.11 > this.ratio_length_text) ? (this.ncrt_noise_index = Number.MAX_VALUE,
            this.ncrt_content_index = 1) : (this.ncrt_noise_index = this.ratio_length_link_text + Math.min((this.subtree_ad_images + this.subtree_skip_images) / (this.subtree_images + this.subtree_skip_images || 1), 1) + Math.min(this.subtree_ad_links / (this.subtree_links || 1), 1) + Math.min(this.subtree_valid_containers / (a.subtree_valid_containers || 1), 1) + 0.2 * Math.min(this.subtree_small_images / (this.subtree_images || 1), 1),
            this.ncrt_content_index = this.ratio_length_plain_text + Math.min(this.count_inline_nodes / (a.subtree_inline_nodes || 1), 1) + Math.min((this.subtree_large_images + this.subtree_medium_images) / (this.subtree_images || 1), 1) + Math.min(this.subtree_lines / (a.subtree_lines || 1), 1) + Math.min(this.subtree_small_paragraphs / (a.subtree_small_paragraphs || 1), 1) + Math.min(this.subtree_large_paragraphs / (a.subtree_large_paragraphs || 1), 1));
        this.ncrt_score = Math.min((this.ncrt_noise_index || Number.MAX_VALUE) / (this.ncrt_content_index || 1), 1)
    },
    scoreAsVLB: function(a) {
        var b = Math.min(this.subtree_images / (a.subtree_images || 1), 1);
        0.2 > this.ratio_length_text && 0.2 > b ? (this.vlb_noise_index = Number.MAX_VALUE,
            this.vlb_content_index = 1) : (this.vlb_noise_index = Math.min(this.subtree_valid_containers / (a.subtree_valid_containers || 1), 1),
            this.vlb_content_index = 2.5 * this.ratio_length_text + 2 * this.ratio_node_area + 1.5 * this.ratio_node_atf + this.subtree_images / (this.subtree_links || 1) + Math.min(this.subtree_images / (a.subtree_images || 1), 1) + Math.min(this.subtree_inline_nodes / (a.subtree_inline_nodes || 1), 1),
            this.vlb_score = Math.min((this.vlb_noise_index || Number.MAX_VALUE) / (this.vlb_content_index || 1), 1))
    },
    asRecord: function() {
        return this.index + "," + this.depth + "," + this.layer_index + ",'" + this.node_name + "'," + this.node_area + "," + this.node_atf_area + "," + this.node_btf_area + "," + this.is_valid_container + "," + this.is_named_node + "," + this.is_atf_node + "," + this.is_btf_node + "," + this.count_links + "," + this.count_texts + "," + this.count_plain_texts + "," + this.count_link_texts + "," + this.count_ad_links + "," + this.count_ad_images + "," + this.count_images + "," + this.count_small_images + "," + this.count_medium_images + "," + this.count_large_images + "," + this.count_skip_images + "," + this.count_lines + "," + this.count_words + "," + this.count_small_paragraphs + "," + this.count_large_paragraphs + "," + this.count_valid_containers + "," + this.count_inline_nodes + "," + this.length_link_text + "," + this.length_plain_text + "," + this.length_text + "," + this.subtree_links + "," + this.subtree_texts + "," + this.subtree_ad_images + "," + this.subtree_ad_links + "," + this.subtree_plain_texts + "," + this.subtree_link_texts + "," + this.subtree_images + "," + this.subtree_small_images + "," + this.subtree_medium_images + "," + this.subtree_large_images + "," + this.subtree_skip_images + "," + this.subtree_lines + "," + this.subtree_words + "," + this.subtree_small_paragraphs + "," + this.subtree_large_paragraphs + "," + this.subtree_inline_nodes + "," + this.subtree_valid_containers + "," + this.subtree_length_text + "," + this.subtree_length_link_text + "," + this.subtree_length_plain_text + "," + this.link_density + "," + this.link_text_density + "," + this.ratio_length_plain_text + "," + this.ratio_length_link_text + "," + this.ratio_length_text + "," + this.ratio_node_area + "," + this.ratio_node_atf + "," + this.ratio_node_btf + "," + this.vlb_content_index + "," + this.vlb_noise_index + "," + this.ncrt_content_index + "," + this.ncrt_noise_index + "," + this.vlb_score + "," + this.ncrt_score
    }
};
$SendToKindle.Document = function(a, b) {
    this.token = void 0;
    this.binaryData = this.contentNode = this.metadata = this.url = this.source = this.publicationDate = this.author = this.title = null;
    this.dataType = a;
    this.confidence = 1;
    "text/html" === this.dataType && null !== b ? this.contentNode = b : this.binaryData = b;
    this.$kindleContent = $("\x3cdiv\x3e   \x3cdiv class\x3d's2k-article'\x3e       \x3cdiv class\x3d's2k-article-header'\x3e           \x3cdiv class\x3d's2k-title'\x3e\x3c/div\x3e           \x3chr style\x3d'background: transparent; color: transparent; border-left: none; border-right: none; border-top: none; border-bottom: 1px dashed #000;' /\x3e           \x3cdiv class\x3d's2k-byline'\x3e               \x3cspan class\x3d's2k-author'\x3e\x3c/span\x3e               \x3ca class\x3d's2k-source-short'\x3e\x3c/a\x3e               \x3cspan class\x3d's2k-timestamp'\x3e\x3c/span\x3e           \x3c/div\x3e       \x3c/div\x3e       \x3cdiv class\x3d's2k-article-body'\x3e\x3c/div\x3e       \x3cdiv class\x3d's2k-article-footer'\x3e            \x3chr style\x3d'background: transparent; color: transparent; border-left: none; border-right: none; border-top: none; border-bottom: 1px dashed #000;' /\x3e            Source: \x3ca class\x3d's2k-source-long'\x3e\x3c/a\x3e       \x3c/div\x3e   \x3cdiv\x3e\x3c/div\x3e")
};
$SendToKindle.Document.prototype = {
    BYLINE_SEPARATOR: "\x3cspan class\x3d'byline-separator'\x3e\x26nbsp;\x26#149;\x26nbsp;\x3c/span\x3e",
    setContent: function(a) {
        "text/html" === this.dataType ? this.contentNode = a.clone(!0) : this.binaryData = a
    },
    escapeHTML: function(a) {
        return a.replace(/[&"<>]/g, function(a) {
            return {
                "\x26": "\x26amp;",
                '"': "\x26quot",
                "\x3c": "\x26lt;",
                "\x3e": "\x26gt;"
            } [a]
        })
    },
    formatContentTemplate: function(a, b) {
        if (null !== this.contentNode) {
            var c = a.find(".s2k-article-body");
            c.empty().append(this.contentNode.clone(!0));
            $.each(c.find(".s2k-default-image"), function() {
                $(this).wrap("\x3cdiv class\x3d's2k-image-wrap'\x3e\x3c/div\x3e")
            });
            $.each(c.find("blockquote"), function() {
                var a = $(this).contents(),
                    a = $("\x3cdiv class\x3d's2k-blockquote'\x3e\x3c/div\x3e").append(a);
                $(this).replaceWith(a)
            });
            c.find(":header").addClass(".s2k-text-header");
            a.find(".s2k-title").text(b.title);
            null !== b.author && a.find(".s2k-author").append("By ").append($("\x3cspan class\x3d'fn'\x3e\x3c/span\x3e").text(b.author)).append(this.BYLINE_SEPARATOR);
            null !== b.publicationDate && a.find(".s2k-timestamp").append(this.BYLINE_SEPARATOR).append(b.publicationDate);
            a.find(".s2k-source-short").attr("href", b.url);
            a.find(".s2k-source-short").text(b.source);
            c = b.url;
            140 < c.length && (c = c.substring(0, 137) + "...");
            a.find(".s2k-source-long").attr("href", b.url);
            a.find(".s2k-source-long").text(c);
            return a
        }
    },
    getKindleContent: function() {
        this.formatContentTemplate(this.$kindleContent, this, !0);
        return "\x3chtml\x3e\x3chead\x3e  \x3cmeta http-equiv\x3d'Content-Type' content\x3d'text/html;charset\x3dutf-8' /\x3e  \x3ctitle\x3e" + this.escapeHTML(this.title) + "\x3c/title\x3e  \x3cstyle type\x3d'text/css'\x3e    .s2k-article-footer { font-size: 0.8em; text-align: left }    .s2k-title { font-size: 1.5em; font-weight: bold; color: black; }    .s2k-byline { font-size: 0.8em; font-style: italic; color: black; margin-bottom: 1em; }    .s2k-author .fn { font-weight: bold }    .s2k-image-wrap { width: 100%; text-align: center; }    .s2k-default-image { border: #000 solid 1px; line-height: 1em; margin: 0px auto; padding: 0.25em; text-align: center; font-size: 50%; }    .s2k-blockquote { margin: 0em 2em 0em 2em; font-style: italic; }    .s2k-text-header { margin: 1em }    .s2k-table table { width: 100%; }    .s2k-table table, .s2k-table tbody, .s2k-table tr, .s2k-table td, .s2k-table th { margin: 20px 0px; border: none; border-collapse: collapse; border-spacing: 2px; font-size: inherit; }    .s2k-table td, .s2k-table th { border-top: none; border-left: none; border-right: none; border-bottom: 1px solid #111; }    .s2k-maps-table { width: 100%; border-collapse: collapse; font-size: inherit; }    .s2k-maps-table td { vertical-align: middle; padding-bottom: 5px; padding-top: 10px; }     .s2k-waypoint-header .s2k-maps-text { font-weight: bold; }    .s2k-maps-waypoints { margin-top: 20px; }    .s2k-waypoint-header { border-top: 1px solid #000; border-bottom: 1px solid #000; }    .s2k-waypoint-info { font-size: 70%; text-align: right;  border-top: 1px solid #000;}    .s2k-maps-distance { width: 10%; font-size: 80%; text-align: right; }    .s2k-maps-num { width: 5%; font-size: 80%; text-align: center; padding: 0px 10px; }    .s2k-maps-icon { width: 5%; padding: 0px 10px; text-align: center; }    .s2k-maps-text { padding-left: 20px; }    .s2k-maps-step-duration { font-size: 80%; }    .s2k-maps-step-notice { color: #800000; font-size: 80%; }    .s2k-maps-copyright, .s2k-maps-disclosure { margin-top: 20px; line-height: 1.5em; text-align: center; font-size: 70%; }    .s2k-maps-disclosure { margin-top: 50px; }    tr.s2k-darkrow { background-color: #e8e7e3; }    p { margin-bottom: 1em; }  \x3c/style\x3e\x3c/head\x3e\x3cbody\x3e  " + this.$kindleContent.html() + " \x3c/body\x3e\x3c/html\x3e"
    },
    fromStorageJson: function(a) {
        this.token = a.token || null;
        this.title = a.title || null;
        this.author = a.author || null;
        this.url = a.url || null;
        this.source = a.source || null;
        this.publicationDate = a.publicationDate || null;
        this.contentNode = null !== a.content ? $(a.content) : null;
        this.binaryData = a.binaryData || null;
        this.dataType = a.dataType || null;
        this.metadata = a.metadata || null
    },
    asStorageJson: function(a) {
        var b = null;
        this.contentNode && (b = a ? this.getKindleContent() : $("\x3cdiv /\x3e").append(this.contentNode).addBack().html());
        "\x3cdiv\x3e\x3c/div\x3e" === $.trim(b) && (b = null);
        return {
            token: this.token,
            title: this.title,
            author: this.author,
            url: this.url,
            source: this.source,
            publicationDate: this.publicationDate,
            content: b,
            binaryData: this.binaryData || null,
            dataType: this.dataType,
            metadata: this.metadata
        }
    }
};
$SendToKindle.State = function() {
    this.stateWindow = $SendToKindle.getActiveWindow();
    this.stateDocument = $SendToKindle.getActiveDocument();
    this.service = new $SendToKindle.Service;
    this.metrics = new $SendToKindle.Metrics(this.service);
    this.content = this.preview = null;
    this.abortWorkflow = !1
};
$SendToKindle.StatusMessage = function(a, b) {
    this.stateWindow = $($SendToKindle.getState().stateWindow);
    this.containerMode = "message";
    this.messageMode = a || "status";
    this.neverShowAgain = this.actions = this.message = this.icon = this.container = this.modeSettings = this.containerSettings = void 0;
    this.actionHandler = b
};
$SendToKindle.StatusMessage.prototype = {
    CONTAINER: {
        message: {
            layout: '\x3cdiv id\x3d"s2k-status-message"\x3e\x3c/div\x3e',
            styles: {
                "#s2k-status-message": {
                    display: "none",
                    position: "fixed",
                    height: "107px",
                    top: "90px",
                    padding: "15px",
                    "z-index": 999999999999,
                    "box-shadow": "0px 0px 25px #484848",
                    "text-align": "center",
                    "border-radius": "5px",
                    background: "#3c3c3c url(_EXTURL_/images/s2k-hsprite.png) repeat-x 0px -115px"
                }
            }
        }
    },
    MODE: {
        status: {
            width: 330,
            abortSupported: !0,
            layout: '\x3cdiv class\x3d"s2k-icon"\x3e\x3c/div\x3e\x3cdiv class\x3d"s2k-message"\x3e\x3c/div\x3e',
            styles: {
                "#s2k-status-message": {
                    width: "300px",
                    height: "86px"
                },
                ".s2k-message": {
                    "margin-top": "0px",
                    "font-weight": "bold",
                    "font-size": "12px",
                    color: "#fff",
                    "font-family": "'Helvetica Neue', Helvetica, Arial, sans-serif"
                }
            },
            messages: {
                "default": "\x3cdiv style\x3d'text-align:center;font-size:1.2em'\x3eLoading Send to Kindle...\x3c/div\x3e",
                analyze: "\x3cdiv style\x3d'text-align:center;font-size:1.2em'\x3eAnalyzing website...\x3c/div\x3e",
                preview: "\x3cdiv style\x3d'text-align:center;font-size:1.2em'\x3eLoading preview...\x3c/div\x3e",
                setup: "\x3cdiv style\x3d'text-align:center;font-size:1.2em'\x3eLoading device setup...\x3c/div\x3e",
                send: "\x3cdiv style\x3d'text-align:center;font-size:1.2em'\x3eSending content...\x3c/div\x3e",
                success: "\x3cdiv style\x3d'text-align:center;font-size:1.2em;margin-bottom:10px'\x3eUpload complete.\x3c/div\x3e\x3cspan style\x3d'font-weight:normal'\x3eGive us a few minutes to format and deliver your content.\x3c/span\x3e",
                error: "We're sorry but we are unable to send documents to your Kindle. Please ensure that you are connected to the network and try again.",
                extraction: "We're sorry but there has been an error while analyzing this page.",
                "preview-plugin": "We're sorry but we are unable to preview documents of this type. Please send the document to your Kindle instead."
            },
            icons: {
                "default": {
                    width: "54px",
                    height: "54px",
                    margin: "5px auto 10px",
                    background: "transparent url(_EXTURL_/images/s2k-spinner-large.gif)"
                },
                success: {
                    margin: "0px auto 10px",
                    width: "25px",
                    height: "25px",
                    background: "transparent url(_EXTURL_/images/s2k-sprite.png) no-repeat -221px -78px"
                },
                error: {
                    margin: "0px auto 10px",
                    width: "25px",
                    height: "25px",
                    background: "transparent url(_EXTURL_/images/s2k-sprite.png) no-repeat -247px -52px"
                },
                extraction: {
                    margin: "0px auto 10px",
                    width: "25px",
                    height: "25px",
                    background: "transparent url(_EXTURL_/images/s2k-sprite.png) no-repeat -247px -52px"
                },
                "preview-plugin": {
                    margin: "0px auto 10px",
                    width: "25px",
                    height: "25px",
                    background: "transparent url(_EXTURL_/images/s2k-sprite.png) no-repeat -247px -52px"
                }
            }
        },
        low_quality: {
            width: 590,
            abortSupported: !1,
            layout: '\x3cstyle type\x3d"text/css"\x3e    .s2k-action { cursor: pointer; color: #f90; text-decoration: underline }\x3c/style\x3e\x3cdiv class\x3d"s2k-icon"\x3e\x3c/div\x3e\x3cdiv class\x3d"s2k-message"\x3e\x3c/div\x3e',
            styles: {
                "#s2k-status-message": {
                    width: "560px"
                },
                ".s2k-message": {
                    "line-height": "1.5em",
                    margin: "10px 0px",
                    "font-weight": "normal",
                    "font-size": "12px",
                    color: "#fff",
                    "font-family": "'Helvetica Neue', Helvetica, Arial, sans-serif"
                },
                ".s2k-icon": {
                    "margin-top": "-4px"
                }
            },
            messages: {
                "default": 'We are uncertain about creating a good representation of this webpage for reading later on Kindle. You can highlight the specific text you wish to read on webpage and send using "Send Selected Text" option.\x3cdiv style\x3d"margin-top:5px"\x3eDo you want to     \x3cspan class\x3d"s2k-action" s2k-action\x3d"PREVIEW" style\x3d""\x3ePreview \x26 Send\x3c/span\x3e or     \x3cspan class\x3d"s2k-action" s2k-action\x3d"SEND"\x3eContinue Sending\x3c/span\x3e?\x3c/div\x3e\x3cdiv style\x3d"font-size:10px;text-align:left;margin-top:1px"\x3e    \x3cinput class\x3d"s2k-never-show-again" type\x3d"checkbox" name\x3d"s2k-always-send" /\x3e    \x3clabel for\x3d"s2k-always-send"\x3eDo not show this message again.\x3c/label\x3e\x3c/div\x3e'
            },
            icons: {
                "default": {
                    margin: "0px auto 10px",
                    width: "25px",
                    height: "25px",
                    background: "transparent url(_EXTURL_/images/s2k-sprite.png) no-repeat -247px -78px"
                }
            }
        }
    },
    inject: function() {
        var a = $(this.stateWindow[0].document.body);
        void 0 !== this.CONTAINER[this.containerMode] && (this.containerSettings = this.CONTAINER[this.containerMode],
            a.append(this.containerSettings.layout),
            this.container = $("#s2k-status-message"),
            this.switchMode(this.messageMode),
            this.stateWindow.on("resize.s2k-status", this.onResize.bind(this)))
    },
    switchMode: function(a) {
        this.container.hide();
        this.messageMode = a;
        void 0 !== this.actions && this.actions.off("click.s2k-action");
        this.stateWindow.off("keypress.s2k-status");
        if (void 0 !== this.MODE[this.messageMode]) {
            this.modeSettings = this.MODE[this.messageMode];
            this.container.empty().append(this.modeSettings.layout);
            this.format(this.container, this.containerSettings.styles);
            this.format(this.container, this.modeSettings.styles);
            this.message = this.container.find(".s2k-message");
            this.icon = this.container.find(".s2k-icon");
            this.setMessage("default");
            this.actions = this.container.find(".s2k-action");
            this.actions.on("click.s2k-action", this.onMessageAction.bind(this));
            this.neverShowAgain = this.container.find(".s2k-never-show-again").first();
            if (!0 === this.modeSettings.abortSupported)
                this.stateWindow.on("keypress.s2k-status", this.onAbortAction.bind(this));
            this.onResize();
            this.container.show()
        }
    },
    format: function(a, b) {
        for (var c in b) {
            var d = b[c];
            void 0 !== d.background && (d.background = d.background.replace("_EXTURL_", $SendToKindle.extensionUrl));
            a.is(c) ? a.css(d) : a.find(c).css(d)
        }
    },
    terminate: function(a, b) {
        setTimeout(function() {
                this.container.fadeOut("fast", function() {
                        this.container.remove()
                    }
                    .bind(this));
                this.stateWindow.off("resize.s2k-status");
                this.stateWindow.off("keyup.s2k-status")
            }
            .bind(this), 2E3 * (b ? 0 : a ? 2.5 : 1))
    },
    setMessage: function(a) {
        var b = this.modeSettings.messages[a];
        a = this.modeSettings.icons[a];
        void 0 !== b && this.message.html(b);
        void 0 !== a && (void 0 !== a.background && (a.background = a.background.replace("_EXTURL_", $SendToKindle.extensionUrl)),
            void 0 !== a["-webkit-mask-image"] && (a["-webkit-mask-image"] = a["-webkit-mask-image"].replace("_EXTURL_", $SendToKindle.extensionUrl)),
            this.icon.css(a))
    },
    onResize: function() {
        this.container.css("left", (this.stateWindow.width() - this.modeSettings.width) / 2 + "px")
    },
    onAbortAction: function(a) {
        void 0 !== this.actionHandler && 27 === a.which && this.actionHandler("status.abort");
        return !1
    },
    onMessageAction: function(a) {
        a = $(a.target).attr("s2k-action");
        var b = this.neverShowAgain.is(":checked");
        void 0 !== a && void 0 !== this.actionHandler && this.actionHandler(a, b);
        return !1
    }
};
$SendToKindle.ExtractorUtils = function() {
    this.service = new $SendToKindle.Service
};
$SendToKindle.ExtractorUtils.prototype = {
    SUPPORTED_IMAGE_TYPES: /^(image\/(png|jpeg|jpg|gif|bmp|x-(bmp|bitmap|xbitmap|win-bitmap|windows-bitmap|ms-bmp)|ms-bmp))|(application\/(x-bmp|x-win-bitmap))/i,
    SUPPORTED_PAGE_FIELDS: /[\?&]((page\w*|pg|pgno|first|start)=(\d+,)?\d+)|(\/\d+\/$)|(\/\d+$)|(_\d+)(\.\w+)$/i,
    makeUrlAbsolute: function(a) {
        null !== a.match(/^\/\//i) ? a = location.protocol + a : null === a.match(/^(http|https|mailto:|#.+)/i) && ("/" !== a.substr(0, 1) && (a = location.pathname.substring(0, location.pathname.lastIndexOf("/")) + "/" + a),
            a = (location.origin || location.protocol + "//" + location.host) + a);
        return a
    },
    embedImages: function(a, b, c, d) {
        var e = this;
        if (b < a.length) {
            var f = $(a[b]),
                g = f.attr("src");
            void 0 === g ? this.embedImages(a, b + 1, c, d) : (g = this.makeUrlAbsolute(g),
                d && d.isTimedOut() ? (f.remove(),
                    this.embedImages(a, b + 1, c, d)) : this.service.downloadAndEncodeImage(g, function(g, k) {
                    if (null != k && null !== k.match(e.SUPPORTED_IMAGE_TYPES))
                        f.attr("src", "data:" + k + ";base64," + g);
                    else {
                        f.remove();
                        var m = $SendToKindle.getState();
                        m.metrics.countWithPrefix(m.metrics.NAMES.c_invalid_image, k.replace(/\/|-/g, "_"))
                    }
                    e.embedImages(a, b + 1, c, d)
                }, function() {
                    f.remove();
                    e.embedImages(a, b + 1, c, d)
                }))
        } else
            c()
    },
    analyzePageLinks: function(a, b) {
        var c = null;
        if (void 0 === b || a === b) {
            var d = a.match(this.SUPPORTED_PAGE_FIELDS);
            null !== d && void 0 !== d[1] ? c = a.replace(d[1], d[2] + "\x3d" + (d[3] || "") + "_PN_") : null === d || void 0 === d[4] && void 0 === d[5] && void 0 === d[6] || (c = null,
                c = void 0 !== d[4] ? "/_PN_/" : void 0 !== d[5] ? "/_PN_" : "__PN_" + d[7],
                c = a.replace(this.SUPPORTED_PAGE_FIELDS, c))
        } else
            for (var d = Math.min(a.length, b.length), e = !1, c = "", f = 0; f < d; f++)
                0 === (a.charCodeAt(f) ^ b.charCodeAt(f)) && !1 === e ? c += a.charAt(f) : !0 === e ? (e = !0 === e && null !== a[f].match(/\d/i),
                    !1 === e && (c += a.charAt(f))) : (c += "_PN_",
                    e = !0);
        return c
    },
    testPageLink: function(a, b, c) {
        var d = null,
            d = "/" === c[0] ? a.match(/\/(\d+)\/?$/i) : "_" === c[0] ? a.match(/_(\d+)\.\w+$/i) : a.match(RegExp(c.replace("?", "\\?") + "(\\d+)", "i")),
            d = null !== d ? d = d[1] : "_PN_";
        return -1 !== a.indexOf(b.replace(/_PN_/g, d))
    },
    getPathForNode: function(a) {
        for (var b = "", c = a.data("s2k");
            "body" !== c.tag_name;)
            b = "/" + c.node_name + b,
            a = a.parent(),
            c = a.data("s2k");
        return b
    },
    getNodeFromPath: function(a, b) {
        if ("#" === b[0])
            a = a.find(b);
        else
            try {
                b = b.substring(1).split("/");
                for (var c = a, d = 0, e = b.length; d < e - 1; d++)
                    if (null !== b[d]) {
                        c = c.filter(b[d]);
                        if (void 0 === c || 0 === c.length)
                            break;
                        c = $(c).children()
                    }
                a = void 0 === c ? a.find(b[e - 1]) : c.filter(b[e - 1])
            } catch (f) {
                return null
            }
        return a
    }
};
$SendToKindle.NcrtExtractor = function() {
    this.candidates = [];
    this.ncrt = [];
    this.vlb = [];
    this.metadata = [];
    this.pagination = [];
    this.document_base_width = this.document_base_area = this.page_index = this.traversal_index = 0;
    this.lowQualityResult = this.feedMode = this.relaxedMode = !1;
    this.extractorUtils = new $SendToKindle.ExtractorUtils;
    this.service = new $SendToKindle.Service
};
$SendToKindle.NcrtExtractor.prototype = {
    SUPPORTED_DATA_TYPES: /^(application\/(pdf|msword|rtf)|text\/plain)$/i,
    REMOVABLE_TAGS: "script,noscript,object,embed,iframe,frame,frameset,noframes,aside,menu,header,footer,source,audio,meta,video,form,ins,del,style,form,cite,button,textarea,input,select,.social-media-container,.article-resources",
    MULTIPAGE_EXCLUDED: /google\.*/i,
    MAX_PAGE_INDEX: 10,
    isVisible: function(a) {
        var b = a[0].nodeType;
        if (1 === b) {
            var c = a.offset(),
                d = a.css("text-indent"),
                d = (d = d ? d.match(/\-\d+/i) : null) ? parseInt(d[0], 10) : 0,
                e = parseInt(a.css("padding-left").replace("px"), 10),
                f = parseInt(a.css("padding-top").replace("px"), 10);
            return 3 === b || 1 === b && 0 <= c.left + e + a.width() && 0 <= c.top + f + a.height() && 0 <= d && "none" !== a.css("display") && "hidden" !== a.css("visibility")
        }
        return 3 === b
    },
    analyzeNcrtCandidate: function(a) {
        !0 === a.is_pagination && this.pagination.push(a);
        if (!0 === a.is_metadata_node)
            return this.metadata.push(a),
                !1;
        a.is_ncrt_candidate = !1 === a.is_inline_node && !1 === a.is_link && !1 === a.is_inside_link && !1 === a.is_inside_metadata && !0 === a.is_valid_container && 0.7 >= a.subtree_link_text_density && 0 < a.subtree_plain_texts && "s2k-status-message" !== a.node_id && null === a.node_id.match(/sidebar|inline/i) && null === a.node_style_class.match(/sidebar|inline/i) && null === a.tag_name.match(/span/i) && (0 < a.subtree_inline_nodes || 1 < a.subtree_large_paragraphs);
        return a.is_ncrt_candidate
    },
    analyzeVlbCandidate: function(a) {
        a.ratio_node_area = a.node_area / this.document_base_area;
        a.ratio_node_width = a.node_width / this.document_base_width;
        a.is_vlb_candidate = !1 === a.is_metadata_node && !1 === a.is_inline_node && !1 === a.is_link && !1 === a.is_inside_link && !0 === a.is_valid_container && null === a.tag_name.match(/span/i) && 0.2 <= a.ratio_node_width && 0.05 < a.ratio_node_area && 0.8 > a.ratio_node_area;
        return a.is_vlb_candidate
    },
    analyzeCandidate: function(a) {
        return this.analyzeNcrtCandidate(a) || this.analyzeVlbCandidate(a)
    },
    analyzeMultiPageArticle: function() {
        var a = this,
            b = [];
        $.each(this.pagination, function() {
            var c = this.node.find("a");
            if (0 < c.length && 0 === b.length) {
                var d = c[0].href,
                    e = (void 0 === d || null === d || "" === d) && 1 < c.length,
                    f = 1 < c.length && !1 === e && null !== c[1].href.match(/_\d+\.\w+$/i);
                if (!0 === e || !0 === f)
                    d = c[1].href;
                if (void 0 === d || null === $(c[0]).text().match(/\d/i))
                    this.is_pagination = !1;
                else {
                    var g = null,
                        g = 1 < c.length && !1 === e && !1 === f ? a.extractorUtils.analyzePageLinks(d, c[1].href) : 2 < c.length && !0 === e && !1 === f ? a.extractorUtils.analyzePageLinks(d, c[2].href) : a.extractorUtils.analyzePageLinks(d);
                    if (null === g)
                        this.is_pagination = !1;
                    else if (d = g.match(/([\?&]\w+=)_PN_|([\?&]\w+=\d+,)_PN_|(\/_PN_\/)|(\/_PN_)|(__PN_)/i),
                        null === d)
                        this.is_pagination = !1;
                    else
                        for (d = d[1] || d[2] || d[3] || d[4] || d[5],
                            e = 0,
                            f = Math.min(c.length, a.MAX_PAGE_INDEX); e < f; e++)
                            !0 === a.extractorUtils.testPageLink(c[e].href, g, d) && -1 === b.indexOf(c[e].href) && b.push(c[e].href)
                }
            } else
                this.is_pagination = !1
        });
        return 0 < b.length ? b : null
    },
    traverse: function(a, b, c, d, e, f, g, h, k) {
        void 0 !== a && null !== a && 0 !== a.length || h(null);
        var m = this.isVisible(a) || g,
            l = new $SendToKindle.NodeMetrics(a, b, c, d, m, e, f);
        if (k && k.isTimedOut() || !l.is_visible_node || l.is_skip_node || l.is_comment_node || l.is_ad_node)
            a.data("s2k", l),
            h(null);
        else if (0 === l.count_child_nodes)
            this.onTraverseComplete(l, void 0, g, h);
        else
            setTimeout(function() {
                    for (var b = 0; b < a[0].childNodes.length; ++b)
                        this.traverse($(a[0].childNodes[b]), ++this.traversal_index, c + 1, b, l.is_link || l.is_inside_link, l.is_metadata_node || l.is_inside_metadata, g, function(a) {
                                this.onTraverseComplete(l, a, g, h)
                            }
                            .bind(this), k)
                }
                .bind(this))
    },
    onTraverseComplete: function(a, b, c, d) {
        void 0 !== b && a.mergeChild(b);
        0 === a.count_child_nodes && (a.prepare(),
            a.is_metadata_node && 3 < a.subtree_valid_containers && (a.is_metadata_node = a.is_date_node = a.is_author_node = a.is_title_node = !1),
            this.analyzeCandidate(a) && !c && this.candidates.push(a),
            d(a))
    },
    handlePlugInContent: function(a, b, c) {
        null !== b.match(this.SUPPORTED_DATA_TYPES) ? this.service.downloadAsBinary(a, function(a, e) {
                this.handlePlugInContentDownload(a, e, b, c)
            }
            .bind(this),
            function() {
                c.progress({
                    value: -1,
                    error: !0,
                    message: "DOWNLOAD_ERROR"
                })
            }) : c.progress({
            value: -1,
            error: !0,
            message: "UNSUPPORTED_DOCUMENT_TYPE"
        })
    },
    handlePlugInContentDownload: function(a, b, c, d) {
        b === c ? (a = new $SendToKindle.Document(b, a),
            b = location.pathname.match(/^[\w\-\/]+\/(.*)$/i),
            a.title = null !== b && void 0 !== b[1] ? b[1] : location.pathname,
            b = location.hostname.match(/.*\.(.*\.\w{3})$/),
            b = null === b || 2 > b.length ? location.hostname : b[1],
            a.author = b,
            d.progress({
                success: !0,
                plugin: !0,
                data: a
            })) : d.progress({
            error: !0,
            message: "DOCUMENT_TYPE_DOES_NOT_MATCH"
        })
    },
    buildNcrtResult: function(a) {
        var b = $("\x3cdiv id\x3d's2k-result' class\x3d's2k-result-content'\x3e\x3c/div\x3e");
        if (0 !== this.ncrt[0].index) {
            var c = [],
                d = this.ncrt[0],
                e = (d.node.attr("class") || "").split(" ").join(",.").replace(/^\.,|,\.,|[\.,]+$|^,/gi, ""),
                e = ("" !== e ? "." : "") + e;
            d.node.parent().children().each(function() {
                var a = $(this).data("s2k");
                void 0 !== a && (a.is_ncrt_candidate && 0.7 > a.ncrt_score || !0 === a.node.is(e) && "#unknown_class" !== a.node_style_class || (0 < a.subtree_large_images || 0 < a.subtree_medium_images) && 2 < a.depth) && c.push(a)
            });
            c.sort(function(a, b) {
                return a.layer_index - b.layer_index
            });
            this.buildContentPage(b, c, 1 < c.length ? this.ncrt[0].node.parent().data("s2k") : this.ncrt[0]);
            this.extractMultiPageArticle(b, this.ncrt[0], a)
        } else {
            var f = RegExp("^(" + this.REMOVABLE_TAGS.replace(",", "|") + ")$", "i"),
                d = this.ncrt[0].node.contents().filter(function() {
                    return null === this.nodeName.match(f)
                }).clone(!0);
            d.find(this.REMOVABLE_TAGS).remove();
            b.append('\x3cdiv id\x3d"s2k-page-1" class\x3d"s2k-page"\x3e\x3c/div\x3e');
            b.find(".s2k-page").append(d).data("s2k", this.ncrt[0]);
            this.prepareDocumentModel(b, this.ncrt[0], a)
        }
    },
    buildVlbResult: function(a) {
        var b = $("\x3cdiv id\x3d's2k-result' class\x3d's2k-result-content'\x3e\x3c/div\x3e");
        this.buildContentPage(b, [this.vlb[0]], this.vlb[0]);
        this.extractMultiPageArticle(b, this.vlb[0], a)
    },
    buildAtfpResult: function(a, b) {
        var c = $("\x3cdiv id\x3d's2k-result' class\x3d's2k-result-content'\x3e\x3c/div\x3e"),
            d = RegExp("^(" + this.REMOVABLE_TAGS.replace(",", "|") + ")$", "i"),
            e = a.contents().filter(function() {
                return null === this.nodeName.match(d)
            }).clone(!0);
        e.find(this.REMOVABLE_TAGS).remove();
        c.append(e);
        this.prepareDocumentModel(c, a.data("s2k"), b)
    },
    buildContentPage: function(a, b, c) {
        var d = "s2k-page-" + ++this.page_index;
        a.append($("\x3cdiv\x3e", {
            id: d,
            "class": "s2k-page"
        }));
        var e = a.find("#" + d);
        e.data("s2k", c);
        var f = this;
        $.each(b, function() {
            var a = this.node;
            a.prev().is(":header") && e.append(a.prev().clone(!0));
            a = a.clone(!0);
            a.find(f.REMOVABLE_TAGS).remove();
            e.append(!0 === a.is("table") ? a : a.contents())
        })
    },
    extractMultiPageArticle: function(a, b, c) {
        var d = this.analyzeMultiPageArticle();
        if (null === $SendToKindle.getState().stateDocument.location.href.match(this.MULTIPAGE_EXCLUDED) && null !== d) {
            var e = $SendToKindle.getState();
            e.metrics.count(e.metrics.NAMES.c_extraction_multipage);
            e = b.node_id;
            e = "#unknown_id" === e ? this.extractorUtils.getPathForNode(b.node) : "#" + e;
            this.extractMultiPageContent(d, 0, e, a, b, c)
        } else
            this.prepareDocumentModel(a, b, c)
    },
    extractMultiPageContent: function(a, b, c, d, e, f) {
        if (0 <= b && b < a.length) {
            var g = this;
            this.service.ajax({
                url: g.extractorUtils.makeUrlAbsolute(a[b]),
                type: "GET",
                dataType: "html",
                timeout: 5E3,
                success: function(h) {
                        var k = h.match(/(.*<\s*body[^>]*>)/i),
                            k = h.indexOf(k[0]) + k[0].length,
                            m = h.lastIndexOf("\x3c/body\x3e"),
                            l = $(h.substring(k, m)),
                            l = this.extractorUtils.getNodeFromPath(l, c);
                        if (void 0 !== l && 0 !== l.length) {
                            var q = l.length;
                            l.each(function() {
                                g.traverse($(this), 1, e.depth, 0, !1, !1, !0, function() {
                                    if (0 === --q) {
                                        var h = new $SendToKindle.NodeMetrics($("\x3cdiv\x3e\x3c/div\x3e"), 0, e.depth, 0, !0, !1, !1),
                                            k = l.map(function() {
                                                h.mergeChild($(this).data("s2k"));
                                                return $(this).data("s2k")
                                            });
                                        h.prepare();
                                        g.buildContentPage(d, k, h);
                                        g.extractMultiPageContent(a, b + 1, c, d, e, f)
                                    }
                                }, f)
                            })
                        } else
                            this.extractMultiPageContent(a, -1, c, d, e, f)
                    }
                    .bind(this),
                error: function(b, g, m) {
                        $SendToKindle.getState().metrics.count($SendToKindle.getState().metrics.NAMES.c_invalid_page);
                        this.extractMultiPageContent(a, -1, c, d, e, f)
                    }
                    .bind(this)
            })
        } else
            this.prepareDocumentModel(d, e, f)
    },
    extractFromDOM: function(a, b) {
        var c = $SendToKindle.getState();
        this.document_base_area = $(c.stateDocument).width() * $(c.stateDocument).height();
        this.document_base_width = $(c.stateDocument).width();
        this.traverse(a, 0, 0, 0, !1, !1, !1, function() {
                var d = this,
                    e = a.data("s2k");
                $.each(this.candidates, function() {
                    b.isTimedOut() || (this.score(e),
                        !0 === this.is_ncrt_candidate && 0.6 > this.ncrt_score && d.ncrt.push(this),
                        !0 === this.is_vlb_candidate && ((0.1 < this.vlb_score || 0 < this.subtree_large_images) && 0.7 > this.vlb_score) && d.vlb.push(this))
                });
                this.ncrt.sort(function(a, b) {
                    return a.ncrt_score - b.ncrt_score
                });
                this.vlb.sort(function(a, b) {
                    return a.vlb_score - b.vlb_score
                });
                0 < this.ncrt.length ? (c.metrics.count(c.metrics.NAMES.c_extraction_result_ncrt),
                    this.feedMode = 5 < this.ncrt[0].subtree_metadata_nodes,
                    this.relaxedMode = 0.45 < this.ncrt[0].subtree_link_text_density,
                    this.buildNcrtResult(b)) : 0 < this.vlb.length ? (c.metrics.count(c.metrics.NAMES.c_extraction_result_vlb),
                    this.lowQualityResult = 0.45 < this.vlb[0].vlb_score,
                    this.feedMode = 3 < this.vlb[0].subtree_metadata_nodes && 1 > this.vlb[0].subtree_link_text_density,
                    this.relaxedMode = !this.feedMode,
                    this.buildVlbResult(b)) : (c.metrics.count(c.metrics.NAMES.c_extraction_result_atfp),
                    this.lowQualityResult = this.relaxedMode = !0,
                    this.buildAtfpResult(a, b))
            }
            .bind(this), b)
    },
    prepareDocumentModel: function(a, b, c) {
        if (null !== a) {
            var d = new $SendToKindle.Document("text/html", a);
            (new $SendToKindle.NcrtExtractor.Metadata(this.relaxedMode || this.feedMode)).fetchMetadata(d, this.metadata, b);
            (new $SendToKindle.NcrtExtractor.Formatter(this, this.relaxedMode, this.feedMode)).format(a);
            d.url = window.location.href;
            d.metadata = "";
            $.each(this.candidates, function() {
                d.metadata += this.asRecord() + "\n"
            });
            setTimeout(function() {
                    this.extractorUtils.embedImages(d.contentNode.find("img"), 0, function() {
                            c.progress({
                                value: 1,
                                success: !c.isTimedOut(),
                                data: d,
                                lowQuality: this.lowQualityResult
                            })
                        }
                        .bind(this), c)
                }
                .bind(this))
        } else
            c.progress({
                error: !0,
                message: "NO_CONTENT"
            })
    },
    extract: function(a) {
        try {
            var b = $SendToKindle.getState(),
                c = $(b.stateDocument.body),
                d = c.children("embed[name\x3d'plugin']");
            if (1 === d.length)
                this.handlePlugInContent(d.attr("src"), d.attr("type"), a.progress);
            else if (b.isSelectedOnly) {
                var e = $(document.getSelection().getRangeAt(0).cloneContents()).contents();
                e.find(this.REMOVABLE_TAGS).remove();
                var f = $("\x3cdiv id\x3d's2k-result' class\x3d's2k-result-content'\x3e\x3c/div\x3e").append(e);
                this.traverse(f, 0, 0, 0, !1, !1, !0, function() {
                        this.feedMode = this.relaxedMode = !0;
                        this.prepareDocumentModel(f, f.data("s2k"), a)
                    }
                    .bind(this), a)
            } else
                this.extractFromDOM(c, a)
        } catch (g) {
            a.progress({
                error: !0,
                data: g
            })
        }
    }
};
$SendToKindle.NcrtExtractor.Formatter = function(a, b, c) {
    this.extractor = a;
    this.rowFlag = !1;
    this.relaxedMode = b;
    this.feedMode = c;
    this.extractorUtils = new $SendToKindle.ExtractorUtils;
    this.RULES = {
        ":header": {
            rules: [this.preserveFontStyle],
            attributes: /^(style)$/i
        },
        a: {
            rules: [this.makeLinkAbsolute],
            attributes: /^(href|title|name)$/i
        },
        img: {
            rules: [this.formatImage],
            attributes: /^(width|height|src|alt|style)$/i
        },
        table: {
            rules: [this.formatTable],
            attributes: /^(cellspacing|cellpadding)$/i
        },
        "tr,th,td": {
            rules: [this.formatTableElement],
            attributes: /^(colspan|rowspan|style)$/i
        },
        font: {
            attributes: /^(color|face|size)$/i
        },
        li: {
            rules: [this.formatListItem],
            attributes: /^(style)$/i
        },
        "p,span": {
            rules: [this.preserveFontStyle],
            attributes: /^(style)$/i
        },
        "*": {
            rules: [this.cleanAttributes]
        }
    }
};
$SendToKindle.NcrtExtractor.Formatter.prototype = {
    SPECIAL_TAGS: /^br|img|td|th|h[1-6]|code|sub|sup|font|mbp:pageBreak$/i,
    AD_TEXT: /^\s*(advertisement|werbung|anzeige)\s*$/i,
    getTagName: function(a) {
        if (null === a || void 0 === a || 0 === a.length)
            return "#invalid";
        var b = a[0].nodeType;
        a = a[0].tagName;
        return 3 === b ? "#text" : 1 === b && a && "" < a ? a.toLowerCase() : "#invalid"
    },
    isLocalLink: function(a) {
        a = a.node.attr("href");
        var b = $SendToKindle.getState().stateDocument.location.pathname;
        return "/" !== b && (void 0 === a || "#" === a[0] || -1 !== a.search(b))
    },
    isRemovable: function(a) {
        var b = null !== a.tag_name.match(this.SPECIAL_TAGS),
            c = !a.is_visible_node && !b || a.is_skip_image || a.is_skip_node || a.is_pagination || a.is_ad_link || a.is_ad_image || a.is_ad_node;
        if (!c && !this.relaxedMode)
            var d = 0.5 < a.subtree_link_text_density && 1 < a.subtree_links && 0 === a.subtree_valid_containers && !1 === a.node.parent().is(":header") && (a.subtree_links !== a.subtree_images || !a.is_link || !a.is_metadata_node || !a.is_inside_metadata) && 0 === a.subtree_large_images && !b,
                e = a.is_small_image || a.is_medium_image || a.is_large_image,
                f = "span" === a.tag_name && null !== a.node.parent()[0].nodeName.match(/^p$/i) && 1 === a.node.text().length,
                c = c || d || a.is_comment_node || a.is_metadata_node && !this.feedMode || a.is_link && this.isLocalLink(a) || 1 > a.subtree_length_text && 0 === a.subtree_images && !e && !b && !f;
        return c
    },
    isEmpty: function(a) {
        if (void 0 === a || null === a || 0 === a.length || void 0 !== a.attr("class") && null !== a.attr("class").match(/s2k-/i))
            return !1;
        var b = a.text(),
            c = a.text().length,
            d = a.find("img").length,
            b = null !== b.match(this.AD_TEXT),
            e = a.text().match(/(\s)+/gi),
            e = null !== e ? e.join("").length : 0;
        return 1 === a[0].nodeType && null === a[0].nodeName.match(this.SPECIAL_TAGS) && (0.8 < e / (c || 1) || 0 === c) && 0 === d || b
    },
    unlinkImages: function(a) {
        var b = this;
        a = a.find("img");
        $.each(a, function() {
            var a = $(this),
                d = a.data("s2k");
            if (void 0 === d || !0 === d.is_ad_image || !1 === d.is_visible_node || 50 > d.node.width() || 50 > d.node.height() || void 0 !== d.node[0].naturalWidth && 50 > d.node[0].naturalWidth || void 0 !== d.node[0].naturalHeight && 50 > d.node[0].naturalHeight || d.is_skip_image && !b.relaxedMode)
                a.remove();
            else if (!0 === d.is_inside_link) {
                for (var e = d, f = a; void 0 !== e && !0 === e.is_inside_link && !1 === e.is_link;)
                    f = f.parent(),
                    e = f.data("s2k");
                if (void 0 !== e && !0 === e.is_link)
                    for (d.is_inside_link = !1,
                        a.data("s2k", d),
                        f.replaceWith(a),
                        f = a.parent(); 1 === f.children().length && 0 === $.trim(f.text()).length && !f.is("td");)
                        f.replaceWith(a),
                        f = a.parent()
            }
        })
    },
    cleanAttributes: function(a, b, c, d) {
        if (void 0 === b.attr("class") || null === b.attr("class").match(/s2k-/i))
            for (c = null,
                c = b.is(":header") ? this.RULES[":header"].attributes : b.is("tr,th,td") ? this.RULES["tr,th,td"].attributes : b.is("p,span") ? this.RULES["p,span"].attributes : this.RULES[a] ? this.RULES[a].attributes : null,
                a = b[0],
                b = a.attributes.length,
                d = 0; 0 < b && d < b;) {
                var e = a.attributes[d].nodeName;
                null === c || null === e.match(c) ? (a.removeAttribute(e),
                    b--) : d++
            }
    },
    formatImage: function(a, b, c, d) {
        for (a = b.parent(); 1 === a.children().length && 0 === $.trim(a.text()).length && !a.is("td");)
            a.replaceWith(b),
            a = b.parent();
        var e = 1 === a.length ? a[0].nodeName.toLowerCase() : void 0,
            f = a,
            g = c ? c.node[0].naturalWidth || c.node.width() : 0,
            g = Math.min(g || b[0].naturalWidth || b.width() || 500, 500);
        void 0 !== b.attr("src") && null !== b.attr("src").match(/(blank\w*|x)\.(bmp|jpg|jpeg|gif|png)/i) && (b.attr("src", b.attr("data-src") || b.attr("data-original") || b.attr("src")),
            g = Math.min(Math.max(g, c.node.width()), 500));
        b.removeAttr("style").removeAttr("class").removeAttr("height");
        a[0] !== d[0] && a.removeAttr("style").removeAttr("class").removeAttr("height");
        "div" === e && 0 < a.length && a[0] !== d[0] && 3 >= a.children().length && !1 === this.feedMode ? a.addClass("s2k-default-image") : "figure" === e ? (b = $("\x3cdiv\x3e", {
                "class": "s2k-default-image"
            }).append(a.contents().clone(!0)),
            a.replaceWith(b),
            f = b,
            b = b.find("img").first()) : "td" !== e && (b.wrap($("\x3cdiv\x3e", {
                "class": "s2k-default-image"
            })),
            f = b.parent());
        0 < g && (b.css({
                width: g,
                "max-width": "100%"
            }).attr("width", g),
            f.css({
                width: g
            }),
            1 < f.children().length && b.css("margin-bottom", "1.0em"))
    },
    preserveFontStyle: function(a, b, c, d) {
        void 0 !== c && void 0 !== b && (a = c.node.css("font-weight"),
            d = c.node.css("font-style"),
            c = c.node.css("text-decoration"),
            b.removeAttr("style").css({
                "font-style": d,
                "font-weight": a,
                "text-decoration": c
            }))
    },
    formatListItem: function(a, b, c, d) {
        a = c ? c.node.css("list-style-type") : "";
        c = c ? c.node.css("background-image") : "";
        "none" === a && "" !== c && (a = "disc");
        b.removeAttr("style").css("list-style-type", a)
    },
    formatTable: function(a, b, c, d) {
        this.rowFlag = !1;
        b.removeAttr("class").removeAttr("style").addClass("s2k-table")
    },
    formatTableElement: function(a, b, c, d) {
        "tr" === a ? (this.rowFlag = !this.rowFlag,
            b.css({
                width: "",
                height: "",
                background: "",
                "background-color": ""
            }).attr("class", this.rowFlag ? "s2k-darkrow" : "")) : "th" !== a && "td" !== a || b.css({
            width: "",
            height: "",
            background: "",
            "background-color": ""
        })
    },
    makeLinkAbsolute: function(a, b, c, d) {
        $SendToKindle.getActiveDocument();
        a = b.attr("href");
        if (void 0 === a || null === a || "" === a)
            b.replaceWith("\x3cspan class\x3d's2k-no-link'\x3e" + b.text() + "\x3c/span\x3e");
        else if (void 0 !== a)
            if (c = null === a.match(/^(http|https|mailto:|#.+)/i),
                d = null !== a.match(/^(#|javascript:.*)$/i),
                !0 === c && !1 === d)
                b.attr("href", this.extractorUtils.makeUrlAbsolute(a));
            else if (!0 === d)
            if (!0 === b.parent().is(":header"))
                b.replaceWith($("\x3cdiv\x3e").append(b.contents().clone(!0)));
            else if (!0 === b.parent().is("p"))
            b.replaceWith(b.text());
        else
            for (a = b.parent(),
                b.remove(),
                b = a; this.isEmpty(b);)
                a = b.parent(),
                b.remove(),
                b = a
    },
    capitalizeParagraph: function(a, b, c, d) {
        a = b.contents().first();
        3 === a[0].nodeType && (c = a.text(),
            d = $('\x3cspan class\x3d"s2k-capital"\x3e' + c[0].toUpperCase() + "\x3c/span\x3e"),
            c = c.substring(1),
            a.remove(),
            b.prepend(c).prepend(d))
    },
    removeNode: function(a, b, c) {
        a.prev().is(":header") && !a.is("p") && a.prev().remove();
        var d = a.parent();
        a.remove();
        0 < d.children("img").length && (d.children("img").length === d.children().length && void 0 !== d.attr("class") && null === d.attr("class").match(/s2k-/i)) && (a = d.children("img"),
            b = a.data("s2k"),
            void 0 !== b && void 0 !== c && b.score(c),
            d.replaceWith(a))
    },
    reformatTable: function(a) {
        var b = a.children().first();
        b.children().each(function() {
            var b = $('\x3cdiv class\x3d"s2k-row-block"\x3e\x3c/div\x3e');
            b.data("s2k", $(this).data("s2k"));
            $(this).children().each(function() {
                var a = $('\x3cdiv class\x3d"s2k-col-block"\x3e\x3c/div\x3e').data("s2k", $(this).data("s2k")).append($(this).contents().clone(!0));
                b.append(a)
            });
            a.append(b)
        });
        b.remove()
    },
    format: function(a) {
        this.unlinkImages(a);
        a.children().first().is(":header") && a.children().first().remove();
        "tbody" === this.getTagName(a.children().first()) && this.reformatTable(a);
        var b = this;
        $.each(this.RULES, function(c, d) {
            void 0 !== d.rules && a.find(c).each(function() {
                for (var a, c = $(this), g = b.getTagName(c), h = c.data("s2k"), k = c; !1 === k.is(".s2k-page") && 0 < k.parent().length;)
                    k = k.parent();
                k.is(".s2k-page") && void 0 !== h && (a = k.data("s2k"),
                    h.score(a));
                ("#invalid" === g || "s2k-status-message" === c.attr("id") || b.isEmpty(c) || void 0 !== h && b.isRemovable(h)) && b.removeNode(c, h, a);
                for (var m = 0, l = d.rules.length; m < l; m++)
                    d.rules[m].bind(b)(g, c, h, k);
                void 0 !== c && (0 < c.length && b.isEmpty(c)) && b.removeNode(c, h, a)
            })
        });
        a.find("*").filter(function() {
            return b.isEmpty($(this))
        })
    }
};
$SendToKindle.NcrtExtractor.Metadata = function(a) {
    this.relaxedMode = a || !1;
    this.extractorUtils = new $SendToKindle.ExtractorUtils
};
$SendToKindle.NcrtExtractor.Metadata.prototype = {
    META_TITLE: "meta[itemprop\x3d'headline'],meta[name\x3d'title'],meta[property\x3d'og:title'],meta[name\x3d'og:title']",
    META_AUTHOR: "meta[name\x3d'author'],meta[property\x3d'og:author'],meta[name\x3d'og:author']",
    META_DATE: "meta[name\x3d'pubdate'],meta[name\x3d'DATE'],meta[name\x3d'dat']",
    WHITESPACE: /^\s*$/i,
    analyzeTitle: function(a, b, c) {
        var d = c.baseMetrics.node.offset(),
            e = c.baseMetrics.node.height(),
            f = c.baseMetrics.node.width(),
            g = a.node.offset();
        if (0 < a.node.width() && 0 < a.node.height() && g.top < d.top + e && g.left >= d.left && g.left <= d.left + f) {
            var f = $.contains(c.baseMetrics.node[0], a.node[0]),
                h = $.contains(c.baseMetrics.node.parent()[0], a.node[0]),
                k = $.contains(c.baseMetrics.node.parent().parent()[0], a.node[0]);
            b = "" !== a.node.text() && b.substring(0, a.node.text().length) === a.node.text();
            var m = 6 - parseInt(a.tag_name[1], 10),
                h = ((b ? 5 : 0) + (f ? 5 : 0) + (h ? 3 : 0) + (k ? 2 : 0) + m) / 20;
            if (0 < h && c.titleScore < h || null === c.title)
                if (c.title = a.node.contents().filter(this.filterInvisible).text(),
                    c.subtitle = $("\x3cdiv class\x3d's2k-subtitle'\x3e\x3c/div\x3e"),
                    null === c.title.match(this.WHITESPACE)) {
                    if (!1 === f && c.baseMetrics.node.parent()[0] !== a.node.parent()[0])
                        try {
                            var l = d.top + e,
                                q = a.node.parent().find(":header").filter(function() {
                                    var b = $(this).data("s2k"),
                                        c = $(this).offset();
                                    return this !== a.node[0] && void 0 !== b && !1 === b.is_metadata_node && !1 === b.is_inside_metadata && c.top > g.top && c.top <= l
                                });
                            c.subtitle.append($("\x3cp\x3e").text(q.contents().filter(this.filterInvisible).text()));
                            var p = a.node.next(),
                                n = p.data("s2k");
                            !1 === p.is(":header") && (void 0 !== n && !1 === $.contains(p[0], c.baseMetrics.node[0]) && (!1 === n.is_metadata_node && 0.8 < n.subtree_ratio_length_plain_text && 1 <= n.subtree_lines || 0 < n.subtree_large_images)) && c.subtitle.append(p.contents().filter(this.filterInvisible).clone(!0))
                        } catch (r) {
                            c.subtitle = null
                        }
                    else
                        a.node.next().is(":header") ? c.subtitle.append($("\x3cp\x3e").text(a.node.next().contents().filter(this.filterInvisible).text())) : c.subtitle = null;
                    c.titleScore = h
                } else
                    c.title = null
        }
    },
    analyzeAuthor: function(a, b) {
        for (var c = $.contains(b.baseMetrics.node[0], a.node[0]), d = $.contains(b.baseMetrics.node.parent()[0], a.node[0]), e = $.contains(b.baseMetrics.node.parent().parent()[0], a.node[0]), f = a.node.text().replace(/\n/gi, " ").replace(/[|]/gi, ","), g = f.match(/(by|from|von):?\s*(.*)/i), f = null !== g && void 0 !== g[2] ? g[2] : f, g = f.match(/(.*)(\s+-|\s+posted|\s+published|\s+updated|\s+on|\s*,)/i); null !== g;)
            void 0 !== g[1] && (f = g[1]),
            g = f.match(/(.*)(\s+-|\s+posted|\s+published|\s+updated|\s+on|\s*,)/i);
        void 0 !== f && (null !== f && "" !== f && 50 > f.length) && (c = ((c ? 5 : 0) + (d ? 3 : 0) + (e ? 2 : 0)) / 10,
            b.authorScore < c || null === b.author) && (b.authorScore = c,
            b.author = $.trim(f))
    },
    analyzePublicationDate: function(a, b) {
        var c = $.contains(b.baseMetrics.node[0], a.node[0]),
            d = $.contains(b.baseMetrics.node.parent()[0], a.node[0]),
            e = $.contains(b.baseMetrics.node.parent().parent()[0], a.node[0]),
            f = this.parseDateFromString(void 0, a.node.text().replace(/(posted|published|updated|on)(:)?\s*/i, ""));
        null !== f && void 0 !== f && (c = ((c ? 5 : 0) + (d ? 3 : 0) + (e ? 2 : 0)) / 10,
            b.publicationDateScore < c || null === b.publicationDate) && (b.publicationDateScore = c,
            b.publicationDate = f)
    },
    analyzeMetaTags: function(a, b, c) {
        b = a.find(b);
        b = 0 < b.length ? b.first().attr("content") : null;
        return null !== b && void 0 !== c ? c(a, b) : b
    },
    parseDateFromUrl: function(a) {
        a = a.match(/\d{4}\/\d{1,2}\/\d{1,2}/i);
        return null !== a ? this.parseDateFromString(void 0, a[0]) : null
    },
    parseDateFromString: function(a, b) {
        var c = Date.parse(b);
        return c && c.getFullYear() <= Date.today().getFullYear() ? c.toFormattedString("MMMM dd, yyyy") : null
    },
    filterInvisible: function() {
        var a = $(this).data("s2k");
        if (void 0 !== a)
            return a.is_visible_node
    },
    fetchMetadata: function(a, b, c) {
        var d = $($SendToKindle.getState().stateDocument),
            e = d[0].location.hostname.match(/.*\.(.*\.\w{3})$/);
        a.source = null === e || 2 > e.length ? d[0].location.hostname : e[1];
        if (this.relaxedMode)
            a.title = d[0].title || a.source,
            a.publicationDate = (new Date).toFormattedString("MMMM dd, yyyy");
        else {
            var f = this,
                g = {
                    baseMetrics: c,
                    title: null,
                    subtitle: null,
                    titleScore: 0,
                    author: null,
                    authorScore: 0,
                    publicationDate: null,
                    publicationDateScore: 0
                };
            $.each(b, function() {
                !0 === this.is_title_node ? f.analyzeTitle(this, d[0].title, g) : !0 === this.is_author_node && f.analyzeAuthor(this, g);
                !0 === this.is_date_node && f.analyzePublicationDate(this, g)
            });
            g.title = g.title || this.analyzeMetaTags(d, this.META_TITLE, void 0) || d[0].title;
            g.author = g.author || this.analyzeMetaTags(d, this.META_AUTHOR, void 0);
            g.publicationDate = g.publicationDate || this.analyzeMetaTags(d, this.META_DATE, this.parseDateFromString) || this.parseDateFromUrl(d[0].location.href);
            a.author = g.author || null;
            a.publicationDate = g.publicationDate || null;
            a.title = g.title ? $.trim(g.title.replace(/\s+/g, " ")) : e;
            null !== g.subtitle && 0 < g.subtitle.children().length && a.contentNode.find(".s2k-page").first().prepend(g.subtitle)
        }
    }
};
$SendToKindle.MapExtractor = function() {
    this.mapProviders = [{
        name: "Google Maps",
        urlScheme: /maps\.google\.\w+/i,
        handler: this.extractGMaps
    }, {
        name: "Bing Maps",
        urlScheme: /\w\.bing\.\w+\/maps/i,
        handler: this.extractBMaps
    }];
    this.rowFlag = !1
};
$SendToKindle.MapExtractor.prototype = {
    REMOVABLE_TAGS: "script,noscript,object,embed,iframe,frame,frameset,noframes,aside,menu,header,footer,source,audio,video,form,ins,del,style,form,cite,.social-media-container",
    MAP_TEMPLATE: '\x3cdiv class\x3d"s2k-content-map"\x3e   \x3cdiv class\x3d"s2k-maps-disclosure"\x3e\x3c/div\x3e   \x3cdiv class\x3d"s2k-maps-copyright"\x3e\x3c/div\x3e\x3c/div\x3e',
    MAP_WAYPOINTS: '\x3cdiv class\x3d"s2k-map-waypoints"\x3e    \x3ctable class\x3d"s2k-maps-table"\x3e    \x3c/table\x3e\x3c/div\x3e',
    MAP_WP_HEADER: '\x3ctr class\x3d"s2k-darkrow s2k-waypoint-header"\x3e    \x3ctd class\x3d"s2k-maps-icon"\x3e\x3c/td\x3e    \x3ctd class\x3d"s2k-maps-text" colspan\x3d"2"\x3e\x3c/td\x3e    \x3ctd class\x3d"s2k-maps-distance" style\x3d"font-size: 70%"\x3e        \x3cdiv class\x3d"s2k-maps-distance s2k-maps-step-distance"\x3e\x3c/div\x3e        \x3cdiv class\x3d"s2k-maps-distance s2k-maps-total-distance"\x3e\x3c/div\x3e    \x3c/td\x3e\x3c/tr\x3e',
    MAP_WP_ENTRY: '\x3ctr class\x3d"s2k-waypoint-step"\x3e    \x3ctd class\x3d"s2k-maps-icon"\x3e\x3c/td\x3e    \x3ctd class\x3d"s2k-maps-num"\x3e\x3c/td\x3e    \x3ctd class\x3d"s2k-maps-text"\x3e         \x3cdiv class\x3d"s2k-maps-step-description"\x3e\x3c/div\x3e         \x3cdiv class\x3d"s2k-maps-step-notice"\x3e\x3c/div\x3e         \x3cdiv class\x3d"s2k-maps-step-duration"\x3e\x3c/div\x3e    \x3c/td\x3e    \x3ctd class\x3d"s2k-maps-distance"\x3e        \x3cdiv class\x3d"s2k-maps-distance s2k-maps-step-distance"\x3e\x3c/div\x3e        \x3cdiv class\x3d"s2k-maps-distance s2k-maps-total-distance"\x3e\x3c/div\x3e    \x3c/td\x3e\x3c/tr\x3e',
    MAP_WP_SUMMARY: '\x3ctr class\x3d"s2k-waypoint-info"\x3e   \x3ctd colspan\x3d"4"\x3e\x3c/td\x3e\x3c/tr\x3e',
    MAX_MAP_RETRIES: 10,
    format: function(a) {
        var b = $(this.MAP_TEMPLATE);
        null !== a.disclaimer && b.find(".s2k-maps-disclosure").text(a.disclaimer);
        null !== a.copyright && b.find(".s2k-maps-copyright").text(a.copyright);
        if (a.waypoints && 0 < a.waypoints.length) {
            var c = this,
                d = $(this.MAP_WAYPOINTS),
                e = d.find("table.s2k-maps-table");
            a.waypoints.each(function() {
                switch (this.type) {
                    case "HEADER":
                        e.append(c.formatHeader(this));
                        c.rowFlag = !1;
                        break;
                    case "STEP":
                        e.append(c.formatStep(this));
                        c.rowFlag = !c.rowFlag;
                        break;
                    case "SUMMARY":
                        e.append(c.formatWpSummary(this))
                }
            });
            b.prepend(d)
        }
        a.mapImage && 0 < a.mapImage.length && (b.prepend($("\x3cdiv class\x3d's2k-maps-image s2k-default-image'\x3e").append($("\x3cimg\x3e", {
                src: a.mapImage.attr("src"),
                width: "100%"
            }))),
            b.find(".s2k-maps-image").width(Math.min(a.mapImage[0].naturalWidth || $(a.mapImage[0]).width() || 500, 500)));
        return b
    },
    formatImage: function(a) {
        if (a && 0 < a.length) {
            if ("object" === typeof a && null === a.attr("src").match(/(gray|transparent)\.png/i)) {
                var b = a.attr("width") || a.width(),
                    c = a.attr("height") || a.height();
                return "\x3cimg src\x3d'" + a.attr("src") + "'    width\x3d'" + b + "'    height\x3d'" + c + "'    style\x3d'width:" + b + "px;height:" + c + "px' /\x3e"
            }
            if ("string" === typeof a)
                return a
        }
        return ""
    },
    formatHeader: function(a) {
        var b = $(this.MAP_WP_HEADER),
            c = a.icon,
            d = a.text,
            e = a.distance;
        a = a.time;
        b.find(".s2k-maps-icon").append(this.formatImage(c));
        b.find(".s2k-maps-text").text(d);
        b.find(".s2k-maps-distance .s2k-maps-step-distance").text(e);
        b.find(".s2k-maps-distance .s2k-maps-total-distance").text(a);
        return b
    },
    formatStep: function(a) {
        var b = $(this.MAP_WP_ENTRY);
        !0 === this.rowFlag && b.addClass("s2k-darkrow");
        b.find(".s2k-maps-icon").append(this.formatImage(a.icon));
        b.find(".s2k-maps-num").append(a.number);
        b.find(".s2k-maps-step-description").append(a.text);
        b.find(".s2k-maps-step-notice").append(a.notice);
        b.find(".s2k-maps-step-duration").append(a.duration);
        b.find(".s2k-maps-step-distance").append(a.stepDistance);
        b.find(".s2k-maps-total-distance").append(a.totalDistance);
        return b
    },
    formatWpSummary: function(a) {
        return $(this.MAP_WP_SUMMARY).find("td").append(a.text)
    },
    extractGMaps: function(a, b, c) {
        var d = $(a.stateDocument.body);
        if (-1 === a.stateDocument.location.href.search("\x26pw\x3d2")) {
            var e = d.find(".permalink-button").attr("href") + "\x26pw\x3d2";
            d.append("\x3ciframe id\x3d's2k-print-frame' frameborder\x3d'0'     style\x3d'position:absolute;top:-800px;left:-800px;width:800px;height:800px;'\x3e\x3c/iframe\x3e");
            var f = d.find("#s2k-print-frame");
            f.attr("src", e);
            f.load(function() {
                b.handleGMapsContent($(f[0].contentDocument.body), a.stateDocument.location.href, c)
            })
        } else
            b.handleGMapsContent(d, a.stateDocument.location.href, c)
    },
    handleGMapsContent: function(a, b, c, d) {
        d = d || 0;
        if (0 === a.find(".printimage").length && d < this.MAX_MAP_RETRIES)
            "none" === a.find("#main_map").css("display") && a.find("#showmap_cb").click(),
            setTimeout(function() {
                    this.handleGMapsContent(a, b, c, ++d)
                }
                .bind(this), 200);
        else {
            var e = a.find("#page"),
                f = {
                    mapImage: "",
                    disclaimer: $(e.find(".legal")[0]).text(),
                    copyright: $(e.find(".legal")[1]).text(),
                    waypoints: []
                },
                g = e.find("#panel_dir");
            0 < g.length && ($(this.MAP_WAYPOINTS),
                g.children().each(function() {
                    var a = $(this);
                    !0 === a.hasClass("ddwpt") ? f.waypoints.push({
                        type: "HEADER",
                        icon: a.find(".ddptlnk img"),
                        text: $.trim(a.find(".ddw-addr").text()),
                        distance: $.trim(a.find(".ddw-dist").text()),
                        time: ""
                    }) : a.attr("id") && null !== a.attr("id").match(/ddr\d+/i) ? a.find(".segmentdiv").each(function() {
                        var a = $(this),
                            b = {
                                type: "STEP",
                                icon: a.find(".icon img"),
                                number: $.trim(a.find(".num").text()),
                                text: null,
                                notice: null,
                                duration: null,
                                stepDistance: null,
                                totalDistance: null
                            };
                        f.waypoints.push(b);
                        var c = a.find(".dirsegtext"),
                            a = a.find(".sdist").children();
                        b.text = $(c.children()[1]).contents().clone(!0);
                        b.text.remove("div");
                        b.notice = $.trim(c.find(".dirsegnote").text());
                        b.duration = $.trim(c.find(".segtime").text());
                        b.stepDistance = $.trim($(a[0]).text());
                        b.totalDistance = $.trim($(a[1]).text())
                    }) : a.attr("class") && a.attr("class").match(/dir-rtesum/i) && f.waypoints.push({
                        type: "SUMMARY",
                        text: $.trim(a.text())
                    })
                }));
            f.mapImage = e.find(".printimage");
            c(!0, b, f)
        }
    },
    extractBMaps: function(a, b, c) {
        var d = $(a.stateDocument.body),
            e = a.stateDocument.location,
            f = e.href.match(/pt=([a-z]+)/i);
        if (null === f) {
            var g = "pb";
            0 < d.find(".goButton").length && (d.find(".goButton").click(),
                g = "pf");
            f = decodeURIComponent(atob(window.location.hash.substring(1)));
            if ("" === f)
                c(!1, void 0, void 0, void 0);
            else {
                if ("pf" === g) {
                    var h = f.match(/cp=(-?\d+\.\d+)~(-?\d+\.\d+)/i);
                    null !== h && (f = f.replace(h[0], "cp\x3d" + h[1] + "," + h[2]),
                        f = f.replace("lvl\x3d", "z\x3d"),
                        f += "\x26pt\x3d" + g)
                }
                "pb" === g && "" !== f && (f = encodeURIComponent($.trim($("#searchPageContextContent h2").contents()[0].nodeValue)),
                    f = "mkt\x3den-us\x26z\x3d10\x26s\x3dr\x26cp\x3d" + $("#searchPageLatLongContent").text().replace(" ", ",") + "\x26poi\x3d" + f + "\x26b\x3d1\x26pt\x3d" + g);
                e = e.protocol + "//" + e.host + "/maps/print.aspx?" + f;
                d.append("\x3ciframe id\x3d's2k-print-frame' frameborder\x3d'0'     style\x3d'position:absolute;top:-800px;left:-800px;width:800px;height:800px;'\x3e\x3c/iframe\x3e");
                var k = d.find("#s2k-print-frame");
                k.attr("src", e);
                k.load(function() {
                    b.handleBMapsContent($(k[0].contentDocument.body), a.stateDocument.location.href, g, c)
                })
            }
        } else
            b.handleBMapsContent(d, a.stateDocument.location.href, f[1], c)
    },
    handleBMapsContent: function(a, b, c, d) {
        var e = a.find("#mainContents"),
            f = {
                mapImage: e.find("pf" === c ? ".map" : ".map.mapbasic"),
                disclaimer: e.find(".disclaimer").text(),
                copyright: "",
                waypoints: []
            };
        c = e.find("#DrivingInstructions");
        0 < c.length && c.each(function() {
            $(this).find("li").each(function() {
                var a = $(this);
                if (void 0 === a.attr("id") && "directionStepList" === a.attr("class"))
                    f.waypoints.push({
                        type: "HEADER",
                        icon: $.trim(a.find(".directionStepImg").text()),
                        text: $.trim(a.find(".directionHeaderText").text()),
                        distance: $.trim(a.find(".directionLegDistance").text()),
                        time: $.trim(a.find(".directionLegTime").text())
                    });
                else if (void 0 !== a.attr("id") && "directionStepList" === a.attr("class")) {
                    var b = {
                        type: "STEP",
                        icon: a.find(".directionStepImg"),
                        number: $.trim(a.find(".directionStepNumber").text()),
                        text: null,
                        notice: "",
                        duration: "",
                        stepDistance: $.trim(a.find(".directionStepDistance").text()),
                        totalDistance: ""
                    };
                    f.waypoints.push(b);
                    a.find(".directionStepIncident").each(function() {
                        b.notice += "\x3cdiv\x3e" + $.trim($(this).text()) + "\x3c/div\x3e"
                    });
                    a = $("\x3cdiv\x3e\x3c/div\x3e").append(a.find(".directionStepInstruction").contents().clone(!0));
                    a.find("span.instructionKeyword").replaceWith(function() {
                        return $("\x3cstrong\x3e").text($(this).text())
                    });
                    b.text = a
                }
            })
        });
        var g = "";
        a.find("#waypointsAddress, .locationText").each(function() {
            g += $.trim($(this).text()) + " to "
        });
        g = g.substring(0, g.length - 4);
        d(!0, b, f, g)
    },
    extract: function(a) {
        for (var b = $SendToKindle.getState(), c = b.stateDocument, d, e = 0, f = this.mapProviders.length; e < f; e++)
            c.location.href.match(this.mapProviders[e].urlScheme) && (d = this.mapProviders[e]);
        d.handler(b, this, function(b, d, e, f) {
                if (!0 === b) {
                    b = this.format(e);
                    var l = new $SendToKindle.Document("text/html", b);
                    l.title = (f || c.title).replace(" - Google Maps", "").replace(" on Bing Maps - Bing Maps", "");
                    l.url = d;
                    l.metadata = "Send To Kindle, Maps Extractor";
                    l.publicationDate = (new Date).toFormattedString("MMMM dd, yyyy");
                    d = c.location.hostname.match(/.*\.(.*\.\w{3})$/);
                    l.source = null === d || 2 > d.length ? c.location.hostname : d[1];
                    (new $SendToKindle.ExtractorUtils).embedImages(l.contentNode.find("img"), 0, function() {
                        a.progress({
                            success: !0,
                            data: l
                        })
                    }, a)
                } else
                    a.progress({
                        error: !0,
                        data: "EXTRACTION_FAILED"
                    })
            }
            .bind(this))
    }
};
$SendToKindle.EXTRACTORS = [{
    schema: /(maps\.google\.\w+)|(\w\.bing\.\w+\/maps)/i,
    type: $SendToKindle.MapExtractor,
    metrics: "c_extraction_maps"
}];
$SendToKindle.createExtractor = function(a) {
    for (var b = a.stateDocument.location.href, c = 0, d = $SendToKindle.EXTRACTORS.length; c < d; c++)
        if (!0 === $SendToKindle.EXTRACTORS[c].schema.test(b))
            return a.metrics.count(a.metrics.NAMES[$SendToKindle.EXTRACTORS[c].metrics]),
                new $SendToKindle.EXTRACTORS[c].type;
    a.metrics.count(a.metrics.NAMES.c_extraction_ncrt);
    return new $SendToKindle.NcrtExtractor
};
void 0 !== window.chrome && ($SendToKindle.Service.prototype.sendExtensionMessage = function(a, b, c) {
    chrome.extension.sendRequest({
        action: a,
        data: b
    }, function(a) {
        void 0 !== c && c(a)
    })
});
null !== window.navigator.userAgent.match(/Firefox\//i) && ($SendToKindle.Service.prototype.extensionHandlers = {},
    $SendToKindle.Service.prototype.sendExtensionMessage = function(a, b, c) {
        var d = murmurhash3_32_gc("" + Date.now() + "_s2k_handler", Math.ceil(1E3 * Math.random()));
        $SendToKindle.Service.prototype.extensionHandlers[d] = c;
        sendAsyncMessage({
            action: a,
            data: b,
            state: d
        })
    },
    $SendToKindle.Service.prototype.ajax = function(a) {
        a = a || {};
        a.url = a.url || this.SERVICE_URL + "?tag\x3dabba-s2k-us-ff-20";
        a.type = a.type || "GET";
        a.data = a.data || null;
        a.success = a.success || function() {};
        a.error = a.error || function() {};
        a.complete = a.complete || function() {};
        a.timeout = a.timeout || 3E4;
        a.async = !0;
        a.cache = a.cache || !1;
        a.binary = a.binary || !1;
        a.responseType = a.responseType || "";
        a.dataType = a.dataType || "text";
        null !== a.url.match(/action=reftag/i) && (a.url += "\x26tag\x3dabba-s2k-us-ff-20");
        var b = {
            url: a.url,
            type: a.type,
            async: a.async,
            cache: a.cache,
            timeout: a.timeout,
            responseType: a.responseType,
            dataType: a.dataType,
            binary: a.binary,
            data: null
        };
        if (!1 === a.binary && null !== a.data)
            b.data = $.param(a.data);
        else if (!0 === a.binary && null !== a.data) {
            for (var c = "", d = 0, e = a.data.byteLength; d < e; d++)
                c += String.fromCharCode(a.data[d]);
            b.data = btoa(c)
        }
        this.ajaxSend(a, b)
    },
    $SendToKindle.Service.prototype.ajaxSend = function(a, b) {
        this.sendExtensionMessage("service-request", b, function(b) {
                if (void 0 === b || void 0 !== b.error)
                    a.error();
                else {
                    if ("arraybuffer" === a.responseType) {
                        for (var d = atob(b.data), e = new ArrayBuffer(d.length), f = new Uint8Array(e), g = 0; g < d.length; g++)
                            f[g] = d.charCodeAt(g);
                        b.data = e
                    } else if ("json" === a.dataType || "application/json" === b.contentType)
                        b.data = JSON.parse(b.data);
                    a.success(b.data, b.contentType)
                }
                a.complete()
            }
            .bind(this))
    },
    $SendToKindle.extensionUrl = "resource://sendtokindle",
    $SendToKindle.platformInfo = {
        name: "chrome_ocs",
        version: "1.0.1.74",
        versionId: 74,
        platform: "chrome-1.0.1.74",
        ref: "gch"
    },
    $SendToKindle.onPlatformMessage = function(a) {
        a = JSON.parse(a);
        if ("bootstrap-data" === a.state)
            $SendToKindle.Service.prototype.SERVICE_URL = a.message.serviceUrl || $SendToKindle.Service.prototype.SERVICE_URL,
            $SendToKindle.s2kGuid = a.message.s2kGuid || $SendToKindle.s2kGuid,
            $SendToKindle.lowQualityAction = a.message.lqa || $SendToKindle.lowQualityAction,
            sendAsyncMessage({
                action: "execution",
                state: "execution-request"
            });
        else if ("execution-request" === a.state)
            $SendToKindle.launch(a.message.preview, a.message.selectedOnly, a.message.shortcut);
        else if ($SendToKindle.Service.prototype.extensionHandlers[a.state]) {
            var b = $SendToKindle.Service.prototype.extensionHandlers[a.state];
            delete $SendToKindle.Service.prototype.extensionHandlers[a.state];
            b(a.message)
        }
    }
);
$SendToKindle.Preview = function() {
    this.dispatcher = null;
    this.isGuidRefresh = this.isInjected = !1;
    this.service = new $SendToKindle.Service;
    this.platformInfo = {
        name: "chrome_preview",
        version: "1.0.1.74",
        versionId: 74,
        platform: "chrome-1.0.1.74",
        ref: "gch",
        metrics: "emit-metrics"
    };
    $SendToKindle.platformInfo = this.platformInfo
};
$SendToKindle.Preview.prototype = {
    connect: function() {
        var a = $SendToKindle.getState();
        this.dispatcher = $(a.stateDocument).find("#s2k-event-manager");
        this.registerEvents();
        this.isGuidRefresh = /refresh/i.test(a.stateDocument.location.hash);
        if (!0 === this.isGuidRefresh) {
            var b = a.stateDocument.location.hash.replace(/,?refresh,?/gi, "");
            a.stateWindow.history.replaceState(null, "", a.stateDocument.location.pathname + a.stateDocument.location.search + ("#" === b ? "" : b))
        }
        this.service.sendExtensionMessage("extension-metadata", {
            refresh: this.isGuidRefresh
        }, this.onExtensionMetadata.bind(this))
    },
    registerEvents: function() {
        this.dispatcher.on("s2k-send-to-kindle", this.onSendToKindle.bind(this));
        this.dispatcher.on("s2k-injected", this.onContentInjected.bind(this));
        this.dispatcher.on("s2k-metadata-update", this.onMetadataUpdate.bind(this))
    },
    injectDocument: function() {
        var a = window.location.href.match(/article=(\d+)/i);
        if (null === a || void 0 === a[1])
            this.onContentLoaded({
                data: {
                    token: null,
                    timestamp: null,
                    data: void 0
                }
            });
        else
            this.service.sendExtensionMessage("fetch-document", {
                token: a[1]
            }, this.onContentLoaded.bind(this))
    },
    onContentLoaded: function(a) {
        if (!1 === this.isInjected) {
            var b = document.createEvent("CustomEvent");
            b.initCustomEvent("s2k-inject", !0, !0, JSON.stringify({
                token: a.data.token,
                timestamp: a.data.timestamp,
                data: a.data.data,
                pi: this.platformInfo
            }));
            if (a.data.data) {
                var c = $SendToKindle.getState();
                c.content = new $SendToKindle.Document;
                c.content.fromStorageJson(a.data.data)
            }
            this.dispatcher[0].dispatchEvent(b);
            setTimeout(function() {
                    this.onContentLoaded(a)
                }
                .bind(this), 500)
        }
    },
    onContentInjected: function() {
        this.isInjected = !0;
        this.dispatcher.off("s2k-injected")
    },
    onExtensionMetadata: function(a) {
        $SendToKindle.extensionUrl = a.data.url;
        $SendToKindle.s2kGuid = a.data.s2kGuid;
        this.injectDocument()
    },
    onMetadataUpdate: function(a) {
        a = a.originalEvent.detail;
        var b = $SendToKindle.getState();
        b.content.title = a.title || b.content.title;
        b.content.author = a.author || b.content.author;
        this.service.sendExtensionMessage("update-document", a, void 0)
    },
    onSendToKindle: function() {
        var a = $SendToKindle.getState();
        a.statusMessage = a.statusMessage || new $SendToKindle.StatusMessage("status");
        a.statusMessage.inject();
        a.statusMessage.setMessage("send");
        this.service.sendToKindle()
    }
};
$SendToKindle.History = function() {};
$SendToKindle.History.prototype = {
    HISTORY_URL: "/history/send-to-kindle-history.html",
    HISTORY_STYLE: {
        "#s2k-history-overlay": {
            position: "fixed",
            top: "0",
            left: "0",
            "z-index": "2147483647"
        },
        "#s2k-history-shade": {
            position: "absolute",
            opacity: "0.8",
            "background-color": "#000",
            "border-bottom-left-radius": "15px",
            "border-bottom-right-radius": "15px",
            "z-index": "-1"
        },
        "#s2k-history-frame": {
            margin: "0px 15px 15px 15px"
        }
    },
    HISTORY_FRAME_STYLE: {
        width: "90%"
    },
    HISTORY_OVERLAY: $('\x3cdiv id\x3d"s2k-history-overlay" style\x3d"display:none"\x3e   \x3cdiv id\x3d"s2k-history-shade"\x3e\x3c/div\x3e   \x3ciframe id\x3d"s2k-history-frame" frameborder\x3d"0" scrolling\x3d"0" \x3e\x3c/iframe\x3e   \x3cdiv id\x3d"s2k-history-button-close"\x3e\x3c/div\x3e\x3c/div\x3e'),
    history: void 0,
    historyFrame: void 0,
    inject: function() {
        var a = $SendToKindle.getState();
        this.history = this.HISTORY_OVERLAY.clone();
        this.history.find("#s2k-history-frame").attr("src", $SendToKindle.extensionUrl + this.HISTORY_URL);
        $(a.stateDocument.body).append(this.history);
        this.history = $(a.stateDocument.body).find("#s2k-history-overlay");
        this.historyShade = this.history.find("#s2k-history-shade");
        this.historyFrame = this.history.find("#s2k-history-frame");
        $(a.stateWindow).on("resize", this.onResize.bind(this));
        $(a.stateWindow).on("message", this.onHistoryMessage.bind(this));
        $(a.stateDocument).on("click", this.onClose.bind(this));
        this.history.on("click", function(a) {
            a.stopPropagation()
        });
        this.history.css(this.HISTORY_STYLE["#s2k-history-overlay"]);
        for (var b in this.HISTORY_STYLE)
            this.history.find(b).css(this.HISTORY_STYLE[b]);
        this.onResize();
        this.history.slideDown("fast")
    },
    terminate: function() {
        this.history.slideUp("fast", function() {
                this.history.remove();
                $SendToKindle.history = void 0
            }
            .bind(this))
    },
    onResize: function() {
        var a = $($SendToKindle.getState().stateWindow),
            b = a.width(),
            a = a.height() / 2;
        this.history.css({
            width: b + "px",
            height: a + "px"
        });
        this.historyShade.css({
            width: b + "px",
            height: a + "px"
        });
        this.historyFrame.css({
            width: b - 30 + "px",
            height: a - 15 + "px"
        })
    },
    onHistoryMessage: function(a) {
        if ("history-close" === a.originalEvent.data)
            this.onClose()
    },
    onClose: function() {
        this.terminate()
    }
};
$SendToKindle.launchProgress = function(a) {
    var b = $SendToKindle.getState();
    if (!0 === a.success && !1 === b.abortWorkflow)
        b.metrics.stopTimer(b.metrics.NAMES.t_extraction),
        b.content = a.data,
        b.metrics.countWithPrefix(b.metrics.NAMES.c_source, b.content.source),
        a.lowQuality = !1 === b.isPreviewOnly && !0 === a.lowQuality,
        !0 === a.lowQuality && "ASK" === $SendToKindle.lowQualityAction ? b.statusMessage.switchMode("low_quality") : (!0 === a.lowQuality && "PREVIEW" === $SendToKindle.lowQualityAction && (b.isPreviewOnly = !0),
            !0 === b.isPreviewOnly && !0 !== a.plugin ? (b.metrics.count(b.isShortcut ? b.metrics.NAMES.c_ext_sc_preview : b.metrics.NAMES.c_ext_ddown_preview),
                b.service.redirectToPreview()) : !1 === b.isPreviewOnly ? (b.metrics.count(b.isShortcut ? b.metrics.NAMES.c_ext_sc_send : b.metrics.NAMES.c_ext_ddown_send),
                b.service.sendToKindle()) : (b.statusMessage.setMessage("preview-plugin"),
                b.statusMessage.terminate(!0, !1)));
    else if (!0 === a.error && !1 === b.abortWorkflow || this.isTimedOut())
        b.statusMessage.setMessage("extraction"),
        b.statusMessage.terminate(!0, !1),
        b.metrics.countWithPrefix(b.metrics.NAMES.c_source, b.stateDocument.location.hostname),
        b.metrics.count(b.metrics.NAMES.c_extraction_error),
        b.metrics.terminate()
};
$SendToKindle.onStatusAction = function(a, b) {
    var c = $SendToKindle.getState();
    "SEND" === a || "PREVIEW" === a ? (c.isPreviewOnly = "PREVIEW" === a,
        c.statusMessage.switchMode("status"),
        c.statusMessage.setMessage(a.toLowerCase()),
        !0 === b ? ($SendToKindle.lowQualityAction = "SEND",
            c.service.setDefaultEngineAction("SEND", function() {
                $SendToKindle.launchProgress({
                    success: !0,
                    data: c.content
                })
            })) : $SendToKindle.launchProgress({
            success: !0,
            data: c.content
        })) : "status.abort" === a && (c.content = null,
        c.abortWorkflow = !0,
        c.statusMessage.terminate(!1, !0))
};

$SendToKindle.launch = function(a, b, c) {
    var d = $SendToKindle.getState();
    d.isPreviewOnly = a || !1;
    d.isSelectedOnly = b || !1;
    d.isShortcut = c || !1;
    d.metrics.init();
    d.statusMessage = d.statusMessage || new $SendToKindle.StatusMessage("status", $SendToKindle.onStatusAction);
    d.abortWorkflow = !1;
    null !== d.stateDocument.body && null === d.stateDocument.location.pathname.match(/^\/gp\/sendtokindle\/(reader|setup)/i) && (d.statusMessage.inject(),
        d.statusMessage.setMessage("analyze"),
        setTimeout(function() {
            if (null === d.content) {
                d.metrics.startTimer(d.metrics.NAMES.t_extraction);
                var a = $SendToKindle.createExtractor(d),
                    b = {
                        timeoutTimeInMillis: Date.now() + $SendToKindle.extractionProcessTimeoutInMillis,
                        isTimedOut: function() {
                            return Date.now() > this.timeoutTimeInMillis
                        }
                    };
                b.progress = $SendToKindle.launchProgress.bind(b);
                a.extract(b)
            } else
                $SendToKindle.launchProgress({
                    success: !0,
                    data: d.content,
                    value: 1
                })
        }, 0))
};

$SendToKindle.launchPreview = function() {
    var a = $SendToKindle.getState();
    null !== a.stateDocument.body && -1 !== a.stateDocument.location.href.search("/gp/sendtokindle/reader") && (a.metrics.init(),
        a.preview = new $SendToKindle.Preview,
        a.preview.connect())
};
