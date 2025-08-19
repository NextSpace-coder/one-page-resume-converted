export type Database = {
  public: {
    Tables: {
      "1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions": {
        Row: {
          id: string;
          user_id: string | null;
          form_data: any;
          submitted_at: string | null;
          ip_address: string | null;
          user_agent: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          form_data: any;
          submitted_at?: string | null;
          ip_address?: string | null;
          user_agent?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          form_data?: any;
          submitted_at?: string | null;
          ip_address?: string | null;
          user_agent?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
};