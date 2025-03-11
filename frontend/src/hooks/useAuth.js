import { useContext } from 'react';
import { Context } from '../Context';

export function useAuth() {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('useAuth must be used within an Provider');
    }
    return context;
}