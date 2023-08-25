import MoreButton from '../UI/buttons/MoreButton';
import FilterItem from '../FilterItem';


export default function Filter() {
  return (
    <div className="filter">

            <FilterItem />

        <MoreButton color='yellow' icon='glass'>Open filters</MoreButton>
    </div>
  );
}