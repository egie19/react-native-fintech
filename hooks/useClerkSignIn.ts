import { useSignIn } from "@clerk/clerk-expo"
import { useState } from "react";

export const useClerkSignIn = () => {

    const { signIn, setActive, isLoaded } = useSignIn(); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleEmailSignIn = async (email: string, password: string) => {
        setLoading(true);
        setError(null);

        try {
            if (!signIn) throw new Error('SignIn object not ready');
            const completeSignIn = await signIn.create({
                identifier: email,
                password,
            });

            if (completeSignIn.status === 'complete') {
                await setActive({ session: completeSignIn.createdSessionId });
                console.log('✅ Signed in successfully');
            } else {
                console.log('🟡 Sign-in not complete:', completeSignIn);
            }
        } catch (err: any) {
            console.error('❌ Sign-in error:', err);
            const errorMessage =
                err?.errors?.[0]?.message || err?.message || 'Sign-in failed';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
  };

  return {
    handleEmailSignIn,
    loading,
    error,
  };


}