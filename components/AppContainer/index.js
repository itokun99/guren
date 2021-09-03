import Container from '@material-ui/core/Container';
import AppHeader from '../AppHeader';
import AppNavigation from '../AppNavigation';
import AppSection from '../AppSection';

function AppContainer() {
  return (
    <Container maxWidth="md">
      <AppHeader />
      <AppNavigation />
      <AppSection title="Popular" actionTitle="view more" path="/" />
    </Container>
  );
}

export default AppContainer;
