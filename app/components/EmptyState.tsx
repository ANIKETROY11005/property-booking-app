'use client';
import { useRouter } from 'next/navigation';
import React from 'react'
import Heading from './Heading';
import Button from './Button';

interface EmptyStateProps {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}


const EmptyState: React.FC<EmptyStateProps> = ({
    title = "No exact match",
    subtitle = "Try changing removing some of your filters",
    showReset
}) => {
    const router = useRouter();
    return (
        <div
            className='
        h-[80vh]
        flex
        flex-col
        gap-2
        justify-center
        items-center
        '
        >
            <Heading
                center
                title={title}
                subtitle={subtitle}
            />
            {showReset &&
                (<div
                    className='w-48 mt-4'
                >
                    <Button
                        outline
                        label='Remove all filters'
                        onClick={() => router.push('/')}
                    />

                </div>)
            }
        </div>
    )
}

export default EmptyState;