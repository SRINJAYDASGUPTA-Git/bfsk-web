"use client"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { blackBelts } from "@/constants"
import Image from 'next/image';
const page = () => {
    //console.log(blackBelts)
    return (
        <div className="flex items-center justify-center gap-5  p-4 flex-wrap w-full ">
            {
                blackBelts.map((belt, index) => {
                    return (
                        <Card sx={{ width: 400 }} className='p-4 rounded-xl ' key={index} >
                            <CardMedia
                                sx={{ objectFit: "contain" }}
                                title={belt.name}
                                className='h-[500px] max-h-full max-w-full'
                            >
                                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                    <Image src={belt.image} fill style={{ objectFit: "cover" }} alt={belt.name} />
                                </div>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    {belt.name}
                                </Typography><Typography gutterBottom variant="h4" component="div">
                                    {belt.rank}
                                </Typography>

                            </CardContent>
                        </Card>
                    )
                })
            }

        </div>
    )
}

export default page