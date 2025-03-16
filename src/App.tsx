import "@/styles/App.css";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { refreshToken } from "./components/apiCalls/Auth";
import { useAppDispatch } from "./components/Store/hooks";
import { putToken } from "./components/Store/AuthSlice";
function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getToken = async () => {
      const response = await refreshToken();
      if (response) {
        dispatch(putToken(response));
        console.log("token", response);
      }
    };
    getToken();
  }, [dispatch]);
  return <AppRoutes />;
}

export default App;
