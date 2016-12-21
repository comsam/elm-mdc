var _SnowflakeAi$elm_mdc$Mdc_Enhance_Native_Ripple = function() {

    var supportsCssVariables = function() {
        var windowObj = window;
        const supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
        if (!supportsFunctionPresent) {
            return false;
        }

        const explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
        // See: https://bugs.webkit.org/show_bug.cgi?id=154669
        // See: README section on Safari
        const weAreFeatureDetectingSafari10plus = (
            windowObj.CSS.supports('(--css-vars: yes)')
         && windowObj.CSS.supports('color', '#00000000')
        );
        return explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
    };

    return {
        supportsCssVariables: supportsCssVariables
    };

}();
