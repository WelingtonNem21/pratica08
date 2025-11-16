import { Link } from "react-router";
import style from "./home.module.css";
import array from "../../db/db";

function Home() {
  return (
    <div>
      <section className={style.conteiner}>
        {array.map((item) => (
          <div key={item.id} className={style.item}>
            <span className={style.link}>{item.item}</span>
            <Link className={style.link} to={`/descricao/${item.id}`}>
              Descrição
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
