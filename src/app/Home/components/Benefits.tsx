import Image from 'next/image'
import React from 'react'
import hospitalFacility from '@public/hospital.jpg'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import TeamOfDoctors from '@public/team-young-specialist-doctors-standing-corridor-hospital.jpg'
function Benefits() {
    return (
        <div className="flex w-full  max-md:flex-col-reverse items-center justify-evenly gap-10 px-10 py-10">
            <div className="flex max-md:py-15 flex-col max-md:text-center max-md:w-full max-md:items-center space-y-4 justify-start w-1/2">
                <h1 className="text-3xl font-bold text-primary">
                    State Of the Art Medical Equipment And Doctors
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quod libero
                    quasi atque autem ab aliquam debitis veritatis inventore obcaecati! Sed
                    recusandae esse ex debitis culpa ad officiis pariatur mollitia?
                </p>

                {/* ✅ Checklist Section */}
                <ul className="list-none space-y-2 mt-4 ">
                    <li className="flex items-start gap-2">
                        <CheckCircle className='text-primary' /> 24/7 Emergency Services
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle className='text-primary' />Certified and Experienced Doctors
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle className='text-primary' />Modern Surgical Equipment
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle className='text-primary' />Clean and Hygienic Facilities
                    </li>
                </ul>

                <Button className="w-1/2 mt-5 p-6 rounded-full">Learn More</Button>
            </div>
            <div className="relative transition-all duration-75  max-lg:scale-70  flex-3/4 flex flex-col max-md:scale-90 max-md:-translate-x-4">
                <Image
                    className="w-sm max-md:w-60 aspect-square object-cover rounded-4xl"
                    src={hospitalFacility}
                    alt=""
                />
                <Image
                    className="w-sm max-md:w-60 absolute  inset-43 max-md:inset-10 shadow-xl shadow-gray-800 aspect-square object-cover rounded-4xl"
                    src={TeamOfDoctors}
                    alt=""
                />
            </div>
        </div>

    )
}

export default Benefits