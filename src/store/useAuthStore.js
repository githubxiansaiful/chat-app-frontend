import { create } from "zustand"
import { axiosInstanace } from '../lib/axios.js';

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLogginging: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstanace.get("/auth/check");
            set({ authUser: res.data });
        } catch (error) {
            set({authUser: null});
        } finally {
            set({isCheckingAuth: false})
        }
    }
}));