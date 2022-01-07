import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub"> A fullstack software developer and social worker who is passionate about accessibity and mental health.</p>
          <p className="a-desc"> A  adipisicing elit. Corporis iste optio officiis eius quis quaerat? Hic ex expedita commodi voluptate amet tempore consequatur, eveniet vel autem accusamus labore earum veritatis. </p>
      </div>
    </div>
  );
};

export default About;
