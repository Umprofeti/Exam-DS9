import React, {useEffect, useState, useRef} from "react";
import { PlayIcon, PauseIcon, SpeakerLoudIcon } from "@radix-ui/react-icons";

export const MediaPlayer = ({previewURL}) => {
    const audioRef = useRef()
    const progressBarRef = useRef();
    const [dragging, setDragging] = useState(false);
    const [volume, setVolume] = useState(1);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0)
    const [current_track, setTrack] = useState();
    const [play, setPlay]= useState(false);

    useEffect( ()=> {
      setTrack(previewURL)
      setPlay(false)
    }, [previewURL])


    const handlePlay = (e) => {
      e.preventDefault()
      if(!play){
        document.getElementById('player').play()
      }else{
        document.getElementById('player').pause()
      }
      setPlay(!play)
    }

    const handleMetadataLoaded = () => {
      setDuration(audioRef.current.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

  
    const handleMouseDown = () => {
      setDragging(true);
    };
  
    const handleMouseUp = () => {
      setDragging(false);
    };
  
    const handleMouseMove = (event) => {
      if (dragging) {
        const rect = progressBarRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const progress = x / rect.width;
        const newTime = progress * duration;
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime;
      }
    };
  
    const handleVolumeChange = (event) => {
      const newVolume = event.target.value;
      setVolume(newVolume);
      audioRef.current.volume = newVolume;
    };

    const handleProgressChange = (event) => {
      const newTime = event.target.value;
      setCurrentTime(newTime);
      audioRef.current = newTime;
    };

    useEffect(() => {
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, [dragging, duration]);

    
    const progress = (currentTime / duration) * 100;

    return(
        <div className="w-[80%]">
            <div>
                {current_track 
                && 
                  <div>
                    <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleMetadataLoaded} id="player" src={current_track}>
                    
                    </audio>
                      
                      <div className="flex flex-col gap-3 items-center">
                        <div className="flex flex-row gap-4">
                          <div className="flex px-3 text-white flex-row gap-3 items-center bg-customDark rounded-full justify-center">
                            <SpeakerLoudIcon />
                            <input className="range accent-customRed" type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
                          </div>
                          {
                            play && <button className="w-[15%] flex items-center rounded-full bg-customDark text-white !border-none !shadow-none" onClick={handlePlay}>
                                <span  className="">
                                  <PauseIcon className="relative right-3 w-[30px] h-auto"/>
                                </span>
                              </button>
                          }
                          {
                            !play && <button className="w-[15%] flex items-center rounded-full bg-customDark text-white !border-none !shadow-none" onClick={handlePlay}>
                            <span className="w-full">
                            <PlayIcon className=" relative right-3 w-[30px] h-auto"/>
                            </span>
                          </button>
                          }
                        </div>
                        <div className="flex flex-row gap-2 justify-center items-center w-[90%]">
                          <div>0s</div>
                          <div ref={progressBarRef} onMouseDown={handleMouseDown}  className="bg-customnegro w-[100%] h-3 pl-8 rounded-full flex justify-center items-center">
                            <div className=" absolute left-[18.9rem] max-w-[920px] bg-white h-1 rounded-full transition-all duration-100" style={{width: `${(progress-1)}%`}}>

                            </div>
                          </div>
                          <div>{currentTime.toFixed(0)}s</div>
                        </div>
                      </div>
                  </div>
                }
                {
                  !current_track && <p className="text-center">Lo sentimos Pero este album no dispone de muestras</p>
                }
            </div>
        </div>
    )
}