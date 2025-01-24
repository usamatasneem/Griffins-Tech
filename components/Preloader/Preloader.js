import { useEffect, useState } from "react";

export default function Preloader() {
  const [showLoader, setShowLoader] = useState(true);
  const [isLoded, setIsLoded] = useState(null);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoded("loaded");
    });

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 700);

    return () => clearTimeout(timer);
  });
  return (
    showLoader && (
      <div id="preloader" className={`preloader ${isLoded}`}>
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span
              data-text-preloader=" "
              className="letters-loading"
              style={{ color: "#b3323c" }}
            >
              G
            </span>
            <span data-text-preloader="r" className="letters-loading">
              r
            </span>
            <span data-text-preloader="i" className="letters-loading">
              i
            </span>
            <span data-text-preloader="ff" className="letters-loading">
              ff
            </span>
            <span data-text-preloader="i" className="letters-loading">
              i
            </span>
            <span data-text-preloader="n" className="letters-loading">
              n
            </span>
            <span data-text-preloader="s" className="letters-loading">
              s
            </span>
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
