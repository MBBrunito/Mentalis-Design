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
            className="elfsight-app-ed4f4b73-e291-4eba-b499-6b6d4fe69f6e"
            data-elfsight-app-lazy
         ></div>
      </div>
   );
};

export default GoogleReviewsWidget;
