import React, { useState } from 'react';

import styles from './LoginForm.module.scss';

const LoginForm = ({ login, error }) => {
   const [details, setDetails] = useState({ name: '', email: '', password: '' });

   const submitHandler = (event) => {
      event.preventDefault();

      login(details);
   };

   return (
      <form onSubmit={submitHandler}>
         <div className={styles.form__inner}>
            <h2>Авторизация</h2>
            {(error !== '') ? (<div className={styles.error}>{error}</div>) : ""}
            <div className={styles.form__group}>
               <label htmlFor="name">Имя:</label>
               <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder='введите имя'
                  onChange={(event) => setDetails(
                     { ...details, name: event.target.value })
                  }
                  value={details.name}
               />
            </div>
            <div className={styles.form__group}>
               <label htmlFor="email">Почта:</label>
               <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder='введите email'
                  onChange={(event) => setDetails(
                     { ...details, email: event.target.value })
                  }
                  value={details.email}
               />
            </div>
            <div className={styles.form__group}>
               <label htmlFor="password">Пароль:</label>
               <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder='введите пароль'
                  onChange={(event) => setDetails(
                     { ...details, password: event.target.value })
                  }
                  value={details.password}
               />
            </div>
            <input
               type="submit"
               value="Войти"
               className='login'
            />
         </div>
      </form>
   )
};

export default LoginForm;