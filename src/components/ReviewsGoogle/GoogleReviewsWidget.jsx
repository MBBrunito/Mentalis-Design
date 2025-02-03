"use client";
import { useEffect } from "react";

const GoogleReviewsWidget = () => {
   useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
         document.body.removeChild(script);
      };
   }, []);

   return (
      <div className="footer-review">
         {/* Usa className en React */}
         <div
            className="elfsight-app-87b8fce7-beb2-4ee4-8efb-3e538118172f"
            data-elfsight-app-lazy
         ></div>
      </div>
   );
};

export default GoogleReviewsWidget;
