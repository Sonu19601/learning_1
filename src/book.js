import "./CSS/index.css";
const Book = (props) => {
  const { image, author, title, getBook, id, index } = props;
  //Destructuring of props
  const titleClick = () => {
    getBook(id);
  };
  //wrapping the function
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h2>{author}</h2>
      <span className="index">#{index + 1}</span>
      {/* <button type="button" onClick={titleClick}>
        Book Click
      </button> */}
      {/* {console.log(props)} */}
    </article>
  );
};
export default Book;
