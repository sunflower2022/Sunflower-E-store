import React from 'react';
import "./Home.css";
import Product from "./Product";

function home() {
  return (
    <div className="home">
        <div className="home_container">
            <img 
            className="home_image"
            src="https://upserve.com/media/sites/2/Restaurant-Decor-Blog.jpg" alt="" />
            <div className="home_row">
              <Product 
               id="1"
               title='True Model#T-49-HC 54 Two Hinge Doors Reach In Refrigerator 115v'
               price={5299.99}
               image="https://assets.katomcdn.com/q_auto,f_auto,w_500,dpr_2/products/598/598-T49/598-t49.jpg" 
               rating={3} />
              

              <Product 
               id="2"
               title='Turbo Air Model#TST-48SD-D4-N 48-1/4" Sandwich Case w/ Refrigerated Base, 115v'
               price={5999.99}
               image="https://assets.katomcdn.com/q_auto,f_auto,w_500,dpr_2/products/083/083-TST48SDD4N/083-tst48sdd4n.jpg" 
               rating={4} />
            </div>
            <div className="home_row">
              <Product 
              id="3"
              title='	
              Pitco SG14S 40-50 lb. Stainless Steel Fryer 110,000 BTU '
              price={2499.99}
              image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRqZZbT5kyi2MEIgU2K2BFhMvsE1kVduLJEn3kYAUHENMT7fzOyEb6mDxBmPFp0ZBJE_1SnCRgt3G6otnOEly-SbVJMkJdkwLO0iB11DYzoIlSlXC6xQ0SYhA&usqp=CAE" 
              rating={4}
              />
              <Product 
              id="4"
              title='	
              Hoshizaki Model#KM-520MAJ/B-500SF/HS-2033 556 lb Cube Ice Maker with Bin - 500lb, Air Cooled, 115v '
              price={5199.00}
              image="https://assets.katomcdn.com/q_auto,f_auto,w_500,dpr_2/products/440/440-KM520MAJB500PF/440-km520majb500pf.jpg" 
              rating={4} />
              <Product
              id="5"
              title='	
              Hoshizaki Model#HNC-150BA-L-SLH 60" Sushi Case with Left Compressor, 115v'
              price={3099.00}
              image="https://assets.katomcdn.com/q_auto,f_auto,w_500,dpr_2/products/440/440-HNC150BALSLH/440-hnc150balslh.jpg" 
              rating={4} />
            </div>
            <div className="home_row">
               <Product 
              id="6"
              title='	
              Stainless Steel Work Table 24"X48" with Undershelf'
              price={135.99}
              image="https://cdnimg.webstaurantstore.com/images/products/large/203871/2231045.jpg" 
              rating={4} />
               <Product id="7"
              title='	
              Customer Made California Style Ranger with 6 Burners'
              price={3500.00}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFaSI3fjVAGOLMK3Dt4oC7k_Vcz2YLeqbtRQ&usqp=CAU" 
              rating={5} />
               <Product 
              id="8"
              title='	
              Captive-Aire Model# 5424ND-2-PSP-F - 10 10ft StainlessSteel Hood I ETL Listed'
              price={4199.99}
              image="https://pics.acitydiscount.com/pics/md/peachtrader/md_n187658.jpg" 
              rating={4} />
               <Product 
              id="9"
              title='	
              Vollrath T39707 2-Series 46" Hot Food Station '
              price={3299.00}
              image="https://cdnimg.webstaurantstore.com/images/products/large/591455/2123347.jpg" 
              rating={3} />
            </div>

        
        
        
        </div>
    </div>
  )
}

export default home;