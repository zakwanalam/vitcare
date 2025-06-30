import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
function Statistics() {
    return (
        <>
            <div className='flex justify-center max-md:flex-col items-center py-10  *:w-2xs gap-10   *:bg-gray-100'>
                <Card>
                    <CardHeader>
                        <CardTitle className='text-xl'>Your Bridge to Better Health</CardTitle>
                        <CardDescription>Start your wellness journey with us</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Personalized health solutions tailored to your needs</p>
                        <CardAction className='pt-4 '><Button className='rounded-full cursor-pointer'>Start Your Journey Today</Button></CardAction>

                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow ">
                    <CardHeader className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-2xl font-bold text-primary">12K+ Happy Clients</CardTitle>
                                <CardDescription className="text-sm text-muted-foreground">
                                    Trusted by thousands worldwide
                                </CardDescription>
                            </div>
                            <CardAction>
                                <div className="flex -space-x-3">
                                    <Avatar className="h-9 w-9 border-2 border-background rounded-full">
                                        <AvatarImage className='rounded-full' src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback className="bg-primary text-primary-foreground">CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar className="h-9 w-9 border-2 border-background rounded-full">
                                        <AvatarImage className='rounded-full' src="https://github.com/leerob.png" alt="@leerob" />
                                        <AvatarFallback className="bg-primary text-primary-foreground">LR</AvatarFallback>
                                    </Avatar>
                                    <Avatar className="h-9 w-9 border-2 border-background rounded-full">
                                        <AvatarImage className='rounded-full' src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                                        <AvatarFallback className="bg-primary text-primary-foreground">ER</AvatarFallback>
                                    </Avatar>
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
                                        +11,997
                                    </div>
                                </div>
                            </CardAction>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Join our growing community of satisfied clients who've achieved better health through our programs.
                        </p>
                    </CardContent>
                    <CardFooter className="text-xs text-muted-foreground">
                        <p>Read success stories from real people →</p>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className='text-xl'>Success Rate</CardTitle>
                        <CardDescription>Our client satisfaction metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-center space-x-6">
                            <ChevronLeft className="h-6 w-6 text-muted-foreground" />

                            <div className="relative flex h-24 w-24 items-center justify-center">
                                {/* Outer circle */}
                                <div className="absolute h-full w-full rounded-full border-8 border-primary/10"></div>

                                {/* Percentage text */}
                                <div className="z-10 flex flex-col items-center">
                                    <span className="text-3xl font-bold">95%</span>
                                    <span className="text-xs text-muted-foreground">Success</span>
                                </div>

                                {/* Progress arc (partial circle) */}
                                <div className="absolute h-full w-full rounded-full border-8 border-transparent border-t-primary border-r-primary"
                                    style={{ transform: 'rotate(45deg)' }}></div>
                            </div>
        
                            <ChevronRight className="h-6 w-6 text-muted-foreground" />
                        </div>
                    </CardContent>
                    <CardFooter className="text-sm text-muted-foreground">
                        <p>Higher than industry average</p>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default Statistics