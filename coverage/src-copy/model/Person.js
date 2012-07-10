/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['model/Person.js']) {
  _$jscoverage['model/Person.js'] = [];
  _$jscoverage['model/Person.js'][1] = 0;
  _$jscoverage['model/Person.js'][5] = 0;
  _$jscoverage['model/Person.js'][7] = 0;
  _$jscoverage['model/Person.js'][10] = 0;
  _$jscoverage['model/Person.js'][14] = 0;
}
_$jscoverage['model/Person.js'].source = ["define<span class=\"k\">([</span>","\t<span class=\"c\">// lib</span>","\t<span class=\"s\">\"backbone\"</span>","<span class=\"k\">],</span> <span class=\"k\">function</span> <span class=\"k\">(</span>Backbone<span class=\"k\">)</span> <span class=\"k\">{</span>","\t<span class=\"k\">var</span> Person <span class=\"k\">=</span> Backbone<span class=\"k\">.</span>Model<span class=\"k\">.</span>extend<span class=\"k\">(</span><span class=\"k\">{</span>","\t    getName<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","\t        <span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">.</span>get<span class=\"k\">(</span><span class=\"s\">\"name\"</span><span class=\"k\">);</span>","\t    <span class=\"k\">}</span><span class=\"k\">,</span>","\t    getPart<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","\t        <span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">.</span>get<span class=\"k\">(</span><span class=\"s\">\"part\"</span><span class=\"k\">);</span>","\t    <span class=\"k\">}</span>","\t    ","\t<span class=\"k\">}</span><span class=\"k\">);</span>","\t<span class=\"k\">return</span> Person<span class=\"k\">;</span>","<span class=\"k\">}</span><span class=\"k\">);</span>"];
_$jscoverage['model/Person.js'][1]++;
define(["backbone"], (function (Backbone) {
  _$jscoverage['model/Person.js'][5]++;
  var Person = Backbone.Model.extend({getName: (function () {
  _$jscoverage['model/Person.js'][7]++;
  return this.get("name");
}), getPart: (function () {
  _$jscoverage['model/Person.js'][10]++;
  return this.get("part");
})});
  _$jscoverage['model/Person.js'][14]++;
  return Person;
}));