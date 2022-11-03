import Card from "../Card";
import Formulario from "../Card/Formulario";
import ListaParticipantes from "../Card/ListaParticipantes";
import Rodape from "../Card/Rodape";

const Configuracao = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Formulario />
        <ListaParticipantes />
        <Rodape />
      </section>
    </Card>
  );
};

export default Configuracao;
