import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://s2.glbimg.com/6dbdj21h795rzjIizFWz_rtYIXc=/0x0:1200x785/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/l/p/xlfRm1RCiUvVV85AWG6w/batmovel-alta.jpg">
        Olha só que legal meu Batmóvel $$$.
      </Post>
    </div>
  );
}

export default App;
