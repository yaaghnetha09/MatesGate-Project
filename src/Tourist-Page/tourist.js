import React from "react";
// import Navbar from "./navbar.js";
// import template from "./template";
// import Footer from "./footer.js";
import Carousel from "react-bootstrap/Carousel";
import "./tourist.css"

export default function Tourist() {
    return (
        <>
            <div className="main_layout">
                <main>
                    <Carousel className="carousel-custom" controls={false} indicators={false}>
                        <Carousel.Item interval={2000}>
                            <img className="d-block w-100" src="https://wallpapers.com/images/featured/landscape-293chzhp3r67ag4a.jpg" alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img className="d-block w-100" src="https://www.wallpapers13.com/wp-content/uploads/2020/02/Zabriskie-Point-Vista-point-in-California-United-States-4K-Ultra-HD-Wallpaper-for-Desktop-Laptop-840x525.jpg" alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img className="d-block w-100" src="https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=612x612&w=0&k=20&c=pYHem1q8SIdCC7t7pv3s6QM1ZrmU3nkCoSaEQMg8vqg=" alt="Third slide" />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img className="d-block w-100" src="https://jakubpolomski.com/wp-content/gallery/9port-alps-switzerland/cache/Fiesch-Switzerland-Alpine-Landscape-120700ALP1806.jpg-nggid042105-ngg0dyn-900x600x100-00f0w010c010r110f110r010t010.jpg" alt="Fourth slide" />
                        </Carousel.Item>
                    </Carousel>
                    <div className="cont_place">
                        <div className="place">
                            <h2>Lucknow</h2>
                            <div>
                                <img src="https://www.lordshotels.com/blog/cnpopjuebuzhzmqeoztkxi/assets/img/post/image_2022-11-04-12-52-04_63650af42b1ad.jpg" alt="Lucknow" height="100px"/>
                                <p>Bada Imambara is a historical landmark in Lucknow, India...</p>
                              <a href="https://lucknow.nic.in/tourist-places/">  <button type="button" className="btn btn-primary">Read More</button>
                              </a> </div>
                        </div>
                        <div className="place">
                            <h2>Kolkata</h2>
                            <div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Kolkata_City_skyline_from_Hoogly_bridge.jpg/800px-Kolkata_City_skyline_from_Hoogly_bridge.jpg" alt="Kolkata" height="100px"/>
                                <p>Kolkata, formerly known as Calcutta, is the capital of the Indian state of West Bengal...</p>
                              <a href="https://wbtourism.gov.in/topDestination/details1?template_id=1&id=63e0f9bde1e96d5daf0e5c4c">  <button type="button" className="btn btn-primary">Read More</button></a>
                            </div>
                        </div>
                        <div className="place">
                            <h2>Orissa</h2>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmw-zX535x_O9OP_YZdqveOapV12TJTDdDdatIV9yEww&s" alt="Orissa" height="100px"/>
                                <p>Home to magnificent temples like Konark Sun Temple and serene beaches like Puri...</p>
                              <a href="https://odishatourism.gov.in/content/tourism/en.html">  <button type="button" className="btn btn-primary">Read More</button></a>
                            </div>
                        </div>
                        <div className="place">
                            <h2>Uttarakhand</h2>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThiCvZ67DgWjRqDSk9rf_GNfdu0Lipt6Fh9FQGBMS5SA&s" alt="Uttarakhand" height="100px"/>
                                <p>Adventure seekers flock to Uttarakhand for trekking in the Himalayas...</p>
                               <a href="https://uttarakhandtourism.gov.in/"> <button type="button" className="btn btn-primary">Read More</button>
</a>                            </div>
                        </div>
                        <div className="place">
                            <h2>Hyderabad</h2>
                            <div>
                                <img src="https://www.tourmyindia.com/socialimg/tombs-saadat-ali-khan.jpg" alt="Hyderabad" height="100px" />
                                <p>Hyderabad is a fascinating blend of Mughal and Nizami architecture...</p>
                              <a href="https://hyderabad.telangana.gov.in/">  <button type="button" className="btn btn-primary">Read More</button></a>
                            </div>
                        </div>
                        <div className="place">
                            <h2>Bangalore</h2>
                            <div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Chhota_imambara_Lucknow.jpg/330px-Chhota_imambara_Lucknow.jpg" alt="Bangalore" height="100px"/>
                                <p>Bangalore is a hub for innovation, with a booming startup scene...</p>
                                <button type="button" className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                        <div className="place">
                            <h2>Delhi</h2>
                            <div>
                                <img src="https://lh3.googleusercontent.com/p/AF1QipNJcCAL1c688f9FRRI2VFDb2QobJaIM4THKt0F4=s1360-w1360-h1020" alt="Delhi" height="100px"/>
                                <p>La Martinière College is an elite private educational institution located in Delhi...</p>
                               <a href="https://delhitourism.gov.in/delhitourism/index.jsp"> <button type="button" className="btn btn-primary">Read More</button></a>
                            </div>
                        </div>
                        <div className="place">
                            <h2>Mumbai</h2>
                            <div>
                                <img src="https://hblimg.mmtcdn.com/content/hubble/img/lucknow/mmt/activities/m_activities_lucknow_begum_hazrat_mahal_park_l_338_450.jpg" alt="Mumbai" height="100px"/>
                                <p>Built in the memory of the wife of the last Nawab of Awadh, Begum Hazrat Mahal Park is a popular memorial...</p>
                              <a href="https://mumbaicity.gov.in/tourism/tourist-places/"> <button type="button" className="btn btn-primary">Read More</button></a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            
        </>
    );
}
