const Book = (props) => {
  const { Image, Title, Author, id } = props;

  return (
    <div className="Book"> 
       <div id="id">#{id}</div>
      <img src={Image} alt="" />
      <h2>{Title}</h2>

      <h4>{Author}</h4>
    </div>
  );
}; 
export default Book; 
