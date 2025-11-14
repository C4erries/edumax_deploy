import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useProfileQuery } from "@/hooks/queries";
import { transformProfileForPage } from "../lib/transformProfile";
import { getImageUrlSync } from "@/lib";
import avatar from "@/assets/images/event-heart.jpg";

/**
 * Хук для управления логикой страницы профиля
 */
export function useProfilePage() {
  const navigate = useNavigate();
  const { data: apiProfile, isLoading, error } = useProfileQuery();
  
  const profile = apiProfile ? transformProfileForPage(apiProfile) : null;
  const avatarUrl = profile ? getImageUrlSync(profile.avatarUrl) : avatar;

  const handleLibraryClick = useCallback(() => {
    navigate("/library");
  }, [navigate]);

  return {
    profile,
    avatarUrl,
    isLoading,
    error,
    handleLibraryClick,
  };
}

