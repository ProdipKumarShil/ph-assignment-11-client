import { useQuery } from "@tanstack/react-query";

const useItemDelete = (toyId, userEmail) => {
  console.log(toyId, userEmail)
  const {refetch, data: deleteData = []} = useQuery({
    queryKey: ['deleteData,', toyId, userEmail],
    queryFn: async() => {
      const res = await fetch(`https://candyland-toys-server.vercel.app/deleteCart?toyId=${toyId}&userEmail=${userEmail}`)
      return res.json()
    }
  })
  return [deleteData, refetch]
};

export default useItemDelete;