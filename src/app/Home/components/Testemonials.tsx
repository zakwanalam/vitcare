"use client"
import React, { useRef } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { type ItemStyles, Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Autoplay from 'embla-carousel-autoplay'

function Testemonials() {
    type Testemonial = {
        name: string,
        review: string,
        rating: number
    }

    const autoplay = useRef(
        Autoplay({delay:1500,stopOnInteraction:true})
    )
    const testemonials: Testemonial[] = [
        {
            name: 'Alex',
            review: 'Excellent service and professional staff!',
            rating: 4.5,
        },
        {
            name: 'Maria',
            review: 'The facility was clean and well-equipped.',
            rating: 4.6,
        },
        {
            name: 'John',
            review: 'Doctors were attentive and explained everything clearly.',
            rating: 4.9,
        },
        {
            name: 'Sara',
            review: 'Quick appointment scheduling and friendly reception.',
            rating: 4.2,
        },
        {
            name: 'David',
            review: 'Very satisfied with the diagnosis and care provided.',
            rating: 4.0,
        },

    ];
    const Star = (
        <polygon points="478.53 189 318.53 152.69 239.26 0 160 152.69 0 189 111.02 303.45 84 478.53 239.26 396.63 394.53 478.53 367.51 303.45 478.53 189" />
    )

    const myStyles: ItemStyles = {
        itemShapes: Star,
        activeFillColor: 'orange',
        inactiveFillColor: 'gray'
    }
    return (
        // 50% on small screens and 33% on larger screens.
        <div className='py-25 flex flex-col  space-y-2.5 items-center transition-all justify-center'>
            <h1 className='mt-10 text-4xl text-accent font-bold'>Testemonials</h1>
            <p className="mt-2 text-gray-300 text-center max-w-xl mx-auto">
                Hear what our patients have to say about their experiences with our healthcare professionals and services.
            </p>
            <div className=' flex flex-row  flex-wrap items-center justify-center'>
                <Carousel plugins={[autoplay.current]} className="max-w-5xl" opts={{loop:true,dragFree:true}}>
                    <CarouselContent className="-ml-1 py-10">
                        {testemonials.map((t, i) => (
                            <CarouselItem key={i} className="pl-1 basis-1/3 flex items-center justify-center  ">
                                <div className="p-1 ">
                                    <Card className='px-2  text-white w-72 py-20 h-60 glass-card hover:scale-110  '>
                                        <CardHeader>
                                            <div className='flex items-center justify-between flex-row-reverse'>
                                                <Avatar className="h-9 w-9 border-background rounded-full">
                                                    <AvatarImage className='rounded-full' src="https://github.com/shadcn.png" alt="@shadcn" />
                                                    <AvatarFallback className="bg-primary text-primary-foreground">CN</AvatarFallback>
                                                </Avatar>
                                                <CardTitle>{t.name}</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-5 ">
                                            <CardDescription className='text-white'>{t.review}</CardDescription>
                                            <div className="flex  items-center gap-2">
                                                <Rating readOnly value={t.rating} style={{ maxWidth: 250 }} itemStyles={myStyles} />
                                                <span className="text-white text-sm">{t.rating.toPrecision(2)}</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default Testemonials