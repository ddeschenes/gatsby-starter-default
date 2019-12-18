/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <div id="fb-root" />,
    <script
      dangerouslySetInnerHTML={{
        __html: `<!-- Load Facebook SDK for JavaScript -->
        
          window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'v5.0'
            });
          };
  
          (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/fr_FR/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
  
        <!-- Your customer chat code -->
        `,
      }}
    />,
    <div
      className="fb-customerchat"
      attribution="setup_tool"
      page_id="103835777784893"
      theme_color="#52d3aa"
      logged_in_greeting="Bonjour ! Comment pouvons-nous vous aider ?"
      logged_out_greeting="Bonjour ! Comment pouvons-nous vous aider ?"
    />,
  ])
}
