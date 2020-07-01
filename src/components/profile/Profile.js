import React from "react";
import './profile.css';

export default function Profile(){
    return (
        <div>
            <div>
                <img src="/images/logo.png" alt="" />
            </div>
            <div>
            <img className="perfil-img" src="https://ca.slack-edge.com/T5VCY49B3-UTHS981GT-2542a518cf7f-512" alt="" />
            </div>
            <header>
	            <div className="container">
                    <div className="perfil">
                        <div className="perfil-image">
                            <img src="hhttps://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" />
                        </div>

                        <div className="perfil-user-settings">
                            <h1 className="perfil-user-name">alan_vang</h1>
                            <button className="boton perfil-edit-boton">Edit Profile</button>
                            <button className="boton perfil-settings-boton" aria-label="perfil settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
                        </div>

                        <div className="perfil-stats">
                            <ul>
                                <li><span className="perfil-stat-count">164</span> posts</li>
                                <li><span className="perfil-stat-count">188</span> followers</li>
                                <li><span className="perfil-stat-count">206</span> following</li>
                            </ul>
                        </div>

                        <div className="perfil-bio">
                            <p><span className="perfil-real-name">Alan Vang</span> -- Lorem ipsum dolor sit, amet consectetur adipisicing elit </p>
                            <p>Location: Charlotte, NC</p>
                            <p>Marital Status: Married</p>
                            <p>Favorite music: EDM</p>
                            <p>Favorite food: Pho</p>
                            <p>Favorite movie: The Fast and the Furious</p>
                        </div>
                    </div>{/* End of perfil section */}
                </div>{/* End of container */}
            </header>
            <main>
                <div className="container">
                    <div className="gallery">
                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="escondido">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
                                    <li className="gallery-item-comments"><span className="escondido">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="escondido">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 89</li>
                                    <li className="gallery-item-comments"><span className="escondido">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 5</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-type">
                                <span className="escondido">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>
                            </div>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="escondido">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 42</li>
                                    <li className="gallery-item-comments"><span className="escondido">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 1</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-type">
                                <span className="escondido">Video</span><i className="fas fa-video" aria-hidden="true"></i>
                            </div>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="escondido">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 38</li>
                                    <li className="gallery-item-comments"><span className="escondido">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 0</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-type">
                                <span className="escondido">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>
                            </div>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="escondido">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 47</li>
                                    <li className="gallery-item-comments"><span className="escondido">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 1</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="escondido">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 94</li>
                                    <li className="gallery-item-comments"><span className="escondido">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 3</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-type">
                                <span className="escondido">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>
                            </div>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="escondido">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 52</li>
                                    <li className="gallery-item-comments"><span className="escondido">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 4</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="escondido">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 66</li>
                                    <li className="gallery-item-comments"><span className="escondido">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-type">
                                <span className="escondido">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>
                            </div>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="escondido">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 45</li>
                                    <li className="gallery-item-comments"><span className="escondido">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 0</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="escondido">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 34</li>
                                    <li className="gallery-item-comments"><span className="escondido">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 1</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="escondido">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 41</li>
                                    <li className="gallery-item-comments"><span className="escondido">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 0</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-type">
                                <span className="escondido">Video</span><i className="fas fa-video" aria-hidden="true"></i>
                            </div>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="escondido">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 30</li>
                                    <li className="gallery-item-comments"><span className="escondido">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                                </ul>
                            </div>
                        </div>
                    </div>{/*  End of gallery */}
                </div> {/* End of container */}
            </main>
        </div>
    )
}