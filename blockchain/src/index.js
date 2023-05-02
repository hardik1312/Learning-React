import ReactDOM from 'react-dom';
import './index.css';


const BookList1 = {
  images: 'https://m.media-amazon.com/images/I/81gzhZbdjrL._AC_UY218_.jpg',
  title:'The Basics of Bitcoins and Blockchains',
  author: 'Antony Lewis'
}
const BookList2 = {
  images: 'https://m.media-amazon.com/images/I/41CIGDnsw+S._AC_UY218_.jpg',
  title:'The Bitcoin Standard: The Decentralized Alternative to Central Banking',
  author: 'Saifedean Ammous'
}
const BookList3 = {
  images: 'https://m.media-amazon.com/images/I/812I4SzSCqL._AC_UY218_.jpg',
  title:'Blockchain Revolution: How the Technology Behind Bitcoin Is Changing Money, Business, and the World',
  author: 'Don Tapscott and Alex Tapscott'
}
const BookList4 = {
  images: 'https://m.media-amazon.com/images/I/61ItRb1o7nL._AC_UY218_.jpg',
  title:'MASTERING BITCOIN 2/ED PROGRAMMING THE OPEN BLOCKCHAIN',
  author: 'Andreas M. Antonopoulos'
}
function Ineuron(){
  return(
    <section className='bookList'>
    <Image  img={BookList1.images}
            title={BookList1.title}
            author={BookList1.author}
            ></Image>
    <Image  img={BookList2.images}
            title={BookList2.title}
            author={BookList2.author}></Image>
    <Image  img={BookList3.images}
            title={BookList3.title}
            author={BookList3.author}></Image>
    <Image  img={BookList4.images}
            title={BookList4.title}
            author={BookList4.author}></Image>
    </section>
  );
}

const Image = (props) => {
  return (
  <section className="books">
    <img src={props.img} alt=""/>
    <h2>{props.title}</h2>
    <h4>{props.author}</h4>
  </section>
  )
}

ReactDOM.render(<Ineuron/>,document.getElementById('root'))