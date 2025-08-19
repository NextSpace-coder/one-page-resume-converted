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
      // 先检查表是否存在并且可以访问
      const { data: testData, error: testError } = await supabase
        .from('1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions')
        .select('id')
        .limit(1);

      console.log('Table test:', { testData, testError });

      // 尝试插入数据，使用最简单的结构
      const insertData = {
        form_data: {
          name: formData['your-name'],
          email: formData['your-email'],
          subject: formData['your-subject'],
          message: formData['your-message']
        }
      };

      console.log('Inserting data:', insertData);

      const { data, error } = await supabase
        .from('1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions')
        .insert(insertData)
        .select();

      console.log('Insert result:', { data, error });

      if (error) {
        throw error;
      }

      return { success: true, data };
    } catch (err: any) {
      console.error('Form submission error:', err);
      const errorMessage = err.message || 'Failed to submit form';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { submitForm, loading, error };
};