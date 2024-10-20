import { Form } from 'react-router-dom';
import searchIcon from '@/assets/searchIcon.svg';

export default function Search() {
  return (
    <Form className="w-full">
      <input
        type="search"
        className="h-10 border w-full max-w-96 rounded-full pr-9 pl-4 shadow-sm outline-none"
        style={{
          backgroundImage: `url(${searchIcon})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '20px 20px',
          backgroundPosition: 'right 10px center',
        }}
        placeholder="Search"
      />
    </Form>
  );
}
