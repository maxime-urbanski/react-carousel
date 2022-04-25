import React, {SetStateAction, useMemo, useState} from "react";

interface CarouselProps {
  array: Array<string>
  elementVisible: number
  elementToSlide: number;
  setImg: React.Dispatch<SetStateAction<Array<string>>>
}


const Carousel = ({array, elementVisible, elementToSlide, setImg}: CarouselProps):JSX.Element => {

  const [index, setIndex] = useState<number>(0)

  const indexMemo = useMemo(() => index, [index])

  const prev = () => {
    let infinite = [...array.slice(-elementToSlide), ...array].slice(0,array.length)

    setImg(infinite)

    setIndex(index - 1)

    if (index <= 0) {
      setIndex(array.length - 1)
    }

    console.log(index)

  }
  const next = () => {
    let infinite = [...array, ...array.slice(0,elementToSlide)].slice(-array.length)
    setImg(infinite)
    setIndex(index + 1)
    if (index > array.length - 2) {
      setIndex(0)
    }
    console.log(array.slice(-array.length))


  }

  const ratio = elementVisible / elementToSlide

  const translate = (100 / ratio) * indexMemo + "%";

  const widthVisible = 100 / elementVisible + "%"

  return (
    <div style={{display: "flex", flexDirection:'column'}}>
      <div className="carousel">
        <button className="button prev" onClick={prev}>Prev</button>
        <div className="carousel-container" style={{transform : `translateX(-${translate})`}}>
          {array.map( element =>
            <div
              className="carousel-item"
              style={{width: widthVisible}}
              key={element}
            >
              <img src={element} alt={element} />
            </div>)
          }
        </div>
        <button className="button next" onClick={next}>Next</button>
      </div>
    </div>
  )
}

export default Carousel
