import React, { useState, useEffect } from "react";
import packageJson from "../package.json";
import moment from "moment";

const buildDateGreaterThan = (latestDate:any, currentDate:any) => {
  const momLatestDateTime = moment(latestDate);
  const momCurrentDateTime = moment(currentDate);

  if (momLatestDateTime.isAfter(momCurrentDateTime)) {
    return true;
  } else {
    return false;
  }
};

const WithClearCache =()=> {
  const [isLatestBuildDate, setIsLatestBuildDate] = useState(false);
  const [buldVersion, setbuldVersion] = useState(false);

  const refreshCacheAndReload = () => {
    
    if (caches) {
      
      // Service worker cache should be cleared with caches.delete()
      caches.keys().then((names) => {
        for (const name of names) {
          caches.delete(name);
          
        }
      });
    }
    // delete browser cache and hard reload
    window.location.reload();
  };

  useEffect(() => {
    fetch("/meta.json")
      .then((response) => response.json())
      .then((meta) => {
        const latestVersionDate = meta.buildDate;
        const currentVersionDate = packageJson.buildDate;

        const shouldForceRefresh = buildDateGreaterThan(
          latestVersionDate,
          currentVersionDate
        );
        console.log(meta.buildVersion)
        setbuldVersion(meta.buildVersion);
        if (shouldForceRefresh) {
          setIsLatestBuildDate(false);
          refreshCacheAndReload();
        } else {
          setIsLatestBuildDate(true);
        }
      });
  }, []);

  return (
    <><span className="build-version">v{buldVersion}</span></>
  );
}

export default WithClearCache;