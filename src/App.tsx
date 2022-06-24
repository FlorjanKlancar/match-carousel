import MatchCarousel from "./components/MatchCarousel";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { matchesActions } from "./store/matches-slice";
import { RootState } from "./types/storeModel";
import Spinner from "./components/Spinner";

function App() {
  const dispatch = useDispatch();
  const { matches }: any = useSelector((state: RootState) => state.matches);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lmt.fn.sportradar.com/demolmt/en/Etc:UTC/gismo/event_fullfeed/0/1/12074`
      );
      console.log(response.data);
      dispatch(matchesActions.setMatches(response.data.doc[0].data));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="container">
      {!matches.length ? (
        <div>
          <div style={{ textAlign: "center" }}>Loading</div>
          <Spinner />
        </div>
      ) : (
        <>
          <MatchCarousel sportId={2} />
          <MatchCarousel sportId={3} max={15} />
          <MatchCarousel sportId={5} max={12} />
          <MatchCarousel sportId={7} max={12} />
          <MatchCarousel max={20} />
        </>
      )}
    </div>
  );
}

export default App;
