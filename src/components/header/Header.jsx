const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        {/* <iframe src="https://giphy.com/embed/UVnV0QwxgBJZwTfldG" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <p>
          <a href="https://giphy.com/stickers/transparent-UVnV0QwxgBJZwTfldG">via GIPHY</a>
        </p> */}
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2p4dTg2NXE5NmJwdXY3N2Q2eW05a2ZwN2w2enRkMGJidDdxbjJrMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UVnV0QwxgBJZwTfldG/giphy.webp" alt="" />
      </div>
      <div className="ball">
        <img src="https://raw.githubusercontent.com/gaurav-gogia/pakdemon/master/includes/pokeball.gif"></img>
      </div>
    </div>
  );
};

export default Header;
