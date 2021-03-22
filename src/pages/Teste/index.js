import "bootstrap/dist/css/bootstrap.min.css";

function Teste() {
  
  const mostrarMensagem = () => {
    alert('Aqui vai a mensagem');
  }
  
  const ListaDeAlunos = () => {
    return (
      <ul>
        <li>Chiquim</li>
        <li>Zezim</li>
        <li>Junim</li>
        <li>joaozim</li>
      </ul>
    );
  };

  const MeuTexto = (props) => {
    return (
      <font color={props.cor}>
        {props.children}
        <br/>
      </font>
    )
  };

  return (
    <div>
      <ListaDeAlunos/>

      <MeuTexto cor={"blue"}>Alessandro</MeuTexto>
      <MeuTexto cor={"pink"}>Gabriela</MeuTexto>
      <MeuTexto cor={"magenta"}>Jonathan</MeuTexto>
      
      <button className={'btn btn-primary'} onClick={mostrarMensagem}>
        Clique aqui!
      </button>
    </div>
  );
}

export default Teste;
