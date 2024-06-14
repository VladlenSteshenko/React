import "./App.css";
import Spoiler from "./components/task1";
import RangeInput from "./components/task2";
import LoginForm from './components/task3';
import PasswordConfirm from './components/task4';
import Carousel from './components/task5';
import Pagination from './components/task6';
import TimerControl from './components/task3.2';
import { SecondsTimer } from './components/task3.3';
import { TimerContainer, Timer } from './components/task3.4';
import Watch from './components/task3.5';
import Phonebook from './components/task3.7';

function App() {
  const handleLogin = (login, password) => {
    console.log("Login:", login);
    console.log("Password:", password);
  };

  const images = [
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg"
  ];

  const Content = ({ page }) => (
    <div style={{ fontSize: '5em' }}>
      Сторінка №{page}
    </div>
  );
  
  const Color = ({ page }) => (
    <div style={{ color: `rgb(${page * 16},${page * 16},${page * 16})` }}>
      {page}
    </div>
  );

  return (
    <div className="App">
      <Spoiler header={<h1>Заголовок</h1>} open>
        Контент 1<p>лорем іпсум тралівалі і тп.</p>
      </Spoiler>

      <Spoiler header={<h2>Заголовок 2</h2>}>
        <h2>Контент 2</h2>
        <p>лорем іпсум тралівалі і тп.</p>
      </Spoiler>
      <RangeInput min={2} max={10} placeholder="Введите текст" />
      <h1>Login Form</h1>
      <LoginForm onLogin={handleLogin} />
      <h1>Password Confirmation</h1>
      <PasswordConfirm min={2} />
      <h1>Image Carousel</h1>
      <Carousel images={images} />
      <h1>Pagination Component</h1>
      <Pagination max={10} render={Content} />
      <Pagination max={16} render={Color} />
      <h1>TimerControl + TimerContainer</h1>
      <TimerControl />
      <h1>Timer Container(3.3)</h1>
      <TimerContainer seconds={1800} refresh={100} render={SecondsTimer} />
      <h1>LCD</h1>
      <TimerContainer seconds={1800} refresh={100} render={Timer} />
      <h1>Watch</h1>
      <TimerContainer seconds={3600} refresh={1000} render={Watch} />
      <h1>Phonebook</h1>
      <Phonebook /> {Phonebook}
    </div>
  );
}

export default App;
