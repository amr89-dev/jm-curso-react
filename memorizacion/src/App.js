import Contador from "./components/Contador";

function App() {
  return (
    <div className="App">
      <h1>Memorización en React</h1>
      <hr />
      <h2>Teoría</h2>
      <h3>
        <a
          href="https://es.reactjs.org/docs/react-api.html#reactmemo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Memo
        </a>
      </h3>
      <ul>
        <li>Se encarga de memorizar un componente,</li>
        <li>
          lo vuelve a memorizar al momento de que sus <b>props</b> cambian
        </li>
        <li>Evita re-renderizados</li>
        <li>
          Hay que evitarlo en la medida de lo posible, pues podria ser mas
          costosa la tarea de memorización que el re-renderizado del componente.
        </li>
        <li>
          Usalo cuando:
          <ul>
            <li>Tenemos muchos elementos renderizados en una lista</li>
            <li>Llamamos datos de APIs</li>
            <li>Un componente se vuelve muy pesado</li>
            <li>Salen alertas de rendimiento en la consola</li>
          </ul>
        </li>
      </ul>
      <hr />
      <h3>
        <a
          href="https://es.reactjs.org/docs/hooks-reference.html#usecallback"
          target="_blank"
          rel="noopener noreferrer"
        >
          useCallback
        </a>
      </h3>
      <ul>
        <li>Memoriza una funcion para no volverla a definir en cada render</li>
        <li>
          Usalo siempre que se pase una función como <b>props</b> a un
          componente memorizado
        </li>
        <li>
          Usalo siempre que se pase una funcion como parametro a un efecto
        </li>
      </ul>
      <hr />
      <h3>
        <a
          href="https://es.reactjs.org/docs/hooks-reference.html#usememo"
          target="_blank"
          rel="noopener noreferrer"
        >
          useMemo
        </a>
      </h3>
      <ul>
        <li>
          Memoriza un valor calculado, es decir, el resultado de una función
        </li>
        <li>Genera propiedades computadas</li>
        <li>Se usa en procesos pesados </li>
      </ul>
      <hr />
      <Contador />
    </div>
  );
}

export default App;
