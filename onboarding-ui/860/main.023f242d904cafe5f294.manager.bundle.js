(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1072:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(13);var colors=__webpack_require__(378),esm=__webpack_require__(97),create=__webpack_require__(169),package_0=__webpack_require__(379),logo=__webpack_require__.p+"static/media/logo.d570bdd1.svg";esm.c.setConfig({theme:Object(create.a)({base:"light",brandTitle:package_0.name,brandImage:logo,brandUrl:package_0.homepage,colorPrimary:colors.n500,colorSecondary:colors.p500})})},378:function(module){module.exports=JSON.parse('{"d100":"#FFE9EC","d200":"#FFC1C9","d300":"#F98F9D","d400":"#F5495F","d500":"#EC0D2A","d600":"#D40C26","d700":"#BB0B21","d800":"#9B1325","d900":"#8B0719","i100":"#E8F2FF","i200":"#D1EBFE","i300":"#76B7FC","i400":"#549DF9","i500":"#156FF5","i600":"#095AD2","i700":"#10529E","i800":"#01336B","i900":"#012247","n100":"#f7f8fa","n200":"#f2f3f5","n300":"#eeeff1","n400":"#e4e7ea","n500":"#cbced1","n600":"#9ea2a8","n700":"#6c727a","n800":"#2f343d","n900":"#1f2329","p100":"#E8F2FF","p200":"#D1EBFE","p300":"#76B7FC","p400":"#549DF9","p500":"#156FF5","p600":"#095AD2","p700":"#10529E","p800":"#01336B","p900":"#012247","s100":"#E5FBF4","s200":"#C0F6E4","s300":"#96F0D2","s400":"#6CE9C0","s500":"#2DE0A5","s600":"#1ECB92","s700":"#19AC7C","s800":"#148660","s900":"#106D4F","s1-100":"#FDE8D7","s1-200":"#FAD1B0","s1-300":"#F7B27B","s1-400":"#F59B53","s1-500":"#F38C39","s1-600":"#E26D0E","s1-700":"#BD5A0B","s1-800":"#974809","s1-900":"#713607","s2-100":"#F9EFFC","s2-200":"#EDD0F7","s2-300":"#DCA0EF","s2-400":"#CA71E7","s2-500":"#9F22C7","s2-600":"#7F1B9F","s2-700":"#5F1477","s2-800":"#4A105D","s2-900":"#350B42","w100":"#FFF6D6","w200":"#FFECAD","w300":"#FFE383","w400":"#FFD95A","w500":"#FFD031","w600":"#F3BE08","w700":"#DFAC00","w800":"#B68D00","w900":"#8E6300","white":"#ffffff","b100":"#e8f2ff","b200":"#d1ebfe","b300":"#76b7fc","b400":"#549df9","b500":"#1d74f5","b600":"#095ad2","b700":"#10529e","b800":"#01336b","b900":"#012247","g100":"#e5fbf4","g200":"#c0f6e4","g300":"#96f0d2","g400":"#6ce9c0","g500":"#2de0a5","g600":"#1ecb92","g700":"#19ac7c","g800":"#158d65","g900":"#106d4f","r100":"#fddade","r200":"#fbb5be","r300":"#f98f9d","r400":"#f76a7d","r500":"#f5455c","r600":"#db0c27","r700":"#b30a20","r800":"#8b0719","r900":"#630512","y100":"#fff6d6","y200":"#ffecad","y300":"#ffe383","y400":"#ffd95a","y500":"#ffd031","y600":"#f3be08","y700":"#dfac00","y800":"#b68d00","y900":"#8e6d00","o100":"#fde8d7","o200":"#fad1b0","o300":"#f7b27b","o400":"#f59b53","o500":"#f38c39","o600":"#e26d0e","o700":"#bd5a0b","o800":"#974809","o900":"#713607"}')},379:function(module){module.exports=JSON.parse('{"name":"@rocket.chat/onboarding-ui","version":"0.31.18","description":"Set of components and functions for the onboarding experience on Rocket.Chat","keywords":["rocketchat"],"author":{"name":"Rocket.Chat","url":"https://rocket.chat/"},"homepage":"https://github.com/RocketChat/fuselage#readme","license":"MIT","publishConfig":{"access":"public"},"repository":{"type":"git","url":"git+https://github.com/RocketChat/fuselage.git","directory":"packages/onboarding-ui"},"main":"dist/cjs/index.js","module":"dist/esm/index.js","types":"dist/esm/index.d.ts","files":["/dist"],"scripts":{"build":"run-s .:build:clean .:build:cjs .:build:esm",".:build:clean":"rimraf dist",".:build:esm":"tsc -p tsconfig-esm.json",".:build:cjs":"tsc -p tsconfig-cjs.json","lint":"lint","lint-and-fix":"lint-and-fix","lint-staged":"lint-staged","test":"jest --runInBand","docs":"typedoc","storybook":"start-storybook -p 6006","build-storybook":"build-storybook","bump-next":"bump-next"},"bugs":{"url":"https://github.com/RocketChat/fuselage/issues"},"devDependencies":{"@rocket.chat/eslint-config-alt":"workspace:~","@rocket.chat/fuselage":"workspace:~","@rocket.chat/fuselage-hooks":"workspace:~","@rocket.chat/fuselage-polyfills":"workspace:~","@rocket.chat/fuselage-tokens":"workspace:~","@rocket.chat/icons":"workspace:~","@rocket.chat/layout":"workspace:~","@rocket.chat/logo":"workspace:~","@rocket.chat/prettier-config":"workspace:~","@rocket.chat/styled":"workspace:~","@storybook/addon-essentials":"~6.4.18","@storybook/addons":"~6.4.18","@storybook/react":"~6.4.18","@storybook/source-loader":"~6.4.18","@storybook/theming":"~6.4.18","@types/jest":"~27.4.0","@types/react":"~17.0.39","@types/react-dom":"^17.0.11","bump":"workspace:~","countries-list":"^2.6.1","eslint":"~8.8.0","jest":"~27.5.1","lint-all":"workspace:~","lint-staged":"~12.3.3","npm-run-all":"^4.1.5","prettier":"~2.5.1","react":"^17.0.2","react-dom":"^17.0.2","react-i18next":"~11.15.4","rimraf":"^3.0.2","storybook-dark-mode":"^1.0.8","ts-jest":"~27.1.3","typedoc":"~0.22.11","typescript":"~4.3.5"},"dependencies":{"i18next":"~21.6.11","react-hook-form":"~7.27.0","tslib":"~2.3.1"},"peerDependencies":{"@rocket.chat/fuselage":"*","@rocket.chat/fuselage-hooks":"*","@rocket.chat/fuselage-polyfills":"*","@rocket.chat/icons":"*","@rocket.chat/layout":"*","@rocket.chat/logo":"*","@rocket.chat/styled":"*","react":"17.0.2","react-dom":"17.0.2","react-i18next":"~11.15.4"}}')},611:function(module,exports,__webpack_require__){__webpack_require__(612),__webpack_require__(1072),__webpack_require__(1064),__webpack_require__(1073),__webpack_require__(1069),__webpack_require__(1067),__webpack_require__(1066),__webpack_require__(1068),__webpack_require__(1065),__webpack_require__(1070),__webpack_require__(1071),module.exports=__webpack_require__(1058)},697:function(module,exports){}},[[611,3,4]]]);