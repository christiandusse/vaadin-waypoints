function eu_dusse_vaadin_waypoints_demo_DemoWidgetSet(){
  var $intern_0 = 'bootstrap', $intern_1 = 'begin', $intern_2 = 'gwt.codesvr.eu.dusse.vaadin.waypoints.demo.DemoWidgetSet=', $intern_3 = 'gwt.codesvr=', $intern_4 = 'eu.dusse.vaadin.waypoints.demo.DemoWidgetSet', $intern_5 = 'startup', $intern_6 = 'DUMMY', $intern_7 = 0, $intern_8 = 1, $intern_9 = 'iframe', $intern_10 = 'javascript:""', $intern_11 = 'position:absolute; width:0; height:0; border:none; left: -1000px;', $intern_12 = ' top: -1000px;', $intern_13 = 'CSS1Compat', $intern_14 = '<!doctype html>', $intern_15 = '', $intern_16 = '<html><head><\/head><body><\/body><\/html>', $intern_17 = 'undefined', $intern_18 = 'DOMContentLoaded', $intern_19 = 50, $intern_20 = 'script', $intern_21 = 'javascript', $intern_22 = 'eu_dusse_vaadin_waypoints_demo_DemoWidgetSet', $intern_23 = 'Failed to load ', $intern_24 = 'moduleStartup', $intern_25 = 'scriptTagAdded', $intern_26 = 'moduleRequested', $intern_27 = 'meta', $intern_28 = 'name', $intern_29 = 'eu.dusse.vaadin.waypoints.demo.DemoWidgetSet::', $intern_30 = '::', $intern_31 = 'gwt:property', $intern_32 = 'content', $intern_33 = '=', $intern_34 = 'gwt:onPropertyErrorFn', $intern_35 = 'Bad handler "', $intern_36 = '" for "gwt:onPropertyErrorFn"', $intern_37 = 'gwt:onLoadErrorFn', $intern_38 = '" for "gwt:onLoadErrorFn"', $intern_39 = '#', $intern_40 = '?', $intern_41 = '/', $intern_42 = 'img', $intern_43 = 'clear.cache.gif', $intern_44 = 'baseUrl', $intern_45 = 'eu.dusse.vaadin.waypoints.demo.DemoWidgetSet.nocache.js', $intern_46 = 'base', $intern_47 = '//', $intern_48 = 'modernie', $intern_49 = 'MSIE', $intern_50 = 'Trident', $intern_51 = 'yes', $intern_52 = 'none', $intern_53 = 'user.agent', $intern_54 = 'webkit', $intern_55 = 'trident', $intern_56 = 'safari', $intern_57 = 'msie', $intern_58 = 10, $intern_59 = 11, $intern_60 = 'ie10', $intern_61 = 9, $intern_62 = 'ie9', $intern_63 = 8, $intern_64 = 'ie8', $intern_65 = 'gecko', $intern_66 = 'gecko1_8', $intern_67 = 2, $intern_68 = 3, $intern_69 = 4, $intern_70 = 'selectingPermutation', $intern_71 = 'eu.dusse.vaadin.waypoints.demo.DemoWidgetSet.devmode.js', $intern_72 = '6FAEEBADD1D4A08D7BE918E7A1B8451A', $intern_73 = ':1', $intern_74 = ':2', $intern_75 = ':3', $intern_76 = ':4', $intern_77 = ':5', $intern_78 = ':', $intern_79 = '.cache.js', $intern_80 = 'link', $intern_81 = 'rel', $intern_82 = 'stylesheet', $intern_83 = 'href', $intern_84 = 'head', $intern_85 = 'loadExternalRefs', $intern_86 = 'waypoints/styles.css', $intern_87 = 'end', $intern_88 = 'http:', $intern_89 = 'file:', $intern_90 = '_gwt_dummy_', $intern_91 = '__gwtDevModeHook:eu.dusse.vaadin.waypoints.demo.DemoWidgetSet', $intern_92 = 'Ignoring non-whitelisted Dev Mode URL: ', $intern_93 = ':moduleBase';
  var $wnd = window;
  var $doc = document;
  sendStats($intern_0, $intern_1);
  function isHostedMode(){
    var query = $wnd.location.search;
    return query.indexOf($intern_2) != -1 || query.indexOf($intern_3) != -1;
  }

  function sendStats(evtGroupString, typeString){
    if ($wnd.__gwtStatsEvent) {
      $wnd.__gwtStatsEvent({moduleName:$intern_4, sessionId:$wnd.__gwtStatsSessionId, subSystem:$intern_5, evtGroup:evtGroupString, millis:(new Date).getTime(), type:typeString});
    }
  }

  eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__sendStats = sendStats;
  eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__moduleName = $intern_4;
  eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__errFn = null;
  eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__moduleBase = $intern_6;
  eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__softPermutationId = $intern_7;
  eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__computePropValue = null;
  eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__getPropMap = null;
  eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__installRunAsyncCode = function(){
  }
  ;
  eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__gwtStartLoadingFragment = function(){
    return null;
  }
  ;
  eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__gwt_getMetaProperty = function(){
    return null;
  }
  ;
  var __propertyErrorFunction = null;
  var activeModules = $wnd.__gwt_activeModules = $wnd.__gwt_activeModules || {};
  activeModules[$intern_4] = {moduleName:$intern_4};
  eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__moduleStartupDone = function(permProps){
    var oldBindings = activeModules[$intern_4].bindings;
    activeModules[$intern_4].bindings = function(){
      var props = oldBindings?oldBindings():{};
      var embeddedProps = permProps[eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__softPermutationId];
      for (var i = $intern_7; i < embeddedProps.length; i++) {
        var pair = embeddedProps[i];
        props[pair[$intern_7]] = pair[$intern_8];
      }
      return props;
    }
    ;
  }
  ;
  var frameDoc;
  function getInstallLocationDoc(){
    setupInstallLocation();
    return frameDoc;
  }

  function setupInstallLocation(){
    if (frameDoc) {
      return;
    }
    var scriptFrame = $doc.createElement($intern_9);
    scriptFrame.src = $intern_10;
    scriptFrame.id = $intern_4;
    scriptFrame.style.cssText = $intern_11 + $intern_12;
    scriptFrame.tabIndex = -1;
    $doc.body.appendChild(scriptFrame);
    frameDoc = scriptFrame.contentDocument;
    if (!frameDoc) {
      frameDoc = scriptFrame.contentWindow.document;
    }
    frameDoc.open();
    var doctype = document.compatMode == $intern_13?$intern_14:$intern_15;
    frameDoc.write(doctype + $intern_16);
    frameDoc.close();
  }

  function installScript(filename){
    function setupWaitForBodyLoad(callback){
      function isBodyLoaded(){
        if (typeof $doc.readyState == $intern_17) {
          return typeof $doc.body != $intern_17 && $doc.body != null;
        }
        return /loaded|complete/.test($doc.readyState);
      }

      var bodyDone = isBodyLoaded();
      if (bodyDone) {
        callback();
        return;
      }
      function onBodyDone(){
        if (!bodyDone) {
          bodyDone = true;
          callback();
          if ($doc.removeEventListener) {
            $doc.removeEventListener($intern_18, onBodyDone, false);
          }
          if (onBodyDoneTimerId) {
            clearInterval(onBodyDoneTimerId);
          }
        }
      }

      if ($doc.addEventListener) {
        $doc.addEventListener($intern_18, onBodyDone, false);
      }
      var onBodyDoneTimerId = setInterval(function(){
        if (isBodyLoaded()) {
          onBodyDone();
        }
      }
      , $intern_19);
    }

    function installCode(code_0){
      var doc = getInstallLocationDoc();
      var docbody = doc.body;
      var script = doc.createElement($intern_20);
      script.language = $intern_21;
      script.src = code_0;
      if (eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__errFn) {
        script.onerror = function(){
          eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__errFn($intern_22, new Error($intern_23 + code_0));
        }
        ;
      }
      docbody.appendChild(script);
      sendStats($intern_24, $intern_25);
    }

    sendStats($intern_24, $intern_26);
    setupWaitForBodyLoad(function(){
      installCode(filename);
    }
    );
  }

  eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__startLoadingFragment = function(fragmentFile){
    return computeUrlForResource(fragmentFile);
  }
  ;
  eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__installRunAsyncCode = function(code_0){
    var doc = getInstallLocationDoc();
    var docbody = doc.body;
    var script = doc.createElement($intern_20);
    script.language = $intern_21;
    script.text = code_0;
    docbody.appendChild(script);
  }
  ;
  function processMetas(){
    var metaProps = {};
    var propertyErrorFunc;
    var onLoadErrorFunc;
    var metas = $doc.getElementsByTagName($intern_27);
    for (var i = $intern_7, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute($intern_28), content;
      if (name_0) {
        name_0 = name_0.replace($intern_29, $intern_15);
        if (name_0.indexOf($intern_30) >= $intern_7) {
          continue;
        }
        if (name_0 == $intern_31) {
          content = meta.getAttribute($intern_32);
          if (content) {
            var value_0, eq = content.indexOf($intern_33);
            if (eq >= $intern_7) {
              name_0 = content.substring($intern_7, eq);
              value_0 = content.substring(eq + $intern_8);
            }
             else {
              name_0 = content;
              value_0 = $intern_15;
            }
            metaProps[name_0] = value_0;
          }
        }
         else if (name_0 == $intern_34) {
          content = meta.getAttribute($intern_32);
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_35 + content + $intern_36);
            }
          }
        }
         else if (name_0 == $intern_37) {
          content = meta.getAttribute($intern_32);
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_35 + content + $intern_38);
            }
          }
        }
      }
    }
    __gwt_getMetaProperty = function(name_0){
      var value_0 = metaProps[name_0];
      return value_0 == null?null:value_0;
    }
    ;
    __propertyErrorFunction = propertyErrorFunc;
    eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__errFn = onLoadErrorFunc;
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf($intern_39);
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf($intern_40);
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf($intern_41, Math.min(queryIndex, hashIndex));
      return slashIndex >= $intern_7?path.substring($intern_7, slashIndex + $intern_8):$intern_15;
    }

    function ensureAbsoluteUrl(url_0){
      if (url_0.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc.createElement($intern_42);
        img.src = url_0 + $intern_43;
        url_0 = getDirectoryOfFile(img.src);
      }
      return url_0;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty($intern_44);
      if (metaVal != null) {
        return metaVal;
      }
      return $intern_15;
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc.getElementsByTagName($intern_20);
      for (var i = $intern_7; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf($intern_45) != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return $intern_15;
    }

    function tryBaseTag(){
      var baseElements = $doc.getElementsByTagName($intern_46);
      if (baseElements.length > $intern_7) {
        return baseElements[baseElements.length - $intern_8].href;
      }
      return $intern_15;
    }

    function isLocationOk(){
      var loc = $doc.location;
      return loc.href == loc.protocol + $intern_47 + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == $intern_15) {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == $intern_15) {
      tempBase = tryBaseTag();
    }
    if (tempBase == $intern_15 && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    return tempBase;
  }

  function computeUrlForResource(resource){
    if (resource.match(/^\//)) {
      return resource;
    }
    if (resource.match(/^[a-zA-Z]+:\/\//)) {
      return resource;
    }
    return eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__moduleBase + resource;
  }

  function getCompiledCodeFilename(){
    var answers = [];
    var softPermutationId = $intern_7;
    function unflattenKeylistIntoAnswers(propValArray, value_0){
      var answer = answers;
      for (var i = $intern_7, n = propValArray.length - $intern_8; i < n; ++i) {
        answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
      }
      answer[propValArray[n]] = value_0;
    }

    var values = [];
    var providers = [];
    function computePropValue(propName){
      var value_0 = providers[propName](), allowedValuesMap = values[propName];
      if (value_0 in allowedValuesMap) {
        return value_0;
      }
      var allowedValuesList = [];
      for (var k in allowedValuesMap) {
        allowedValuesList[allowedValuesMap[k]] = k;
      }
      if (__propertyErrorFunction) {
        __propertyErrorFunction(propName, allowedValuesList, value_0);
      }
      throw null;
    }

    providers[$intern_48] = function(){
      {
        var ua = $wnd.navigator.userAgent;
        if (ua.indexOf($intern_49) == -1 && ua.indexOf($intern_50) != -1) {
          return $intern_51;
        }
        return $intern_52;
      }
    }
    ;
    values[$intern_48] = {none:$intern_7, yes:$intern_8};
    providers[$intern_53] = function(){
      var ua = navigator.userAgent.toLowerCase();
      var docMode = $doc.documentMode;
      if (function(){
        return ua.indexOf($intern_54) != -1 && ua.indexOf($intern_55) == -1;
      }
      ())
        return $intern_56;
      if (function(){
        return ua.indexOf($intern_57) != -1 && (docMode >= $intern_58 && docMode < $intern_59);
      }
      ())
        return $intern_60;
      if (function(){
        return ua.indexOf($intern_57) != -1 && (docMode >= $intern_61 && docMode < $intern_59);
      }
      ())
        return $intern_62;
      if (function(){
        return ua.indexOf($intern_57) != -1 && (docMode >= $intern_63 && docMode < $intern_59);
      }
      ())
        return $intern_64;
      if (function(){
        return ua.indexOf($intern_65) != -1 || docMode >= $intern_59;
      }
      ())
        return $intern_66;
      return $intern_15;
    }
    ;
    values[$intern_53] = {gecko1_8:$intern_7, ie10:$intern_8, ie8:$intern_67, ie9:$intern_68, safari:$intern_69};
    __gwt_isKnownPropertyValue = function(propName, propValue){
      return propValue in values[propName];
    }
    ;
    eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__getPropMap = function(){
      var result = {};
      for (var key in values) {
        if (values.hasOwnProperty(key)) {
          result[key] = computePropValue(key);
        }
      }
      return result;
    }
    ;
    eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__computePropValue = computePropValue;
    $wnd.__gwt_activeModules[$intern_4].bindings = eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__getPropMap;
    sendStats($intern_0, $intern_70);
    if (isHostedMode()) {
      return computeUrlForResource($intern_71);
    }
    var strongName;
    try {
      unflattenKeylistIntoAnswers([$intern_52, $intern_66], $intern_72);
      unflattenKeylistIntoAnswers([$intern_51, $intern_66], $intern_72 + $intern_73);
      unflattenKeylistIntoAnswers([$intern_52, $intern_60], $intern_72 + $intern_74);
      unflattenKeylistIntoAnswers([$intern_52, $intern_64], $intern_72 + $intern_75);
      unflattenKeylistIntoAnswers([$intern_52, $intern_62], $intern_72 + $intern_76);
      unflattenKeylistIntoAnswers([$intern_52, $intern_56], $intern_72 + $intern_77);
      strongName = answers[computePropValue($intern_48)][computePropValue($intern_53)];
      var idx = strongName.indexOf($intern_78);
      if (idx != -1) {
        softPermutationId = parseInt(strongName.substring(idx + $intern_8), $intern_58);
        strongName = strongName.substring($intern_7, idx);
      }
    }
     catch (e) {
    }
    eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__softPermutationId = softPermutationId;
    return computeUrlForResource(strongName + $intern_79);
  }

  function loadExternalStylesheets(){
    if (!$wnd.__gwt_stylesLoaded) {
      $wnd.__gwt_stylesLoaded = {};
    }
    function installOneStylesheet(stylesheetUrl){
      if (!__gwt_stylesLoaded[stylesheetUrl]) {
        var l = $doc.createElement($intern_80);
        l.setAttribute($intern_81, $intern_82);
        l.setAttribute($intern_83, computeUrlForResource(stylesheetUrl));
        $doc.getElementsByTagName($intern_84)[$intern_7].appendChild(l);
        __gwt_stylesLoaded[stylesheetUrl] = true;
      }
    }

    sendStats($intern_85, $intern_1);
    installOneStylesheet($intern_86);
    sendStats($intern_85, $intern_87);
  }

  processMetas();
  eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__moduleBase = computeScriptBase();
  activeModules[$intern_4].moduleBase = eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.__moduleBase;
  var filename = getCompiledCodeFilename();
  if ($wnd) {
    var devModePermitted = !!($wnd.location.protocol == $intern_88 || $wnd.location.protocol == $intern_89);
    $wnd.__gwt_activeModules[$intern_4].canRedirect = devModePermitted;
    function supportsSessionStorage(){
      var key = $intern_90;
      try {
        $wnd.sessionStorage.setItem(key, key);
        $wnd.sessionStorage.removeItem(key);
        return true;
      }
       catch (e) {
        return false;
      }
    }

    if (devModePermitted && supportsSessionStorage()) {
      var devModeKey = $intern_91;
      var devModeUrl = $wnd.sessionStorage[devModeKey];
      if (!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(devModeUrl)) {
        if (devModeUrl && (window.console && console.log)) {
          console.log($intern_92 + devModeUrl);
        }
        devModeUrl = $intern_15;
      }
      if (devModeUrl && !$wnd[devModeKey]) {
        $wnd[devModeKey] = true;
        $wnd[devModeKey + $intern_93] = computeScriptBase();
        var devModeScript = $doc.createElement($intern_20);
        devModeScript.src = devModeUrl;
        var head = $doc.getElementsByTagName($intern_84)[$intern_7];
        head.insertBefore(devModeScript, head.firstElementChild || head.children[$intern_7]);
        return false;
      }
    }
  }
  loadExternalStylesheets();
  sendStats($intern_0, $intern_87);
  installScript(filename);
  return true;
}

eu_dusse_vaadin_waypoints_demo_DemoWidgetSet.succeeded = eu_dusse_vaadin_waypoints_demo_DemoWidgetSet();