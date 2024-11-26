import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    
<div class="sidebar">
<div className="side">
    <a href="#contact"><img src="https://preview.redd.it/grandpa-cats-facebook-pfp-v0-kh2t5zb456xb1.jpg?width=1080&crop=smart&auto=webp&s=0f21c531e112ee5725a3db5a26cdc5bec862e655" alt="" /> Chemseddine</a>
    </div>
    <div className="side">
    <a href="#home"><img src="./icons/friend.png" alt="" /> Friends</a>
    </div>
    <div className="side">
    <a href="#services"> <img src="./icons/saved.png" alt="" />Saved</a>
    </div>
    <div className="side">
    <a href="#clients"> <img src="./icons/memories.png" alt="" />Memories</a>
    </div>
    <div className="side">
    <a href="#contact"><img src="./icons/groups.png" alt="" /> Groups</a>
    </div>
    <div className="side">
    <a href="#contact"><img src="./icons/Video.png" alt="" /> Video</a>
    </div>
    <div className="side">
    <a href="#contact"><img src="./icons/social-media.png" alt="" /> Marketplace</a>
    </div>
    <div className="side">
    <a href="#contact"><img src="./icons/feed.png" alt="" /> Feeds</a>
    </div>
    <div className="side">
    <a href="#contact"><img className='seemore' src="./icons/expand-button.png" alt="" /> See more</a>
    </div>
    <hr class="new"/>
    <div className="separe">
    <p style={{ opacity: 0.5}}>Your shortcuts  <a href="http://" className='hide'>Edit</a></p>
 

    </div>
  
 
    <div className="shortcutsside">
    <a href="#contact" className="myDIV"><img src="./icons/gp1.jpg" alt="" />Valorant Maroc</a>
    </div>
    <div className="shortcutsside">
    <a href="#contact"><img src="https://m.media-amazon.com/images/I/81OMgLAhLCL.png" alt="" />8 ball pool</a>
    </div>
    <div className="shortcutsside">
    <a  href="#contact"><img src="https://play-lh.googleusercontent.com/7WXBAnrE4ERM1_dpj7WZaaTH6RnHthkEadBwGO8udVrhxFHbJcXQxMHKXuNXNzWnwQ=w526-h296-rw" alt="" />UNO</a>
    </div>
    <div className="side">
    <a href="#contact"><img className='seemore' src="./icons/expand-button.png" alt="" /> See more</a>
    </div>
</div>


  )
}
