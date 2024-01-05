import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <main >
      <div
        className="relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center bg-[url('/assets/images/bg.png')] h-[500px]"
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black/70"
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-[#f6f6f6] text-md px-8 md:text-2xl md:w-[50%]">
              Where confidence is chiseled from flaws, and inner warriors rise. Train with us, transform yourself.
            </div>
          </div>
        </div>
      </div>
      {/*Description*/}
      <div className='max-w-[80vw] flex items-center justify-center mx-auto'>
        <div className="flex flex-col items-center justify-center py-12">
          <h2 className='h3-bold text-center'>
            Welcome to Bharatiya Federation of Shotokan Karate
          </h2>
          <div className="text-xl text-center p-medium-20 py-5">
            BFSK is a non-profit organization dedicated to the teaching of traditional Shotokan Karate. We are affiliated to the .
          </div>
        </div>
      </div>

      {/*About Shotokan*/}
      <div className='flex flex-col items-center justify-center'>
        <h2 className='h2-bold'>The Masters of Shotokan Karate</h2>
        <div className='w-3/4 py-5 flex flex-col items-center gap-6 justify-center md:flex-row md:justify-between'>
          <Card sx={{ maxWidth: 400 }} className='p-4 '>
            <CardMedia
              sx={{ objectFit: "contain" }}
              image="/assets/images/funakoshi_sensei.png"
              title="green iguana"
              className='h-[500px] max-h-full max-w-full'
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gichin Funakoshi
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gichin Funakoshi  was the creator of Shotokan karate, perhaps the most widely known style of karate, and is attributed as being the “father of modern karate”.<br></br>
                He became honorary head of the Japan Karate Association upon its establishment in 1949.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 400 }} className='p-4 '>
            <CardMedia
              sx={{ objectFit: "contain" }}
              image="/assets/images/Nakayama.png"
              title="green iguana"
              className='h-[500px] max-h-full max-w-full'
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Masatoshi Nakayama
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Masatoshi Nakayama  was an internationally renowned Japanese master of Shotokan karate.<br></br>
                He was the first master in Shotokan history to attain the rank of 9th dan while alive, and was posthumously awarded the rank of 10th dan.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>

    </main >
  )
}
