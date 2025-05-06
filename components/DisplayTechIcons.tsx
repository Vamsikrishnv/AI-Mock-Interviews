'use client'; // If this is in a Next.js /app directory

import React, { useEffect, useState } from 'react';
import {cn, getTechLogos} from '@/lib/utils';
import Image from 'next/image';

interface TechIconProps {
    techStack: string[];
}

const DisplayTechIcons = ({ techStack }: TechIconProps) => {
    const [techIcons, setTechIcons] = useState<{ tech: string; url: string }[]>([]);

    useEffect(() => {
        const fetchIcons = async () => {
            const icons = await getTechLogos(techStack);
            setTechIcons(icons);
        };

        fetchIcons();
    }, [techStack]);

    return (
        <div className="flex flex-row gap-2">
            {techIcons.slice(0, 3).map(({ tech, url }, index) => (
                <div
                    key={tech}
                    className={cn(
                        "relative group bg-dark-300 rounded-full p-2 flex-center",
                        index >= 1 && "-ml-2" // apply margin-left overlap for stacked effect
                    )}
                >
                    <span className="tech-tooltip">{tech}</span>
                    <Image src={url} alt={tech} width={100} height={100} className="size-5" />
                </div>
            ))}
        </div>
    );

};

export default DisplayTechIcons;
