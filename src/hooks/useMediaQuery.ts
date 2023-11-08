import { useState, useEffect } from "react";


 /*window.matchMedia takes a media query as a parameter 
    e.g window.matchMedia(""(max-width: 600px)"")
    window.matchMedia returns an object that can help you determine if 
    the window size matches the passed query
    e.g window.matchMedia(""(max-width: 600px)"")
    would return an object that looks like 

    
    {matches: false
    media: "(max-width: 600px)"
    onchange: null}
    matches is true if the window size matches the passed query
    */

const useMediaQuery = (query: string) => {
    //initializes the value of matches to false
  const [matches, setMatches] = useState(false);

  useEffect(() => {

    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;