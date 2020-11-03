import React from 'react';
import { ReactComponent as CasesNext } from './Assets/arrowRight.svg';
import { ReactComponent as CasesPrev } from './Assets/arrowLeft.svg';
import image1 from './Assets/image1.jpg';
import image2 from './Assets/image2.jpg';
import image3 from './Assets/image3.jpg';
// Data for Cases:
const caseStudies = [
  {
    id: 1,
    subtitle: 'Curology',
    title: 'a custome formula for your skin',
    img: image1,
  },
  {
    id: 2,
    subtitle: 'Some Stuff',
    title: 'bla bla bla',
    img: image2,
  },
  {
    id: 3,
    subtitle: 'Other Stuff',
    title: 'jajaja jejeje ji ji ji ',
    img: image3,
  },
];

const Cases = () => {
  return (
    <React.Fragment>
      <section className='cases-sect'>
        <div className='container-fluid'>
          <div className='cases-navigation'>
            <div className='cases-arrow prev disabled'>
              <CasesPrev></CasesPrev>
            </div>
            <div className='cases-arrow next'>
              <CasesNext></CasesNext>
            </div>
          </div>
          <div className='row'>
            {caseStudies.map((caseItem) => {
              return (
                <div className='case' key={caseItem.id}>
                  <div className='case-details'>
                    <span>{caseItem.subtitle}</span>
                    <h2>{caseItem.title}</h2>
                  </div>
                  <div className='case-img'>
                    <img src={caseItem.img} alt='pirulito' />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Cases;
