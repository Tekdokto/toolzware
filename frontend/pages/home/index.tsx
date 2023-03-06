import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Layout from '../../components/Layout';
import Header from './header';

function HomePage({ toggleTheme, themeMode }) {
    return (
      <div>
      <Layout title="Users List | Next.js + TypeScript Example">
        <Header toggleTheme={toggleTheme} themeMode={themeMode} />
        <h1>Welcome to my App</h1>
        <IconButton onClick={toggleTheme}>
          {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <p>This is my homepage.</p>
        </Layout>
      </div>
    );
  }
export default HomePage;  