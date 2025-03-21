import { useAppSelector } from "@/components/Store/hooks";

const UserProfile: React.FC = () => {
  const select = useAppSelector((state) => state.auth);
  const { decodedToken } = select;

  return (
    <div className="w-screen">
      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        {/* Foto de perfil */}
        <div className="col-span-5 row-span-2 flex justify-center items-center h-48">
          <img
            className="w-44 h-44 rounded-full object-cover border-4 border-gray-600 shadow-lg"
            src={/*decodedToken?.photo ||*/ "https://picsum.photos/id/1005/200/300"}
            alt="Foto de perfil"
          />
        </div>

        {/* Nombre del usuario */}
        <div className="col-span-5 row-start-3 text-center">
          <h3 className="text-2xl font-bold">{decodedToken?.name || "Usuario"}</h3>
        </div>

        {/* Sección de edición */}
        <div className="col-span-5 row-span-2 row-start-4">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Nombre</h3>
              <p className="text-sm cursor-pointer text-blue-500 hover:underline">
                Editar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
