import { useEffect, useState } from "react";
import "./menu.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { shuffle } from "../../globalFunctions";

const Menu = ({cat, postId}) => {
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        let menuPosts = res.data.filter(post => post.id !== +postId);
        setPosts(shuffle(menuPosts).splice(0, 3));
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  },[cat, postId])

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../uploads/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <button><Link className="link" to={`/post/${post.id}`}>Read More</Link></button>
        </div>
      ))}
    </div>
  )
}

export default Menu