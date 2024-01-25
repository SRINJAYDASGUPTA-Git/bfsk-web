import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <main >
      <div
        className="relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center bg-[url('/assets/images/bg.png')] h-[800px]"
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black/70"
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-[#f6f6f6] text-md px-8 md:text-2xl md:w-[50%]">
              Where confidence is chiseled from flaws, and inner warriors rise. Train with us, transform yourself.
              <div className="flex flex-col items-center justify-center py-12">
                <h2 className='h3-bold text-center'>
                  Welcome to Bharatiya Federation of Shotokan Karate
                </h2>
                <div className="text-xl text-center p-medium-20 py-5">
                  BFSK is a non-profit organization dedicated to the teaching of traditional Shotokan Karate. We are International Associates of <span className='font-bold'>Dynamic Shotokan Karate-Do International (DSKI)</span> and Member of <span className='font-bold'>World Karate Masters Association (WKMA)</span> and
                  Member of <span className='font-bold'>Indian Karate Masters Association (IKMA)</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Description*/}
      {/* <div className='max-w-[80vw] flex items-center justify-center mx-auto'>
        <div className="flex flex-col items-center justify-center py-12">
          <h2 className='h3-bold text-center'>
            Welcome to Bharatiya Federation of Shotokan Karate
          </h2>
          <div className="text-xl text-center p-medium-20 py-5">
            BFSK is a non-profit organization dedicated to the teaching of traditional Shotokan Karate. We are International Associates of <span className='font-bold'>Dynamic Shotokan Karate-Do International (DSKI)</span> and Member of <span className='font-bold'>World Karate Masters Association (WKMA)</span> and
            Member of <span className='font-bold'>Indian Karate Masters Association (IKMA)</span>

          </div>
        </div>
      </div> */}

      {/*About Shotokan*/}
      <div className='flex flex-col items-center justify-center'>
        <h2 className='h2-bold text-center'>The Masters of Shotokan Karate</h2>
        <div className='w-3/4 py-5 flex flex-col items-center gap-6 justify-center md:flex-row md:justify-between'>
          <Card sx={{ maxWidth: 400 }} className='p-4 '>
            <CardMedia
              sx={{ objectFit: "contain" }}
              image="/assets/images/funakoshi_sensei.png"
              title="green iguana"
              className='h-[500px] max-h-full max-w-full'
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Gichin Funakoshi
              </Typography>
              <Typography variant="body2" color="text.secondary" className='font-semibold'>
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
              <Typography gutterBottom variant="h4" component="div">
                Masatoshi Nakayama
              </Typography>
              <Typography variant="body2" color="text.secondary" className='font-semibold'>
                Masatoshi Nakayama  was an internationally renowned Japanese master of Shotokan karate.<br></br>
                He was the first master in Shotokan history to attain the rank of 9th dan while alive, and was posthumously awarded the rank of 10th dan.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <h2 className='h2-bold text-center'>Current Chiefs of BFSK</h2>
        <div className='w-3/4 py-5 flex flex-col items-center gap-6 justify-center md:flex-row md:justify-between'>
          <Card sx={{ maxWidth: 400 }} className='p-4 '>
            <CardMedia
              sx={{ objectFit: "contain" }}
              image="/assets/images/ali_darvish.jpg"
              title="green iguana"
              className='h-[500px] max-h-full max-w-full'
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Shuseki Shihan Dr Ali Darwish (Hanshi)
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="div" color="text.secondary">
                Shuseki Shihan Eighth (hachi) Dan<br />
                Founder, Head of Style and World Chief Instructor and CEO <br />
                Head of the Council of Senior Technical Advisers <br />
                Head of the Senior Technical Committee
              </Typography>
              <Typography variant="body2" color='text.primary' className='font-semibold'>
                Shuseki Shihan Dr. Ali Darwish, a karate master for over 50 years, has honed his skills through competition, leadership, and system development (Yakushin Shotokan). His expertise reaches beyond the dojo, with published works like "Contrast and Energy Transfer" bridging karate to fields like business. A true scholar and practitioner, his 8th Dan rank speaks volumes.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 400 }} className='p-4 '>
            <CardMedia
              sx={{ objectFit: "contain" }}
              image="/assets/images/israfil_sensei.jpg"
              title="green iguana"
              className='h-[500px] max-h-full max-w-full'
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Md. Israfil
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="div" color="text.secondary">
                Kocho Fifth (Go) Dan<br />
                Head Instructor of BFSK India
              </Typography>
              <Typography variant="body2" color="text.secondary" className='font-semibold' >
                For over 25 years, Kocho Md. Israfil has been a powerhouse of Shotokan in North 24 Parganas. His Fifth Dan Black Belt, honed through years of discipline, shines as he leads over 150 students across 10+ clubs. His clear instruction, unwavering spirit, and infectious enthusiasm cultivate not just physical prowess but also the values of Shotokan -- a testament to his role as a master, mentor, and pillar of the karate community.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>

    </main >
  )
}
