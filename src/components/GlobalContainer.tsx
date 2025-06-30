import { cn } from '@/lib/utils';
import  {type ReactNode } from 'react'

interface GlobalContainerProps {
    children: ReactNode;
    color?: string;
    classname?:string
}


function GlobalContainer({classname, children }: GlobalContainerProps) {
    return (
            <div className={cn(` w-screen px-4 sm:px-6 md:px-8`,classname)}>
                <div className='max-w-screen-xl mx-auto '>
                    {children}
                </div>
            </div>
    )
}

export default GlobalContainer