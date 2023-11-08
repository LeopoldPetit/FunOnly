import {useGame} from "./useGame.jsx";

export function VideoComponent() {
    const {game} = useGame();
  return (
      <div className="videoComponent mt-11 mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="py-4 text-base leading-6 space-y-4 textColor sm:text-lg sm:leading-7">
              <p>
                  {/* eslint-disable-next-line react/prop-types */}
                  <iframe width="100%" height="600" src={"https://www.youtube.com/embed/" + game.infos.videoId}
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen></iframe>
              </p>
          </div>
      </div>
  );
}