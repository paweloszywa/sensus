"use client";

import { useState, useEffect } from "react";
import { Facebook, ExternalLink } from "lucide-react";

export default function FacebookPosts() {
  const [fbLoaded, setFbLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Facebook Page URL
  const facebookPageUrl =
    "https://www.facebook.com/p/Sensus-Centrum-Terapii-i-Wspomagania-Rozwoju-Dziecka-61576806726313/";

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Load Facebook SDK
    const loadFacebookSDK = () => {
      // Create fb-root div if it doesn't exist
      if (!document.getElementById("fb-root")) {
        const fbRoot = document.createElement("div");
        fbRoot.id = "fb-root";
        document.body.insertBefore(fbRoot, document.body.firstChild);
      }

      // Load Facebook SDK script
      if (!window.FB) {
        const script = document.createElement("script");
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";
        script.src =
          "https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v18.0&appId=24921514497479160";

        script.onload = () => {
          setFbLoaded(true);
          // Parse Facebook plugins after SDK loads
          if (window.FB) {
            window.FB.XFBML.parse();
          }
        };

        document.head.appendChild(script);
      } else {
        setFbLoaded(true);
        // Re-parse if FB is already loaded
        window.FB.XFBML.parse();
      }
    };

    loadFacebookSDK();

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section
      id="facebook-posts"
      className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <style jsx>{`
        .fb-page {
          border-radius: ${isMobile ? "12px" : "16px"} !important;
          overflow: hidden !important;
        }
        .fb-page iframe {
          border-radius: ${isMobile ? "12px" : "16px"} !important;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
            <Facebook className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mb-2 sm:mb-0 sm:mr-3" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
              Aktualności Facebook
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Śledź nasze najnowsze aktualności, porady terapeutyczne i informacje
            o wydarzeniach
          </p>
        </div>

        {/* Facebook Page Plugin */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mx-auto max-w-2xl lg:max-w-4xl">
          <div className="text-center p-6 sm:p-8 lg:p-10 pb-4 sm:pb-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Nasza strona Facebook
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8">
              Śledź nas na Facebook, aby być na bieżąco z naszymi aktualnościami
              i poradami terapeutycznymi.
            </p>
          </div>

          {/* Facebook Page Plugin Container - Fixed Height for CLS */}
          <div
            className="relative bg-gray-50"
            style={{
              minHeight: isMobile ? "450px" : "650px",
              height: isMobile ? "450px" : "650px",
            }}
          >
            {/* Loading State - Always visible until FB loads */}
            {!fbLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6 sm:p-8">
                <div className="text-center">
                  {/* Animated Loading Icon */}
                  <div className="relative mb-8">
                    <div className="animate-spin rounded-full h-16 w-16 sm:h-20 sm:w-20 border-4 border-blue-200 border-t-blue-600 mx-auto"></div>
                    <Facebook className="absolute inset-0 h-8 w-8 sm:h-10 sm:w-10 text-blue-600 m-auto" />
                  </div>

                  {/* Loading Text */}
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                    Ładowanie postów z Facebook
                  </h4>

                  {/* Animated Dots */}
                  <div className="flex items-center justify-center space-x-2 mb-6">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>

                  {/* Loading Skeleton */}
                  <div className="bg-white rounded-lg p-4 mb-6 max-w-md mx-auto">
                    <div className="animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-3"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3 mx-auto"></div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base mb-6">
                    Pobieramy najnowsze aktualności...
                  </p>

                  <a
                    href={facebookPageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium shadow-lg hover:shadow-xl"
                  >
                    <Facebook className="h-5 w-5 mr-2" />
                    Odwiedź Facebook
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            )}

            {/* Facebook Page Plugin */}
            <div className="w-full h-full flex items-center justify-center p-3 sm:p-6">
              <div className="w-full flex justify-center">
                <div
                  className="fb-page mx-auto"
                  data-href={facebookPageUrl}
                  data-tabs="timeline"
                  data-width={isMobile ? "320" : "500"}
                  data-height={isMobile ? "420" : "620"}
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                  style={{
                    borderRadius: isMobile ? "12px" : "16px",
                    overflow: "hidden",
                    opacity: fbLoaded ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                    display: "block",
                    margin: "0 auto",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center p-6 sm:p-8 lg:p-10 pt-4 sm:pt-6">
            <a
              href={facebookPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-blue-600 text-white text-base sm:text-lg lg:text-xl font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 mr-3 sm:mr-4" />
              Śledź nas na Facebook
              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 ml-2 sm:ml-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
