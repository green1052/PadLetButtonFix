// ==UserScript==
// @name		PadLetButtonFix
// @version		1.0.0
// @author		green1052
// @description 페들릿 업로드 버튼이 안보이는 오류를 수정해줍니다.
// @homepageURL	https://github.com/green1052/PadLetButtonFix
// @downloadURL	https://raw.githubusercontent.com/green1052/PadLetButtonFix/main/PadLetButtonFix.user.js
// @include		padlet.com/*/*
// @run-at		document-end
// ==/UserScript==

(function () {
    'use strict';

    setTimeout(() => {
        document.querySelectorAll('.add-post').forEach(query => {
            const section = query.parentElement;
            section.prepend(query);
        });
    }, 1000);
})();
