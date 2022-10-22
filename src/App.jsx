import React, { useState } from "react";
import LoginForm from "./components/LoginForm/index.jsx";

const App = () => {
   const adminUser = {
      email: "admin@mail.ru",
      password: 'admin',
   };

   const [user, setUser] = useState({ name: '', email: '' });
   const [error, setError] = useState('');

   const login = (details) => {
      if ((details.email === adminUser.email) &&
         (details.password === adminUser.password) &&
         (details.name !== '')) {
         setUser({
            name: details.name,
            email: details.email,
         });
      } else if ((details.email === adminUser.email) &&
         (details.password === adminUser.password) &&
         (details.name === '')) {
         setError('Введите имя');
      } else if ((details.email === adminUser.email) &&
         (details.password === adminUser.password) &&
         (details.name === '')) {
         setError('Введите имя');
      } else if ((details.email === '') &&
         (details.password === '') &&
         (details.name === '')) {
         setError('Введите данные');
      } else if ((details.email === '') &&
         ((details.password !== adminUser.email) ||
            (details.name !== adminUser.password))) {
         setError('Пароль или почта введены не верно');
      };
   };

   const logout = () => {
      setUser({ name: '', email: '' });
   };

   return (
      <div className="app">
         {
            (user.email !== '') ? (
               <div className="welcome">
                  <h2>Добро пожаловать!
                     <br />
                     <span>{user.name}</span>
                  </h2>
                  <button onClick={logout}>Выйти</button>
               </div>
            ) :
               <LoginForm
                  login={login}
                  error={error}
               />
         }
      </div>
   );
}

export default App;


