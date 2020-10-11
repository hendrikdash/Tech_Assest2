import React, {FC} from 'react';
import Header from './layouts/Header'
interface InitProps {
    Component?: React.ReactNode;
}

const Home: FC<InitProps> = (props) =>  {
  return (
    <>
        <Header/>
        {/* <main>
          <section id="content" className="content">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit ex. Etiam elementum lectus et tempor molestie. Pellentesque vestibulum dui sit amet dui volutpat sollicitudin. Etiam non erat finibus, iaculis nunc vel, convallis eros. Etiam efficitur tempor dui, vitae fringilla ipsum tristique quis. Aliquam erat volutpat. Cras ullamcorper ex et viverra vulputate. Nam lectus ligula, pretium nec risus nec, ultricies fringilla mauris. Proin quis venenatis neque, iaculis porta nulla. </p>
                </div>
                <div className="col-md-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit ex. Etiam elementum lectus et tempor molestie. Pellentesque vestibulum dui sit amet dui volutpat sollicitudin. Etiam non erat finibus, iaculis nunc vel, convallis eros. Etiam efficitur tempor dui, vitae fringilla ipsum tristique quis. Aliquam erat volutpat. Cras ullamcorper ex et viverra vulputate. Nam lectus ligula, pretium nec risus nec, ultricies fringilla mauris. Proin quis venenatis neque, iaculis porta nulla. </p>
                </div>
                <div className="col-md-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit ex. Etiam elementum lectus et tempor molestie. Pellentesque vestibulum dui sit amet dui volutpat sollicitudin. Etiam non erat finibus, iaculis nunc vel, convallis eros. Etiam efficitur tempor dui, vitae fringilla ipsum tristique quis. Aliquam erat volutpat. Cras ullamcorper ex et viverra vulputate. Nam lectus ligula, pretium nec risus nec, ultricies fringilla mauris. Proin quis venenatis neque, iaculis porta nulla. </p>
                </div>
              </div>
            </div>
          </section>
        </main> */}
    </>
  );
}

export default Home;





