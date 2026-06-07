import { create } from 'zustand';

interface AppState {
  isMenuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedMap: string | null;
  setSelectedMap: (mapId: string | null) => void;
  selectedType: string | null;
  setSelectedType: (type: string | null) => void;
  selectedRarity: string | null;
  setSelectedRarity: (rarity: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isMenuOpen: false,
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  selectedMap: null,
  setSelectedMap: (mapId) => set({ selectedMap: mapId }),
  selectedType: null,
  setSelectedType: (type) => set({ selectedType: type }),
  selectedRarity: null,
  setSelectedRarity: (rarity) => set({ selectedRarity: rarity }),
}));
