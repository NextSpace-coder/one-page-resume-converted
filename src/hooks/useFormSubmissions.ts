import { useState } from 'react';
import { supabase } from '../integrations/client';

export const useFormSubmissions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (formData: {
    'your-name': string;
    'your-email': string;
    'your-subject': string;
    'your-message': string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      // 获取用户的 IP 地址和 User Agent
      const userAgent = navigator.userAgent;
      
      const { data, error } = await supabase
        .from('1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions')
        .insert({
          form_data: {
            name: formData['your-name'],
            email: formData['your-email'],
            subject: formData['your-subject'],
            message: formData['your-message']
          },
          user_agent: userAgent,
          submitted_at: new Date().toISOString()
        })
        .select();

      if (error) {
        throw error;
      }

      return { success: true, data };
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to submit form';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { submitForm, loading, error };
};