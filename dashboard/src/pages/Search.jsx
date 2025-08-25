import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField'
import { useState } from 'react';
import { searchTransactions } from '../api/searchTransactions';
// import Table from '../components/SearchTable';
import Table from '../components/table/Table';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


// eslint-disable-next-line react/prop-types
const Search = ({userName, page, setPage}) => {

  const [inputData, setInputData] = useState({"query": ''});
  const [searchData, setSearchData] = useState([]);

  const handleChange = (e) => {
    setInputData(prev=> ({...prev, [e.target.name]: e.target.value}) );
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    searchTransactions( setSearchData, inputData);
    setInputData({"query": ''});
  }

  const handlePreviousClick = () => {
    setPage((prev) => prev - 1);
  }
  
  const handleNextClick = () => {
    setPage((prev) => prev + 1);
  }

 

  return (
    <div>
      <Box mt={5} mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          id="outlined-size-small"
          placeholder="Search by sender account name, receiver account name, cause or ID"
          size="small"
          name='query'
          onChange={handleChange}
          sx={{ width: '50%', mr:5 }}
        />
        <button className='Button' onClick={handleSubmit}>Search</button>
      </Box>
      <Box>
        {searchData.length !== 0 ? <Table transactions={searchData} userName={userName}/> : null}
        <Box sx={{textAlign: 'center', mt: 2}}>
          <p>{page} of {searchData?.lastPage}</p>
          {page === 1 ? (<Button disabled ><KeyboardDoubleArrowLeftIcon /></Button>) : (<Button onClick={handlePreviousClick}><KeyboardDoubleArrowLeftIcon /></Button>)}
          {page === searchData?.lastPage ? (<Button disabled ><KeyboardDoubleArrowRightIcon /></Button>) : (<Button onClick={handleNextClick}><KeyboardDoubleArrowRightIcon /></Button>)}        
        </Box>
      </Box>
    </div>
  )
}

export default Search;