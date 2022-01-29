import { Row, Col } from "antd";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Row justify={"center"}>
      <Col span={10}>
        <h2>
          Star Wars API{" "}
          <a href={"https://swapi.dev"} target={"_blank"}>
            swapi.dev
          </a>
        </h2>
        <h3> Typescript, Rematch(redux), React-Query</h3>
        <h3>api</h3>
        <p>Запросы к апи вынесены в отдельный клас</p>
        <h3>store</h3>
        <p>
          Воспользовался своим любимым rematch (redux). Возможность изменять
          данные напрямую при этом оставляя стор иммутабельным реализована
          плагином rematch-immer, состояние запроса с помощью rematch-load. Без
          кэширования. Для кэширования применил бы RTK-Query
        </p>
        <h3>react-query</h3>
        <p>
          Загрузка данных отдельного персонажа реализована с помощью
          react-query. Кэширование из коробки, при повторном входе запроса нет
        </p>

        <Link to={"/people/1"}>Посмотреть</Link> <br/>
        <Link to={"/rtk"}>RTK</Link>
      </Col>
    </Row>
  );
}
