import React from "react";
import ContentLoader from "react-content-loader";

const MovieCardLoader = () => (
  <ContentLoader
    speed={2}
    width={450}
    height={400}
    viewBox="0 0 450 400"
    backgroundColor="#2d3748"
    foregroundColor="#4a5568"
  >
    <rect x="0" y="0" rx="5" ry="5" width="300" height="200" />
    <rect x="0" y="220" rx="4" ry="4" width="240" height="10" />
    <rect x="0" y="240" rx="4" ry="4" width="200" height="10" />
    <rect x="0" y="260" rx="4" ry="4" width="250" height="10" />
    <rect x="0" y="280" rx="4" ry="4" width="180" height="10" />
  </ContentLoader>
);

const FinalLoader = () => (
    <div className="flex justify-center flex-wrap">
        <MovieCardLoader/>
        <MovieCardLoader/>
        <MovieCardLoader/>
        <MovieCardLoader/>
        <MovieCardLoader/>
        <MovieCardLoader/>
        <MovieCardLoader/>
        <MovieCardLoader/>
        <MovieCardLoader/>
    </div>
)



export default MovieCardLoader;
export {FinalLoader};

