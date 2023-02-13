import React from "react";
import css from "./Videos.css";
import Videocard from "./Videocard";
import Img from "../Channelimg/Channelimg.jpg";
import TNtedx from "../Thumbnails/TNtedx.jpg";
import TNbook from "../Thumbnails/TNbook.jpg";
import TNgirl from "../Thumbnails/TNgirl.jpg";
import TNiphone from "../Thumbnails/TNiphone.jpg";
import TNnolan from "../Thumbnails/TNnolan.jpg";
import TNTrading from "../Thumbnails/TNTrading.jpg";
import TNnatureBeauty from "../Thumbnails/TNnatureBeauty.jpg";
import TNNasdaq from "../Thumbnails/TNNasdaq.jpg";
import TNKashi from "../Thumbnails/TNKashi.jpg";
import TNJaipur from "../Thumbnails/TNJaipur.jpg";
import TNCartoon from "../Thumbnails/TNCartoon.jpg";
import TNBlockchain from "../Thumbnails/TNBlockchain.jpg";
import TNBitcoin from "../Thumbnails/TNBitcoin.jpg";
import TNBasicofReact from "../Thumbnails/TNBasicofReact.jpg";
import TNCamreo from "../Thumbnails/TNCamreo.jpg";
import TNGT650 from "../Thumbnails/TNGT650.jpg";
import TNHidden from "../Thumbnails/TNHidden.jpg";
import TNJeep from "../Thumbnails/TNJeep.jpg";
import TNMercedies from "../Thumbnails/TNMercedies.jpg";
import TNPubg from "../Thumbnails/TNPubg.jpg";

function Videos() {
  return (
    <div className="videos">
      <h2>Recommeded</h2>
      <div className="videos__videocard">
        <Videocard
          thumbnail={TNtedx}
          channelimg={Img}
          title="harshit verma show"
          channelname="TED-TALK"
          views="33M"
          time="5 days ago"
        />
        <Videocard
          thumbnail={TNbook}
          channelimg={Img}
          title="Top 5 books to read"
          channelname="Book review"
          views="3M"
          time="16 days ago"
        />
        <Videocard
          thumbnail={TNgirl}
          channelimg={Img}
          title="Time to spend with friends"
          channelname="Girls Talk"
          views="101"
          time="1 month ago"
        />
        <Videocard
          thumbnail={TNiphone}
          channelimg={Img}
          title="Iphone new cover"
          channelname="Tech review"
          views="906k"
          time="20 days ago"
        />
        <Videocard
          thumbnail={TNnolan}
          channelimg={Img}
          title="Crazy movies"
          channelname="awesome movies"
          views="1.5M"
          time="2.5 years ago"
        />
        <Videocard
          thumbnail={TNTrading}
          channelimg={TNTrading}
          title="Technical Trading"
          channelname="All About Market"
          views="33M"
          time="5 days ago"
        />
        <Videocard
          thumbnail={TNnatureBeauty}
          channelimg={Img}
          title="The Nature"
          channelname="Peace"
          views="3M"
          time="16 days ago"
        />
        <Videocard
          thumbnail={TNNasdaq}
          channelimg={Img}
          title="Nasdaq?"
          channelname="USA Economy"
          views="101k"
          time="1 month ago"
        />
        <Videocard
          thumbnail={TNKashi}
          channelimg={Img}
          title="In Love with Kashi"
          channelname="WanderLust"
          views="10M"
          time="15 days ago"
        />
        <Videocard
          thumbnail={TNJaipur}
          channelimg={Img}
          title="Pink City"
          channelname="WanderLust"
          views="5.5M"
          time="2.5 years ago"
        />
        <Videocard
          thumbnail={TNCartoon}
          channelimg={Img}
          title="Cartoons"
          channelname="Cartoons"
          views="100K"
          time="1 Month ago"
        />
        <Videocard
          thumbnail={TNBlockchain}
          channelimg={Img}
          title="W's of BlockChain"
          channelname="Techno"
          views="3M"
          time="16 days ago"
        />
        <Videocard
          thumbnail={TNBitcoin}
          channelimg={Img}
          title="W's of Bitcoin"
          channelname="Techno"
          views="1M"
          time="1 month ago"
        />
        <Videocard
          thumbnail={TNBasicofReact}
          channelimg={Img}
          title="BasicofReact"
          channelname="Techno"
          views="906k"
          time="20 days ago"
        />
        <Videocard
          thumbnail={TNPubg}
          channelimg={Img}
          title="How Pubg Works"
          channelname="Techno"
          views="1.5M"
          time="2.5 years ago"
        />
        <Videocard
          thumbnail={TNMercedies}
          channelimg={Img}
          title="Mercedies Cars"
          channelname="Only Cars"
          views="33M"
          time="5 days ago"
        />
        <Videocard
          thumbnail={TNJeep}
          channelimg={Img}
          title="Jeep"
          channelname="Only Cars"
          views="3M"
          time="16 days ago"
        />
        <Videocard
          thumbnail={TNHidden}
          channelimg={Img}
          title="Hide Traning"
          channelname="Army School"
          views="101K"
          time="1 month ago"
        />
        <Videocard
          thumbnail={TNGT650}
          channelimg={Img}
          title="GT650"
          channelname="Onlu Bikes"
          views="906k"
          time="20 days ago"
        />
        <Videocard
          thumbnail={TNCamreo}
          channelimg={Img}
          title="Camreo !!"
          channelname="Only Cars"
          views="1.5M"
          time="2.5 years ago"
        />
      </div>
    </div>
  );
}

export default Videos;
