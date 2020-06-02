import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const Gallery = () => {
  const handleOnDragStart = (e) => e.preventDefault()
  return (
    <AliceCarousel 
        autoHeight={false}
        autoPlayInterval={3000}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        buttonsDisabled={true}
        disableAutoPlayOnAction={true}
    >
        <img src={require("../img/McB.png")} onDragStart={handleOnDragStart} className="picture" alt="pic1"/>
        <img src={require("../img/steph-chris-barb.png")} onDragStart={handleOnDragStart} className="picture" alt="pic2"/>
        <img src={require("../img/meandmom.jpg")} onDragStart={handleOnDragStart} className="picture" alt="pic3"/>
        <img src={require("../img/ginmill.jpg")} onDragStart={handleOnDragStart} className="picture" alt="pic4"/>
        <img src={require("../img/cloud9cast.jpg")} onDragStart={handleOnDragStart} className="picture" alt="pic5"/>
        <img src={require("../img/car3.png")} onDragStart={handleOnDragStart} className="picture" alt="pic18"/>
        <img src={require("../img/sushi.png")} onDragStart={handleOnDragStart} className="picture" alt="pic20"/>
        <img src={require("../img/grad.jpg")} onDragStart={handleOnDragStart} className="picture" alt="pic6"/>
        <img src={require("../img/wedding.jpg")} onDragStart={handleOnDragStart} className="picture" alt="pic11"/>
        <img src={require("../img/cloud9fam.jpg")} onDragStart={handleOnDragStart} className="picture" alt="pic7"/>
        <img src={require("../img/toothfairy.jpg")} onDragStart={handleOnDragStart} className="picture" alt="pic8"/>
        <img src={require("../img/christmascarol.jpg")} onDragStart={handleOnDragStart} className="picture" alt="pic9"/>
        <img src={require("../img/colorado.jpg")} onDragStart={handleOnDragStart} className="picture" alt="pic10"/>
        <img src={require("../img/wedding.jpg")} onDragStart={handleOnDragStart} className="picture" alt="pic11"/>
        <img src={require("../img/cats.png")} onDragStart={handleOnDragStart} className="picture" alt="pic19"/>
        <img src={require("../img/cloud9luke.png")} onDragStart={handleOnDragStart} className="picture" alt="pic12"/>
        <img src={require("../img/mcb2.png")} onDragStart={handleOnDragStart} className="picture" alt="pic17"/>
        <img src={require("../img/eddie.png")} onDragStart={handleOnDragStart} className="picture" alt="pic13"/>
        <img src={require("../img/car1.png")} onDragStart={handleOnDragStart} className="picture" alt="pic14"/>
        <img src={require("../img/car2.png")} onDragStart={handleOnDragStart} className="picture" alt="pic15"/>
        <img src={require("../img/steph2.png")} onDragStart={handleOnDragStart} className="picture" alt="pic16"/>



    </AliceCarousel>
  )
}

export default Gallery