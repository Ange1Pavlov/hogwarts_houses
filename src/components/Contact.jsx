import HouseCard from './houses/HouseCard';
import Loader from './Loader';

const Contact = ({ data }) => (
  <main className='container flex flex-col justify-center items-center'>
    <div className='my-16 flex flex-col md:flex-row md:max-w-screen-md justify-center items-center'>
      <div className='md:flex-1 w-full md:w-60'>
        <img
          src='./cornelius_hogwarts.webp'
          alt='Cornelius Hogwarts'
          className='rounded-xl'
        />
      </div>
      <div className='md:flex-1 w-full md:w-40'>
        <p className='italic p-6'>
          Cornelius Oswald Fudge,
          <br />
          Ministry of Magic Headquarters, <br />
          Underground of Whitehall and the HM Treasury building, <br />
          <br />
          <strong>London, Great Britain</strong>
        </p>
      </div>
    </div>

    {!data ? (
      <div className='flex w-full py-64 justify-center items-center'>
        <Loader />
      </div>
    ) : (
      <div className='mx-auto grid w-full md:grid-cols-2 lg:grid-cols-4 mt-5'>
        {data.map((item) => (
          <HouseCard key={item.id} data={item} />
        ))}
      </div>
    )}
  </main>
);

export default Contact;
