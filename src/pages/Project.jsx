import HeaderImage from "../components/UI/images/HeaderImage";
import projectBanner from "../assets/img/KEMPINSKI-RESIDENCES-THE-CREEK.jpg";
import OfferItem from "../components/UI/images/OfferItem";
import sliaderImg1 from "../assets/img/sliders/BURJ-BINGHATTI-JACOB-&-CO-RESIDENCES.jpg";
import MoreButton from "../components/UI/buttons/MoreButton";
import Filter from "../components/filter/Filter";

export default function Project() {
  return (
    <>
      <HeaderImage img={projectBanner} title={'KEMPINSKI RESIDENCES THE CREEK'}/>
      <main>
        {/* <div className="project-title">
          <div className="main-text">
            <span>Properties</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path d="M4 10.5L8 6.5L4 2.5" stroke="white" />
            </svg>
            <span>Kempinski residences the Creek</span>
          </div>
          <h1 className="h1 ">KEMPINSKI RESIDENCES THE CREEK</h1>
        </div> */}

        <div className="intro main-text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </div>

        <div className="filter__project">
          <Filter />
          <div className="filter__project__btn">
            <MoreButton color="yellow" icon="glass">
              search
            </MoreButton>
            {/* <MoreButton color="" icon="x">
            Reset filter
          </MoreButton> */}
          </div>
        </div>
        <div className="projects section">
          <OfferItem
            img={sliaderImg1}
            tags={["hello", "world", "duck", "test"]}
            title={"1 000 000 AED"}
            description="aKempinski Residences The Creek, Dubai Healthcare City Phase 2, Al Jaddaf, Dubai"
          />
          <OfferItem
            img={sliaderImg1}
            tags={["hello", "world", "duck", "test"]}
            title={"1 000 000 AED"}
            description="aKempinski Residences The Creek, Dubai Healthcare City Phase 2, Al Jaddaf, Dubai"
          />
          <OfferItem
            img={sliaderImg1}
            tags={["hello", "world", "duck", "test"]}
            title={"1 000 000 AED"}
            description="aKempinski Residences The Creek, Dubai Healthcare City Phase 2, Al Jaddaf, Dubai"
          />
          <OfferItem
            img={sliaderImg1}
            tags={["hello", "world", "duck", "test"]}
            title={"1 000 000 AED"}
            description="aKempinski Residences The Creek, Dubai Healthcare City Phase 2, Al Jaddaf, Dubai"
          />
          <OfferItem
            img={sliaderImg1}
            tags={["hello", "world", "duck", "test"]}
            title={"1 000 000 AED"}
            description="aKempinski Residences The Creek, Dubai Healthcare City Phase 2, Al Jaddaf, Dubai"
          />
          <OfferItem
            img={sliaderImg1}
            tags={["hello", "world", "duck", "test"]}
            title={"1 000 000 AED"}
            description="aKempinski Residences The Creek, Dubai Healthcare City Phase 2, Al Jaddaf, Dubai"
          />
        </div>
      </main>
    </>
  );
}
