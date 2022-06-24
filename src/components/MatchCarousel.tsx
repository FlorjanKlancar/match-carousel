import { useEffect, useState } from "react";
import Card from "./Card";
import "./MatchCarousel.css";
import CarouselComponent from "./Carousel";
import { useSelector } from "react-redux";
import { RootState } from "../types/storeModel";

type MatchCarouselProps = {
  sportId?: number;
  max?: number;
};

function MatchCarousel({ sportId, max = 10 }: MatchCarouselProps) {
  const { matches }: any = useSelector((state: RootState) => state.matches);
  const [displayMatches, setDisplayMatches] = useState([]);

  useEffect(() => {
    const setDataHandler = () => {
      const displayMatchesDecider = sportId
        ? matches.find(
            (sport: any) => sport._id === sportId && sport.realcategories
          )
        : matches.slice(0, max).map((data: any) => {
            return data.realcategories[0];
          });

      setDisplayMatches(
        displayMatchesDecider
          ? sportId
            ? displayMatchesDecider.realcategories
            : displayMatchesDecider
          : matches.slice(0, max).map((data: any) => {
              return data.realcategories[0];
            })
      );
    };

    if (matches.length) {
      setDataHandler();
    }
  }, []);

  let counter = 0;

  const itterateArrays = displayMatches.map((match: any) => {
    return match.tournaments[0].matches.map((single: any, i: number) => {
      counter++;

      if (counter <= max) {
        return (
          <Card
            tournament={match.tournaments[0]}
            single={single}
            key={i}
            categoryName={match.name}
          />
        );
      } else return;
    });
  });

  const filterUndefined = itterateArrays.map((item: any) =>
    item.filter((item2: any) => item2 !== undefined)
  );

  return (
    <div className="carousel_container">
      {displayMatches.length ? (
        <CarouselComponent>{filterUndefined}</CarouselComponent>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default MatchCarousel;
