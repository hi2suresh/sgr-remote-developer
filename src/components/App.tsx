import Background from './Background';
import Container from './Container';
import Footer from './Footer';
import Header, { HeaderTop } from './Header';
import BookmarksButton from './BookmarksButton';
import Logo from './Logo';
import SearchForm from './SearchForm';
import JobItemContent from './JobItemContent';
import PaginationControls from './PaginationControls';
import ResultsCount from './ResultsCount';
import Sidebar, { SidebarTop } from './Sidebar';
import SortingControls from './SortingControls';
import JobList from './JobList';
import { useJobItems } from '../lib/hooks';
import { useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState('');
  const [jobItems, isLoading] = useJobItems(searchText);
  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount />
            <SortingControls />
          </SidebarTop>
          <JobList jobItems={jobItems} isLoading={isLoading} />

          <PaginationControls />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;
