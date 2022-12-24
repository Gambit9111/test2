import Image from 'next/image'
import { StaticImageData } from 'next/image'
import { useState } from "react";
import { motion } from 'framer-motion';
import AudioPlayer from '../AudioPlayer';

const SectionTrack: React.FC<Track> = ({ title, artist, audioSrc, image }) => {

    return (
        <motion.div className="w-full h-[125px] lg:h-[250px] flex gap-3 lg:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >

            <Image src={image} alt={title} width={127} height={125} className="lg:w-[250px] lg:h-[250px]" />
            <div className='w-full pt-1'>
                <h3 className='text-sm text-thirdWhite font-semibold lg:pb-3 font-Syne'>{artist}</h3>
                <h3 className='text-sm font-bold lg:text-2xl text-secondaryNeon'>{title}</h3>
                <p className='hidden lg:inline-flex text-thirdWhite'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, tempore!</p>
                <AudioPlayer audioSrc={audioSrc} />
            </div>
        </motion.div>
    )
}

interface PageProps {
    tracks: [
        {
            id: string;
            title: string;
            artist: string;
            audioSrc: string;
            image: StaticImageData;
        }
    ];
}

interface Track {
    id: string;
    title: string;
    artist: string;
    audioSrc: string;
    image: StaticImageData;
}

const SectionTracks: React.FC<PageProps> = ({ tracks }) => {
    const [artist, setArtist] = useState("")
    return (
        <div className="mt-16 lg:mt-56">
            <h3 className="font-semibold text-center pb-6 text-thirdWhite">Songs</h3>
            <h1 className="text-[56px] leading-[67px] text-center font-bold px-1 pb-6 text-secondaryNeon font-Syne">Newest tracks by our artists</h1>
            <div>
                <div className="grid grid-rows-2 grid-cols-3 pb-10 gap-2 lg:flex lg:justify-center lg:gap-5 lg:pt-8 lg:pb-12">
                    <button className="text-secondaryNeon" onClick={() => setArtist("Bienis")}>Bienis</button>
                    <button className="text-secondaryNeon" onClick={() => setArtist("Mamis")}>Mamis</button>
                    <button className="text-secondaryNeon" onClick={() => setArtist("Muile")}>Muile</button>
                    <button className="text-secondaryNeon" onClick={() => setArtist("Prosto Pijus")}>Prosto Pijus</button>
                    <button className="text-secondaryNeon" onClick={() => setArtist("Seneka")}>Seneka</button>
                    <button className="my-button text-secondaryNeon bg-primaryBlack border border-secondaryNeon" onClick={() => setArtist("")}>View All</button>
                </div>
                <div className='flex flex-col gap-5 lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-14'>
                    {/* <SectionTrack />
                    <SectionTrack />
                    <SectionTrack />
                    <SectionTrack /> */}
                    {tracks
                        .filter((track) => track.artist === artist)
                        .map((track) => (
                            <SectionTrack key={track.id} {...track} />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default SectionTracks