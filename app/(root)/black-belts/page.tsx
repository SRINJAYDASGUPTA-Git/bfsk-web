"use client"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { blackBelts } from "@/constants"
const page = () => {
    console.log(blackBelts)
    return (
        <div className="flex items-center justify-center gap-5  p-4 flex-wrap w-full ">
            {
                blackBelts.map((belt, index) => {
                    return (
                        <Card sx={{ width: 400 }} className='p-4 rounded-xl ' key={index} >
                            <CardMedia
                                sx={{ objectFit: "contain" }}
                                image={`${belt.image}`}
                                title={belt.name}
                                className='h-[500px] max-h-full max-w-full'
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    {belt.name}
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