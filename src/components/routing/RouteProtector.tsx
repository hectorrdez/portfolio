import { useAuth } from "@/contexts/Contexts";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function RouteProtector() {
  const { id } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) navigate("/");
  }, [id, navigate]);

  return <Outlet />;
}
