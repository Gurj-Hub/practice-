import { useEffect, useState } from "react";

const RenderInfo = () => {
    
  const [data, setData] = useState([]);

  // fetch used to retrieve data to be displayed upon page load
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return data.length > 0 ? (
    <>
      {data.map((userInfo, index) => {
        return <div>{userInfo.title}</div>;
      })}
    </>
  ) : (
    <div>loading...</div>
  );
};

export default RenderInfo;
