const SSRPage = () => {
  return <p>Hello World!</p>;
};

export async function getServerSideProps() {
  const result = await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    props: {},
  };
}

export default SSRPage;
