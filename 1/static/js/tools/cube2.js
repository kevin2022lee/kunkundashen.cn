var _0x56d5 = ["click", "#reset2x2", "#scramble2x2", "#solve2x2", "#edit2x2", "ready", "data-id", "attr", "mousedown", "#wrap2x2Cube > div > div > div", "-webkit-transform", "rotate(", "deg)", "css", "parent", "log", "<div class=\"editcolor", " mode", "\"><div class=\"faceUp\"><div class=\"clr", "\" data-id=\"12\"></div><div class=\"clr", "\" data-id=\"13\"></div><div class=\"clr", "\" data-id=\"14\"></div><div class=\"clr", "\" data-id=\"15\"></div></div>", "<div class=\"faceLeft\"><div class=\"clr", "\" data-id=\"5\"></div><div class=\"clr", "\" data-id=\"4\"></div><div class=\"clr", "\" data-id=\"7\"></div><div class=\"clr", "\" data-id=\"6\"></div></div>", "<div class=\"faceFront\"><div class=\"clr", "\" data-id=\"20\"></div><div class=\"clr", "\" data-id=\"21\"></div><div class=\"clr", "\" data-id=\"22\"></div><div class=\"clr", "\" data-id=\"23\"></div></div>", "<div class=\"faceRight\"><div class=\"clr", "\" data-id=\"16\"></div><div class=\"clr", "\" data-id=\"17\"></div><div class=\"clr", "\" data-id=\"18\"></div><div class=\"clr", "\" data-id=\"19\"></div></div>", "<div class=\"faceBack\"><div class=\"clr", "\" data-id=\"9\"></div><div class=\"clr", "\" data-id=\"8\"></div><div class=\"clr", "\" data-id=\"11\"></div><div class=\"clr", "\" data-id=\"10\"></div></div>", "<div class=\"faceDown\"><div class=\"clr", "\" data-id=\"2\"></div><div class=\"clr", "\" data-id=\"3\"></div><div class=\"clr", "\" data-id=\"0\"></div><div class=\"clr", "\" data-id=\"1\"></div></div> <strong class=\"editingColor\">Add <span id=\"editcolorText\" class=\"clr", "\"></span> fields</strong>  </div>", "html", "#wrap2x2Cube", "activeButton", "addClass", "removeClass", "<h2>Solved</h2>", "#solutionWrap", "", "random", "floor", "length", "dosolve()", "ube-sol", "indexOf", "domain", " ", "charAt", "URF", " 2'", "\t<div class=\"wrapKicsiCube\"><div class=\"kicsiFaceUp\"><div class=\"clr", "\" data-field=\"12\"></div><div class=\"clr", "\" data-field=\"13\"></div><div class=\"clr", "\" data-field=\"14\"></div><div class=\"clr", "\" data-field=\"15\"></div></div>", "<div class=\"kicsiFaceLeft\"><div class=\"clr", "\" data-field=\"5\"></div><div class=\"clr", "\" data-field=\"4\"></div><div class=\"clr", "\" data-field=\"7\"></div><div class=\"clr", "\" data-field=\"6\"></div></div>", "<div class=\"kicsiFaceFront\"><div class=\"clr", "\" data-field=\"20\"></div><div class=\"clr", "\" data-field=\"21\"></div><div class=\"clr", "\" data-field=\"22\"></div><div class=\"clr", "\" data-field=\"23\"></div></div>", "<div class=\"kicsiFaceRight\"><div class=\"clr", "\" data-field=\"16\"></div><div class=\"clr", "\" data-field=\"17\"></div><div class=\"clr", "\" data-field=\"18\"></div><div class=\"clr", "\" data-field=\"19\"></div></div>", "<div class=\"kicsiFaceBack\"><div class=\"clr", "\" data-field=\"9\"></div><div class=\"clr", "\" data-field=\"8\"></div><div class=\"clr", "\" data-field=\"11\"></div><div class=\"clr", "\" data-field=\"10\"></div></div>", "<div class=\"kicsiFaceDown\"><div class=\"clr", "\" data-field=\"2\"></div><div class=\"clr", "\" data-field=\"3\"></div><div class=\"clr", "\" data-field=\"0\"></div><div class=\"clr", "\" data-field=\"1\"></div></div></div><div class=\"wrapTekeresArrow\"><div class=\"tekeres tekeres", "\"></div></div>", "<h2>Please scramble the cube first!</h2>", "<h4>", "</h4>", "<div class=\"solutionStep\">", "<h2>Step ", ": <strong>", "</strong></h2>", "</div>", "<div class=\"solutionStep\"><h2>Done in ", " steps!</h2>", "<h2>Thinking</h2>", "calcperm()"];
$(document)[_0x56d5[5]](function() {
    $(_0x56d5[1])[_0x56d5[0]](function() {
        resetting()
    }),
    $(_0x56d5[2])[_0x56d5[0]](function() {
        mix()
    }),
    $(_0x56d5[3])[_0x56d5[0]](function() {
        solve()
    }),
    $(_0x56d5[4])[_0x56d5[0]](function() {
        edit()
    }),
    kiir()
});
function bindFieldEvents() {
    $(_0x56d5[9])[_0x56d5[8]](function() {
        2 > mode ? rotateDiv($(this), 18) : clicked( + $(this)[_0x56d5[7]](_0x56d5[6]))
    })
}
function rotateDiv(b, d) {
    b[_0x56d5[14]]()[_0x56d5[13]](_0x56d5[10], _0x56d5[11] + (90 - 5 * d) + _0x56d5[12]),
    console[_0x56d5[15]](d),
    setTimeout(function() {
        0 < d ? rotateDiv(b, --d) : clicked( + b[_0x56d5[7]](_0x56d5[6]))
    },
    15)
}
fletx = [],
flety = [];
var fields = [];
function initbrd() {
    fields = [2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5]
}
initbrd();
var mode = 0,
seq = [];
function kiir() {
    var b = _0x56d5[16] + editcolor + _0x56d5[17] + mode + _0x56d5[18] + fields[12] + _0x56d5[19] + fields[13] + _0x56d5[20] + fields[14] + _0x56d5[21] + fields[15] + _0x56d5[22];
    b += _0x56d5[23] + fields[5] + _0x56d5[24] + fields[4] + _0x56d5[25] + fields[7] + _0x56d5[26] + fields[6] + _0x56d5[27],
    b += _0x56d5[28] + fields[20] + _0x56d5[29] + fields[21] + _0x56d5[30] + fields[22] + _0x56d5[31] + fields[23] + _0x56d5[32],
    b += _0x56d5[33] + fields[16] + _0x56d5[34] + fields[17] + _0x56d5[35] + fields[18] + _0x56d5[36] + fields[19] + _0x56d5[37],
    b += _0x56d5[38] + fields[9] + _0x56d5[39] + fields[8] + _0x56d5[40] + fields[11] + _0x56d5[41] + fields[10] + _0x56d5[42],
    b += _0x56d5[43] + fields[2] + _0x56d5[44] + fields[3] + _0x56d5[45] + fields[0] + _0x56d5[46] + fields[1] + _0x56d5[47] + editcolor + _0x56d5[48],
    $(_0x56d5[50])[_0x56d5[49]](b),
    bindFieldEvents(),
    2 == mode ? $(_0x56d5[4])[_0x56d5[52]](_0x56d5[51]) : $(_0x56d5[4])[_0x56d5[53]](_0x56d5[51]);
    1 == mode && solved() && ($(_0x56d5[55])[_0x56d5[49]](_0x56d5[54]), mode = 0)
}
function solved() {
    for (var b = 0; 24 > b; b += 4) {
        c = fields[b];
        for (var d = 1; 4 > d; d++) if (fields[b + d] != c) return ! 1
    }
    return ! 0
}
function resetting() {
    $(_0x56d5[55])[_0x56d5[49]](_0x56d5[56]),
    initbrd(),
    mode = 0,
    kiir()
}
function mix() {
    $(_0x56d5[55])[_0x56d5[49]](_0x56d5[56]),
    initbrd();
    for (var d, b = 0; 80 > b; b++) d = Math[_0x56d5[58]](6 * Math[_0x56d5[57]]()) + 16 * Math[_0x56d5[58]](3 * Math[_0x56d5[57]]()),
    domove(d);
    mode = 1,
    kiir()
}
var piece = [15, 16, 16, 21, 21, 15, 13, 9, 9, 17, 17, 13, 14, 20, 20, 4, 4, 14, 12, 5, 5, 8, 8, 12, 3, 23, 23, 18, 18, 3, 1, 19, 19, 11, 11, 1, 2, 6, 6, 22, 22, 2, 0, 10, 10, 7, 7, 0],
adj = [];
adj[0] = [],
adj[1] = [],
adj[2] = [],
adj[3] = [],
adj[4] = [],
adj[5] = [];
var opp = [],
auto,
tot;
function edit() {
    editindex = 0,
    editcolor = 0,
    $(_0x56d5[55])[_0x56d5[49]](_0x56d5[56]);
    var b;
    for (2 != mode && (mode = 2), b = 0; 24 > b; b++) fields[b] = 6;
    for (b = 0; 6 > b; b++) adj[b] = [0, 0, 0, 0, 0, 0];
    opp = [0, 0, 0, 0, 0, 0, 0],
    kiir()
}
var editindex = 0,
editcolor = 0;
function clicked(b) {
    if (! (2 == mode)) 3 <= mode && (mode = 1),
    domove(b >> 2),
    kiir();
    else if (6 == fields[b]) {
        calctot();
        for (var d = 0; 6 > d && (editindex = d, !(4 > tot[d])); d++);
        if (fields[b] = d, auto = [], auto[0] = b, calcadj(), d = checkfacelets(), 0 < d) for (d = 0; d < auto[_0x56d5[59]]; d++) fields[auto[d]] = 6;
        else 0 > d && (mode = 1);
        4 == tot[editindex] && 0 == d && (editcolor = editindex + 1),
        kiir()
    }
}
function calcadj() {
    var b, d;
    for (b = 0; 6 > b; b++) for (d = 0; 6 > d; d++) adj[b][d] = 0;
    for (b = 0; 48 > b; b += 2) 5 >= fields[piece[b]] && 5 >= fields[piece[b + 1]] && adj[fields[piece[b]]][fields[piece[b + 1]]]++
}
function calctot() {
    tot = [0, 0, 0, 0, 0, 0, 0];
    for (var b = 0; 24 > b; b++) tot[fields[b]]++
}
function checkfacelets() {
    for (var b; 0 < (b = autofill()););
    if (0 > b) return - b;
    for (a = 0; 24 > a; a++) if (5 < fields[a]) return 0;
    return - 1
}
function autofill() {
    var b, d, f, g;
    if (calctot(), calcadj(), 0 != adj[0][0] + adj[1][1] + adj[2][2] + adj[3][3] + adj[4][4] + adj[5][5]) return - 1;
    for (b = 1; 6 > b; b++) for (d = 0; d < b; d++) if (4 == tot[b] && 4 == tot[d]) {
        if (adj[d][b] != adj[b][d]) return - 2;
    } else if (1 < adj[d][b] || 1 < adj[b][d]) return - 2;
    for (b = 1; 6 > b; b++) if (4 == tot[b]) for (d = 0; d < b; d++) if (4 == tot[d] && 0 == adj[b][d]) {
        for (f = 0, g = 0; 48 > g; g += 6) fields[piece[g]] == b || fields[piece[g]] == d ? f += 0 : fields[piece[g + 2]] == b || fields[piece[g + 2]] == d ? f += 1 : (fields[piece[g + 4]] == b || fields[piece[g + 4]] == d) && (f += 2),
        2 < f && (f -= 3);
        if (f) return - 3
    }
    for (b = 6; 48 > b; b += 6) if (5 >= fields[piece[b]] && 5 >= fields[piece[b + 2]] && 5 >= fields[piece[b + 4]]) for (d = 0; d < b; d += 6) if (5 >= fields[piece[d]] && 5 >= fields[piece[d + 2]] && 5 >= fields[piece[d + 4]]) {
        if (fields[piece[b]] == fields[piece[d]] && fields[piece[b + 2]] == fields[piece[d + 4]] && fields[piece[b + 4]] == fields[piece[d + 2]]) return - 4;
        if (fields[piece[b]] == fields[piece[d + 2]] && fields[piece[b + 2]] == fields[piece[d]] && fields[piece[b + 4]] == fields[piece[d + 4]]) return - 4;
        if (fields[piece[b]] == fields[piece[d + 4]] && fields[piece[b + 4]] == fields[piece[d]] && fields[piece[b + 2]] == fields[piece[d + 2]]) return - 4
    }
    if (12 > tot[0] + tot[1] + tot[2] && 2 == adj[0][1] + adj[1][0] && 1 == adj[0][2] + adj[2][0] && 1 == adj[1][2] + adj[2][1]) {
        for (b = 0; 48 > b && (6 == fields[piece[b]] || 6 == fields[piece[b + 2]] || 6 == fields[piece[b + 4]]); b += 6);
        if (48 <= b) {
            if (adj[0][2] == adj[1][2]) return - 1;
            for (b = 0; 48 > b; b += 6) if (7 == fields[piece[b]] + fields[piece[b + 2]] + fields[piece[b + 4]] && (d = b, g = b + 4, 6 == fields[piece[b]] && (d = b + 2, g = b), (6 == fields[piece[b + 2]] && (d = b + 4, g = b + 2), 0 == fields[piece[d]] && 1 == adj[0][2] || 1 == fields[piece[d]] && 1 == adj[1][2]))) return fields[piece[g]] = 2,
            auto[auto[_0x56d5[59]]] = piece[g],
            1
        }
    }
    for (b = 0; 6 > b && 4 == tot[b]; b++) for (d = 0; 6 > d; d++) if (1 == adj[b][d] && 1 == adj[d][b]) for (f = d + 1; 6 > f; f++) if (1 == adj[b][f] && 1 == adj[f][b]) for (g = 0; 6 > g; g++) if (g != b && g != d && g != f && 1 == adj[b][g] + adj[g][b]) {
        for (e = 0; 48 > e; e += 6) if ((fields[piece[e]] == b || fields[piece[e + 2]] == b || fields[piece[e + 4]] == b) && (6 == fields[piece[e]] || 6 == fields[piece[e + 2]] || 6 == fields[piece[e + 4]]) && fields[piece[e]] != g && fields[piece[e + 2]] != g && fields[piece[e + 4]] != g) {
            var h, i;
            if (fields[piece[e]] == b ? (h = e + 2, i = e + 4) : fields[piece[e + 2]] == b ? (h = e + 4, i = e) : fields[piece[e + 4]] == b && (h = e, i = e + 2), (1 == adj[b][g] && 6 == fields[piece[i]] || 1 == adj[g][b] && 6 == fields[piece[h]]) && (0 == adj[d][f] + adj[f][d] && (adj[d][g] + adj[g][d] > adj[f][g] + adj[g][f] && fields[piece[h]] != d && fields[piece[i]] != d || adj[f][g] + adj[g][f] > adj[d][g] + adj[g][d] && fields[piece[h]] != f && fields[piece[i]] != f) || 0 != adj[d][f] + adj[f][d] && (fields[piece[h]] != f && fields[piece[h]] != d && fields[piece[i]] != f && fields[piece[i]] != d || 0 == adj[g][d] + adj[d][g] + adj[g][f] + adj[f][g]))) return 1 == adj[b][g] ? (fields[piece[i]] = g, auto[auto[_0x56d5[59]]] = piece[i]) : (fields[piece[h]] = g, auto[auto[_0x56d5[59]]] = piece[h]),
            1
        }
        return - 1
    }
    for (b = 0; 6 > b; b++) if (4 == tot[b]) for (d = 0; 6 > d; d++) if (3 == tot[d] && 0 == adj[b][d] + adj[d][b]) {
        for (f = 0, e = 0, g = 0; 48 > g; g += 6) fields[piece[g]] == b || fields[piece[g]] == d ? f += 0 : fields[piece[g + 2]] == b || fields[piece[g + 2]] == d ? f += 1 : fields[piece[g + 4]] == b || fields[piece[g + 4]] == d ? f += 2 : e = g,
        2 < f && (f -= 3);
        if (0 == f && 6 == fields[piece[e]]) fields[piece[e]] = d,
        auto[auto[_0x56d5[59]]] = piece[e];
        else if (1 == f && 6 == fields[piece[e + 4]]) fields[piece[e + 4]] = d,
        auto[auto[_0x56d5[59]]] = piece[e + 4];
        else if (2 == f && 6 == fields[piece[e + 2]]) fields[piece[e + 2]] = d,
        auto[auto[_0x56d5[59]]] = piece[e + 2];
        else return - 1;
        return 1
    }
    if (calctot(), 4 == tot[4] && 4 > tot[5]) for (b = 0; 24 > b; b++) if (6 == fields[b]) return fields[b] = 5,
    auto[auto[_0x56d5[59]]] = b,
    1;
    for (calcadj(), b = 1; 6 > b; b++) {
        if (4 == tot[b]) {
            for (d = 0; d < b; d++) if (adj[b][d] != adj[d][b] || 1 < adj[b][d]) return - 1;
        } else for (d = 0; d < b; d++) if (1 < adj[b][d] || 1 < adj[d][b]) return - 1;
        if (3 == tot[b] && 2 <= b) for (d = 1; d < b; d++) for (f = 0; f < d; f++) if (1 == adj[d][f] && 1 == adj[b][d] + adj[d][b] && 1 == adj[b][f] + adj[f][b]) for (g = 0; 48 > g; g += 6) if ((fields[piece[g]] == b || fields[piece[g]] == d || fields[piece[g]] == f) && (fields[piece[g + 2]] == b || fields[piece[g + 2]] == d || fields[piece[g + 2]] == f) && (fields[piece[g + 4]] == b || fields[piece[g + 4]] == d || fields[piece[g + 4]] == f)) return - 1
    }
    return 0
}
mov2fc = [],
mov2fc[0] = [0, 2, 3, 1, 23, 19, 10, 6, 22, 18, 11, 7],
mov2fc[1] = [4, 6, 7, 5, 12, 20, 2, 10, 14, 22, 0, 8],
mov2fc[2] = [8, 10, 11, 9, 12, 7, 1, 17, 13, 5, 0, 19],
mov2fc[3] = [12, 13, 15, 14, 8, 17, 21, 4, 9, 16, 20, 5],
mov2fc[4] = [16, 17, 19, 18, 15, 9, 1, 23, 13, 11, 3, 21],
mov2fc[5] = [20, 21, 23, 22, 14, 16, 3, 6, 15, 18, 2, 4];
function domove(b) {
    for (var d = 1 + (b >> 4), f = 15 & b; d;) {
        for (var h, g = 0; g < mov2fc[f][_0x56d5[59]]; g += 4) h = fields[mov2fc[f][g]],
        fields[mov2fc[f][g]] = fields[mov2fc[f][g + 3]],
        fields[mov2fc[f][g + 3]] = fields[mov2fc[f][g + 2]],
        fields[mov2fc[f][g + 2]] = fields[mov2fc[f][g + 1]],
        fields[mov2fc[f][g + 1]] = h;
        d--
    }
}
sol = [];
function solve() {
    2 > mode && (signon(), mode = 0, setTimeout(_0x56d5[60], 0))
}
function dosolve() {
    calcadj();
    var b = [];
    for (g = 0; 6 > g; g++) for (k = 0; 6 > k; k++) g != k && 0 == adj[g][k] + adj[k][g] && (b[g] = k, b[k] = g);
    for (var i, d = [], f = [], g = 0, h = 0; 7 > h; h++) {
        for (i = 0, k = g; k < g + 6; k += 2) fields[piece[k]] == fields[piece[42]] && (i += 4),
        fields[piece[k]] == fields[piece[44]] && (i += 1),
        fields[piece[k]] == fields[piece[46]] && (i += 2);
        d[h] = i,
        f[h] = fields[piece[g]] == fields[piece[42]] || fields[piece[g]] == b[fields[piece[42]]] ? 0 : fields[piece[g + 2]] == fields[piece[42]] || fields[piece[g + 2]] == b[fields[piece[42]]] ? 1 : 2;
        g += 6
    }
    for (var k, j = 0,
    g = 0; 7 > g; g++) {
        k = 0;
        for (var l = 0; 7 > l && !(d[l] == g); l++) d[l] > g && k++;
        j = j * (7 - g) + k
    }
    for (var m = 0,
    g = 5; 0 <= g; g--) m = 3 * m + f[g] - 3 * Math[_0x56d5[58]](f[g] / 3);
    if (0 != j || 0 != m) {
        sol[_0x56d5[59]] = 0;
        for (var n = 0; 12 > n && !search(0, j, m, n, -1); n++); - 1 == ("rubiks-cube-solver.com")[_0x56d5[62]](_0x56d5[61]) && shuffle(sol);
        for (m = _0x56d5[56], j = 0; j < sol[_0x56d5[59]]; j++) m += _0x56d5[64] + _0x56d5[66][_0x56d5[65]](sol[j] / 10) + _0x56d5[67][_0x56d5[65]](sol[j] % 10)
    }
    megoldastKiir(m, sol)
}
function shuffle(b) {
    for (var f, g, d = b[_0x56d5[59]]; 0 !== d;) g = Math[_0x56d5[58]](Math[_0x56d5[57]]() * d),
    d -= 1,
    f = b[d],
    b[d] = b[g],
    b[g] = f;
    return b
}
function kicsiKocka(b, d) {
    var f = _0x56d5[68] + b[12] + _0x56d5[69] + b[13] + _0x56d5[70] + b[14] + _0x56d5[71] + b[15] + _0x56d5[72];
    return f += _0x56d5[73] + b[5] + _0x56d5[74] + b[4] + _0x56d5[75] + b[7] + _0x56d5[76] + b[6] + _0x56d5[77],
    f += _0x56d5[78] + b[20] + _0x56d5[79] + b[21] + _0x56d5[80] + b[22] + _0x56d5[81] + b[23] + _0x56d5[82],
    f += _0x56d5[83] + b[16] + _0x56d5[84] + b[17] + _0x56d5[85] + b[18] + _0x56d5[86] + b[19] + _0x56d5[87],
    f += _0x56d5[88] + b[9] + _0x56d5[89] + b[8] + _0x56d5[90] + b[11] + _0x56d5[91] + b[10] + _0x56d5[92],
    f += _0x56d5[93] + b[2] + _0x56d5[94] + b[3] + _0x56d5[95] + b[0] + _0x56d5[96] + b[1] + _0x56d5[97] + d + _0x56d5[98],
    f
}
function kicsiU(b) {
    for (var d = [], f = 0; 24 > f; f++) d[f] = b[f];
    return b[12] = d[14],
    b[13] = d[12],
    b[14] = d[15],
    b[15] = d[13],
    b[20] = d[16],
    b[21] = d[17],
    b[16] = d[9],
    b[17] = d[8],
    b[9] = d[5],
    b[8] = d[4],
    b[5] = d[20],
    b[4] = d[21],
    b
}
function kicsiR(b) {
    for (var d = [], f = 0; 24 > f; f++) d[f] = b[f];
    return b[16] = d[18],
    b[17] = d[16],
    b[18] = d[19],
    b[19] = d[17],
    b[13] = d[21],
    b[15] = d[23],
    b[11] = d[13],
    b[9] = d[15],
    b[3] = d[11],
    b[1] = d[9],
    b[21] = d[3],
    b[23] = d[1],
    b
}
function kicsiF(b) {
    for (var d = [], f = 0; 24 > f; f++) d[f] = b[f];
    return b[20] = d[22],
    b[21] = d[20],
    b[22] = d[23],
    b[23] = d[21],
    b[14] = d[6],
    b[15] = d[4],
    b[16] = d[14],
    b[18] = d[15],
    b[2] = d[18],
    b[3] = d[16],
    b[4] = d[2],
    b[6] = d[3],
    b
}
function kicsiRot(b, d) {
    return 0 == d && (b = kicsiU(b)),
    1 == d && (b = kicsiU(b), b = kicsiU(b)),
    2 == d && (b = kicsiU(b), b = kicsiU(b), b = kicsiU(b)),
    10 == d && (b = kicsiR(b)),
    11 == d && (b = kicsiR(b), b = kicsiR(b)),
    12 == d && (b = kicsiR(b), b = kicsiR(b), b = kicsiR(b)),
    20 == d && (b = kicsiF(b)),
    21 == d && (b = kicsiF(b), b = kicsiF(b)),
    (22 == d && (b = kicsiF(b), b = kicsiF(b), b = kicsiF(b)), b)
}
function megoldastKiir(b, d) {
    var f = fields,
    g = _0x56d5[56],
    h = _0x56d5[56];
    if (vegevanacuccnak(), 0 == b) $(_0x56d5[55])[_0x56d5[49]](_0x56d5[99]);
    else {
        g += _0x56d5[100] + b + _0x56d5[101];
        for (var i = 0; i < d[_0x56d5[59]]; i++) g += _0x56d5[102],
        h = _0x56d5[66][_0x56d5[65]](d[i] / 10) + _0x56d5[67][_0x56d5[65]](d[i] % 10),
        g += _0x56d5[103] + (i + 1) + _0x56d5[104] + h + _0x56d5[105],
        g += kicsiKocka(f, d[i]),
        f = kicsiRot(f, d[i]),
        g += _0x56d5[106];
        g += _0x56d5[107] + i + _0x56d5[108],
        g += kicsiKocka(f, -1),
        g += _0x56d5[106],
        $(_0x56d5[55])[_0x56d5[49]](g)
    }
}
function search(b, d, f, g, h) {
    if (! (0 == g)) {
        if (perm[d] > g || twst[f] > g) return ! 1;
        var i, j, k, l;
        for (l = 0; 3 > l; l++) if (l != h) for (i = d, j = f, k = 0; 3 > k; k++) if (i = permmv[i][l], j = twstmv[j][l], sol[b] = 10 * l + k, search(b + 1, i, j, g - 1, l)) return ! 0
    } else if (0 == d && 0 == f) return ! 0;
    return ! 1
}
perm = [],
twst = [],
permmv = [],
twstmv = [];
function calcperm() {
    for (var b = 0; 5040 > b; b++) {
        perm[b] = -1,
        permmv[b] = [];
        for (var d = 0; 3 > d; d++) permmv[b][d] = getprmmv(b, d)
    }
    perm[0] = 0;
    for (var g, f = 0; 6 >= f; f++) {
        g = 0;
        for (var b = 0; 5040 > b; b++) if (perm[b] == f) for (var h, d = 0; 3 > d; d++) {
            h = b;
            for (var h, i = 0; 3 > i; i++) h = permmv[h][d],
            -1 == perm[h] && (perm[h] = f + 1, g++)
        }
    }
    for (var b = 0; 729 > b; b++) {
        twst[b] = -1,
        twstmv[b] = [];
        for (var d = 0; 3 > d; d++) twstmv[b][d] = gettwsmv(b, d)
    }
    twst[0] = 0;
    for (var g, f = 0; 5 >= f; f++) {
        g = 0;
        for (var b = 0; 729 > b; b++) if (twst[b] == f) for (var h, d = 0; 3 > d; d++) {
            h = b;
            for (var h, i = 0; 3 > i; i++) h = twstmv[h][d],
            -1 == twst[h] && (twst[h] = f + 1, g++)
        }
    }
    vegevanacuccnak()
}
function vegevanacuccnak() {
    $(_0x56d5[55])[_0x56d5[49]](_0x56d5[56])
}
function signon() {
    $(_0x56d5[55])[_0x56d5[49]](_0x56d5[109])
}
function getprmmv(b, d) {
    var f, g, h, i, j = [];
    for (i = b, f = 1; 7 >= f; f++) {
        for (g = i % f, i = (i - g) / f, h = f - 1; h >= g; h--) j[h + 1] = j[h];
        j[g] = 7 - f
    }
    0 == d ? (h = j[0], j[0] = j[1], j[1] = j[3], j[3] = j[2], j[2] = h) : 1 == d ? (h = j[0], j[0] = j[4], j[4] = j[5], j[5] = j[1], j[1] = h) : 2 == d && (h = j[0], j[0] = j[2], j[2] = j[6], j[6] = j[4], j[4] = h);
    for (i = 0, f = 0; 7 > f; f++) {
        for (g = 0, h = 0; 7 > h && !(j[h] == f); h++) j[h] > f && g++;
        i = i * (7 - f) + g
    }
    return i
}
function gettwsmv(b, d) {
    var f, g, h, i, j, k = [];
    for (j = b, i = 0, f = 0; 5 >= f; f++) h = Math[_0x56d5[58]](j / 3),
    g = j - 3 * h,
    j = h,
    k[f] = g,
    i -= g,
    0 > i && (i += 3);
    k[6] = i,
    0 == d ? (h = k[0], k[0] = k[1], k[1] = k[3], k[3] = k[2], k[2] = h) : 1 == d ? (h = k[0], k[0] = k[4], k[4] = k[5], k[5] = k[1], k[1] = h, k[0] += 2, k[1]++, k[5] += 2, k[4]++) : 2 == d && (h = k[0], k[0] = k[2], k[2] = k[6], k[6] = k[4], k[4] = h, k[2] += 2, k[0]++, k[4] += 2, k[6]++);
    for (j = 0, f = 5; 0 <= f; f--) j = 3 * j + k[f] % 3;
    return j
}
setTimeout(_0x56d5[110], 0);