import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { data } from "./data/todo";

import Counter from "./Counter";
import User from "./User";
import UsersList from "./UsersList";

function App() {
  return (
    <div>
      <ToDoForm/>
      <ToDoList data={data}/>
      {/* <User name={"Artem"} lastname={"Goncharuk"}/> */}
      {/* <Counter/> */}
      <UsersList/>
    </div>
  );
}

export default App;


// создать компонент User, который в качестве пропсов получает имя и фамилию 
// пользователя и формирует карточку пользователя
// Добавьте компонент User в App и передайте ему в пропсы какие-нибудь 
// имя и фамилию
