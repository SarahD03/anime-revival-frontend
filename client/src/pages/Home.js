import Marquee from 'react-fast-marquee'

const Home = () => {
  return (
    <div>
      <div>
        <h1 className="feed-title">
          Discover a Community for Your Favorite Anime!
        </h1>
      </div>
      <Marquee style={{ marginTop: '60px', marginBottom: '80px' }}>
        <div classname="marquee-pics">
          <img
            style={{
              width: '400px',
              height: '450px',
              marginLeft: '40px',
              border: 'pink solid',
              borderWidth: '5px',
              borderRadius: '15px',
              boxShadow: 'black 3px 6px 9px'
            }}
            alt="anime cover"
            src="https://www.boredpanda.com/blog/wp-content/uploads/2021/11/best-anime-series-28-61a6373893e83__700.jpg"
          />
        </div>
        <div classname="marquee-pics">
          <img
            style={{
              width: '400px',
              height: '450px',
              marginLeft: '40px',
              border: 'pink solid',
              borderWidth: '5px',
              borderRadius: '15px',
              boxShadow: 'black 3px 6px 9px'
            }}
            alt="anime cover"
            src="https://qph.cf2.quoracdn.net/main-qimg-dcd985f5a5a3688236dea1c744bf18b9.webp"
          />
        </div>
        <div classname="marquee-pics">
          <img
            style={{
              width: '400px',
              height: '450px',
              marginLeft: '40px',
              border: 'pink solid',
              borderWidth: '5px',
              borderRadius: '15px',
              boxShadow: 'black 3px 6px 9px'
            }}
            src="https://occ-0-2774-37.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcciGb6DtmgPfxeu9i5vVgpBe2CC5MsNP-JdfdPQrLoCiXIPLIdSQyJTaG41-XQ9dXwjc57Ig6cPHy3o9VynSWTw7txCylmoqBM.jpg?r=8fa"
          />
        </div>
        <div classname="marquee-pics">
          <img
            style={{
              width: '400px',
              height: '450px',
              marginLeft: '40px',
              border: 'pink solid',
              borderWidth: '5px',
              borderRadius: '15px',
              boxShadow: 'black 3px 6px 9px'
            }}
            alt="anime cover"
            src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421515397/nana-vol-8-9781421515397_hr.jpg"
          />
        </div>
        <div classname="marquee-pics">
          <img
            style={{
              width: '400px',
              height: '450px',
              marginLeft: '40px',
              border: 'pink solid',
              borderWidth: '5px',
              borderRadius: '15px',
              boxShadow: 'black 3px 6px 9px'
            }}
            alt="anime cover"
            src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/9f93bb58e47e5ca59d0980de6351eac9.jpeg"
          />
        </div>
      </Marquee>
    </div>
  )
}

export default Home
