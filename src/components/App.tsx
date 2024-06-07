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
import { useDebounce, useJobItems } from '../lib/hooks';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { RESULTS_PER_PAGE } from '../lib/constants';

function App() {
  const [searchText, setSearchText] = useState('');
  const debounceSearchText = useDebounce(searchText);
  const { jobItems, isLoading } = useJobItems(debounceSearchText);
  const [currentPage, setCurrentPage] = useState(1);
  const totalNumberOfResults = jobItems ? jobItems.length : 0;
  const totalNumberOfPages = totalNumberOfResults / RESULTS_PER_PAGE;
  const jobItemsSliced = jobItems
    ? jobItems.slice(
        currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE
      )
    : [];

  const handleChangePage = (direction: 'next' | 'previous') => {
    if (direction === 'next') {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

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
            <ResultsCount totalNumberOfResults={totalNumberOfResults} />
            <SortingControls />
          </SidebarTop>
          <JobList jobItems={jobItemsSliced} isLoading={isLoading} />

          <PaginationControls
            currentPage={currentPage}
            onClick={handleChangePage}
            totalNumberOfPages={totalNumberOfPages}
          />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
