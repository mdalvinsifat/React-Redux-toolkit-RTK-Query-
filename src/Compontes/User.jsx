import { useGetAllProductQuery } from "../RTK/UserSlice";


const User = () => {
  const { data } = useGetAllProductQuery();




  return (
    <div>
      {data?.products.map((p) => (
        <>
          <h1 key={p.id}>{p.title}</h1>
          <p>{p.description}</p>
        </>
      ))}
    </div>
  );
};

export default User;