const Contact = () => {
  return (
    <main className='container my-16 flex flex-col md:flex-row md:max-w-screen-md justify-center items-center'>
      <div className='md:flex-1 w-full md:w-60'>
        <img
          src='./cornelius_hogwarts.webp'
          alt='Cornelius Hogwarts'
          width={200}
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
    </main>
  );
};

export default Contact;
