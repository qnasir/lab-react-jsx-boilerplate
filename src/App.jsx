import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  let img_Arr = imageData();
return (<div>
<h1>
 Kalvium Gallery
</h1>
{/* <div className='gallery'>
<img src={img_Arr[0].img} className='image'/>
<img src={img_Arr[1].img} className='image'/>
<img src={img_Arr[2].img} className='image'/>
<img src={img_Arr[3].img} className='image'/>
</div> */}
<div className='parent'>
{
  img_Arr.map(elem=>{
    return(
    <img src={elem.img} className='image' />
    )
  })
}
</div>
</div>
);
}

export default App;