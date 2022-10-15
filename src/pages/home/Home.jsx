import "./home.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import { shuffle } from "../../globalFunctions";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

 

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(shuffle(res.data).splice(0, 6));
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  },[cat])

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent.split(" ").splice(0, 75).join(" ");
  }

  return (
    <div className="home">
      <h1 className="homeTitle">{cat === "" ? "FEATURED" : cat.split("=")[1].toUpperCase()}</h1>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../uploads/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)} ...</p>
              <Link className="link" to={`post/${post.id}`}>
              <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
