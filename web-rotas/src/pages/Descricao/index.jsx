import { useParams } from "react-router";
import array from "../../db/db";
import { useEffect, useState } from "react";

function Descricao() {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    const numericId = parseInt(id);
    setInfo(array[numericId]);
  }, [id]);

  return (
    <div>
      <h2>{info.item}</h2>
      <h2>{info.valor}</h2>
    </div>
  );
}

export default Descricao;
