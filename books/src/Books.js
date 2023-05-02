const Books = ({images,title,author}) => {
  // const {images,title,author} = props.book;
  // const {images,title,author} = props;
  // onClick, onMouseHover

  const clickEvents = () => {
    alert('hello')
  }
  return(
  <article className="books">
    <img src={images} alt=""></img>
    <h2 onClick={()=>console.log(title)}>{title}</h2>
    <h4>{author}</h4>
    <button type='button' onClick={clickEvents}>Example</button>
  </article>)
}

export default Books