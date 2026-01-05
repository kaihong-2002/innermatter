import React, { createContext, useContext, useState, useEffect } from 'react';
import { syncUser } from '../services/googleSheets';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Check localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('innermatter_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email) => {
        // Mock login - in real app, fetch from API
        // For prototype, we just verify if a user exists in localStorage "db"
        const mockDb = JSON.parse(localStorage.getItem('innermatter_users_db') || '[]');
        const existingUser = mockDb.find(u => u.email === email);

        if (existingUser) {
            setUser(existingUser);
            localStorage.setItem('innermatter_user', JSON.stringify(existingUser));

            // Sync to Google Sheet (Log login activity)
            syncUser({
                uid: 'U-' + Date.now(), // Generate ID or use existing if real auth
                email: existingUser.email,
                displayName: existingUser.name,
                phone: existingUser.phone || '',
                address: existingUser.address || ''
            });

            return true;
        }
        return false;
    };

    const register = (userData) => {
        // userData: { name, email, phone, address }
        setUser(userData);
        localStorage.setItem('innermatter_user', JSON.stringify(userData));

        // Save to "db" for login simulation
        const mockDb = JSON.parse(localStorage.getItem('innermatter_users_db') || '[]');
        mockDb.push(userData);
        localStorage.setItem('innermatter_users_db', JSON.stringify(mockDb));

        // Sync to Google Sheet
        syncUser({
            uid: 'U-' + Date.now(),
            email: userData.email,
            displayName: userData.name,
            phone: userData.phone,
            address: userData.address
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('innermatter_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
