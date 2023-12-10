import OnYourMind from "./OnYourMind";
import RestaurantContainer from "./RestaurantContainer";
import ShimmerUi from "./ShimmerUi";
import { useResLists } from "../hooks/useResLists";

const Body = () => {
  const { mindList, resList } = useResLists();
  return mindList.length === 0 && resList.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div id="body">
      <OnYourMind mindList={mindList} />
      <RestaurantContainer resList={resList} />
    </div>
  );
};
export default Body;