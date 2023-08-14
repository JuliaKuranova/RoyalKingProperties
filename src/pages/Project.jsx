import HeaderImage from '../components/UI/images/HeaderImage'
import projectBanner from '../assets/img/KEMPINSKI-RESIDENCES-THE-CREEK.jpg';
import OfferItem from '../components/UI/images/OfferItem'
import sliaderImg1 from '../assets/img/sliders/BURJ-BINGHATTI-JACOB-&-CO-RESIDENCES.jpg';
import MoreButton from '../components/UI/buttons/MoreButton';



export default function Project() {
  return (
    <main>
      <HeaderImage img={projectBanner} />
      <div className="intro main-text">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
      </div>
      <div className="filters">
        <MoreButton color='yellow' icon='glass'>Open filters</MoreButton>
      </div>
      <div className="projects section">
        <OfferItem
          img={sliaderImg1}
          tags={['hello', 'world', 'duck', 'test']}
          title={'1 000 000 AED'}
          description='aKempinski Residences The Creek, Dubai Healthcare City Phase 2, Al Jaddaf, Dubai'
        />
        <OfferItem
          img={sliaderImg1}
          tags={['hello', 'world', 'duck', 'test']}
          title={'1 000 000 AED'}
          description='aKempinski Residences The Creek, Dubai Healthcare City Phase 2, Al Jaddaf, Dubai'
        />
        <OfferItem
          img={sliaderImg1}
          tags={['hello', 'world', 'duck', 'test']}
          title={'1 000 000 AED'}
          description='aKempinski Residences The Creek, Dubai Healthcare City Phase 2, Al Jaddaf, Dubai'
        />
        <OfferItem
          img={sliaderImg1}
          tags={['hello', 'world', 'duck', 'test']}
          title={'1 000 000 AED'}
          description='aKempinski Residences The Creek, Dubai Healthcare City Phase 2, Al Jaddaf, Dubai'
        />
        <OfferItem
          img={sliaderImg1}
          tags={['hello', 'world', 'duck', 'test']}
          title={'1 000 000 AED'}
          description='aKempinski Residences The Creek, Dubai Healthcare City Phase 2, Al Jaddaf, Dubai'
        />
        <OfferItem
          img={sliaderImg1}
          tags={['hello', 'world', 'duck', 'test']}
          title={'1 000 000 AED'}
          description='aKempinski Residences The Creek, Dubai Healthcare City Phase 2, Al Jaddaf, Dubai'
        />
      </div>
    </main>
  );
}
