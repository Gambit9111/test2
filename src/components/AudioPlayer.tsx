import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import play from '../../public/logo/play.svg';
import pause from '../../public/logo/pause.svg';

let currentlyPlaying: HTMLAudioElement | null = null;

interface AudioPlayerProps {
    audioSrc: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
    const [audio] = useState(new Audio(audioSrc));
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            if (audio.currentTime) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };

        audio.addEventListener('timeupdate', updateProgress);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
        };
    }, [audio]);

    useEffect(() => {
        audio.addEventListener('ended', () => {
            setIsPlaying(false);
            setProgress(0);
        });
        return () => {
            audio.removeEventListener('ended', () => {
                setIsPlaying(false);
                setProgress(0);
            });
        };
    }, [audio]);

    const togglePlay = () => {
        if (currentlyPlaying) {
            currentlyPlaying.pause();
        }
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        currentlyPlaying = audio;
        setIsPlaying(!isPlaying);
    };

    return (
        <div className='pt-11 lg:pt-24 flex items-center gap-3'>
            <button className='text-thirdWhite font-Syne' onClick={togglePlay}>
                {isPlaying ? <Image src={pause} alt="pause" className='w-6 h-6' /> : <Image src={play} alt="play" className='w-6 h-6' />}
            </button>
            <div className='bg-secondaryNeon rounded-md h-2 w-8/12  relative z-30 mt-4'>
                <motion.div
                    className='absolute bottom-[-2px] left-[-2px] w-8/12 h-[7px] rounded-md bg-primaryBlack z-50'
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </div>
    );
};

export default AudioPlayer;